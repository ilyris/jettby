// libraries
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const {
      TransmissionSpeeds,
      TransmissionStyle,
      DriveType,
      EngineHP,
      EngineCylinders,
      FuelTypePrimary,
    } = vinData;

    inputs["step2"][1].options.push(DriveType);
    inputs["step2"][2].options.push(
      `${TransmissionSpeeds} speed ${TransmissionStyle}`
    );
    inputs["step2"][3].options.push(
      `${EngineHP}HP ${EngineCylinders}cyl  ${FuelTypePrimary} fuel`
    );
  }, [vinData]);

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
