import React from "react";
import { Container } from "../container";
import gridCube from "../../assets/svg/grid-cube.svg";
import Image from "next/image";

const GreyStrip = () => {
  return (
    <div className="bgBlack flexContainer" style={{height:30}}>
    <Container>
      <div className="flexContainer">
        <h2 className="textStyle">
          <Image src={gridCube} alt="" /> Lorem ipsum dolor
        </h2>
        <h2 className="textStyle hidden">
          <Image src={gridCube} alt="" /> Lorem ipsum dolor
        </h2>
        <h2 className="textStyle hidden">
          <Image src={gridCube} alt="" /> Lorem ipsum dolor
        </h2>
      </div>
    </Container>
  </div>
  );
};

export default GreyStrip;
