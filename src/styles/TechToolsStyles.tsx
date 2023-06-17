import { makeStyles } from "@mui/styles";
export const TechToolsStyle = makeStyles<any>((theme) => ({
  root: {
    " & .box-container": {
      overflow: "hidden",
      position: "absolute",
      right: "50%",
      top: "25%",
      padding: 10,
    },
    "& .watermark": {
      color: "white",
      textTransform: "capitalize !important",
      opacity: "1%",
      position: "absolute",
      right: "35%",
      bottom: "5%",
      fontSize: 50,
    },
    "& .billboard-text": {
      animation: " scroll 15s linear infinite",
      fontSize: "12px",
    },
    "& .scrolling-text": {
      display: "inline-block",
      whiteSpace: "nowrap",
      marginLeft: "5px",
      color: "#fff",
    },
    "& .img-style": {
      marginLeft: "20px",
      borderStyle: "solid",
      // background: "-webkit-linear-gradient(left top, crimson 0%, blue 100%)",
      borderRadius: "1000px",
      padding: "5px",
      borderImageSlice: 1,
      borderWidth: 1,
      transition: "transform 0.5s ease-in-out",
      boxShadow: "0px 1px 5px 2px rgba(255, 255, 255, 0.3)",
      width: 40,
      height: 40,
    },
    "& .text-style": {
      position: "absolute",
      boxShadow: "0px 1px 4px rgba(255, 255, 255, 0.3)",
      borderRadius: "1000px",
      width: 50,
      height: 15,
      transition: "transform 0.2s ease-in-out",
      padding: 5,
    },
    "& .tool-box": {
      position: "relative",
      paddinTop: 25,
      paddingBottom: 25,
      display: "inline-block",
      textAlign: "center",
    },
    "& .title-text": {
      marginTop: 15,
    },
    [theme.breakpoints.down("lg")]: {
      " & .box-container": {
        left: 0,
        padding: 0,
        top: "15%",
        width: "100%",
        overFlow: "hidden",
      },
      "& .tool-box": {
        marginTop: 5,
      },
      "& .watermark": {
        right: "5%",
        fontSize: 30,
      },
    },
  },
  customTooltip: {
    // background: "linear-gradient(to right, SlateBlue 50%, #20232f 50%)",
    color: "white",
    background: "transparent",
  },
}));
