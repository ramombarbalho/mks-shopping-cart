import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h1`
  color: var(--color-white);
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;

  & span {
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      MKS <span>Sistemas</span>
    </StyledLogo>
  );
};

export default Logo;
