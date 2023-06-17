import { Box, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { TechToolsStyle } from "../styles/TechToolsStyles";
import atom from "../assets/images/atom.png";
import JS from "../assets/images/js.png";
import TS from "../assets/images/typescript.png";
import CSS from "../assets/images/css-3.png";
import HTML from "../assets/images/html-5.png";
import cSharp from "../assets/images/c-sharp.png";
import node from "../assets/images/node-js.png";
import mySql from "../assets/images/mysql2.png";
import heidi from "../assets/images/heidisql.jpg";
import mongo from "../assets/images/mongodb-atlas.webp";
import git from "../assets/images/git.png";
import sourceTree from "../assets/images/sourcetree.png";
import figma from "../assets/images/figma.png";

const TechTools = ({}) => {
  const classes = TechToolsStyle();
  const matches = useMediaQuery(
    (_theme: any) => _theme?.breakpoints?.down("lg") ?? "600"
  );

  const handleMouseEnter = (e: any) => {
    const target = e.target as HTMLImageElement;
    target.style.transform = "translateY(5px)";
  };

  const handleMouseLeave = (e: any) => {
    const target = e.target as HTMLImageElement;
    target.style.transform = "none";
  };

  const ToolImages = [
    { name: "React", imgUrl: atom, score: 80 },
    { name: "Javascript", imgUrl: JS, score: 70 },
    {
      name: "Typescript",
      imgUrl: TS,
      score: 70,
    },
    { name: "CSS", imgUrl: CSS, score: 20 },
    { name: "HTML", imgUrl: HTML, score: 70 },
    { name: "C#", imgUrl: cSharp, score: 70 },
    { name: "Node JS", imgUrl: node, score: 70 },
    { name: "MySQL", imgUrl: mySql, score: 70 },
    { name: "HeidiSQL", imgUrl: heidi, score: 70 },
    {
      name: "MongoDB",
      imgUrl: mongo,
      score: 70,
    },
    { name: "Git", imgUrl: git, score: 70 },
    {
      name: "SourceTree",
      imgUrl: sourceTree,
      score: 70,
    },
    { name: "Figma", imgUrl: figma, score: 70 },
  ];

  return (
    <Box className={classes.root}>
      <Typography className="roboto-bold watermark">Tech Tools</Typography>
      <Box className="box-container">
        <Box display={matches ? "block" : "flex"} ml={matches ? 1 : 5}>
          <Typography className="title-text roboto-bold">Frontend:</Typography>
          {ToolImages.slice(0, 5).map((tool: any, index: number) => (
            <Tooltip
              key={index}
              title={""}
              placement="top"
              classes={{ tooltip: classes.customTooltip }}
            >
              <Box className="tool-box">
                <img
                  src={tool.imgUrl}
                  className="img-style"
                  onMouseEnter={(e) => {
                    handleMouseEnter(e);
                  }}
                  onMouseLeave={(e) => {
                    handleMouseLeave(e);
                  }}
                />
              </Box>
            </Tooltip>
          ))}
        </Box>
        {/* 2 */}
        <Box display={"flex"}>
          {/* BE */}
          <Box display={matches ? "block" : "flex"} ml={matches ? 2 : 5}>
            <Typography className="title-text roboto-bold">Backend:</Typography>
            {ToolImages.slice(5, 7).map((tool: any) => (
              <Box className="tool-box">
                <img
                  src={tool.imgUrl}
                  className="img-style"
                  onMouseEnter={(e) => {
                    handleMouseEnter(e);
                  }}
                  onMouseLeave={(e) => {
                    handleMouseLeave(e);
                  }}
                />
              </Box>
            ))}
          </Box>
          {/* DB */}
          <Box display={matches ? "block" : "flex"} ml={matches ? 2 : 5}>
            <Typography className="title-text roboto-bold">DB:</Typography>
            {ToolImages.slice(7, 10).map((tool: any) => (
              <Box className="tool-box">
                <img
                  src={tool.imgUrl}
                  className="img-style"
                  onMouseEnter={(e) => {
                    handleMouseEnter(e);
                  }}
                  onMouseLeave={(e) => {
                    handleMouseLeave(e);
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
        {/* 3 */}
        <Box display={"flex"}>
          {/* VCS */}
          <Box display={matches ? "block" : "flex"} ml={matches ? 2 : 5}>
            <Typography className="title-text roboto-bold">VCS:</Typography>
            {ToolImages.slice(10, 12).map((tool: any) => (
              <Box className="tool-box">
                <img
                  src={tool.imgUrl}
                  className="img-style"
                  onMouseEnter={(e) => {
                    handleMouseEnter(e);
                  }}
                  onMouseLeave={(e) => {
                    handleMouseLeave(e);
                  }}
                />
              </Box>
            ))}
          </Box>
          {/* Design */}
          <Box display={matches ? "block" : "flex"} ml={matches ? 10 : 5}>
            <Typography className="title-text roboto-bold">Design:</Typography>
            {ToolImages.slice(12, 13).map((tool: any) => (
              <Box className="tool-box">
                <img
                  src={tool.imgUrl}
                  className="img-style"
                  onMouseEnter={(e) => {
                    handleMouseEnter(e);
                  }}
                  onMouseLeave={(e) => {
                    handleMouseLeave(e);
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TechTools;
