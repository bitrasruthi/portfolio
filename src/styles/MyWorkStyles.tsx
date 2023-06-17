import { makeStyles } from "@mui/styles";
export const MyWorkStyle = makeStyles<any>((theme) => ({
  root: {
    "& .box-container": {
      overflow: "hidden",
      position: "absolute",
      top: "5%",
      marginTop: 60,
      width: "50%",
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
    "& .swiper": {
      paddingTop: "50px",
      paddingBottom: "50px",
    },
    "& .swiper-slide": {
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "350px",
      height: "350px",
    },
    "& .swiper-slide img": {
      display: "block",
      // width: "100%",
      height: "80%",
    },
    [theme.breakpoints.down("lg")]: {
      "& .box-container": {
        left: "10%",
        width: "80%",
      },
      "& .watermark": {
        right: "5%",
        fontSize: 30,
        bottom: "0%",
      },
    },
  },
  dialog: {
    background: "transparent !important",
    "& .dialog-content": {
      padding: 0,
      width: 900,
      maxHeight: 750,
      textAlign: "center",
      overflow: "hidden",
    },
  },
}));
