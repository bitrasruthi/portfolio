import { Box, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { TechToolsStyle } from "../styles/TechToolsStyles";

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
    { name: "React", imgUrl: "../public/images/atom.png", score: 80 },
    { name: "Javascript", imgUrl: "../public/images/js.png", score: 70 },
    {
      name: "Typescript",
      imgUrl: "../public/images/typescript.png",
      score: 70,
    },
    { name: "CSS", imgUrl: "../public/images/css-3.png", score: 20 },
    { name: "HTML", imgUrl: "../public/images/html-5.png", score: 70 },
    { name: "C#", imgUrl: "../public/images/c-sharp.png", score: 70 },
    { name: "Node JS", imgUrl: "../public/images/node-js.png", score: 70 },
    { name: "MySQL", imgUrl: "../public/images/mysql2.png", score: 70 },
    { name: "HeidiSQL", imgUrl: "../public/images/heidisql.jpg", score: 70 },
    {
      name: "MongoDB",
      imgUrl: "../public/images/mongodb-atlas.webp",
      score: 70,
    },
    { name: "Git", imgUrl: "../public/images/git.png", score: 70 },
    {
      name: "SourceTree",
      imgUrl: "../public/images/sourcetree.png",
      score: 70,
    },
    { name: "Figma", imgUrl: "../public/images/figma.png", score: 70 },
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
