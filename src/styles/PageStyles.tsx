import { makeStyles } from "@mui/styles";
export const PagesStyle = makeStyles<any>((theme) => ({
  root: {
    "& .inside-text": {
      justifyContent: "start !important",
      lineHeight: "0px",
      textTransform: "capitalize !important",
      position: "absolute",
    },
    "& .label-container": {
      textAlign: "left",
      marginLeft: 100,
      marginTop: -20,
      width: "60vw",
    },
    "& .label-text": {
      color: "#fff",
      textTransform: "capitalize !important",
      fontSize: 30,
    },

    "& .slopeBegin": {
      backgroundColor: "#20232f",
      clipPath: "polygon(20% 0, 80% 0, 60% 100%, 0% 100%)",
      opacity: 1,
      width: "170% !important",
      height: "100%",
      position: "absolute",
      right: "-35% !important",
    },

    "& .slopeEnd": {
      clipPath: "polygon(63% 0, 99% 0, 35% 100%, 0% 100%)",
      position: "absolute",
      width: "53%",
      height: "100%",
      right: "-20%",
    },
    "& .pink": {
      background: "linear-gradient(to right, deeppink 0%, coral 100%)",
    },
    "& .teal": {
      background: "linear-gradient(to right, SlateBlue 50%, DeepSkyBlue 100%)",
    },
    "& .tomato": {
      background: "linear-gradient(to right, tomato 50%, gold 100%)",
    },
    "& .purple": {
      background:
        "linear-gradient(to right,rgba(131,58,180,1) 50%, rgba(253,29,29,1) 100%)",
      opacity: 0,
    },
  },
}));
