import { makeStyles } from "@mui/styles";
export const ContactFormStyle = makeStyles<any>((theme) => ({
  root: {
    " & .box-container": {
      overflow: "hidden",
      marginTop: 50,
      width: "80%",
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
    "& .field-label": {
      fontSize: 12,
      fontFamily: "roboto-regular !important",
      marginTop: 20,
      marginBottom: 10,
    },
    "& .main-text": {
      fontSize: 25,
      fontFamily: "roboto-bold",
      textTransform: "none",
    },
    "& .sub-text": {
      fontSize: 18,
      fontFamily: "roboto-bold",
      textTransform: "none",
    },
    "& .mini-text": {
      marginTop: 15,
      textTransform: "none",
      fontSize: 12,
      fontFamily: "roboto-regular",
    },

    "& .input-field": {
      width: 305,
      "& .MuiFormHelperText-root.Mui-error": {
        fontSize: 10,
        textTransform: "none",
        position: "absolute",
        bottom: -20,
        right: 0,
      },

      "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "& .MuiOutlinedInput-root": {
        fontFamily: "roboto-regular",
        color: "#fff",
        border: "1px solid #fff",
        "& fieldset": {
          borderColor: "#fff",
        },
        "&:hover fieldset": {
          borderColor: "#fff",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#fff",
        },
      },
    },

    "& .send-btn": {
      cursor: "pointer",
      marginTop: 110,
      color: "white",
      width: 100,
      height: 100,
      "&:hover": {
        background: "transparent !important",
      },
    },
  },
}));
