"use client";
import { GetServerSideProps } from 'next';
import Box from '@mui/material/Box'
import ContentCard from '../components/ContentCard'
import { Typography } from '@mui/material';
import { ContentCardType } from '../types/types';
import { useState } from 'react';
import { paginate } from '../utils/utils';
import Pagination from '../components/Pagination';
import { fetchContentCards } from '../utils/helper';


export type HomePageProps = {
  contentCards: ContentCardType[] | []
}

const Home = (props: HomePageProps) => {
  const { contentCards } = props

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const paginatedContentCards = paginate(contentCards, currentPage, pageSize);
  return (
    <>
      <div>
        <Typography sx={{
          fontSize: {
            lg: 50,
            xs: 30
          }, textAlign: 'center'
        }}> Content Cards</Typography>
      </div>

      <Box sx={{ display: 'flex', flexDirection: 'row', padding: '20px', flexWrap: 'wrap', gap: '20px' }}>
        {paginatedContentCards.map((card) => (
          <ContentCard card={card} />
        ))}
      </Box>
      <Pagination
        totalItems={contentCards.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </>

  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const contentCards = await fetchContentCards();

    return { props: { contentCards } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { data: [] } };
  }
};


export default Home;