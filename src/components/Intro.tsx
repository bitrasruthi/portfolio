import { Box, Typography } from "@mui/material";
import React from "react";
import TextTransition, { presets } from "react-text-transition";
import { AppStyles } from "../styles/AppStyles";

const TEXTS = [
  "Developer",
  "Freelancer",
  "Problem Solver",
  "Continuous Learner",
  "Coffeeholic",
];

const Intro = ({}) => {
  const [index, setIndex] = React.useState(0);
  const classes = AppStyles();

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Box className={classes.root}>
      <Box display={"flex"}>
        <Typography fontSize={50} className="roboto-bold my-title">
          I'm Sruthi <span style={{ fontSize: 20 }}>,</span>
        </Typography>
        <Box className="my-subtitle">
          <TextTransition
            springConfig={presets.slow}
            inline={true}
            delay={1000}
          >
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </Box>
      </Box>
      <Typography fontSize={12} className="sub-text">
        I'm a versatile full stack developer specializing in both front-end and
        back-end web development. With a passion for creating exceptional user
        experiences and a strong command of various programming languages and
        frameworks, I bring a holistic approach to building robust and scalable
        web applications.
      </Typography>
    </Box>
  );
};

export default Intro;
