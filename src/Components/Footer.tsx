import React from "react";
import styled from "styled-components";
const MenuButton = styled.button`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: white;
  text-align: left;
  background: none;
  border: none;
  outline: none;
  margin-top: 30px;
`;

const AlivioSpan = styled.span`
  color: ${(props) => props.theme.white};
  font-size: 23px;
  font-weight: 900;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 50px 5%;
  margin-top: 150px;
  background-color: rgba(36, 88, 82, 1);
  color: white;
  @media (max-width: 900px) {
    align-items: center;
    padding: 2%;
  }
`;

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Wrapper>
      <AlivioSpan>Alivio</AlivioSpan>
      <a href={`#Why alivio`}>
        <MenuButton>Why alivio</MenuButton>
      </a>
      <a href={`#Solutions`}>
        <MenuButton>Solutions</MenuButton>
      </a>
      <a href={`#Community`}>
        <MenuButton>Community</MenuButton>
      </a>
      <a href={`#Pricing`}>
        <MenuButton>Pricing</MenuButton>
      </a>
    </Wrapper>
  );
};

export default Footer;
