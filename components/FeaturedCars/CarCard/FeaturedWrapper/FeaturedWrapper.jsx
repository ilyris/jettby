import React from 'react';
import Container from 'react-bootstrap/Container';
import CarCard from '../CarCard';
import CarImage from '../../../../asset/Hero.jpg';

const carCardsData = [
  {
    carTitle: 'Mustang Sport Car',
    carPicture: CarImage,
    carMake: 'Mustank',
    carPrice: 560,
    carLocation: 'Detroit, Michigan',
  },
  {
    carTitle: 'Mustang Sport Car',
    carPicture: CarImage,
    carMake: 'Mustank',
    carPrice: 560,
    carLocation: 'Detroit, Michigan',
  },
  {
    carTitle: 'Mustang Sport Car',
    carPicture: CarImage,
    carMake: 'Mustank',
    carPrice: 560,
    carLocation: 'Detroit, Michigan',
  },
  {
    carTitle: 'Mustang Sport Car',
    carPicture: CarImage,
    carMake: 'Mustank',
    carPrice: 560,
    carLocation: 'Detroit, Michigan',
  },
  {
    carTitle: 'Mustang Sport Car',
    carPicture: CarImage,
    carMake: 'Mustank',
    carPrice: 560,
    carLocation: 'Detroit, Michigan',
  },
  {
    carTitle: 'Mustang Sport Car',
    carPicture: CarImage,
    carMake: 'Mustank',
    carPrice: 560,
    carLocation: 'Detroit, Michigan',
  },
];

const { carTitle, carPicture, carMake, carPrice, carLocation } = carCardsData;

const FeaturedWrapper = () => {
  return (
    <Container>
      <h3>Let's Find Your Dream Car</h3>
      <h5>
        We recommend the very best and newest cars today and also a friendly
        price for you
      </h5>
      {carCardsData.map((card) => {
        return (
          <CarCard
            key={Math.random()}
            carPicture={card.carPicture}
            carTitle={card.carTitle}
            carMake={card.carMake}
            carPrice={card.carPrice}
            carLocation={card.carLocation}
          />
        );
      })}

      <button>See More</button>
    </Container>
  );
};

export default FeaturedWrapper;
