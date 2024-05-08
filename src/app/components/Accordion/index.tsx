"use client";
import { useState } from "react";
import React from "react";
const Accordion = ({ title, children, isShow, isFooter }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-top">
      <div className="flex-between-padding" onClick={toggleAccordion}>
        <div className="width-full-margin">
          <div className="flex-between-padding">
            <h2 className="text-large-bold-uppercase font-simplon">{title}</h2>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`height-width opacity-seventy-five ${
                isOpen ? "transform-rotate" : ""
              }`}
            >
              <path
                d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018"
                stroke={isFooter ? "#fff" : "#292D32"}
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

           
          </div>
          {isShow && <span className="text-large-bold-uppercase2 font-simplon">All</span>}
        </div>
      </div>
      {isOpen && <div className="padding-4-pl-0-pt-0">{children}</div>}
    </div>
  );
};
export default Accordion;
