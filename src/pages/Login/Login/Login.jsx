import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    //page redirect করার জন্য location use করা হয়েছে।
    const location = useLocation();
    // console.log(location)
    useTitle('Login')
    const from = location.state?.from?.pathname || '/category/0';

    //signIn Handle
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        //signIn function
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true }) // redirect route location -> user যে route থেকে login এ আসছে সে route এ user কে ফেরত পাঠানো।
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <Container className='mx-auto w-25'>
            <h3>Please Login</h3>
            <Form onSubmit={handleSignIn} >
                {/* email address */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                {/* password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                {/* submit button */}
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary ">
                    Dont’t Have An Account ? <Link to='/register' className='success'>Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;