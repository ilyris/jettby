import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

export default function DetailsCard({ formState }) {
  const [vinData, setVinData] = useState(
    JSON.parse(window.localStorage.getItem("vinDetails"))
  );
  const [cardState, setCardState] = useState(formState);

  useEffect(() => {
    setCardState(formState);
  }, [formState]);

  return (
    <Card className="DetailsCard" bg="light" border="secondary">
      <Card.Header>
        <h4>
          {vinData.Make} {vinData.Model} {vinData.ModelYear}
        </h4>
      </Card.Header>
      <Card.Body>
        <div className="img"></div>
        <div class="text-container">
          {Object.keys(formState).map((key, i) => {
            if (
              i >= 8 ||
              key == "first_name" ||
              key == "last_name" ||
              key == "email_address"
            )
              return;
            return (
              <div>
                <Card.Text>{key.replace("_", " ")}:</Card.Text>
                <Card.Text>{formState[key]}</Card.Text>
              </div>
            );
          })}
          {Object.keys(formState).length && (
            <Accordion>
              <Accordion.Header>See More</Accordion.Header>
              <Accordion.Body>
                {Object.keys(formState).map((key, i) => {
                  if (i <= 5) return;
                  return (
                    <Accordion.Item>
                      <span>{key.replace("_", " ")}:</span>{" "}
                      <span>{formState[key]}</span>
                    </Accordion.Item>
                  );
                })}
              </Accordion.Body>
            </Accordion>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
