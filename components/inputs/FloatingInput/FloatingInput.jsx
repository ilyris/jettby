import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Field } from "react-final-form";
import Option from "../Option";
import FileInput from "../FileInput/FileInput";

export default function FloatingInput({ inputData }) {
  const {
    label,
    placeholder,
    cid,
    type = "text",
    component,
    options,
  } = inputData;
  const name = label.toLowerCase().replace(" ", "_");

  return (
    <>
      {type == "select" && (
        <FloatingLabel controlId={cid} label={label}>
          <Field
            className="form-control mb-4"
            name={name}
            component={component}
          >
            <option>Open this select menu</option>
            {options.map((value) => (
              <Option key={value} value={value} />
            ))}
          </Field>
        </FloatingLabel>
      )}
      {type == "checkbox" && (
        <>
          <Form.Label>{label}</Form.Label>
          {options.map((value) => {
            return (
              <div>
                <Field
                  className="form-check-input mb-4"
                  name={name}
                  type={type}
                  component={component}
                  value={value}
                />
                <span>{value}</span>
              </div>
            );
          })}
        </>
      )}
      {(type == "text" || type == "textarea") && (
        <FloatingLabel controlId={cid} label={label}>
          <Field
            className="form-control  mb-4"
            name={name}
            type={type}
            placeholder={placeholder}
            component={component}
          />
        </FloatingLabel>
      )}
      {type == "radio" && (
        <>
          <Form.Label class="radioLabel">{label}</Form.Label>
          {options.map((value) => {
            return (
              <div class="radioGroup">
                <Field
                  className="form-check-radio mb-4"
                  name={name}
                  type={type}
                  component={component}
                  value={value}
                />
                <span>{value}</span>
              </div>
            );
          })}
        </>
      )}
      {type == "file" && (
        <FileInput name={name} type={type} label={label} cid={cid} />
      )}
    </>
  );
}
