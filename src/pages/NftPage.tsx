import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";
import Grid from "@material-ui/core/Grid";
import { colors } from "../styles";

import BuccaneerHeader from "../components/Home/BuccaneerHeader";
import sectionOneImg from "../assets/pepper/sect-2-back.png";
import smallPepper from "../assets/pepper/smallPepper.png";
import airdropImg from "../assets/pepper/airdrop.png";
import FireGif from "../assets/pepper/fireBar2.gif";

import first from "../assets/nft/1.png";
import second from "../assets/nft/2.png";
import third from "../assets/nft/3.png";
import fourth from "../assets/nft/4.png";
import main from "../assets/nft/main.png";
import eye1 from "../assets/nft/eye1.png";
import eye2 from "../assets/nft/eye2.png";
import eye3 from "../assets/nft/eye3.png";
import fire from "../assets/nft/fire.png";
import glass from "../assets/nft/glass.png";
import glass2 from "../assets/nft/glass2.png";
import grass from "../assets/nft/grass.png";
import grass2 from "../assets/nft/grass2.png";
import mouth from "../assets/nft/mouth.png";
import hair from "../assets/nft/hair.png";
import hand1 from "../assets/nft/hand1.png";
import hat1 from "../assets/nft/hat1.png";
import hat2 from "../assets/nft/hat2.png";
import ribbon from "../assets/nft/ribbon.png";
import teeth from "../assets/nft/teeth.png";
import tie from "../assets/nft/tie.png";

