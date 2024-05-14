import React from 'react';
import { Typography, Grid, Box } from '@mui/material';

export default function ContentCardInfo(props: { title: string, author: string, subtitle: string }) {
    const { title, author, subtitle } = props

    return (
        <Box sx={{ display: 'flex', paddingBottom: '10px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body2" color="text.secondary">
                        {`Title: ${title}`}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body2" color="text.secondary">
                        {`Author: ${author}`}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                        {`Subtitle: ${subtitle}`}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
