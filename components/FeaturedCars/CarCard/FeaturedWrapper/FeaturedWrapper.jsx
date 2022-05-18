import React from 'react';
import Container from 'react-bootstrap/Container';
import FeaturedCard from '../FeaturedCard';
import { Button } from 'react-bootstrap';
import carCardsData from './CarData';

const { carTitle, carPicture, carMake, carPrice, carLocation } = carCardsData;

const FeaturedWrapper = () => {
  return (
    <section className='FeaturedWrapper'>
      <Container>
        <h3>Lets Find Your Dream Car</h3>
        <h5>
          We recommend the very best and newest cars today and also a friendly
          price for you
        </h5>
        <div>
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
          <Button variant='primary'>See More</Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedWrapper;

// Change titles to cap classnames
// ride bootstrap class for titles on cards and other elements
// figure out how to get rid of css and css map files
