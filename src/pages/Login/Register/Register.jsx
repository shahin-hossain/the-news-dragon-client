import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const [accepted, setAccepted] = useState(false);
    const { createUser } = useContext(AuthContext);

    //form handle for Create new User
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password, photo)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    // terms & condition button checked করলে তাহলে Disable Register button Enable হবে।
    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
        // console.log(event.target.checked)
    }


    return (
        <Container className='mx-auto w-25'>
            <h3 className='text-center my-5'>Please Register</h3>
            <Form onSubmit={handleRegister} >
                {/* user name */}
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                </Form.Group>
                {/* photo URL */}
                <Form.Group className="mb-3" controlId="photo">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required />
                </Form.Group>
                {/* email address */}
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                {/* password */}
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                {/* Accept terms & conditions */}
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>} />
                </Form.Group>
                {/* Register button */}
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                {/* toggle login/register */}
                <Form.Text className="text-secondary ">
                    Already Have An Account ? <Link to='/login' className='success'>Login</Link>
                </Form.Text>
                {/* error & seccess Message */}
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;