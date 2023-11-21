import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 5px;
  background-color: #eee;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      MKS sistemas &copy; Todos os direitos reservados
    </StyledFooter>
  );
};

export default Footer;
