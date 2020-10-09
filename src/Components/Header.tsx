import React from "react";
import styled from "styled-components";

const GreenButton = styled.button`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  background-color: ${(props) => props.theme.green};
  height: 51px;
  width: 183px;
  left: 1461px;
  top: 18px;
  border-radius: 4px;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
  color: ${(props) => props.theme.white};
`;

const LinkButton = styled(GreenButton)`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  color: ${(props) => props.theme.green};
  background-color: ${(props) => props.theme.white};
  border: none;
`;

const MenuButton = styled.button`
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.green};
  }
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  background: none;
  border: none;
  outline: none;
`;

const AlivioSpan = styled.span`
  color: ${(props) => props.theme.green};
  font-size: 23px;
  font-weight: 900;
`;

const Headline = styled.div`
  font-family: Georgia;
  font-size: 65px;
  font-style: normal;
  font-weight: 700;
  line-height: 74px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.green};
`;
const Headline2 = styled.div`
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
  color: #484848;
`;

const HeadlineButton = styled.button`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  height: 65px;
  width: 227px;
  left: 275px;
  top: 580px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 20px 0 20px 0;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    a {
      margin-top: 10px;
    }
  }
`;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Wrapper>
        <div
          style={{
            margin: "auto",
          }}
        >
          <AlivioSpan>Alivio</AlivioSpan>
        </div>
        <MenuWrapper>
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
        </MenuWrapper>
        <div
          style={{
            margin: "auto",
            textAlign: "center",
          }}
        >
          <LinkButton>Sign In</LinkButton>
          <GreenButton>Start Trial</GreenButton>
        </div>
      </Wrapper>
      <div
        className={`bg-auto bg-center`}
        style={{
          backgroundImage: `url("images/BG.png")`,
          padding: "175px 0 336px 14.32%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div style={{ maxHeight: 384, maxWidth: 440 }}>
          <Headline>Be aware, Manage well.</Headline>
          <Headline2
            style={{
              margin: "30px auto",
            }}
          >
            Everyone experiences stress in different ways. Let Alivio guide you,
            in a personalized journal experience, to overcome your stress.
          </Headline2>
          <HeadlineButton>Find Your Way</HeadlineButton>
        </div>
      </div>
    </>
  );
};

export default Header;
