import React from "react";

// components
import Card from "./Card/Card";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";

export default function HowWeServe(props) {
  return (
    <section className="HowWeServe">
      <Container>
        <h2>How We Can Help</h2>
        <h4>We provide top tier service to you to your end goal</h4>
      </Container>

      <Container>
        <div className="HowWeServe--cards">
          <Card
            icon={faThumbsUp}
            title={"Ease of use"}
            text={
              "sdfasdcv sdfasd fasdf asdf adsf adsf asd fa dfa dfasdfaew  dfgsdf  adsfgsd"
            }
          />
          <Card
            icon={faThumbsUp}
            title={"Ease of use"}
            text={
              "sdfasdcv sdfasd fasdf asdf adsf adsf asd fa dfa dfasdfaew  dfgsdf  adsfgsd"
            }
          />
          <Card
            icon={faThumbsUp}
            title={"Ease of use"}
            text={
              "sdfasdcv sdfasd fasdf asdf adsf adsf asd fa dfa dfasdfaew  dfgsdf  adsfgsd"
            }
          />
        </div>
      </Container>
    </section>
  );
}
