import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';

const FeaturedCard = ({
  carPicture,
  carTitle,
  carMake,
  carPrice,
  carLocation,
}) => {
  return (
    <Card className='featuredCard'>
      <div className='featuredCard--wrapper'>
        <Card.Img variant='top' src={carPicture.src} alt={carTitle} />
        <Card.Title className='featured--card--title'>{carMake}</Card.Title>
        <Card.Title className='featured--card--model'>
          {carTitle}
          <span>${carPrice}</span>
        </Card.Title>
        <Card.Text>
          <FontAwesomeIcon className='location--icon' icon={faLocationDot} />
          {carLocation}
        </Card.Text>
      </div>
    </Card>
  );
};

export default FeaturedCard;
