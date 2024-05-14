import React, { useEffect, useRef, useState } from 'react';
import { Button, Typography, } from '@mui/material';

export default function ContentCardBody(props: { body: string }) {
    const [expanded, setExpanded] = useState(false);
    const { body } = props

    const [showButton, setShowButton] = useState(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bodyRef.current) {
            const { height, lineHeight } = window.getComputedStyle(bodyRef.current);
            const maxHeight = parseInt(height) || 0;
            const numLines = Math.round(maxHeight / parseInt(lineHeight));
            setShowButton(numLines >= 3);
        }
    }, [body]);

    const handleToggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Typography ref={bodyRef} sx={{
                display: '-webkit-box',
                WebkitLineClamp: expanded ? 'unset' : 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                overflowWrap: 'break-word',
            }}>
                {body}
            </Typography>
            {showButton && <Button onClick={handleToggleExpanded} color="primary">
                Read {expanded ? 'less' : 'more'}
            </Button>}
        </>
    );
}
