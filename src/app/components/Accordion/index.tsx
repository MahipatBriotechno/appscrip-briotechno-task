// components/Accordion.js
"use client";
import { useState } from "react";

const Accordion = ({ title, children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-t mt-2">
      <div
        className="flex justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="w-full mt-1 mb-1">
          <div className="flex justify-between w-full">
            <h2 className="text-lg font-bold uppercase">{title}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isOpen ? "transform rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <span className="text-lg font-medium">All</span>
        </div>
      </div>
      {isOpen && <div className="p-4 border-t">{children}</div>}
    </div>
  );
};

export default Accordion;
