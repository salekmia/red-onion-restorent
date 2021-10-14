import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [items, setItems] = useState([])
    
    useEffect(() => {
        fetch('./meals.json')
        .then(res => res.json())
        .then(data =>  {setItems(data)
             setMeals(data)})
    }, [])
    console.log(meals)

    
    const all = () => {
        setMeals(items)
    }

    const filter = button => {
        const filterData = items.filter(meal => meal.category === button)
        setMeals(filterData)
    }
    
    
    return (
        <div className="container">
            <div className="d-flex justify-content-center p-5">
                <button className="btn btn-outline-danger rounded-pill px-4 m-2" onClick={all}>All</button>
                <button className="btn btn-outline-danger rounded-pill px-4 m-2" onClick={()=> filter('breakfast')}>breakfast</button>
                <button className="btn btn-outline-danger rounded-pill px-4 m-2" onClick={()=> filter('dinner')}>Dinner</button>
                <button className="btn btn-outline-danger rounded-pill px-4 m-2" onClick={()=> filter('lunch')}>Lunch</button>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    meals.map(meal => <Meal meal={meal} filter={filter} key={meal.id}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;