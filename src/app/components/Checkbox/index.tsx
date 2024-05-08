"use client";
import React from "react";

const CheckboxWithLabel = ({ id, label }: any) => {
  return (
    <div className="flex-items-start-margin">
    <input
      type="checkbox"
      id={id}
      className="form-checkbox-style"
    />
    <label
      htmlFor={id}
      className="block-text-base-bold-uppercase"
    >
      {label}
    </label>
  </div>
  );
};

export default CheckboxWithLabel;
