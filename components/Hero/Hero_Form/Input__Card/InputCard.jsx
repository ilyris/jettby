import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";

export default function Inputcard({
  type,
  icon,
  cid,
  label,
  options = [],
  arrow = null,
  change,
  allModels = [],
  make = "",
}) {
  const [models, setModels] = useState(["All models"]);
  // if (allModels.length) {
  useEffect(() => {
    if (label === "Model" && allModels.length) {
      setModels([...models, ...allModels]);
    }
  }, [allModels.length]);
  //}

  return (
    <div className="InputCard" data-key={label}>
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <Form.Group className="HeroForm--form__group" controlId={cid}>
        <Form.Label>{label}</Form.Label>
        {type === "select" ? (
          <div className="select-container">
            <Form.Select name={label} onChange={change}>
              {label === "Model" &&
                models.map((model) => {
                  return (
                    <option key={label} value={model}>
                      {model}
                    </option>
                  );
                })}

              {label === "Make" &&
                options.map((option) => {
                  if (option.includes("All")) {
                    return (
                      <option key={label} value="All">
                        {option}
                      </option>
                    );
                  } else {
                    return (
                      <option key={label} value={option}>
                        {option}
                      </option>
                    );
                  }
                })}

              {(label === "Distance" || label === "Price") &&
                options.map((option) => {
                  return (
                    <option key={label} value={option}>
                      {option}
                    </option>
                  );
                })}
            </Form.Select>
            {arrow !== null && (
              <FontAwesomeIcon className="select-icon" icon={arrow} />
            )}
          </div>
        ) : (
          <Form.Control
            name={label}
            type="text"
            placeholder="11111"
            onChange={change}
          />
        )}
      </Form.Group>
    </div>
  );
}
