import "./App.css";
import React, { useRef, CSSProperties } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Box, Button, TextField, Typography } from "@mui/material";
import TextTransition, { presets } from "react-text-transition";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import RingLoader from "react-spinners/RingLoader";
import ContactForm from "./components/ContactForm";

interface PageProps {
  offset: number;
  gradient: string;
  onClick: () => void;
  label?: any;
  sublabel?: any;
  arrow?: boolean;
}

const override: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
};

const Page = ({
  offset,
  gradient,
  onClick,
  label,
  sublabel,
  arrow,
}: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={"slopeBegin"} />
    </ParallaxLayer>
    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>
    <ParallaxLayer offset={offset} speed={0.8} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>
    <ParallaxLayer
      offset={offset}
      speed={0.3}
      onClick={onClick}
      className={`text`}
    >
      <Box width={"60vw"} sx={{ cursor: "pointer !important" }}>
        {arrow && (
          <Box
            textAlign={"right"}
            sx={{
              animation: "moveRight 2s infinite",
              cursor: "pointer !important",
              maxWidth: 100,
              position: "absolute",
              right: "45%",
              top: "45%",
            }}
          >
            <DoubleArrowIcon sx={{ color: "#fff", width: 50, height: 50 }} />
          </Box>
        )}
        <Box textAlign={"left"} ml={10} mt={-10}>
          <Typography
            fontSize={30}
            className="roboto-bold"
            sx={{
              color: "#fff",
              textTransform: "capitalize !important",
            }}
          >
            {label}
          </Typography>
          <Typography
            fontSize={20}
            className="roboto-bold"
            sx={{
              color: "#fff",
              textTransform: "capitalize !important",
              // opacity: "10%",
            }}
          >
            {sublabel}
          </Typography>
        </Box>
      </Box>
    </ParallaxLayer>
  </>
);

function App() {
  const [index, setIndex] = React.useState(0);
  const parallax = useRef<IParallax>(null);
  const TEXTS = [
    "Developer",
    "Freelancer",
    "Problem Solver",
    "Continuous Learner",
    "Coffeeholic",
  ];

  let [loading, setLoading] = React.useState(true);
  let [color, setColor] = React.useState("#ffffff");
  const [isHovered, setIsHovered] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  React.useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  window.addEventListener("load", () => {
    setLoading(false);
  });

  // ****************/
  React.useEffect(() => {
    const container = document.querySelector(".container");
    let scrollLine: any = document.querySelector(".scroll");

    container?.addEventListener("wheel", (e: any) => {
      e.preventDefault();
      const scrollAmount = e.deltaY * 0.2;
      container.scrollLeft += scrollAmount;
      scrollLine.style.width = container.scrollLeft + "px";
    });
  }, [loading]);
  //************** */

  return (
    <div>
      {loading ? (
        <RingLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div style={{ background: "#dfdfdf" }}>
          <Parallax className="container " ref={parallax} pages={4} horizontal>
            <Page
              offset={0}
              gradient="pink"
              onClick={() => scroll(1)}
              label={
                <Typography
                  fontSize={50}
                  className="roboto-bold"
                  sx={{
                    color: "white",
                    textTransform: "capitalize !important",
                    opacity: "70%",
                  }}
                >
                  <span style={{ fontSize: 25 }}>Hi,</span>
                  <br />
                  I'm Sruthi -
                </Typography>
              }
              sublabel={
                <Box mt={2} ml={30} sx={{ opacity: "70%" }}>
                  <TextTransition
                    springConfig={presets.gentle}
                    inline={true}
                    delay={1000}
                  >
                    {TEXTS[index % TEXTS.length]}
                  </TextTransition>
                </Box>
              }
              arrow={true}
            />
            <Page
              offset={1}
              gradient="teal"
              onClick={() => scroll(2)}
              label={
                <Typography
                  fontSize={100}
                  className="roboto-bold"
                  sx={{
                    color: "white",
                    textTransform: "capitalize !important",
                    opacity: "20%",
                  }}
                >
                  Tech Tools
                </Typography>
              }
              sublabel={
                <Box display={"block"} justifyContent={"space-between"} ml={5}>
                  <div
                    className="billboard-container"
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className={"billboard-text"}>
                      <span className="scrolling-text">
                        <img
                          src="../public/images/atom.png"
                          width={50}
                          height={50}
                        />
                        <img
                          src="../public/images/js.png"
                          width={45}
                          height={47}
                          style={{ borderRadius: "5px", marginLeft: "20px" }}
                        />
                        <img
                          src="../public/images/typescript.png"
                          width={52}
                          height={50}
                          style={{ marginLeft: "20px" }}
                        />
                        <img
                          src="../public/images/css-3.png"
                          width={50}
                          height={50}
                        />
                        <img
                          src="../public/images/html-5.png"
                          width={50}
                          height={50}
                          style={{ marginLeft: "20px" }}
                        />
                        <img
                          src="../public/images/c-sharp.png"
                          width={50}
                          height={50}
                        />
                        <img
                          src="../public/images/node-js.png"
                          width={50}
                          height={50}
                          style={{ marginLeft: "20px" }}
                        />
                        <img
                          src="../public/images/mysql.png"
                          width={50}
                          height={50}
                        />
                        <img
                          src="../public/images/mongo.png"
                          width={100}
                          height={30}
                          style={{ marginTop: "10px", marginLeft: "20px" }}
                        />
                        <img
                          src="../public/images/git.png"
                          width={60}
                          height={55}
                        />
                        <img
                          src="../public/images/sourcetree.png"
                          width={30}
                          height={30}
                          style={{ marginTop: "10px", marginLeft: "20px" }}
                        />
                        <img
                          src="../public/images/ko-logo.png"
                          width={100}
                          height={40}
                        />
                        <img
                          src="../public/images/figma.png"
                          width={45}
                          height={50}
                        />
                      </span>
                    </div>
                  </div>
                </Box>
              }
            />
            <Page
              offset={2}
              gradient="tomato"
              onClick={() => scroll(3)}
              label={
                <Typography
                  fontSize={130}
                  className="roboto-bold"
                  sx={{
                    color: "white",
                    textTransform: "capitalize !important",
                    opacity: "20%",
                  }}
                >
                  work
                </Typography>
              }
            />
            <Page
              offset={3}
              gradient="purple"
              onClick={() => {
                // setIsScrolled(true);
                scroll(0);
              }}
              label={
                <Box>
                  <Typography
                    fontSize={30}
                    className="roboto-bold"
                    sx={{
                      color: "white",
                      textTransform: "capitalize !important",
                      opacity: "20%",
                    }}
                  >
                    Contact
                  </Typography>
                </Box>
              }
              sublabel={
                // <Box display={"block"} sx={{ zIndex: 1001 }}>
                <ContactForm />
                // </Box>
              }
            />
          </Parallax>
        </div>
      )}
    </div>
  );
}

export default App;
