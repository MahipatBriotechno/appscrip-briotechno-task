import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom"; // For creating a modal in Next.js
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import LOGO from "../../assets/svg/LOGO.svg";
import Image from "next/image";
import { Container } from "../container";
import headerleftlogo from "../../assets/svg/header-left-logo.svg";
import searchNormal from "../../assets/svg/search-normal.svg";
import heart from "../../assets/svg/heart.svg";
import profile from "../../assets/svg/profile.svg";
import shoppingBag from "../../assets/svg/shopping-bag.svg";

interface DrawerProps {
  MenuItem: any;
}

const Drawer: React.FC<DrawerProps> = ({ MenuItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="py-3 headerBorder">
      <Container>
        <div className=" flexJbAc">
          <div className="flexIc gap-3">
            <FiMenu onClick={() => setIsOpen(!isOpen)} />
            <Image src={headerleftlogo} alt={""} className="w-5 h-5" />
          </div>
          <Image src={LOGO} alt={""} className="w-61 h-6" />
          <div className="flexIc gap-4 ">
            <Image src={searchNormal} alt={""} className="w-5 h-5" />
            <Image src={heart} alt={""} className="w-5 h-5" />
            <Image src={shoppingBag} alt={""} className="w-5 h-5" />
          </div>
        </div>

        {isOpen &&
          createPortal(
            <div className="fixed inset-0 flex z-50">
              <div
                ref={drawerRef}
                className="bg-white w-64 p-4 shadow-lg transition-transform transform"
              >
                <div className="flex justify-between items-center mb-7">
                  <Image src={LOGO} alt={""} />
                  <IoClose onClick={() => setIsOpen(false)} />
                </div>
                <div>
                  <ul className="flex flex-col gap-3">
                    {MenuItem.map((db: any, index: any) => (
                      <li key={index}>
                        <Link href={`${db.link}`}>{db.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex-1 bg-gray-800 opacity-50" />
            </div>,
            document.body
          )}
      </Container>
    </div>
  );
};

export default Drawer;
