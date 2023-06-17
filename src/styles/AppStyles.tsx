import { makeStyles } from "@mui/styles";
export const AppStyles = makeStyles<any>((theme) => ({
  root: {
    "& .container": {
      overflowX: "hidden !important",
    },
    "& .container > div > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
    },
    "& .scroll": {
      position: "absolute",
      top: 0,
      left: 0,
    },
    "& .particles": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: "-1",
      clipPath: "polygon(0% 0, 90% 0, 60% 100%, 0% 100%)",
    },
    "& .my-title": {
      position: "absolute",
      top: "30%",
      color: "white",
      textTransform: "capitalize !important",
      opacity: "70%",
      left: "10%",
    },
    "& .my-subtitle": {
      marginTop: 10,
      marginLeft: 50,
      opacity: "70%",
      fontSize: 22,
      position: "absolute",
      top: "42%",
      left: "25%",
    },
    "& .sub-text": {
      width: 600,
      position: "absolute",
      top: "60%",
      left: "10%",
      textTransform: "none",
    },
    [theme.breakpoints.down("lg")]: {
      "& .my-title": {
        left: "10%",
      },
      "& .particles": {
        clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
      },
      "& .sub-text": {
        width: 300,
      },
      "& .my-subtitle": {
        left: "0%",
      },
    },
  },
}));
