// libraries
import React, { useState } from "react";
import { useSelector } from "react-redux";
// comps
import DetailsCard from "./DetailsCard/DetailsCard";
import DetailsForm from "./DetailsForm/DetailsForm";
import Steps from "./Steps/Steps";
import ReviewDetailsTemplate from "../ReviewDetailsTemplate/ReviewDetailsTemplate";
// data
import { inputs } from "./DetailsForm/inputs.js";

export default function DetailsContainer(props) {
  const vinData = useSelector((state) => state.selling.vinData);

  const [formState, setFormState] = useState({});
  const [step, setStep] = useState(1);

  const stepKeys = Object.keys(inputs);

  return (
    <section className="DetailsContainer">
      <Steps stepKeys={stepKeys} step={step} />
      {step <= 6 && (
        <>
          <DetailsForm
            vinData={vinData}
            setFormState={setFormState}
            inputs={inputs}
            step={step}
            setStep={setStep}
          />
          <DetailsCard formState={formState} vinData={vinData} />
        </>
      )}

      {step === 7 && (
        <ReviewDetailsTemplate
          formState={formState}
          step={step}
          setStep={setStep}
        />
      )}
    </section>
  );
}
