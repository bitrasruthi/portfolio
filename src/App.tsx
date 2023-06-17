import React, { useRef, CSSProperties } from "react";
import { Parallax, IParallax } from "@react-spring/parallax";
import { Box, useMediaQuery } from "@mui/material";
import RingLoader from "react-spinners/RingLoader";
import ContactForm from "./components/ContactForm";
import Page from "./components/Pages";
import TechTools from "./components/TechTools";
import Intro from "./components/Intro";
import MyWork from "./components/MyWork";
import Stars from "./components/Stars";
import Header from "./components/Header";
import { AppStyles } from "./styles/AppStyles";
import { useCommonStates } from "./helpers/StateStore";

const override: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
};

function App() {
  const parallax = useRef<IParallax>(null);
  const classes = AppStyles();
  const matches = useMediaQuery(
    (_theme: any) => _theme?.breakpoints?.down("lg") ?? "600"
  );

  // ****************/
  React.useEffect(() => {
    if (!matches) {
      const container = document.querySelector(".container");
      let scrollLine: any = document.querySelector(".scroll");

      container?.addEventListener("wheel", (e: any) => {
        e.preventDefault();
        const scrollAmount = e.deltaY * 0.5;
        container.scrollLeft += scrollAmount;
        scrollLine.style.width = container.scrollLeft + "px";
      });
    }
  }, [matches]);
  //***************/

  return (
    <Box className={classes.root}>
      <div style={{ background: "#dfdfdf" }}>
        <Parallax
          className="container"
          ref={parallax}
          pages={4}
          horizontal={matches ? false : true}
        >
          <Page
            offset={0}
            gradient={"pink"}
            label={
              <>
                <Stars id="ts1" />
                <Header parallaxRef={parallax} page={1} />
                <Intro />
              </>
            }
          />
          <Page
            offset={1}
            gradient="teal"
            label={
              <>
                <Header parallaxRef={parallax} page={2} />
                <TechTools />
              </>
            }
          />
          <Page
            offset={2}
            gradient="tomato"
            label={
              <>
                <Header parallaxRef={parallax} page={3} />
                <MyWork />
              </>
            }
          />
          <Page
            offset={3}
            gradient="purple"
            label={
              <>
                <Header parallaxRef={parallax} page={4} />
                <ContactForm />
              </>
            }
          />
        </Parallax>
      </div>
    </Box>
  );
}

export default App;
