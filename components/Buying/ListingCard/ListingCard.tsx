import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faGauge } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ListingCard = ({
  id,
  carPicture,
  carTitle,
  carPrice,
  carLocation,
  carMileage,
}) => {
  const router = useRouter();
  const handleClick = () => {
    console.log(id);
    // push user to specific car detail page
    router.push(`/vehicleDetails/${id}`);
  };

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
          <Card.Text>Price: {carPrice}</Card.Text>
          <Button variant="primary" onClick={handleClick}>
            Details
          </Button>
        </Card.Footer>
      </div>
    </Card>
  );
};
export default ListingCard;
