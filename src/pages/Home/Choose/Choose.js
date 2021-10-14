import React from 'react';

const Choose = () => {
    return (
        <div className="container mb-5">
            <h1>Why you choose us</h1>
            <p style={{width: '550px'}} className="lead">Barton waited twenty always repair in withing we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card border-0 h-100">
                <img src="https://i.ibb.co/tKcXmNp/adult-blur-blurred-background-687824.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Fast delivery</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex align-items-center">
                        <a className="text-decoration-none me-2" href="#">Read more </a>
                        <span className="fs-4 text-danger"><i className="fas fa-arrow-circle-right"></i></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-0 h-100">
                <img src="https://i.ibb.co/4p1Kz4d/chef-cook-food-33614.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">A good auto responder</h5>
                    <p className="card-text">This is a short card.</p>
                    <div className="d-flex align-items-center">
                        <a className="text-decoration-none me-2" href="#">Read more </a>
                        <span className="fs-4 text-danger"><i className="fas fa-arrow-circle-right"></i></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-0 h-100">
                <img src="https://i.ibb.co/SyV9sKJ/architecture-building-city-2047397.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Home delivery</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    <div className="d-flex align-items-center">
                        <a className="text-decoration-none me-2" href="#">Read more </a>
                        <span className="fs-4 text-danger"><i className="fas fa-arrow-circle-right"></i></span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Choose;