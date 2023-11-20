import React from "react";
import styled from "styled-components";

const StyledLogo = styled.span`
  color: white;
`;

const Logo: React.FC = () => {
  return <StyledLogo>MKS Sistemas</StyledLogo>;
};

export default Logo;
