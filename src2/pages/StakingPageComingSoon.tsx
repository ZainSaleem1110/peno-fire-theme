import React from "react";
import sectionOneImg from "../assets/pepper/hotCold.gif";
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";
import Grid from "@material-ui/core/Grid";
import { colors } from "../styles";
import BuccaneerHeader from "../components/Home/BuccaneerHeader";
import TemperatureImg from '../assets/pepper/temperature.svg'
import FireLeft from '../assets/pepper/fireleft.svg'
import FireRight from '../assets/pepper/fireright.svg'
import twitter from "../assets/images/twitter.png";
import discord from "../assets/images/discord.png";
import telegram from "../assets/images/telegram.png";
import headerImg from "../assets/pepper/comingsoon.png";

const twitterLink = "https://mobile.twitter.com/peno2021";
const discordLink = "https://discord.gg/9qfsRs55Z4";
const telegramLink = "https://t.me/jalapeno2021";

const SectOneBg = styled.img`
width: 100vw;
margin-top: -100px;
height: 1500px;
@media (max-width: 768px) {
  width: 100%;
}
@media (max-width: 959px) {
    height: 1000px;
    width: 400%;
    background-size: cover;
    margin-top: -50px !important;
  }
  @media (max-width: 550px) {
    height: 800px;
  }
  @media (max-width: 550px) {
    height: 500px;
  }
`
const GifContainer = styled.div`
  position: relative;
`

const MainContainer = styled.div`
  width:100%;
  overflow-x:hidden;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const Slogan = styled.p`
  background: -webkit-linear-gradient(${colors.secondary}, ${colors.greenGrad});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size:50px;
  @media (max-width: 940px) {
    font-size:40px;
  }
  @media (max-width: 750px) {
    font-size:32px;
  }
  @media (max-width: 600px) {
    font-size:24px;
  }
  @media (max-width: 450px) {
    font-size:20px;
  }
  @media (max-width: 380px) {
    font-size:16px;
  }

`

const PepperTitle = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  span { color: white; }
  padding:4% 0%;
  border-bottom:2px solid rgba(255,255,255,45%);
`

const LogoText = styled.p`
  background: -webkit-linear-gradient(${colors.secondary}, ${colors.greenGrad});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
`

const SocialIcon = styled.img`
  margin: 0.5em;
  cursor: pointer;
`;

const FlameShadow = styled.div`
  background: linear-gradient(#0000, #000);;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
`
const flyingAnim = () => keyframes`
  from {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  to {
    transform: rotate(-5deg);
  }  
`
const StyledHeaderImage = styled.img`
  // animation: ${flyingAnim} 3.5s ease-in-out infinite;
  margin-top: 3em;
  width:100%;
`

const useStyles = makeStyles((theme) => ({
  sectionOne: {
    alignItems: "center",
    display: "flex",
    overflow: "hidden"
  },
  textWrap: {
    width: "100%",
    display: "flex",

  },
  main: {
    width: "100%",
    position: "absolute",
    top: 100,
    padding: "0% 3%",
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textItem1: {
    zIndex: 999,
    textTransform: 'uppercase',
    marginLeft: '3em'
  },
  whyWheSubText: {
    color: "white",
    fontSize: 18,
  },
  section: {
    marginTop: "4%",
    width: "100%",
    justifyContent: "space-between"
  },
  loading: {
    fontSize: "45px",
  },
  fireleft: {
    position: "absolute",
    left: -14,
    bottom: -5,
  },
  fireright: {
    position: "absolute",
    right: -14,
    bottom: -5,
  },
  cardBtn01: {
    display: "flex",
    gap: "10px",
  },
  mainSection: {
    display: "flex",
    justifyContent: "center",
  },
  btns: {
    justifyContent: "center",
    display: "flex",
    gap: "20px",
    marginTop: "5%",
  }
}))

interface Props {
  connect: () => void,
  setIsHide: (e: any) => void,
  isHide: boolean,
  connected: boolean,
  address: string,
  chainId: number,
  killSession: () => void
}

const StakingPage: React.FC<Props> = ({
  connect,
  killSession,
  setIsHide,
  isHide,
  connected,
  address,
  chainId,
}) => {
  const classes = useStyles();
  return (
    <MainContainer>
      <BuccaneerHeader
        connect={connect}
        isHide={isHide}
        setIsHide={(e: any) => setIsHide(e)}
        connected={connected}
        address={address}
        chainId={chainId}
        killSession={killSession}
      />
      <Grid container>
        <Grid item md={12} className={classes.sectionOne}>
          <GifContainer>
            <SectOneBg src={sectionOneImg} alt="sectionOneImg" />
            <FlameShadow>.</FlameShadow>
          </GifContainer>
        </Grid>
      </Grid>
      <div className={classes.main}>
        <div className={classes.textWrap}>
          <Slogan className={classes.textItem1}>
            STAKING
          </Slogan>
          <Slogan className={classes.textItem1}>
            COMING SOON
          </Slogan>
        </div> 
        <StyledHeaderImage src={headerImg} alt="headerImg" style={{width:"90%"}} />
      </div>
      <PepperTitle>
        <LogoText>PEPPERS</LogoText>
        <span style={{ fontSize: "14px", }}>Join us</span>
        <div style={{ marginTop: "20px" }}>
          <SocialIcon src={twitter} onClick={() => window.open(twitterLink, "_blank")} />
          <SocialIcon src={discord} onClick={() => window.open(discordLink, "_blank")} />
          <SocialIcon src={telegram} onClick={() => window.open(telegramLink, "_blank")} />
        </div>
      </PepperTitle>
      <PepperTitle style={{ border: "none", padding: "0%", }}>
        <span style={{ margin: '1em' }}>Copyright ©  2022 . All rights reserved.</span>
      </PepperTitle>
    </MainContainer>
  );
};

export default StakingPage;
