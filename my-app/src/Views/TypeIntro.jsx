import React, {useEffect} from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Skeleton from '@mui/material/Skeleton';

const TypeIntro = (props) => {

    
    return (
        <>
            <div className="typeIntro">
                <div>
                    {props.id}
                    <Container>
                        <Skeleton variant="rectangular" width={"100%"} height={200} />
                    </Container>
                </div>
            </div>   
        </>
    );
}

export default TypeIntro;
