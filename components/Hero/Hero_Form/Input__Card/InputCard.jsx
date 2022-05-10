import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";

export default function Inputcard({
  type,
  icon,
  cid,
  label,
  options = [],
  arrow = null,
  changeFunc,
}) {
  const modelList = useSelector(
    (state) => state.modelOptionReducer.inputs[1].options
  );

  return (
    <div className="InputCard" data-key={label}>
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <Form.Group className="HeroForm--form__group" controlId={cid}>
        <Form.Label>{label}</Form.Label>
        {type === "select" ? (
          <div className="select-container">
            <Form.Select name={label} onChange={changeFunc}>
              {label === "Model" &&
                modelList.map((model) => {
                  console.log(model);
                  return (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  );
                })}

              {options.map((option) => {
                if (option.includes("All")) {
                  return (
                    <option key={option} value="All">
                      {option}
                    </option>
                  );
                } else {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                }
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
            onChange={changeFunc}
          />
        )}
      </Form.Group>
    </div>
  );
}
