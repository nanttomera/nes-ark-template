import React from "react";
import styled from "styled-components";
import MoreInfo from "./HeroItems/MoreInfo";

const BgDiv = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://res.cloudinary.com/ddq7mrhkh/image/upload/f_auto,fl_fast_scale,q_60/v1614604036/nes-ark-template/bgimage_u1wfgp.webp");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const StyledHero = styled.section`
  display: flex;
  min-height: 65vh;
`;

const Hero = () => {
  return (
    <BgDiv>
      <div className="container">
        <StyledHero id="home" name="home">
          <MoreInfo />
        </StyledHero>
      </div>
    </BgDiv>
  );
};

export default Hero;
