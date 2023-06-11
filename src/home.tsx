import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div className="App">
      <Parallax
        pages={2}
        style={{
          top: "0",
          left: "0",
          display: "block",
          position: "relative",
          zIndex: 10,
        }}
      >
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="aniamtion_layer parallax" id="layer1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="aniamtion_layer parallax" id="layer2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="aniamtion_layer parallax" id="layer3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="aniamtion_layer parallax" id="layer4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="aniamtion_layer parallax" id="layer5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="aniamtion_layer parallax" id="layer6"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="aniamtion_layer parallax" id="layer7"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="aniamtion_layer parallax" id="bg"></div>
        </ParallaxLayer>
      </Parallax>
      <Box display={"flex"}>
        <img src="../public/images/atom.png" width={50} height={50} />
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
      </Box>

      <Box display={"flex"} mt={2} mb={2}>
        <img src="../public/images/css-3.png" width={50} height={50} />
        <img
          src="../public/images/html-5.png"
          width={50}
          height={50}
          style={{ marginLeft: "20px" }}
        />
      </Box>
      <Box display={"flex"} mb={2}>
        <img src="../public/images/c-sharp.png" width={50} height={50} />
        <img
          src="../public/images/node-js.png"
          width={50}
          height={50}
          style={{ marginLeft: "20px" }}
        />
        <br />
      </Box>

      <Box display={"flex"} mb={2}>
        <br />
        <img src="../public/images/mysql.png" width={50} height={50} />
        <img
          src="../public/images/mongo.png"
          width={100}
          height={30}
          style={{ marginTop: "10px", marginLeft: "20px" }}
        />
      </Box>
      <Box display={"flex"} mb={2}>
        <br />
        <img src="../public/images/ko-logo.png" width={100} height={40} />
      </Box>
      <Box display={"flex"}>
        <br />
        <img src="../public/images/git.png" width={60} height={55} />

        <img
          src="../public/images/sourcetree.png"
          width={30}
          height={30}
          style={{ marginTop: "10px", marginLeft: "20px" }}
        />
      </Box>
      <Box display={"flex"}>
        <img src="../public/images/figma.png" width={45} height={50} />
      </Box>
      <div className="billboard-container">
        <div className="billboard-text">
          <span className="scrolling-text">
            <img src="../public/images/text.png" height={20} />
            <img src="../public/images/text.png" height={20} />
          </span>
        </div>
      </div>
    </div>
  );
}
