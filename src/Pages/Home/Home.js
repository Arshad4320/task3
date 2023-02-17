import React from 'react';
import Advertise from '../Advertise/Advertise';
import Card from '../Card/Card';
import InteractiveAi from '../InteractiveAi/InteractiveAi';
import Labeling from '../Labeling/Labeling';
import PlatForm from '../PlatForm/PlatForm';
import PowerfulLabeling from '../PowerfulLabeling/PowerfulLabeling';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <PlatForm/>
            <Advertise/>
            <Labeling/>
            <Card/>
            <PowerfulLabeling/>
            <Slider/>
            <InteractiveAi/>
        </div>
    );
};

export default Home;