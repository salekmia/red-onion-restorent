import React from 'react';
import './Hero.css';
const Hero = () => {
    return (
        <div className="hero">
            <div>
                <h1 className="mb-4">Best food wating for your belly</h1>
                <div>
                    <div className="search-box rounded-pill d-flex justify-content-between align-items-center ms-auto me-auto">
                        <input className="m-2" type="text" placeholder="Search" />
                        <button className="btn text-white bg-danger rounded-pill px-4">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;