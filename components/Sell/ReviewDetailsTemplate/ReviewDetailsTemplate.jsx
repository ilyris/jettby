import React from "react";
import Button from "../../inputs/Button/Button";

export default function ReviewDetailsTemplate({ formState, step, setStep }) {
  const keys = Object.keys(formState);

  const onSubmit = (e, formState) => {
    console.log(formState);
    // map api call here to back-end
  };

  return (
    <section className="ReviewDetailsTemplate">
      <h4>Review Details</h4>

      <div className="ReviewDetailsTemplate--info">
        {keys.map((key) => {
          return (
            <p>
              <span>{key}:</span> <span>{formState[key]}</span>
            </p>
          );
        })}
      </div>
      <div className="ReviewDetailsTemplate--car">
        <p>{formState["make"]}</p>
        <p>{formState["model"]}</p>
        <p>{formState["year"]}</p>
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
