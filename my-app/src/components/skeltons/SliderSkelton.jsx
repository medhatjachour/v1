import React from 'react';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Container from "@mui/material/Container";

const SliderSkelton = () => {
    return (
        <>
        <Container>
            <Stack spacing={1}>
        <Skeleton variant="text" animation="wave" height={55}  />
            <Stack  direction="row" spacing={3}>
                <Skeleton variant="rectangular" width={250} height={200} />
                <Skeleton variant="rectangular" width={250} height={200} />
                <Skeleton variant="rectangular" width={250} height={200} />
                <Skeleton variant="rectangular" width={250} height={200} />
                <Skeleton variant="rectangular" width={250} height={200} />
            </Stack>
            </Stack>
            </Container>
        </>
    );
}

export default SliderSkelton;
