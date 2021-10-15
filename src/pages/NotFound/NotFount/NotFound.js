import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{height: '100vh'}} className="d-flex justify-content-center text-center align-items-center">
            <div>
                <h1>404</h1>
                <h4>Page is not found</h4>
                <Link to="/"><button className="px-5 btn btn-danger">go to home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;