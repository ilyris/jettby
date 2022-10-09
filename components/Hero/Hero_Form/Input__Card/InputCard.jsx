import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Option from "../../../inputs/Option";

export default function Inputcard({
  type,
  icon,
  cid,
  label,
  selected = null,
  options = [],
  arrow = null,
  changeFunc,
}) {
  const modelList = useSelector(
    (state) => state.modelOptionReducer.inputs[1].options
  );
  const buying = useSelector((state) => state.buying);

  return (
    <div className="InputCard" data-key={label}>
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <Form.Group className="HeroForm--form__group" controlId={cid}>
        <Form.Label>{label}</Form.Label>
        {type === "select" && (
          <div className="select-container">
            <Form.Select name={label} onChange={changeFunc}>
              {label === "Model"
                ? modelList.map((model) => {
                    return (
                      <Option key={model} selected={selected} value={model} />
                    );
                  })
                : options.map((option) => {
                    return (
                      <Option key={option} selected={selected} value={option} />
                    );
                  })}
            </Form.Select>
            {arrow !== null && (
              <FontAwesomeIcon className="select-icon" icon={arrow} />
            )}
          </div>
        )}

        {type === "text" && (
          <Form.Control
            name={label}
            // value={label === "Zip Code" && buying.zip_code }
            type="text"
            placeholder=""
            onChange={changeFunc}
          />
        )}
      </Form.Group>
    </div>
  );
}
