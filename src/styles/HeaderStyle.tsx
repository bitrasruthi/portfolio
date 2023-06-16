import { makeStyles } from "@mui/styles";
export const HeaderStyle = makeStyles<any>((theme) => ({
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
      fontSize: 13,
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
    },
    "& .page-name": {
      textAlign: "center",
      textTransform: "none",
    },
    "& .menu-item": {
      width: 500,
      background: "#20232f",
      color: "#fff",
    },
    "& .web-box": {
      flexGrow: 1,
      marginLeft: 50,
    },
  },
}));
