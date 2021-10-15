import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
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
                        <Link to="/login"><Button className="btn text-white mx-2 rounded-pill">Login</Button></Link>
                        <Link to="/signin"><Button className="px-4 btn text-white bg-danger rounded-pill">Sign in</Button></Link>
                    </div>
                    </Navbar.Collapse>
                </div>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;