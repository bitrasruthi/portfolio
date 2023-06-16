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

    "& .my-title": {
      position: "absolute",
      top: "30%",
      color: "white",
      textTransform: "capitalize !important",
      opacity: "70%",
    },
    "& .my-subtitle": {
      marginTop: 20,
      marginLeft: 50,
      opacity: "70%",
      fontSize: 22,
      position: "absolute",
      top: "55%",
      left: "30%",
    },
  },
}));
