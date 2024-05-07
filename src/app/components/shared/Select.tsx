// components/SelectPopover.js
import { useState } from "react";

const SelectPopover = ({ options, onSelect,className }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const handleSelect = (option: any) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`py-2 flex uppercase items-center gap-2 px-4  ${className} rounded-md focus:outline-none text-base font-bold`}
      >
        {selectedOption ? selectedOption.label : options[0]?.label}{" "}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018"
            stroke="#292D32"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute  top-full z-10 left-0 mt-1 w-full bg-white shadow-box rounded-md">
          {options.map((option: any) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`flex items-center hover:bg-gray-100 justify-end gap-2 w-full uppercase py-2 px-4 text-right text-base focus:outline-none ${
                selectedOption === option ? "font-bold" : ""
              }`}
            >
              {selectedOption === option && (
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.13015 9.39675L13.5965 0.930414C13.8596 0.667336 14.1944 0.535797 14.601 0.535797C15.0075 0.535797 15.3424 0.667336 15.6054 0.930414C15.8685 1.19349 16.0001 1.52832 16.0001 1.93489C16.0001 2.34147 15.8685 2.6763 15.6054 2.93937L6.13462 12.4102C5.84763 12.6972 5.5128 12.8407 5.13015 12.8407C4.74749 12.8407 4.41266 12.6972 4.12567 12.4102L0.394739 8.67926C0.131661 8.41618 0.00012207 8.08136 0.00012207 7.67478C0.00012207 7.2682 0.131661 6.93338 0.394739 6.6703C0.657817 6.40722 0.992644 6.27568 1.39922 6.27568C1.80579 6.27568 2.14062 6.40722 2.4037 6.6703L5.13015 9.39675Z"
                    fill="#292D32"
                  />
                </svg>
              )}

              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectPopover;
