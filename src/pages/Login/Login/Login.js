import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
const Login = () => {
    const {signInUsignGoogle, signInUsingPassword} = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'


    const googleLoginHandle = () => {
        signInUsignGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }

    const passwordLoginHandle = () => {
        signInUsingPassword(email, password)
        .then(result => {
            history.push(redirect_uri)
        })
        .catch(error => {
            console.log(error.message)
        })
    }



    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <Header></Header>
            <div className="container d-flex justify-content-center align-items-center  py-4">
                <div>
                    <h3 className="text-center">Please login</h3>
                    <div className="border p-4">
                        <input onBlur={emailChange} className="input-field" type="email" name="email" id="email" placeholder="Enter email" />
                        <br />
                        <input onBlur={passwordChange} className="input-field" type="password" name="password" id="password" placeholder="Enter password" />
                        <br />
                        <input onClick={passwordLoginHandle} className="my-2 btn btn-danger rounded-pill px-4" type="submit" value="Login" />

                        <div className="d-flex align-items-center my-4">
                            <div className="or-line w-100"></div>
                            <p className="m-0 px-2">or</p>
                            <div className="or-line w-100"></div>
                        </div>
                        <div className="d-grid gap-2">
                            <button onClick={googleLoginHandle} className="btn btn-sm btn-danger"><i class="fab fa-google"></i> Login with google</button>
                            <button className="btn btn-sm btn-danger"><i class="fab fa-facebook-f"></i> Login with facebook</button>
                        </div>
                        <p className="m-4">Don't have an account? <Link to="/signup">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;