import React, { useEffect, useState } from "react";
import FloatingInput from "../../../inputs/FloatingInput/FloatingInput";
import { Form } from "react-final-form";
import Button from "../../../inputs/Button/Button";
import { useDispatch } from "react-redux";
import { setSellerErrors } from "../../../../redux/actions";
// helpers
import { renderStepInputs } from "../../../../helpers/renderStepInputs";
import useTopScroll from "../../../../custom_hooks/useTopScroll";

export default function Detailsform({
  vinData,
  setFormState,
  inputs,
  step,
  setStep,
}) {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);

  const handleSteps = async (e, values, form) => {
    // Next or Back
    if (e.target.name == "next") {
      const stepCount = Number(e.target.getAttribute("data-step"));

      if (!form.getState().valid) {
        await dispatch(setSellerErrors(form.getState().errors));
        return setHasError(true);
      }

      setStep(stepCount + 1);
    } else {
      setStep(step - 1);
      setHasError(false);
    }

    setFormState(values);
  };

  const onSubmit = (e, values) => {
    console.log(values.getState().values);
  };

  const onChange = (form) => {
    // dispatch formState to selling form
    form.getState().valid ? setHasError(false) : setHasError(true);
  };

  useEffect(() => {
    useTopScroll();
  }, [step]);

  return (
    <Form
      initialValues={{
        make: vinData.Make,
        model: vinData.Model,
        year: vinData.ModelYear,
      }}
      onSubmit={onSubmit}
      render={({ handleSubmit, values, form }) => (
        <form
          className="DetailsForm"
          onSubmit={handleSubmit}
          onChange={() => onChange(form)}
          onBlur={() => onChange(form)}
        >
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
                onClick={(e) => handleSteps(e, values, form)}
                text={"Back"}
                data={step - 1}
              />
            )}

            <Button
              type={"button"}
              name={"next"}
              variant={"primary"}
              onClick={(e) => handleSteps(e, values, form)}
              text={"Next"}
              data={step}
              disabled={hasError}
            />
          </div>
        </form>
      )}
    />
  );
}
