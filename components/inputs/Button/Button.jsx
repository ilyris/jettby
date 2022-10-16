import React from "react";
import BSButton from "react-bootstrap/Button";

export default function Button({
  type,
  name,
  variant,
  onClick = (e) => console.log(e),
  text,
  data,
  disabled = false,
}) {
  return (
    <BSButton
      type={type}
      name={name}
      variant={variant}
      data-step={data}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </BSButton>
  );
}
