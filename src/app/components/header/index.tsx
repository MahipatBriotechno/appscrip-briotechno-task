"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LOGO from "../../assets/svg/LOGO.svg";
import headerleftlogo from "../../assets/svg/header-left-logo.svg";
import heart from "../../assets/svg/heart.svg";
import profile from "../../assets/svg/profile.svg";
import searchNormal from "../../assets/svg/search-normal.svg";
import shoppingBag from "../../assets/svg/shopping-bag.svg";
import { Container } from "../container";
import SelectPopover from "../shared/Select";
import GreyStrip from "./GreyStrip";
import MobileDrawer from "./MobileDrawer";
import "./header.css"

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages = [
    { code: "en", label: "ENG" },
    { code: "es", label: "ESP" },
    { code: "fr", label: "FRA" },
    { code: "de", label: "DEU" },
  ];
  const options = [
    { label: "ENG", value: "ENG" },
    { label: "FRA", value: "FRA" },
    { label: "DEU", value: "DEU" },
  ];
  const handleSelect = (option: any) => {
    console.log("Selected option:", option);
    // Do something with the selected option
  };
  const handleLanguageChange = (event: any) => {
    const selectedCode = event.target.value;
    setSelectedLanguage(selectedCode);
  };

  const MenuItem = [
    {
      title: "SHOP",
      link: "",
    },
    {
      title: "SKILLS",
      link: "",
    },
    {
      title: "STORIES",
      link: "",
    },
    {
      title: "ABOUT",
      link: "",
    },
    {
      title: "CONTACT US",
      link: "",
    },
  ];
  return (
    <div>
      <div className="border-bottom-1 ">
        <GreyStrip />
        <Container>
          {/* Desktop Header  */}
          <div className="desktop-header block  pb-20 pt-30">
            {/* Logo etc  */}
            <div className="mb-40 flexJbAc">
              <div className="headerLeft">
                <Image src={headerleftlogo} alt={""} />
              </div>
              <Image src={LOGO} alt={""} className="" />
              <div className="flexIc gap-24 ">
                <Image src={searchNormal} alt={""} />
                <Image src={heart} alt={""} />
                <Image src={shoppingBag} alt={""} />
                <Image src={profile} alt={""} />
                <div className="mt-5">
                  <SelectPopover
                    options={options}
                    onSelect={handleSelect}
                    className={"w-auto"}
                  />
                </div>
                {/* <DropdownMenu
                  selectedOption={selectedLanguage}
                  options={languages}
                  handleChange={handleLanguageChange}
                /> */}
              </div>
            </div>

            {/* Menu  */}
            <div className="flexJcAc">
              <ul className="flexIc gap-48">
                {MenuItem.map((db, index) => (
                  <li key={index}>
                    <Link className="text-xl font-bold " href={`${db.link}`}>
                      {db.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
      {/* Mobile Header  */}
      <div className="mobile-header">
        <MobileDrawer MenuItem={MenuItem} />
      </div>
    </div>
  );
};

export default Header;
