import React from 'react';
import Container from 'react-bootstrap/Container';
import FeaturedCard from '../FeaturedCard';
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
    <section className='Featured'>
      <Container>
        <h3 className='Featured--title'>Lets Find Your Dream Car</h3>
        <h5 className='Featured--desc'>
          We recommend the very best and newest cars today and also a friendly
          price for you
        </h5>
        <div className='Featured-Card-Wrapper'>
          {carCardsData.map((card) => {
            return (
              <FeaturedCard
                key={Math.random()}
                carPicture={card.carPicture}
                carTitle={card.carTitle}
                carMake={card.carMake}
                carPrice={card.carPrice}
                carLocation={card.carLocation}
              />
            );
          })}
        </div>
        <button>See More</button>
      </Container>
    </section>
  );
};

export default FeaturedWrapper;
