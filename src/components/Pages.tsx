import { Box, Typography, useMediaQuery } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import { PagesStyle } from "../styles/PageStyles";

interface PageProps {
  offset: number;
  gradient: any;
  label?: any;
}

const Page = ({ offset, gradient, label }: PageProps) => {
  const classes = PagesStyle();
  const matches = useMediaQuery(
    (_theme: any) => _theme?.breakpoints?.down("lg") ?? "600"
  );
  return (
    <Box className={classes.root}>
      <ParallaxLayer offset={offset} speed={0.2}>
        <div className={"slopeBegin"} />
      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={0.45}>
        <div className={!matches ? `slopeEnd ${gradient}` : ""} />
      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={0.3} className="inside-text">
        <Box className="label-container">
          <Typography className="roboto-bold label-text">{label}</Typography>
        </Box>
      </ParallaxLayer>
    </Box>
  );
};

export default Page;
