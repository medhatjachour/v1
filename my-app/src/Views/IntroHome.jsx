//libs
import React from 'react';
import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
//assets
import './Views.css'
//components
import '../components/PlyHome'
import HomeModel from '../components/Ai/HomeModel';
//import Demo from '../components/PlyHome';
const IntroHome = () => {
    useEffect(() => {
       
    }, []);
    return (
        <>
            <div className="hero">
        
               <Grid container spacing={2}>
                   
                    <Grid item xs={12} md={6}>
                    <div className="hero_text col-md-6">
                        <h1 className='here_title'>
                            Mazboot is the Leading Software 
                            <br/>
                            for Virtual fitting room
                        </h1>

                        <p className='hero_slogan'>
                            Fit , try and live the experience of the real items <br/>
                            as you in real life with mazboot 
                        </p>
                    </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <div className="hero_model col-md-6" id="plyCont">
                   <iframe>ss</iframe>
                   <HomeModel/>
                    </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default IntroHome;
