//libs
import React from 'react';
//components
import IntroHome from '../Views/IntroHome';
//import ComponentsView from '../Views/ComponentsView'
import Features from '../Views/Features';
import ViewA1 from '../Views/ViewA1';
import SliderAndMore from '../Views/SliderAndMore';
const Home = () => {
    return (
        <div>
            <IntroHome/>
            <Features/>
            <ViewA1/>
            <SliderAndMore/>
        </div>
    );
}

export default Home;
