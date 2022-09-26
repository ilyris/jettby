import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faGauge } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ListingCard = ({
  carPicture,
  carTitle,
  carPrice,
  carLocation,
  carMileage,
}) => {
  console.log(carPicture);
  return (
    <Card className="CarCard">
      <div className="CarCard--wrapper">
        <Card.Title className="CarCard--wrapper__model">{carTitle}</Card.Title>
        <Card.Img variant="top" src={carPicture} alt={carTitle} />
        <Card.Body className="CarCard--wrapper__body">
          <Card.Text>
            <FontAwesomeIcon icon={faLocationDot} />
            {carLocation}
          </Card.Text>
          <Card.Text>
            Mileage: <span>{carMileage}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="CarCard--wrapper__footer">
          <Card.Text>{carPrice}</Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Footer>
      </div>
    </Card>
  );
};
export default ListingCard;
