// libs
import React from "react";
import { useSelector } from "react-redux";

// comps
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Field } from "react-final-form";
import Option from "../Option";
import FileInput from "../FileInput/FileInput.tsx";

// helpers
import { filterCharacters, sanitizeCharacters } from "./errors.js";

export default function FloatingInput({ inputData }) {
  const {
    label,
    placeholder,
    cid,
    type = "text",
    component,
    options,
    isRequired,
    length,
  } = inputData;

  const errors = useSelector((state) => state.selling.errors);
  const name = label.toLowerCase().replace(" ", "_");

  // validation
  const required = (value) => {
    if (type == "select") {
      if (value === undefined || value.includes("Select")) {
        return `${label} can not be selected option`;
      }
    }

    if (value === "" || value === undefined) {
      return `${label} can not be empty`;
    }
  };

  // value filter
  const filterVal = (value) => {
    if (name == "zip_code" || name == "mileage") {
      return filterCharacters(value);
    } else if (name == "listing_price") {
      if (!value) return;
      return "$" + Number(filterCharacters(value).toFixed(1)).toLocaleString();
    } else {
      return sanitizeCharacters(value);
    }
  };

  return (
    <>
      {type == "select" && (
        <FloatingLabel controlId={cid} label={label} className="mb-4">
          <Field
            name={name}
            component={component}
            validate={isRequired ? required : false}
          >
            {({ input, meta }) => {
              console.log("error", meta.error);
              console.log("touched", meta.touched);
              console.log("error names", errors[name]);

              return (
                <>
                  <Form.Select
                    className="form-control"
                    isInvalid={meta.error && meta.touched ? true : false}
                    {...input}
                  >
                    {options.map((value) => (
                      <Option key={value} value={value} />
                    ))}
                  </Form.Select>
                  {(meta.error && meta.touched) || errors[name] ? (
                    <span className="text-danger">{meta.error}</span>
                  ) : null}
                </>
              );
            }}
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
        <FloatingLabel controlId={cid} label={label} className=" mb-4">
          <Field
            name={name}
            component={component}
            validate={isRequired ? required : false}
            parse={filterVal}
          >
            {({ input, meta }) => {
              return (
                <>
                  <Form.Control
                    {...input}
                    type={type}
                    isInvalid={
                      (meta.error && meta.touched) || errors[name]
                        ? true
                        : false
                    }
                    placeholder={placeholder}
                    minLength={length && length.min}
                    maxLength={length && length.max}
                  ></Form.Control>
                  {(meta.error && meta.touched) || errors[name] ? (
                    <span className="text-danger">{meta.error}</span>
                  ) : null}
                </>
              );
            }}
          </Field>
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
