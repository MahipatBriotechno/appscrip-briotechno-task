"use client";
import React from "react";

const NormalLabel = ({ id, label,checked,onChange }: any) => {
  return (
    <div className="flex-items-center-margin">
    <input
      type="checkbox"
      id={id}
      className="form-checkbox-style text-red"
      checked={checked}
      onChange={onChange}
    />
    <label
      htmlFor={id}
      className="block-text-base-font-simplon-normal ml-2"
    >
      {label}
    </label>
  </div>
  );
};

export default NormalLabel;
