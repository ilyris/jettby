import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Option from "../../../inputs/Option";
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
              {label === "Model"
                ? modelList.map((model) => {
                    return <Option value={model} />;
                  })
                : options.map((option) => {
                    return <Option value={option} />;
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
