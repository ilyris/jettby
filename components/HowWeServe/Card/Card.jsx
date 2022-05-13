import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HowWeServeCard({ icon, title, text }) {
  return (
    <Card className="ServeCard">
      <Card.Header>
        <FontAwesomeIcon icon={icon} />
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
