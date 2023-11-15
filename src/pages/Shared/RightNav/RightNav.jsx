import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/Qzone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h4 className='mb-2 mt-4'>Login with</h4>
            <Button variant='outline-primary' className='mb-2'><FaGoogle className='me-2' /> Login with Google</Button>
            <Button variant='outline-secondary'><FaGithub className='me-3' />Login with Github</Button>
            <div className='mt-4'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF className='text-primary' /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter className='text-primary' /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram className='text-danger' /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;