import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// use button, alert from our components
// use input from react bootstrap

const Signup = () => {
  return (
    <div>
      <div>Big Blue Box</div>
      <Form>
        <div>
          <h2>Get Started.</h2>
          <p>
            Already have an account? <span>Log in</span>
          </p>
          <Button>Sign up with Google</Button>
          <Button>Sign up with Facebook</Button>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
