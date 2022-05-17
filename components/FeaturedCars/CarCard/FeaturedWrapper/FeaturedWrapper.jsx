import React from 'react';
import Container from 'react-bootstrap/Container';
import FeaturedCard from '../FeaturedCard';
import { Button } from 'react-bootstrap';
import carCardsData from './CarData';

const { carTitle, carPicture, carMake, carPrice, carLocation } = carCardsData;

const FeaturedWrapper = () => {
  return (
    <section className='featured--wrapper'>
      <Container>
        <h3 className='featured--title'>Lets Find Your Dream Car</h3>
        <h5 className='featured--desc'>
          We recommend the very best and newest cars today and also a friendly
          price for you
        </h5>
        <div className='featured-card-wrapper'>
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
        <div>
          <Button variant='primary' className='featured--button'>
            See More
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedWrapper;

// make responsive
// calc function for rems (if columns doesn't work)
