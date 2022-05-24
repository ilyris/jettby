import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

// use button, alert from our components
// use input from react bootstrap

const Signup = () => {
  return (
    <div className='Signup'>
      <div className='Signup--wrapper'>
        <div></div>
        <Form>
          <div className='form--wrapper'>
            <h2>Get Started.</h2>

            <p>
              Already have an account? <span>Log in</span>
            </p>
            <div className='button--wrapper'>
              <Button>
                <FontAwesomeIcon icon={faGoogle} />
                Sign up with Google
              </Button>
              <Button>
                <FontAwesomeIcon icon={faFacebook} />
                Sign up with Facebook
              </Button>
            </div>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <div className='terms'>
                <Form.Check type='checkbox' />
                <label>
                  I agree to Jettby's <span>Terms of Service</span> and{' '}
                  <span>Privacy Policy</span>
                </label>
              </div>
            </Form.Group>
            <Button variant='primary' type='submit'>
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
