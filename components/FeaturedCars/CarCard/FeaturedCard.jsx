import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const FeaturedCard = ({
  carPicture,
  carTitle,
  carMake,
  carPrice,
  carLocation,
}) => {
  return (
    <div className='FeaturedCard'>
      <div className='featuredCard--wrapper'>
        <Image src={carPicture} alt={carTitle} width={550} height={400} />
        <h5>{carMake}</h5>
        <h3>
          {carTitle}
          <span>${carPrice}</span>
        </h3>

        <p>
          <FontAwesomeIcon className='location--icon' icon={faLocationDot} />
          {carLocation}
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
