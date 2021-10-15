import React from 'react';
import Header from '../../../components/Header/Header';
import './Signup.css';
const Signup = () => {
    return (
        <div>
            <Header></Header>
            <div className="container d-flex justify-content-center align-items-center  py-4">
                <div>
                    <h3 className="text-center">Signup here</h3>
                    <div className="border p-4">
                        <input className="input-field" type="text" name="name" id="name" placeholder="Enter name" />
                        <br />
                        <input className="input-field" type="email" name="email" id="email" placeholder="Enter email" />
                        <br />
                        <input className="input-field" type="password" name="password" id="password" placeholder="Enter password" />
                        <br />
                        <input className="my-2 btn btn-danger rounded-pill px-4" type="submit" value="Login" />

                        <div className="d-flex align-items-center my-4">
                            <div className="or-line w-100"></div>
                            <p className="m-0 px-2">or</p>
                            <div className="or-line w-100"></div>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-sm btn-danger"><i class="fab fa-google"></i> Sign up with google</button>
                            <button className="btn btn-sm btn-danger"><i class="fab fa-facebook-f"></i> Sign up with facebook</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;