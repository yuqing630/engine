import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import { ContentCardType } from '@/types/types';
import ContentCardInfo from './ContentCardInfo';
import ContentCardBody from './ContentCardBody';
import ContentCardComment from './ContentCardComments';

export default function ContentCard(props: { card: ContentCardType }) {
  const { card } = props

  return (
    <Card sx={{ maxWidth: 345, margin: '10px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          height="194"
          image={card.imageUri}
        />
        <CardContent>
          <ContentCardInfo title={card.title} author={card.author} subtitle={card.subTitle} />
          <ContentCardBody body={card.body} />
          <ContentCardComment comments={card.comments} />
        </CardContent>
      </Box>

    </Card>
  );
}
