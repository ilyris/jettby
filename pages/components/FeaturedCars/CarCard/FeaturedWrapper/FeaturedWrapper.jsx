import React from 'react';
import Container from 'react-bootstrap/Container';
import CarCard from '../CarCard';

const FeaturedWrapper = () => {
  return (
    <Container>
      <h3>Let's Find Your Dream Car</h3>
      <h5>
        We recommend the very best and newest cars today and also a friendly
        price for you
      </h5>
      {/* map goes here */}
      <button>See More</button>
    </Container>
  );
};

export default FeaturedWrapper;

const carCardsData = [
  {
    carTitle: 'Mustang Sport Car',
    carPicture: 'https://i.gyazo.com/b84b0a87e3d2d1900bd12cab0cc63670.png',
    carMake: 'Mustank',
    carPrice: 560,
    carLocation: 'Detroit, Michigan',
  },
  {
    carTitle: 'Mustang Sport Car',
    carPicture: 'https://i.gyazo.com/b84b0a87e3d2d1900bd12cab0cc63670.png',
    carMake: 'Mustank',
    carPrice: 560,
    carLocation: 'Detroit, Michigan',
  },
  {
    carTitle: 'Mustang Sport Car',
    carPicture: 'https://i.gyazo.com/b84b0a87e3d2d1900bd12cab0cc63670.png',
    carMake: 'Mustank',
    carPrice: 560,
    carLocation: 'Detroit, Michigan',
  },
  {
    carTitle: 'Mustang Sport Car',
    carPicture: 'https://i.gyazo.com/b84b0a87e3d2d1900bd12cab0cc63670.png',
    carMake: 'Mustank',
    carPrice: 560,
    carLocation: 'Detroit, Michigan',
  },
  {
    carTitle: 'Mustang Sport Car',
    carPicture: 'https://i.gyazo.com/b84b0a87e3d2d1900bd12cab0cc63670.png',
    carMake: 'Mustank',
    carPrice: 560,
    carLocation: 'Detroit, Michigan',
  },
  {
    carTitle: 'Mustang Sport Car',
    carPicture: 'https://i.gyazo.com/b84b0a87e3d2d1900bd12cab0cc63670.png',
    carMake: 'Mustank',
    carPrice: 560,
    carLocation: 'Detroit, Michigan',
  },
];
