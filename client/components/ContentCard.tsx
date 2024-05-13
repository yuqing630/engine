import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


import { Button, IconButton, Typography, Avatar, Grid, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { ContentCardType } from '@/types/types';



export default function ContentCard(data: { card: ContentCardType }) {

  const [expanded, setExpanded] = React.useState(false);

  const { card } = data

  const handleToggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: '10px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>

        <CardMedia
          component="img"
          height="194"
          image={card.imageUri}
        />
        <CardContent>
          <Box sx={{ display: 'flex', paddingBottom: '10px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="body2" color="text.secondary">
                  {`Title: ${card.title}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body2" color="text.secondary">
                  {`Author: ${card.author}`}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  {`Subtitle: ${card.subTitle}`}
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Typography sx={{
            display: '-webkit-box',
            WebkitLineClamp: expanded ? 'unset' : 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            overflowWrap: 'break-word',
            textOverflow: 'ellipsis',
          }}>
            {card.body}
          </Typography>

          <Button onClick={handleToggleExpanded} color="primary">
            Read {expanded ? 'less' : 'more'}
          </Button>
          <Typography>Comments</Typography>
          {card.comments.map((comment) => (
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}><CardHeader
              avatar={<Avatar aria-label="profilePic" src={comment.profilePic} />}

              title={comment.author}
              subheader={comment.text} /><IconButton aria-label="add to favorites">
                <FavoriteIcon />
                {comment.likes}
              </IconButton></Box>

          ))}

        </CardContent>
      </Box>

    </Card>
  );
}
