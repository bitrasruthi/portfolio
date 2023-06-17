import { makeStyles } from "@mui/styles";
export const HeaderStyle = makeStyles<any>(() => ({
  root: {
    "& .saucer-img": {
      width: 50,
      height: 25,
      position: "absolute",
      right: "15%",
      top: "5%",
      color: "#fff",
      cursor: "pointer",
      textShadow: "2px 2px 4px rgba(255, 255, 255, 0.4)",
      transform: "translate(-50%, -50%)",
      animation: "scroll 25s linear infinite",
      zIndex: 1111,
    },
    "& .title-name": {
      fontSize: 15,
      color: "#fff",
      cursor: "pointer",
      textShadow: "2px 2px 4px rgba(255, 255, 255, 0.4)",
      textTransform: "none",
      marginRight: 30,
    },
    "& .saucer-mobile-menu": {
      width: 80,
      height: 50,
      cursor: "pointer",
    },

    "& .app-bar": {
      background: "transparent",
      position: "absolute",
      top: 0,
    },
    "& .tool-bar": {
      flexGrow: 1,
      justifyContent: "center",
      marginTop: 20,
    },
    "& .page-name": {
      textAlign: "center",
      textTransform: "none",
    },
    "& .menu-item": {
      width: 500,
      background: "#20232f !important",
      color: "#fff",
    },
    "& .web-box": {
      flexGrow: 1,
      marginLeft: 50,
    },
  },
}));
