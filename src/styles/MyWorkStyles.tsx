import { makeStyles } from "@mui/styles";
export const MyWorkStyle = makeStyles<any>((theme) => ({
  root: {
    "& .box-container": {
      overflow: "hidden",
      position: "absolute",
      top: "5%",
      right: "10%",
      marginTop: 60,
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
      width: "40%",
      paddingTop: "50px",
      paddingBottom: "50px",
    },
    "& .swiper-slide": {
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "300px",
      height: "300px",
    },
    "& .swiper-slide img": {
      display: "block",
      width: "100%",
      height: "80%",
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
