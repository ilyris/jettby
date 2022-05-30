// libs
import React from "react";
import axios from "axios";

// components
import Button from "../../inputs/Button/Button";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";

// redux
import { useSelector } from "react-redux";

export default function ReviewDetailsTemplate({ formState, step, setStep }) {
  const vinData = useSelector((state) => state.selling.vinData);
  const images = useSelector((state) => state.selling.images);

  const onSubmit = (e, formState) => {
    console.log(formState);
    // map api call here to back-end
    axios
      .post("/api/sell/post", { formState })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <section className="ReviewDetailsTemplate">
      <h4>Review Details</h4>

      <div className="ReviewDetailsTemplate--info">
        <div className="ReviewDetailsTemplate--info__heading">
          <h2>{`${formState["make"]} ${formState["model"]} ${formState["year"]}`}</h2>
          <h4>{formState["mileage"]}</h4>
          <h4>{formState["listing_price"]}</h4>
        </div>
        <div className="ReviewDetailsTemplate--info__images">
          <AwesomeSlider animation="cubeAnimation">
            {images.map((image, i) => {
              return (
                <div>
                  <img src={image.b64} name={image.name} />
                </div>
              );
            })}
          </AwesomeSlider>
        </div>
        <div className="ReviewDetailsTemplate--info__basics">
          <h2>Primary Information</h2>
          <div>
            <p>
              <span>Exterior Color:</span>
              {formState["exterior_color"]}
            </p>
            <p>
              <span>Drivetrain:</span>
              {formState["drivetrain"]}
            </p>
            <p>
              <span>Transmission:</span>
              {formState["transmission"]}
            </p>
            <p>
              <span>Engine:</span>
              {formState["engine"]}
            </p>
            <p>
              <span>VIN:</span>
              {vinData["VIN"]}
            </p>
          </div>
        </div>
      </div>
      <div class="ReviewDetailsTemplate--buttons">
        <Button
          type={"button"}
          name={"back"}
          variant={"outline-secondary"}
          onClick={() => setStep(step - 1)}
          text={"Back"}
          data={step - 1}
        />

        <Button
          type={"button"}
          name={"submit"}
          variant={"primary"}
          onClick={(e) => onSubmit(e, formState)}
          text={"Submit"}
          data={step}
        />
      </div>
    </section>
  );
}