const useStyles = makeStyles((theme) => ({
  textArea: {
    padding: "0 4em !important",
    display: "flex",
    margin: "3em",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1em !important",
    },
  },
  particlesContainer: {
    width: "100%",
    height: "90vh",
    position: "absolute",
    left: 0,
    top: 0,
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
  },
  sectionBottom: {
    marginBottom: "5em"
  },
  motherWrap: {
    position: "relative",
    width: "100%",
    left: 0,
    right: 0,
    backgroundSize: "cover",
    padding: 0,
    backgroundColor: "black",
    overflow: 'hidden'
  },
  sectionOne: {
    // width: "100%",
    // backgroundImage: `url(${sectionOneImg})`,
    // backgroundSize: "cover",
    alignItems: "center",
    // height: '100vh',
    display: "flex",
  },
  textWrap: {
    width: "100%",
    position: "absolute",
    top: 150,
    padding: "0 5%",
    textAlign: "center",
  },
  textItem1: {
    fontSize: 50,
    zIndex: 999,
    textTransform: 'uppercase',
  },
  textItem2: {
    fontSize: "44px",
    fontWeight: 700,
  },
  sectionTwo: {
    width: "100%",
    minHeight: "80vh",
    alignItems: "center",
    display: "flex",
  },
  subWrapText: {
    padding: "2% !important",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      backdropFilter: 'blur(12px)',
      background: '#fff2',
    },
  },
  subWrapImg: {
    margin: "auto",
    padding: "2% !important",
    textAlign: "center",
  },
  imgs: {
    width: "100%",
  },
  whyWheText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 60,
    marginBottom: 20,
  },
  whyWheSubText: {
    color: "white",
    textAlign: "center"
  },
  whyWheQueText: {
    color: "#D81DFA",
    fontSize: "24px",
    fontWeight: 700,
  },
  sectionThree: {
    width: "100%",
    minHeight: "60vh",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    padding: "5% 0",
  },
  title3Wrap: {
    width: "100%",
    padding: "0 5% 0 5% !important",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    marginTop: "2em",
  },
  sliderWrap: {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "0 auto",
    },
  },
  gangWrap: {
    width: "100%",
    alignItems: "center",
    justifyContent: 'center',
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "0 auto",
    },
  },
  roadmapWrap: {
    width: "100%",
    paddingLeft: 0,
    alignItems: "center",
    textAlign: "center",
    color: "white",
    marginTop: "2em",
  },
  textTokenomics: {
    fontSize: "46px",
  },
  subWrapImgPie: {
    margin: "auto",
    padding: "2% !important",
    textAlign: "center",
  },
  sectionFive: {
    width: "100%",
    background: "#1D133C",
    minHeight: "60vh",
    alignItems: "center",
    display: "flex",
    padding: "0 5em",
  },
  rewardBox: {
    width: "100%",
  },
  rewardSubWrap: {
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "#d065d6",
    borderRadius: "10px",
    borderWidth: "2.5px",
    backgroundColor: "#f0f8ff1a",
    padding: "4%",
    minHeight: "370px",
  },
  rewardSubTitle: {
    color: "white",
    fontSize: "22px",
    fontWeight: 700,
  },
  rewardSubUnderline: {
    width: "50%",
    height: "3px",
    backgroundColor: "#23ffff",
    marginLeft: "25%",
  },
  rewardContents: {
    width: "100%",
    textAlign: "left",
    marginTop: "2em",
  },
  rewardContentItem: {
    display: "flex",
    marginTop: "10px",
  },
  rewardText: {
    marginLeft: "5px",
    marginTop: "-3px",
    color: "white",
  },
  pointerImg: {
    maxHeight: "18px",
  },
  stepContents: {
    textAlign: "center",
    color: "white",
    lineHeight: "1.25em",
  },
  stepWrap: {
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "#d065d6",
    borderRadius: "10px",
    borderWidth: "2.5px",
    backgroundColor: "#f0f8ff1a",
    padding: "6% 2%",
    minHeight: "190px",
    width: "100%",
  },
  stepLinked: {
    color: "#d81dfa",
    textDecoration: "underline",
  },
  addressText: {
    color: "white",
    fontSize: "24px",
  },
  tokenText: {
    color: "white",
    fontSize: "18px",
    marginRight: "0.5em",
  },
  tokenWrap: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
  },
  copyImg: {
    maxHeight: "25px",
    maxWidth: "25px",
    marginTop: "auto",
    marginBottom: "auto",
    cursor: "pointer",
    "&:active": {
      opacity: 0.7,
    },
  },
  buyButton: {
    backgroundColor: "#d81dfa",
    color: "white",
    padding: "20px 30px",
    borderRadius: "10px",
    fontSize: "18px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  buttonWrap: {
    textAlign: "center",
    width: "100%",
  },
  contact: {
    marginTop: "10px",
    color: "white",
    fontSize: "16px",
  },
  footerWrap: {
    width: " 100%",
    textAlign: "center",
    color: "white",
    borderStyle: "solid",
    borderWidth: "0",
    borderTopWidth: "1px",
    borderColor: "#bc4bff",
    padding: "1.5em 0",
  },
  [theme.breakpoints.down("xs")]: {},
  [theme.breakpoints.down("sm")]: {
    textItem1: {
      fontSize: "26px",
    },
    textItem2: {
      fontSize: "28px",
      fontWeight: 700,
    },
    subWrapText: {
      padding: "10% !important",
    },
    subWrapImgPie: {
      marginTop: "-2em",
    },
    tokenText: {
      fontSize: "10px",
    },
    textTokenomics: {
      fontSize: "40px",
    },
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

const SectOneBg = styled.img`
  width: 100%;
  position: absolute;
  background-size: cover;
  z-index: 1;
  bottom: 0;
  @media (max-width: 768px) {
    min-height: 80vh;
    margin-top: 0;
    width: 100%;
  }
  @media (max-width: 600px) {
    min-height: 100vh;
    width: 100%;
  }
`
const HeadTitle = styled.p`
  background: -webkit-linear-gradient(${colors.main}, ${colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-top: 2em;
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
const rotateAnim = () => keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }  
`
const SmallPepper = styled.img`
  margin-right: 1em;
`
const TokenomicsText = styled.span`
  font-size: 22px;
  font-family: "Poppins-SemiBold", sans-serif;
  color: white;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`
const ShowCard = styled.div`
  width: 280px !important;
  height: 280px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: #0E0E11;
  img {
    width: 210px !important;
    margin: auto;
  }
`
const AirdropLeftImg = styled.img`
  width: 100%;
  max-width: 800px;
`
const rand1 = Math.floor(Math.random() * 10) + 20
const rand2 = Math.floor(Math.random() * 10) + 10
const rand3 = Math.floor(Math.random() * 10) + 25
const rand4 = Math.floor(Math.random() * 10) + 50
const FixedImage = styled.img`
  margin: 0.5em;
  position: relative;
  animation: ${rotateAnim} ${rand1}s ease infinite;
  @media (max-width: 768px) {
    margin: 0;
  }
`
const NFTContainer = styled.div`
  position: relative;
  img:nth-child(5) {
    margin: 0 0 1em 7em;
    animation: ${rotateAnim} ${rand1}s linear infinite;
  }
  img:nth-child(7) {
    margin: 0 15em 5em 5em;
    animation: ${rotateAnim} ${rand2}s linear infinite;
  }
  img:nth-child(10) {
    position: absolute;
    animation: ${rotateAnim} ${rand3}s linear infinite;
  }
  img:nth-child(11) {
    margin-left: 6em;
    animation: ${flyingAnim} 3.5s ease-in-out infinite;
  }
  img:nth-child(12) {
    animation: ${flyingAnim} 3.5s ease-in-out infinite;
  }
  img:nth-child(13) {
    animation: ${flyingAnim} 3.5s ease-in-out infinite;
  }
  img:nth-child(15) {
    position: absolute;
    left: 0;
    margin-top: -2em;
    animation: ${rotateAnim} ${rand4}s linear infinite;
  }
  img:nth-child(16) {
    margin-left: 5em;
    animation: ${rotateAnim} ${rand1}s linear infinite;
  }
  img:nth-child(17) {
    margin-left: 15em;
    animation: ${rotateAnim} ${rand2}s linear infinite;
  }
  img:nth-child(20) {
    position: absolute;
    left: 0;
    bottom: 3em;
    animation: ${rotateAnim} ${rand3}s linear infinite;
  }
  img:nth-child(21) {
    position: absolute;
    animation: ${rotateAnim} ${rand4}s linear infinite;
  }
  img:nth-child(22) {
    position: absolute;
    margin-left: 4em;
    margin-top: 4em;
    animation: ${rotateAnim} ${rand3}s linear infinite;
  }
  img:nth-child(23) {
    margin-left: 12em;
    animation: ${flyingAnim} 3.5s linear infinite;
  }
  img:nth-child(24) {
    top: -4em;
    animation: ${rotateAnim} ${rand1}s linear infinite;
  }
`
const StyledHeaderImage = styled.img`
  animation: ${flyingAnim} 3.5s linear infinite;
`
const InfoCard = styled.div`
  width: 100%;
  min-height: 254px;
  border-radius: 10px;
  background-color: #FFFFFF4f;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 2em;
`
const InfoText = styled.p`
  color: white;
  font-size: 14px;
  font-family: "Poppins-SemiBold", sans-serif;
  text-align: center;
`
const WhiteCircle = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 31px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`
const NumberTitle = styled.p`
  background: -webkit-linear-gradient(${colors.main}, ${colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 24px;
`
const GifContainer = styled.div`
  position: relative;
`

interface Props {
  connect: () => void;
  setIsHide: (e: any) => void;
  killSession: () => void;
  isHide: boolean;
  connected: boolean;
  address: string;
  chainId: number;
}


const NftPage = (props: Props) => {
  const classes = useStyles();

  return (
    <Container className={classes.motherWrap} maxWidth="xl">
      <BuccaneerHeader
        connect={props.connect}
        isHide={props.isHide}
        setIsHide={(e: any) => props.setIsHide(e)}
        connected={props.connected}
        address={props.address}
        chainId={props.chainId}
        killSession={props.killSession}
      />
      <Grid container>
        <Grid id="whypeno" item md={12} className={classes.sectionTwo}>
          <SectOneBg src={sectionOneImg} alt="sectionOneImg" />
          <Container maxWidth="xl" style={{ zIndex: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <HeadTitle className={classes.whyWheText}>Jalapeño NFT</HeadTitle>
              </Grid>
              <Grid item xs={12} md={8} className={classes.subWrapImg}>
                <NFTContainer>
                  <FixedImage src={eye2} alt="eye2" />
                  <FixedImage src={hat1} alt="hat1" />
                  <FixedImage src={hair} alt="hair" />
                  <FixedImage src={hand1} alt="hand1" />
                  <FixedImage src={eye3} alt="eye3" /><br />
                  <FixedImage src={hat2} alt="hat2" />
                  <FixedImage src={fire} alt="fire" /><br />
                  <FixedImage src={glass} alt="glass" />
                  <FixedImage src={second} alt="second" />
                  <FixedImage src={first} alt="first" />
                  <FixedImage src={third} alt="third" /><br />
                  <FixedImage src={glass2} alt="glass2" />
                  <FixedImage src={teeth} alt="teeth" />
                  <FixedImage src={ribbon} alt="ribbon" />
                  <FixedImage src={grass} alt="grass" /><br />
                  <FixedImage src={mouth} alt="mouth" />
                  <FixedImage src={grass2} alt="grass2" />
                  <FixedImage src={tie} alt="tie" />
                  <FixedImage src={fourth} alt="fourth" />
                  <FixedImage src={eye1} alt="eye1" />
                </NFTContainer>
              </Grid>
              <Grid item xs={12} md={4} className={classes.subWrapText}>
                <img src={main} alt="main" />
              </Grid>


              <Container maxWidth="lg" className={classes.sectionBottom}>
                <Grid item xs={12} className={classes.textArea}>
                  <span className={classes.whyWheSubText}>If you want to cash in on the NFT frenzy, Jalapeño Token NFT is your opportunity to partake in a new revolutionizing way of minting and design. Our users will possess tools to create their Peño avatar through our web application. The goal of this concept is to have fun, and incentivize investors for participating.</span>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <InfoCard>
                      <WhiteCircle>
                        <NumberTitle>#1</NumberTitle>
                      </WhiteCircle>
                      <InfoText>A collection of Peño body parts will be available to choose from on our website as assets. for example, nose, glasses, eyes, ears, hats, body, pose, etc. (rarity will be determined by parts used to assemble your Peño)</InfoText>
                    </InfoCard>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <InfoCard>
                      <WhiteCircle>
                        <NumberTitle>#2</NumberTitle>
                      </WhiteCircle>
                      <InfoText>After choosing your parts, users can then assemble their desired Peño image by dragging, dropping, moving, and scaling those pieces. Once the image is completed, users can mint the created graphic.</InfoText>
                    </InfoCard>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <InfoCard>
                      <WhiteCircle>
                        <NumberTitle>#3</NumberTitle>
                      </WhiteCircle>
                      <InfoText>To mint users must connect Metamask wallet to our website and pay the designated amount along with Gas fees for the design to be uploaded to IPFS, and listed on Opensea.</InfoText>
                    </InfoCard>
                  </Grid>
                </Grid>
              </Container>

            </Grid>
          </Container>
        </Grid >
      </Grid >
      <GifContainer>
        <SectOneBg src={FireGif} alt="FireGif" />
        <p>.</p>
      </GifContainer>
    </Container >
  );
};

export default NftPage;
