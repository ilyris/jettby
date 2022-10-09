import React from "react";

export default function Option({ value, selected }) {
  return (
    <option value={value} selected={value === selected}>
      {value}
    </option>
  );
}
