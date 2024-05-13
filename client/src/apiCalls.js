import axios from 'axios';


async function getAllPhysicians(){
  try{
    const response = await axios.get('/getAllPhysicians');
    if(response.data.error){
      throw response.data.error
    }
    console.log(response)
    return response.data
  }catch(error){
    return error
  }
}

async function getPhysiciansData(id){
  // console.log(name)
  try{
    const response = await axios.get(`/getPhysiciansData?id=${id}`);
    if(response.data.error){
      throw response.data.error
    }

    return response.data
  }catch(error){
    return error
  }
}



export {getAllPhysicians, getPhysiciansData}
