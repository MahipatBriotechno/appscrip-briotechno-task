"use client";
import React from "react";

const CheckboxWithLabel = ({ id, label }: any) => {
  return (
    <div className="flex items-start mb-5 mt-1">
      <input
        type="checkbox"
        id={id}
        className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 border-unset ease-in-out"
      />
      <label
        htmlFor={id}
        className="ml-2 block text-base font-simplon font-bold uppercase"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
