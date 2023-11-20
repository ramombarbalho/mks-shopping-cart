import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  padding: 5px;
  background-color: #ddd;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      MKS sistemas &copy; Todos os direitos reservados
    </StyledFooter>
  );
};

export default Footer;
