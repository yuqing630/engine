import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import { IconButton, Typography, Avatar, Grid, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Comment } from '@/types/types';

export default function ContentCardComment(props: { comments: Comment[] }) {
    const { comments } = props

    return (
        <>
            <Typography>Comments</Typography>
            {comments.map((comment) => (
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}><CardHeader
                    avatar={<Avatar aria-label="profilePic" src={comment.profilePic} />}
                    title={comment.author}
                    subheader={comment.text} /><IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        {comment.likes}
                    </IconButton></Box>
            ))}
        </>
    );
}
