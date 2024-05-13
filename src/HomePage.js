import React, {useState, useEffect} from 'react'
import {getAllPhysicians, getPhysiciansData} from './apiCalls.js'
import './HomePage.css';


const HomePage =()=> {

  const [allPhysiciansData, setAllPhysiciansData] = useState(null);
  const [physicianData, setPhysicianData] = useState(null);


  useEffect(() => {
   // fetch("/api")
   //   .then((res) => res.json())
   //   .then((data) => setData(data.message));
   async function fetchAllPhysicians() {
     const physiciansList = await getAllPhysicians()
     setAllPhysiciansData(physiciansList)
   }
   fetchAllPhysicians()
 }, []);

 // useEffect(() => {
  // fetch("/api")
  //   .then((res) => res.json())
  //   .then((data) => setData(data.message));
  async function fetchPhysicianData(id) {
    const physiciansData = await getPhysiciansData(id)
    setPhysicianData(physiciansData)
  }
// }, []);
const handleClick=(id)=>{
  console.log(id)
  fetchPhysicianData(id)

}
console.log(allPhysiciansData, physicianData)


  return(
      <div>
      <div className="containers">
      <div className="physiciansList">
      <p className='title'>
      notable
      </p>
      <p className='heading'>
      Physicians
      </p>
      {
      allPhysiciansData?.data?.map((physician)=>{
        return(
          <li className={`name ${physicianData?.physicianId === physician.id && 'active'}`} id={physician.id} onClick={()=>{handleClick(physician.id)}}>
          {`${physician.lastName}, ${physician.firstName}`}
          </li>
        )
      })
      }
      </div>
      {
        physicianData &&(
          <div className='physicianData'>
          <div className='physicianName'>
    {`${physicianData?.data?.name}`}
          </div>
          <div className='physicianEmail'>
          {`${physicianData?.data?.email}`}

          </div>
          <div>
          <table className='table'>
      <thead>
        <tr>
          <th className='idColumn'>#</th>
          <th className='nameColumn'>Name</th>
          <th className='timeColumn'>Time</th>
          <th className='kindColumn'>Kind</th>
        </tr>
      </thead>
      <tbody>
        {physicianData?.data?.clients?.map((client, i) => (
          <>
          <tr>
   <td className='idColumn'>{i+1}</td>
   <td className='nameColumn'>{`${client.firstName} ${client.lastName}`}</td>
   <td className='timeColumn'>{client.time}</td>
   <td className='kindColumn'>{client.type}</td>

 </tr>


          </>
        ))}
      </tbody>
    </table>
          </div>

          </div>

        )
      }

      </div>
      </div>
  )
}

export default HomePage
