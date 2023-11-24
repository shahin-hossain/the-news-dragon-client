import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import user from '../../../assets/user.png'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user } = useContext(AuthContext);
    console.log(user.displayName)
    return (
        <Container className='mt-4'>
            <div className='text-center'>
                <img src={logo} alt="the dragon news logo" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                {/* 
                1. install moment js
                2. import 
                3. display > format 
                4.-> dddd -> Day full
                  -> MMMM -> Month Full
                  -> Do -> D = Day, o = (numbering like 1st,2nd,3rd,4th) 
                  -> YYYY -> Year Full
                */}
                <p>
                    {moment().format("dddd, MMMM D, YYYY")}
                </p>

            </div>
            {/* 
             1. install Marque
             2. import Marque
             3. Apply <Marquee></Marquee> tag and add different functionalities
            */}
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee gradient={true} pauseOnHover={true} className='text-danger fw-bold'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            {/* nav bar with react-bootstrap */}
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#Career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link className='mb-0'>
                                <FaUserCircle className='fs-1' />
                            </Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user ? <Button variant="secondary">logout</Button>
                                        : <>
                                            <Link to='/login'><Button variant="secondary" >Login</Button></Link>
                                            <Link to='/signup'><Button variant="secondary" >Signup</Button></Link>
                                        </>
                                }

                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;