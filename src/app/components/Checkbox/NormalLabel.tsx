"use client";
import React from "react";

const NormalLabel = ({ id, label,checked,onChange }: any) => {
  return (
    <div className="flex items-center mb-5 mt-1">
      <input
        type="checkbox"
        id={id}
        className="form-checkbox h-[18px] w-[18px] text-red transition duration-150 border-unset ease-in-out"
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="ml-2 block text-base font-simplon font-normal text-[#252020]"
      >
        {label}
      </label>
    </div>
  );
};

export default NormalLabel;
