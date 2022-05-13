import React from 'react';
import Image from 'next/image';
// FontAwesome for icons
const CarCard = ({ carPicture, carTitle, carMake, carPrice, carLocation }) => {
  return (
    <div className='CarCard'>
      <div>
        <h3>Car Card</h3>
        <Image src={carPicture} alt={carTitle} width={200} height={200} />
        <p>{carMake}</p>
        <p>{carTitle}</p>
        <p>${carPrice}</p>
        <p>{carLocation}</p>
      </div>
    </div>
  );
};

export default CarCard;
