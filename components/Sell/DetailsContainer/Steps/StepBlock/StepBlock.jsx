import React from "react";

export default function StepBlock({ step, stepKey, completedSteps }) {
  const checkSteps = (arr, val) => {
    const removeLastStep = arr.filter((int) => int < step);
    return removeLastStep.includes(Number(val));
  };

  if (checkSteps(completedSteps, stepKey) || step == stepKey) {
    return (
      <div className="StepBlock">
        {step == stepKey && <h4>Step</h4>}

        <div className={step == stepKey ? `current` : `done`}>
          {`0${stepKey}`}
        </div>
        <div></div>
      </div>
    );
  } else {
    return (
      <div className="StepBlock">
        <div>{`0${stepKey}`}</div>
        <div></div>
      </div>
    );
  }
}
