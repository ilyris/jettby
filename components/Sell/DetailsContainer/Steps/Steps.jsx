import React, { useState, useEffect } from "react";
import StepBlock from "./StepBlock/StepBlock";

export default function Steps({ stepKeys, step }) {
  const [completedSteps, setCompletedSteps] = useState([1]);

  useEffect(() => {
    setCompletedSteps([...new Set([...completedSteps, step])]);
  }, [step]);

  return (
    <div className="Steps">
      <div className="Steps--container">
        {stepKeys.map((key) => {
          const stepKey = key.replace("step", "");
          return (
            <StepBlock
              step={step}
              stepKey={stepKey}
              completedSteps={completedSteps}
            />
          );
        })}
      </div>
    </div>
  );
}
