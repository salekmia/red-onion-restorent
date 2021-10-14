import React from 'react';
import './Meal.css';
const Meal = ({meal}) => {
    const {name, img, title, price} = meal
    return (
        <div className="col sigle-container">
            <div className="mx-4 my-2 px-4 py-2 single-meal rounded text-center">
                <img className="img-fluid" src={img} alt="" />
                <h5>{name}</h5>
                <p>{title}</p>
                <h3>${price}</h3>
            </div>
        </div>
    );
};

export default Meal;