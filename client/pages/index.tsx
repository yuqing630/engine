"use client";
import { GetServerSideProps } from 'next';
import Box from '@mui/material/Box'
import ContentCard from '../components/ContentCard'
import { Typography } from '@mui/material';
import { ContentCardType } from '@/types/types';




type HomePageProps = {
  contentCards: ContentCardType[] | []
}

const Home = (props: HomePageProps) => {
  const { contentCards } = props

  return (
    <>
      <Typography sx={{
        fontSize: {
          lg: 50,
          xs: 30
        }
      }}> Content Cards</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', padding: '20px', flexWrap: 'wrap' }}>
        {contentCards.map((card) => (
          <ContentCard card={card} />
        ))}
      </Box>
    </>

  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response: any = await fetch("http://localhost:5000/api/content");
    const data = await response.json();
    return { props: { contentCards: data || [] } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { data: [] } };
  }
};


export default Home;