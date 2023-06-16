import { Box, Typography } from "@mui/material";
import React from "react";
import TextTransition, { presets } from "react-text-transition";
import { AppStyles } from "../styles/AppStyles";

interface Props {}

const TEXTS = [
  "Developer",
  "Freelancer",
  "Problem Solver",
  "Continuous Learner",
  "Coffeeholic",
];

const Intro = ({}: Props) => {
  const [index, setIndex] = React.useState(0);
  const classes = AppStyles();

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Box className={classes.root}>
      <Typography fontSize={50} className="roboto-bold my-title">
        <span style={{ fontSize: 25 }}>Hi,</span>
        <br />
        I'm Sruthi -
      </Typography>
      <Box className="my-subtitle">
        <TextTransition
          springConfig={presets.molasses}
          inline={true}
          delay={1000}
        >
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </Box>
    </Box>
  );
};

export default Intro;
