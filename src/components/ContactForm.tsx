import React, { useRef } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Typography, TextField, Button, Box } from "@mui/material";
import emailjs from "@emailjs/browser";
import drop from "../../public/images/paper-plane.png";
import { ContactFormStyle } from "../styles/ContactFormStyles";
import useSnackbarService from "./snackBar";

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

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    touched,
    values,
    errors,
    resetForm,
  } = useFormik({
    initialValues: contactInitialValues,
    validationSchema: contactValidationSchema,
    onSubmit: (values, resetForm) => {
      sendEmail();
    },
  });

  const sendEmail = () => {
    if (form.current) {
      emailjs
        .sendForm(
          "service_k408ils",
          "template_7ejv90h",
          form?.current,
          "KnF1r6gPkXHuwM0Y_"
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

  React.useEffect(() => {});

  return (
    <Box
      className={classes.root}
      ref={formRef}
      onClick={(e) => e.stopPropagation()}
    >
      <form ref={form} onSubmit={handleSubmit}>
        <Box display={"block"} justifyContent={"space-between"}>
          <Box mb={3}>
            <Typography className="main-text">
              Got a Web-Related question, a Brilliant Idea!
            </Typography>
            <Typography className="sub-text">
              or just want to say{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #C72A60, #9136A2)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hi !
              </span>
            </Typography>
            <Typography className="mini-text">
              With a sprinkle of HTML - A dash of CSS - And a pinch of
              JavaScript - Let's build something web-tastic!
              <br />{" "}
              <span style={{ fontFamily: "roboto-bold" }}>Drop me a line!</span>
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Box display={"block"}>
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
              />
            </Box>
            <br />
            <Button
              disableRipple
              type="submit"
              className="send-btn"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <img src={drop} width={50} height={50} />
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
