import React, { useState } from "react";

const DropdownMenu = ({
  selectedOption,
  options,
  handleChange,
}: {
  selectedOption: any;
  options: any;
  handleChange: any;
}) => {
  // const [selectedLanguage, setSelectedLanguage] = useState("en");

  // const languages = [
  //   { code: "en", label: "ENG" },
  //   { code: "es", label: "ESP" },
  //   { code: "fr", label: "FRA" },
  //   { code: "de", label: "DEU" },
  // ];

  // const handleLanguageChange = (event:any) => {
  //   const selectedCode = event.target.value;
  //   setSelectedLanguage(selectedCode);
  // };

  return (
    <div className="flex items-center">
      {/* <label htmlFor="language-select" className="mr-2 text-gray-600">
        Select Language:
      </label> */}
      <select
        id="language-select"
        value={selectedOption}
        onChange={handleChange}
        className="px-0 py-1 bg-transparent border-none border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500 text-base font-bold"
      >
        {options.map((opt: any) => (
          <option key={opt.code} value={opt.code} className="uppercase">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
