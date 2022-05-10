import React from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function Text({ label, placeholder, cid }) {
  return (
    <FloatingLabel controlId={cid} label={label}>
      <Form.Control type="text" placeholder={placeholder} />
    </FloatingLabel>
  );
}
