import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import {
  faSackDollar,
  faCar,
  faGears,
  faMap,
  faMapMarkerAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "react-bootstrap/Accordion";

function CarDetails({ data }) {
  console.log(data);
  const {
    cloudinary_urls,
    drivetrain,
    engine,
    exterior_color,
    listing_price,
    make,
    model,
    mileage,
    transmission,
    year,
    zip_code,
  } = !!data && data;

  const imgs =
    !!cloudinary_urls &&
    cloudinary_urls.map((url: string) => {
      return { original: url, thumbnail: url };
    });

  if (!!!data) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Container className="Details">
        <div className="left-col">
          {!!cloudinary_urls && <ImageGallery items={imgs} />}
          <section>
            <div className="Details--container">
              <h5>Details</h5> {/* Price at the top as well. */}
              <div className="Details--container__row full">
                <div className="Details--container__row full--features">
                  <div className="left">
                    <p>Mileage:</p>
                  </div>
                  <span>{mileage}</span>
                </div>
                <div className="Details--container__row full--features">
                  <div className="left">
                    <p>Transmission:</p>
                  </div>
                  <span>{transmission}</span>
                </div>
                <div className="Details--container__row full--features">
                  <div className="left">
                    <p>Engine:</p>
                  </div>
                  <span>{engine}</span>
                </div>
                <div className="Details--container__row full--features">
                  <div className="left">
                    <p>Drivetrain:</p>
                  </div>
                  <span>{drivetrain}</span>
                </div>
                <div className="Details--container__row full--features">
                  <div className="left">
                    <p>location:</p>
                  </div>
                  <span>{zip_code}</span>
                </div>
              </div>
              <div className="Details--container__row full">
                <h5>Features:</h5>
                <div className="Details--container__row full--features">
                  <div className="left">
                    <p>Convience Details:</p>
                  </div>
                  <ul>
                    {data["convience_options (optional)"].map(
                      (item: string) => (
                        <li key={item}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
                <div className="Details--container__row full--features">
                  <div className="left">
                    <p>Entertainment Details:</p>
                  </div>
                  <ul>
                    {data["entertainment_options (optional)"].map(
                      (item: string) => (
                        <li key={item}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
                <div className="Details--container__row full--features">
                  <div className="left">
                    <p>Exterior Details:</p>
                  </div>
                  <ul>
                    {data["exterior_options (optional)"].map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="Details--container__row full--features">
                  <div className="left">
                    <p>Saftey Details:</p>
                  </div>
                  <ul>
                    {data["saftey_options (optional)"].map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="Details--container__row full--features">
                  <div className="left">
                    <p>Seating Details:</p>
                  </div>
                  <ul>
                    {data["seating_options (optional)"].map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="seller-information">
                  <h5>Seller Information:</h5>
                  <p>{data["additional_information (optional)"]}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <form>
          <legend>Personalia:</legend>
          <label for="fname">First name:</label>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" value="Doe" />
          <input type="submit" value="Submit" />
        </form>
      </Container>
    );
  }
}

export default CarDetails;
