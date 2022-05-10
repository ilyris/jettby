import React from "react";

export default function Option({ value }) {
  return (
    <option key={value} value={value}>
      {value}
    </option>
  );
}
