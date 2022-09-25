import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faGauge } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";

const ListingCard = ({
  carPicture,
  carTitle,
  carPrice,
  carLocation,
  carMileage,
}) => {
  return (
    <Card className="CarCard">
      <div className="CarCard--wrapper">
        {/* <Card.Img variant="top" src={carPicture.src} alt={carTitle} /> */}
        {/* <Card.Title className="featured--card--title">{carMake}</Card.Title> */}
        <Card.Title className="CarCard--wrapper__model">
          {carTitle}
          <span>{carPrice}</span>
        </Card.Title>
        <Card.Footer className="CarCard--wrapper__footer">
          <Card.Text>
            <FontAwesomeIcon icon={faLocationDot} />
            {carLocation}
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon={faGauge} />
            {carMileage}
          </Card.Text>
        </Card.Footer>
      </div>
    </Card>
  );
};
export default ListingCard;
