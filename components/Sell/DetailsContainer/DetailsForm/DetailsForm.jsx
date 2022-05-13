import React, { useState, useEffect } from "react";
import FloatingInput from "../../../inputs/FloatingInput/FloatingInput";
import { Form } from "react-final-form";
import Button from "../../../inputs/Button/Button";

// helpers
import { renderStepInputs } from "../../../../helpers/renderStepInputs";

export default function Detailsform({
  vinData,
  setFormState,
  inputs,
  step,
  setStep,
}) {
  const handleSteps = (e, values) => {
    if (e.target.name == "next") {
      const stepCount = Number(e.target.getAttribute("data-step"));
      setStep(stepCount + 1);
    } else {
      setStep(step - 1);
    }
    setFormState(values);
  };

  const onSubmit = (e, values) => {
    console.log(values.getState().values);
  };

  return (
    <Form
      initialValues={{
        make: vinData.Make,
        model: vinData.Model,
        year: vinData.ModelYear,
      }}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine, values }) => (
        <form className="DetailsForm" onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <h5>Car Seller Info</h5>
              <h6 className="mb-3">
                This information will be stored on your account
              </h6>

              <FloatingInput
                inputData={{
                  label: "First Name",
                  placeholder: "Bil",
                  cid: "firstNameControl",
                  type: "text",
                  component: "input",
                }}
              />
              <FloatingInput
                inputData={{
                  label: "Last Name",
                  placeholder: "Murray",
                  cid: "lastNameControl",
                  type: "text",
                  component: "input",
                }}
              />
              <FloatingInput
                inputData={{
                  label: "Email Address",
                  placeholder: "BilMurray@gmail.com",
                  cid: "emailAddressControl",
                  type: "email",
                  component: "input",
                }}
              />
            </>
          )}

          <h5>Car Information</h5>
          <h6 className="mb-3">
            Please provide more information about your vehicle
          </h6>

          {renderStepInputs(inputs, step, FloatingInput)}

          <div>
            {step > 1 && (
              <Button
                type={"button"}
                name={"back"}
                variant={"outline-secondary"}
                onClick={(e) => handleSteps(e, values)}
                text={"Back"}
                data={step - 1}
              />
            )}

            <Button
              type={"button"}
              name={"next"}
              variant={"primary"}
              onClick={(e) => handleSteps(e, values)}
              text={"Next"}
              data={step}
            />
          </div>
        </form>
      )}
    />
  );
}
