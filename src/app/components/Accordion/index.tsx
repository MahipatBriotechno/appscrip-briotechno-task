"use client";
import { useState } from "react";
import React from 'react';
const Accordion = ({ title, children, isShow, isFooter }:any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-top">
      <div
        className="flex-between-padding"
        onClick={toggleAccordion}
      >
        <div className="width-full-margin">
          <div className="flex-between-padding">
            <h2 className="text-large-bold-uppercase">{title}</h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`height-width opacity-seventy-five ${isOpen? "transform-rotate" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke={isFooter? ".svg-stroke-color-footer" : ".svg-stroke-color"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="svg-path"
              />
            </svg>
          </div>
          {isShow && (
            <span className="text-large-bold-uppercase">All</span>
          )}
        </div>
      </div>
      {isOpen && <div className="padding-4-pl-0-pt-0">{children}</div>}
    </div>
  );
};
export default Accordion