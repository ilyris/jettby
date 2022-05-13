// libraries
import React, { useState } from "react";

// comps
import DetailsCard from "./DetailsCard/DetailsCard";
import DetailsForm from "./DetailsForm/DetailsForm";
import Steps from "./Steps/Steps";

// data
import { inputs } from "./DetailsForm/inputs.js";

export default function DetailsContainer(props) {
  const [vinData, setVinData] = useState(
    JSON.parse(window.localStorage.getItem("vinDetails"))
  );

  const [formState, setFormState] = useState({});
  const [step, setStep] = useState(1);

  const stepKeys = Object.keys(inputs);

  return (
    <section className="DetailsContainer">
      <Steps stepKeys={stepKeys} step={step} />
      <DetailsForm
        vinData={vinData}
        setFormState={setFormState}
        inputs={inputs}
        step={step}
        setStep={setStep}
      />
      <DetailsCard formState={formState} />
    </section>
  );
}
