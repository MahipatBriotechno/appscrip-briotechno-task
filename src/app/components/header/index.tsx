"use client";
import React from "react";
import MobileDrawer from "./MobileDrawer";
import GreyStrip from "./GreyStrip";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../container";
import headerleftlogo from "../../assets/svg/header-left-logo.svg";
import LOGO from "../../assets/svg/LOGO.svg";
import searchNormal from "../../assets/svg/search-normal.svg";
import heart from "../../assets/svg/heart.svg";
import profile from "../../assets/svg/profile.svg";
import shoppingBag from "../../assets/svg/shopping-bag.svg";

const Header = () => {
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
      <div className="border-b-[1px] border-[#E5E5E5]">
        <GreyStrip />
        <Container>
          {/* Desktop Header  */}
          <div className="xs:hidden sm:hidden md:hidden block  pb-5 pt-7">
            {/* Logo etc  */}
            <div className="mb-10 flex items-center justify-between">
              <Image src={headerleftlogo} alt={""} />
              <Image src={LOGO} alt={""} />
              <div className="flex gap-6 items-center">
                <Image src={searchNormal} alt={""} />
                <Image src={heart} alt={""} />
                <Image src={shoppingBag} alt={""} />
                <Image src={profile} alt={""} />
              </div>
            </div>

            {/* Menu  */}
            <div className="flex items-center justify-center">
              <ul className="flex gap-12 items-center">
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
      <div className="lg:hidden">
        <MobileDrawer MenuItem={MenuItem} />
      </div>
    </div>
  );
};

export default Header;
