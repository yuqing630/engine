import React, { useState } from 'react';
import { Button, Typography, } from '@mui/material';
import { ContentCardType } from '@/types/types';

export default function ContentCardBody(props: { body: string }) {
    const [expanded, setExpanded] = useState(false);
    const { body } = props

    const handleToggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Typography sx={{
                display: '-webkit-box',
                WebkitLineClamp: expanded ? 'unset' : 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                overflowWrap: 'break-word',
                textOverflow: 'ellipsis',
            }}>
                {body}
            </Typography>
            <Button onClick={handleToggleExpanded} color="primary">
                Read {expanded ? 'less' : 'more'}
            </Button>
        </>
    );
}
