import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';

const Header = () => {
    const {user, logOut} = useFirebase()
    return (
        <div>
            <Navbar bg="dark" expand="lg">
            <Container className="d-flex justify-content-between">
                <div>
                    <Navbar.Brand href="#"><Link to="/"><img style={{width: '200px'}} src={logo} alt="" /></Link></Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    
                    <div className="d-flex align-items-center">
                        <span className="text-white d-flex">
                            <i className="fas fa-shopping-cart"></i>
                            <span style={{display: 'block', marginTop: '-10px', marginLeft: '5px'}}>0</span>
                        </span>
                        {user?.email ? <Button onClick={logOut} className="btn text-white mx-2 rounded-pill">Log out</Button> : 
                        <Link to="/login"><Button className="btn text-white mx-2 rounded-pill">Login</Button></Link>}
                        <Link to="/signup"><Button className="me-2 px-4 btn text-white bg-danger rounded-pill">Sign up</Button></Link>
                        {user?.email && <img style={{width: '40px', height: '40px', borderRadius: '50%'}} src={user.photoURL} alt="" />}
                    </div>
                    </Navbar.Collapse>
                </div>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;