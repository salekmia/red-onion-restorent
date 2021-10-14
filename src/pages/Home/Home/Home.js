import React from 'react';
import Header from '../../../components/Header/Header';
import Choose from '../Choose/Choose';
import Hero from '../Hero/Hero';
import Meals from '../Meals/Meals';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Meals></Meals>
            <Choose></Choose>
        </div>
    );
};

export default Home;