import { makeStyles } from "@mui/styles";
export const ContactFormStyle = makeStyles<any>((theme) => ({
  root: {
    "& .field-label": {
      fontSize: 12,
      fontFamily: "roboto-regular !important",
      marginTop: 10,
      marginBottom: 5,
    },
    "& .main-text": {
      fontSize: 25,
      fontFamily: "roboto-bold",
      textTransform: "none",
    },
    "& .sub-text": {
      fontSize: 20,
      fontFamily: "roboto-regular",
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
      marginLeft: 50,
      marginTop: 80,
      color: "white",
      width: 100,
      height: 100,
      "&:hover": {
        background: "transparent",
      },
    },
  },
}));
