import React from "react";
import { Container } from "../container";
import gridCube from "../../assets/svg/grid-cube.svg";
import Image from "next/image";

const GreyStrip = () => {
  return (
    <div className="bg-[#000000]  11w-[1440px]">
      <Container>
        <div className="flex lg:justify-between justify-center items-center h-8 ">
          <h2 className="text-xs font-normal text-[#EB4C6B] leading-4 flex gap-3 items-center">
            <Image src={gridCube} alt={""} /> Lorem ipsum dolor
          </h2>
          <h2 className="text-xs font-normal text-[#EB4C6B] leading-4 lg:flex gap-3 items-center hidden ">
            <Image src={gridCube} alt={""} /> Lorem ipsum dolor
          </h2>
          <h2 className="text-xs font-normal text-[#EB4C6B] leading-4 lg:flex gap-3 items-center hidden">
            <Image src={gridCube} alt={""} /> Lorem ipsum dolor
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default GreyStrip;
