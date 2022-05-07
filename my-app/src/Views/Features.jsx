import React from 'react';
import Grid from '@mui/material/Grid';
import img1 from '../assets/58c377b3c70745be4a6c8391011ea77a-v2.svg'
import img2 from '../assets/b23570d4e6681f42b143b822fccbb1a6-v2.svg'
import img3 from '../assets/ffcab9cbf04c825a3df3db993aefbb77-v2.svg'
import Button from '@mui/material/Button';
const Features = () => {
    return (
        <div className='features-holder'>
            
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <div className="features-details">
                    
                        <div className="features-img">
                            <img src={img1}/>
                        </div>
                        <div className="features-dsx">
                            <h3>
                            Join millions of 3D creators and showcase your work
                            </h3>
                        </div>
                        <Button href="/" variant="contained">Link</Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                <div className="features-details">
                    
                    <div className="features-img">
                        <img src={img2}/>
                    </div>
                    <div className="features-dsx">
                        <h3>
                        Join millions of 3D creators and showcase your work
                        </h3>
                    </div>
                    <Button href="/" variant="contained">Link</Button>
                </div>
                </Grid>
                <Grid item xs={12} md={4}>
                <div className="features-details">
                    
                    <div className="features-img">
                        <img src={img3}/>
                    </div>
                    <div className="features-dsx">
                        <h3>
                        Join millions of 3D creators and showcase your work
                        </h3>
                    </div>
                    <Button href="/" variant="contained">Link</Button>
                </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Features;
