import React from "react";
import BSButton from "react-bootstrap/Button";

export default function Button({ type, name, variant, onClick, text, data }) {
  return (
    <BSButton
      type={type}
      name={name}
      variant={variant}
      data-step={data}
      onClick={onClick}
    >
      {text}
    </BSButton>
  );
}
