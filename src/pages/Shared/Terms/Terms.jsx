import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='w-50'>
            <h3>Terms & Conditions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, molestias eveniet accusantium ipsam saepe sit veritatis cupiditate neque quibusdam est odio! Fugiat consectetur, molestiae quaerat soluta eius saepe modi quis voluptate excepturi aspernatur est voluptatum voluptates obcaecati impedit dolores cupiditate inventore. Quibusdam enim architecto nobis adipisci odio accusantium qui debitis.</p>
            <p>Go Back to Register <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;