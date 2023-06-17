import React, { useRef } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  useMediaQuery,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import paperPlane from "../../public/images/paper-plane.png";
import { ContactFormStyle } from "../styles/ContactFormStyles";
import useSnackbarService from "./SnackBar";

export const contactInitialValues = {
  name: "",
  email: "",
  message: "",
};
const contactValidationSchema = yup.object({
  name: yup
    .string()
    .min(5, "Name must be at least 5 characters long")
    .required("Name cannot be empty"),
  email: yup
    .string()
    .email("Email Id must be a valid email")
    .required("Email cannot be empty"),
  message: yup
    .string()
    .min(5, "Message must be at least 5 characters long")
    .required("Message cannot be empty"),
});

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const classes = ContactFormStyle();
  const { catchErrorSnackbar, catchSuccessSnackbar } = useSnackbarService();
  const matches = useMediaQuery(
    (_theme: any) => _theme?.breakpoints?.down("lg") ?? "600"
  );

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    touched,
    values,
    errors,
    resetForm,
  } = useFormik({
    initialValues: contactInitialValues,
    validationSchema: contactValidationSchema,
    onSubmit: (values) => {
      if (values) {
        sendEmail();
      }
    },
  });

  const sendEmail = () => {
    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          form?.current,
          import.meta.env.VITE_APP_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            catchSuccessSnackbar("Thanks for your message!");
            resetForm();
          },
          (error) => {
            catchErrorSnackbar("Something went wrong!");
          }
        );
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        resetForm();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Box
      className={classes.root}
      ref={formRef}
      onClick={(e) => e.stopPropagation()}
      ml={matches ? -10 : 0}
    >
      <Typography className="roboto-bold watermark">Contact</Typography>
      <Box className="box-container">
        <form ref={form} onSubmit={handleSubmit}>
          <Grid container columnSpacing={2}>
            <Grid item xs={12} sm={12} lg={12} pt={10}>
              <Box display={matches ? "block" : "flex"}>
                <Typography className="main-text">
                  Got a Web-Related Question,{" "}
                </Typography>
                <Typography className="main-text" ml={matches ? 0 : 1}>
                  A Brilliant Idea!
                </Typography>
              </Box>
              <Typography className="sub-text2">
                or just want to say{" "}
                <span
                  style={{
                    background: "linear-gradient(to right, #FD4284, #FF9A8C)",

                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Hi !
                </span>
              </Typography>
              <Typography className="main-text">Drop me a line!</Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <Typography className="field-label">Name</Typography>
              <TextField
                size="small"
                onClick={(e) => e.stopPropagation()}
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                className="input-field"
              />
              <br />

              <Typography className="field-label">Email</Typography>
              <TextField
                size="small"
                onClick={(e) => e.stopPropagation()}
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                className="input-field"
              />
              <br />
              <Typography className="field-label">Message</Typography>
              <TextField
                multiline
                minRows={2}
                size="small"
                onClick={(e) => e.stopPropagation()}
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
                className="input-field"
                sx={{ mb: 5 }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <Button
                disableRipple
                type="submit"
                className="send-btn"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <img src={paperPlane} width={40} height={40} />
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
