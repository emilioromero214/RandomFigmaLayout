import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-left: 14.32%;
  padding-right: 12.08%;
  padding-top: 169px;
  padding-bottom: 51px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 40px 327px 1fr;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
  div.text {
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  &.bottom {
    padding: 5%;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
  div.textOne {
    max-width: 584px;
    font-family: Georgia;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 79px;
    letter-spacing: 0em;
    text-align: left;
    color: ${(props) => props.theme.green};
    @media (max-width: 900px) {
      font-size: 25px;
      line-height: 50px;
    }
  }
  div.textTwo {
    margin-left: 2%;
    max-width: 671px;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
  div.text {
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  div.column {
    position: relative;
    margin-right: 2%;
    max-width: 390px;
    &.second {
      margin-top: 200px;
      @media (max-width: 900px) {
        margin-top: 10px;
      }
    }

    div.headline {
      padding-left: 58px;
    }

    &.third {
      margin-top: 100px;
      @media (max-width: 900px) {
        margin-top: 10px;
      }
    }
    div.headline {
      font-family: Georgia;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 45px;
      letter-spacing: 0em;
      text-align: left;
      padding-top: 135px;
      padding-left: 88px;
    }
    div.text {
      font-family: Lato;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      color: #424242;

      @media (max-width: 900px) {
        padding: 20px 10px;
        text-align: center;
      }
    }
  }
  div._01 {
    position: absolute;
    font-family: Georgia;
    font-size: 150px;
    font-style: normal;
    font-weight: 400;
    line-height: 225px;
    letter-spacing: 0em;
    text-align: center;
    color: #01996d;
    opacity: 0.2;
    top: 0;
    left: 0;
  }
  div.img {
    img {
      border-radius: 12px;
      height: 100%;
      width: 350px;
    }
    @media (max-width: 900px) {
      img {
        border-radius: 12px;
        height: 100%;
        width: 100%;
      }
    }
  }
`;

const WrapperVideo = styled.div`
  background: #245852;
  padding: 10%;
  display: grid;
  grid-template-columns: 4fr 1fr;
  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
`;

const Video = styled.video`
  max-width: 640px;
  max-height: 480px;
  @media (max-width: 900px) {
    margin-top: 5%;
    width: 90vw;
  }
`;

const H1 = styled.h1`
  font-family: Georgia;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 79px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  margin: 0;
`;

const H4 = styled.h4`
  font-family: Lato;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  margin: 0;
`;

const LetsButton = styled.button`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  margin-top: 2%;

  height: 65px;
  width: 240px;
  border-radius: 4px;
  color: white;
  border: none;
  outline: none;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
  background: #01996d;
`;

const Card = styled.div`
  text-align: center;
  h3 {
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
  }
  hr {
    width: 50%;
  }
  h4 {
    font-family: Lato;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
  }
  h2 {
    font-family: Georgia;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
  }
  h5 {
    font-family: Lato;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

const FindYourWayButton = styled.button`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  height: 65px;
  width: 227px;
  border-radius: 4px;
  background: rgba(1, 153, 109, 1);
  color: white;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
  @media (max-width: 900px) {
    margin: auto;
  }
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 5%;
  @media (max-width: 900px) {
    margin-top: 10%;
    align-items: center;
    padding: 2%;
  }
`;

interface HeaderProps {}

const Content: React.FC<HeaderProps> = () => {
  return (
    <>
      <Wrapper>
        <div className={`text`}>How it works</div>
        <FirstRow>
          <div className={`textOne`}>
            Understand & Release the stress in 3 steps
          </div>
          <div className={`textTwo`}>
            Alivio offers as many journals it takes, tackling different areas
            such as anxiety, overwhelmedness, sadness, or anger, and a variety
            of personal causes, to help you become aware of your emotions, and
            guide you in how to manage stress.
          </div>
        </FirstRow>
        <SecondRow>
          <div className={"column"}>
            <div className={`_01`}>01</div>
            <div className="headline">Personalize</div>
            <div className="text">
              Answer a quick survey about how you express yourself, what causes
              you stress, and what area would you like to work on. This way, we
              can fully personalize your journal!
            </div>
            <div className={"img"}>
              <img src="images/ef.jpg" alt="effeil tower" />
            </div>
          </div>
          <div className={"column second"}>
            <div className={`_01`}>02</div>
            <div className="headline">Write & Understand</div>
            <div className="text">
              Write, draw, reflect, understand. Alivio will guide you through
              the prompts and will help you manage your stress!
            </div>
            <div className={"img"}>
              <img src="images/be.jpg" alt="beach" />
            </div>
          </div>
          <div className={"column third"}>
            <div className={`_01`}>03</div>
            <div className="headline">Alivio!</div>
            <div className="text">
              Now you are aware, and have a way to manage and overcome your own
              stress. What are you waiting for? Alivio today!
            </div>
            <div className={"img"}>
              <img src="images/to.jpg" alt="tower" />
            </div>
          </div>
        </SecondRow>
      </Wrapper>
      <WrapperVideo>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <H1>Let's hear about Kayla's success story</H1>
          <H4>See how well Alivio works in a real customer’s life. </H4>
          <LetsButton>Let's get started</LetsButton>
        </div>
        <Video poster="images/Video.png" controls></Video>
      </WrapperVideo>
      <FirstRow className={`bottom`}>
        <Card style={{ position: "relative" }}>
          <img
            style={{
              maxHeight: "570px",
              width: "100%",
              maxWidth: "639px",
              borderRadius: "15px",
            }}
            src="images/t1.jpg"
            alt=""
          />
          <div
            style={{
              position: "absolute",
              left: "-5%",
              bottom: "-10%",
              height: "300px",
              width: "300px",
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "5px 3px 18px 0px rgba(165, 165, 165, 0.7)",
              padding: `0 10px`,
            }}
          >
            <h3>Customized For</h3>
            <hr />
            <img
              style={{
                width: "57px",
                height: "57px",
                borderRadius: "50%",
              }}
              src="images/t2.jpg"
              alt=""
            />
            <h4>Mikayla</h4>
            <h2>Your custom contents</h2>
            <h5>• Understand Your Stress</h5>
            <h5>• Anger Management</h5>
          </div>
        </Card>
        <Wrapper2>
          <div className={`text`}>Our product</div>
          <div className={`textOne`}>
            You tell us your stress, We make your diary
          </div>
          <div className={`textTwo`}>
            Everyone experiences it, and in different ways. Let Alivio guide
            you, in a personalized journal experience, to overcome your stress.
          </div>
          <FindYourWayButton>Find Your Way</FindYourWayButton>
        </Wrapper2>
      </FirstRow>
    </>
  );
};

export default Content;
