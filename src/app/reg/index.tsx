"use client";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import pwat from "../../assets/images/auth/peerwallet-logo.svg";
import leftbgImage from "../../assets/images/auth/login.png";
import auth from "../../assets/images/auth/auth_image.png";
import { theme } from "../../assets/themes/theme";
import Image from "next/image";

const SignUpPageClient = () => {
  const [deviceType, setDeviceType] = useState("mobile");
  const mobile = useMediaQuery(theme.breakpoints.only("xs"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (mobile) {
      setDeviceType("mobile");
    } else if (tablet) {
      setDeviceType("tablet");
    } else {
      setDeviceType("pc");
    }
  }, [mobile, tablet]);

  const [show, setShow] = React.useState<boolean>(false);
  const [showConfirm, setShowConfirm] = React.useState<boolean>(false);
  const [accepted, setAccepted] = React.useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    emailAddress: Yup.string()
      .email("Enter a valid email address")
      .required("Email address is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Password confirm is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
  });

  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("FORM VALUES ::: ", values);
    },
  });

  const { getFieldProps, touched, errors, handleSubmit } = formik;

  return (
    <Box
      sx={{
        backgroundImage: `url(${leftbgImage.src})`,
        backgroundPosition: "center",
        // backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            display={
              deviceType === "mobile"
                ? "none"
                : deviceType === "tablet"
                ? "none"
                : "flex"
            }
          >
            <Box
              py={5}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"start"}
              alignItems={"center"}
              width={"100%"}
              // bgcolor={"#009FDD33"}
              ml={-5}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography
                  color={theme.palette.primary.main}
                  variant="h2"
                  fontWeight={900}
                  fontSize={"80px"}
                >
                  Welcome
                </Typography>
                <Typography color={"black"} variant="h4" fontWeight={900}>
                  to PeerWallet
                </Typography>
                <Toolbar />
              </Box>
              <Box
                flex={1}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                ml={-10}
              >
                <Image
                  src={auth}
                  alt=""
                  width={200}
                  height={200}
                  style={{ width: "60%", height: "auto" }}
                />
              </Box>
              <Toolbar />
              <Box width={"65%"} ml={-5}>
                <Box
                  width={"65%"}
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-evenly"}
                  alignItems={"center"}
                >
                  <Typography
                    flex={1}
                    width={"100%"}
                    variant="h4"
                    textAlign={"justify"}
                    fontWeight={900}
                    fontSize={"30px"}
                    color={theme.palette.primary.main}
                  >
                    Safe.
                  </Typography>
                  <Typography
                    flex={2}
                    width={"100%"}
                    variant="h4"
                    textAlign={"justify"}
                    fontWeight={900}
                    fontSize={"30px"}
                    color={theme.palette.primary.main}
                  >
                    Secured.
                  </Typography>
                  <Typography
                    flex={3}
                    width={"100%"}
                    variant="h4"
                    textAlign={"justify"}
                    fontWeight={900}
                    fontSize={"30px"}
                    color={theme.palette.primary.main}
                  >
                    Transparent
                  </Typography>
                </Box>

                <Box
                  height={8}
                  width={"100%"}
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box
                    height={"100%"}
                    width={"60%"}
                    bgcolor={theme.palette.primary.main}
                  />
                  <Box
                    height={"100%"}
                    width={"40%"}
                    bgcolor={theme.palette.secondary.main}
                  />
                </Box>
              </Box>
              <Toolbar />
              <Toolbar />
            </Box>
            {/* <Box>
            <img src={welcome} alt="" width={"100%"} />
          </Box> */}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            bgcolor={"rgba(245, 245, 245, 0.342)"}
            mt={deviceType === "mobile" ? 7 : 0}
          >
            <Box
            // sx={{
            //     backgroundImage: `url(${bgimage})`,
            //      backgroundPosition: "center",
            //      backgroundSize: "cover",
            //      backgroundRepeat: "no-repeat",

            //    }}
            >
              <Box
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ pt: deviceType === "mobile" ? 0 : 8 }}
              >
                {/* {!deviceType === "mobile" && <img src={pwat} />} */}

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"start"}
                  alignItems={"center"}
                  width={"100%"}
                >
                  <Image
                    src={pwat}
                    alt=""
                    width={199}
                    height={233}
                    style={{
                      display: deviceType === "mobile" ? "none" : "flex",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                  <Typography
                    mt={3}
                    variant="h2"
                    fontWeight={700}
                    fontSize={deviceType === "mobile" ? "25px" : "40px"}
                  >
                    Create an account
                  </Typography>
                  <Typography
                    gutterBottom
                    fontSize={"16px"}
                    fontWeight={500}
                    color={"#4F4F4F"}
                  >
                    Already have an account?{" "}
                    <Link
                      href={"/login"}
                      style={{
                        textDecoration: "none",
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                      }}
                    >
                      Sign in
                    </Link>
                  </Typography>
                  <br />
                  <Box
                    flexDirection={"column"}
                    width={deviceType === "mobile" ? "100%" : 400}
                  >
                    <Grid my={2} container spacing={2}>
                      <Grid item xs={12} sm={12} md={6}>
                        <Typography gutterBottom fontSize={13}>
                          First Name
                        </Typography>
                        <TextField
                          variant="outlined"
                          fullWidth
                          sx={{
                            border: "1px solid #B5D2DD",
                            borderRadius: "8px",
                          }}
                          size="small"
                          inputProps={{
                            style: { backgroundColor: "white" },
                          }}
                          placeholder="Enter first name"
                          {...getFieldProps("firstName")}
                          error={Boolean(touched.firstName && errors.firstName)}
                          helperText={errors.firstName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Typography gutterBottom fontSize={13}>
                          Last Name
                        </Typography>
                        <TextField
                          variant="outlined"
                          fullWidth
                          size="small"
                          sx={{
                            border: "1px solid #B5D2DD",
                            borderRadius: "8px",
                          }}
                          inputProps={{
                            style: { backgroundColor: "white" },
                          }}
                          placeholder="Enter last name"
                          {...getFieldProps("lastName")}
                          error={Boolean(touched.lastName && errors.lastName)}
                          helperText={errors.lastName}
                        />
                      </Grid>
                    </Grid>
                    <Typography gutterBottom fontSize={13}>
                      Email Address
                    </Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size="small"
                      sx={{ border: "1px solid #B5D2DD", borderRadius: "8px" }}
                      inputProps={{
                        style: { backgroundColor: "white" },
                      }}
                      placeholder="Enter email address"
                      {...getFieldProps("lastName")}
                      error={Boolean(touched.lastName && errors.lastName)}
                      helperText={errors.lastName}
                    />

                    <Typography my={2} fontSize={13} gutterBottom>
                      Password
                    </Typography>
                    <TextField
                      variant="outlined"
                      sx={{ border: "1px solid #B5D2DD", borderRadius: "8px" }}
                      fullWidth
                      size="small"
                      type={show ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <IconButton onClick={() => setShow(!show)}>
                            {show ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        ),
                        style: { backgroundColor: "white" },
                      }}
                      placeholder="Enter password "
                      {...getFieldProps("password")}
                      error={Boolean(touched.password && errors.password)}
                      helperText={errors.password}
                    />

                    <Typography mt={2} fontSize={13} gutterBottom>
                      Confirm Password
                    </Typography>
                    <TextField
                      variant="outlined"
                      sx={{ border: "1px solid #B5D2DD", borderRadius: "8px" }}
                      fullWidth
                      size="small"
                      type={showConfirm ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            onClick={() => setShowConfirm(!showConfirm)}
                          >
                            {showConfirm ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        ),
                        style: { backgroundColor: "white" },
                      }}
                      placeholder="Confirm password"
                      {...getFieldProps("confirmPassword")}
                      error={Boolean(
                        touched.confirmPassword && errors.confirmPassword
                      )}
                      helperText={errors.confirmPassword}
                    />

                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      justifyContent={"start"}
                      alignItems={"center"}
                      mt={1}
                    >
                      <Checkbox
                        value={accepted}
                        onChange={() => setAccepted(!accepted)}
                      />
                      <Typography fontSize={14} color={"#4F4F4F"}>
                        Agree to the{" "}
                        <Link
                          href={"/terms"}
                          style={{
                            color: theme.palette.primary.main,
                            textDecoration: "none",
                            fontWeight: 600,
                            fontSize: 14,
                          }}
                        >
                          Terms and Conditions
                        </Link>{" "}
                      </Typography>
                    </Box>

                    <Button
                      onClick={() => handleSubmit()}
                      variant="contained"
                      fullWidth
                      disabled={!accepted}
                      sx={{ my: 2, p: 0.5, borderRadius: 2, textTransform:"none"  }}
                    >
                      Register
                    </Button>
                  </Box>
                </Box>
                <Toolbar />
                <Toolbar />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignUpPageClient;
