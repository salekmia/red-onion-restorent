import React from 'react';
import Header from '../../../components/Header/Header';
import Hero from '../Hero/Hero';
import Meals from '../Meals/Meals';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Meals></Meals>
        </div>
    );
};

export default Home;