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

const twitterLink = "https://mobile.twitter.com/peno2021";
const discordLink = "https://discord.gg/9qfsRs55Z4";
const telegramLink = "https://t.me/jalapeno2021";

const SectOneBg = styled.img`
width: 100vw;
margin-top: -100px;
min-height: 1500px;
@media (max-width: 768px) {
  width: 100%;
}
@media (max-width: 959px) {
    height: 2200px;
    width: 400%;
    background-size: cover;
    margin-top: -50px !important;
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
`

const GradientBorderCard = styled.div`
  border:3px solid #FA6700;
  height: 110px;
  border-radius:15px;
`

const Temperature = styled.div`
// border:3px solid #FA6700;
// border-radius:15px;
// background-image: linear-gradient(to right , rgba(255,255,255,10%) , rgba(255,255,255,10%));
display:flex;
justify-content:center;
align-items:center;
`

const ShowCard = styled.div`
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content:space-between;
  background-image: linear-gradient(to right , rgba(255,255,255,10%) , rgba(255,255,255,10%));
  color:white;
  padding:0% 2%;
  @media (max-width: 740px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10px;
    text-align:center;
  }
`

const LoadingCard = styled.div`
width: 100% !important;
height: 100% !important;
display: flex !important;
align-items: center !important;
justify-content:center;
background-image: linear-gradient(to right , rgba(255,255,255,10%) , rgba(255,255,255,10%));
color:white;
`

const Token = styled.div`
border:3px solid #FA6700;
height: 350px;
border-radius:15px;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column !important;
color:white;
background-image: linear-gradient(to right , rgba(255,255,255,10%) , rgba(255,255,255,10%));
position:relative;
`

const CardNumber = styled.div`
  width:100px;
  height:100px;
  border-radius:50%;
  background-color:white;
  display:flex;
justify-content:center;
align-items:center;
`

const Number = styled.div`
  color:rgb(249,121,2) ;
font-size:34px;
font-weight:bold;
`
const Card02Button = styled.div`
  width:252px;
  height:50px;
  background-image:linear-gradient(to bottom right ,rgb(249,27,27),rgb(249,121,2));
  margin-top:20px;
  border-radius:10px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  cursor:pointer;
  &:hover {
    background-image:linear-gradient(to top left ,rgb(249,27,27),rgb(249,121,2));
  }
  &:active {
    transform: translateY(1px);
  }
`

const Card01Button = styled.div`
  height:50px;
  width:138px;
  background-image:linear-gradient(to bottom right ,rgb(249,27,27),rgb(249,121,2));
  margin-top:20px;
  border-radius:10px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  cursor:pointer;
  &:hover {
    background-image:linear-gradient(to top left ,rgb(249,27,27),rgb(249,121,2));
  }
  &:active {
    transform: translateY(1px);
  }
`
const CardButton = styled.div`
  height:50px;
  width:252px;
  background-image:linear-gradient(to bottom right ,rgb(249,27,27),rgb(249,121,2));
  margin-top:30px;
  border-radius:10px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  cursor:pointer;
  &:hover {
    background-image:linear-gradient(to top left ,rgb(249,27,27),rgb(249,121,2));
  }
  &:active {
    transform: translateY(1px);
  }
`

const CloseBtn = styled.div`
  width:36px;
  height:36px;
  border-radius:5px;
  border:2px solid #F91B1B;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#F91B1B;
  cursor:pointer;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
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

const useStyles = makeStyles((theme) => ({
  sectionOne: {
    alignItems: "center",
    display: "flex",
    overflow: "hidden"
  },
  textWrap: {
    width: "100%",

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
    fontSize: 50,
    zIndex: 999,
    textTransform: 'uppercase',
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
          <span className={classes.whyWheSubText}>
            Stake PEÑO/BNB LP tokens and grow PEÑO
          </span>
        </div>
        <Grid container spacing={2} className={classes.section}>
          <Grid item md={8} xs={12}>
            <Grid container spacing={2} className={classes.mainSection}>
              <Grid item xs={12}>
                <GradientBorderCard>
                  <ShowCard>
                    <span className={classes.whyWheSubText}>
                      LP Rewards are resumed, you can now farm again!
                    </span>
                    <div style={{ display: "flex", gap: "5px" }}>
                      <Card01Button style={{ height: "36px", margin: "0px", borderRadius: "5px" }}>
                        Add Liquidity
                      </Card01Button>
                      <CloseBtn>
                        X
                      </CloseBtn>
                    </div>
                  </ShowCard>
                </GradientBorderCard>
              </Grid>
              <Grid item xs={12}>
                <GradientBorderCard>
                  <LoadingCard>
                    <span className={classes.loading}>
                      Loading....
                    </span>
                  </LoadingCard>
                </GradientBorderCard>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Token>
                  <CardNumber>
                    <Number>#1</Number>
                  </CardNumber>
                  <span style={{ marginTop: "12px" }}>--</span>
                  <span style={{ marginTop: "12px" }}>Staked PEÑO/BNB LP Tokens</span>
                  <img src={FireLeft} alt="" className={classes.fireleft} />
                  <div className={classes.cardBtn01}>
                    <Card01Button>
                      Unstake
                    </Card01Button>
                    <Card01Button>
                      Stake
                    </Card01Button>
                  </div>
                </Token>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Token>
                  <CardNumber>
                    <Number>#2</Number>
                  </CardNumber>
                  <span style={{ marginTop: "12px" }}>--</span>
                  <span style={{ marginTop: "12px" }}>Unharvested PEÑO</span>
                  <img src={FireRight} alt="" className={classes.fireright} />
                  <Card02Button>
                    Harvest
                  </Card02Button>
                </Token>
              </Grid>
              <CardButton>
                Harvest & Unstake PEÑO/BNB
              </CardButton>
            </Grid>
            <hr style={{ marginTop: "6%", opacity: "47%" }} />
            <div className={classes.btns} style={{ marginBottom: "20px" }}>
              <CardButton>
                Address
              </CardButton>
              <CardButton style={{ background: "transparent", border: "2px solid #F91B1B", textAlign: "center" }}>
                Get PEÑO/BNB LP tokens
              </CardButton>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <Temperature>
              <img
                src={TemperatureImg}
                alt="TemperatureImg"
              />
            </Temperature>
          </Grid>
        </Grid>
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
