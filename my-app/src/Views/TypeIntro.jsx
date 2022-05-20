import React, {useEffect} from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Skeleton from '@mui/material/Skeleton';

const TypeIntro = (props) => {

    
    return (
        <>
            <div className="typeIntro">
                <div>
                    <Skeleton variant="rectangular" width={"100%"} height={200} />
                </div>
            </div>   
        </>
    );
}

export default TypeIntro;
