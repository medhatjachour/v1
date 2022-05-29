import React from 'react';
import Button from '@mui/material/Button';

import AICARD from '../components/Ai/AICARD';
//components
import Home2rows from '../components/Home2Rows';
const ViewA1 = () => {
    return (
        <>
            <div className="sectionA">
                <div className="configA">
                    <AICARD id={1}/>
                    <h2>Trusted by Leading Brands</h2>
                    <Home2rows/>
                    <Button href="/" variant="contained" className="ButtonsA"> Discover our Leading Brands</Button>
                </div>
            </div>
        </>
    );
}

export default ViewA1;
