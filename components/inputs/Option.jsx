import React from "react";
import { useSelector } from "react-redux";

export default function Option({ value, selected }) {
  console.log(selected);
  console.log(value);
  return (
    <option value={value} selected={value === selected}>
      {value}
    </option>
  );
}
