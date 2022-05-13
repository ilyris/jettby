import React from 'react';
import Container from 'react-bootstrap/Container';
import HeroForm from './Hero_Form/HeroForm';
import FeaturedWrapper from '../FeaturedCars/CarCard/FeaturedWrapper/FeaturedWrapper';

export default function Hero(props) {
  return (
    <Container>
      <div className='Hero'>
        <div>
          <h1>The perfect way to find your next dream car</h1>
          <h4 className='text-secondary'>
            Quick, reliable, efficent way to buy or sell used branded vehicles
          </h4>
        </div>
        <div>
          <div className='Hero--column'></div>
          <div className='Hero--img'></div>
        </div>
        <HeroForm />
      </div>
      <FeaturedWrapper />
    </Container>
  );
}
