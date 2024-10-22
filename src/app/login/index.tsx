"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Link from "next/link"; // Updated for Next.js routing
import { theme } from "../../assets/themes/theme"; // Ensure this path is correct
import * as Yup from "yup";
import { useFormik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import logo from "../../assets/images/auth/peerwallet-logo.svg";
import auth from "../../assets/images/auth/auth_image.png"; 
import bgimage from "../../assets/images/auth/login.png" ;
import Image from "next/image";

const LoginPageClient = () => {
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

  const validationSchema = Yup.object().shape({
    emailAddress: Yup.string()
      .email("Enter a valid email address")
      .required("Email address is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
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
        backgroundImage: `url(${bgimage.src})`, // Use public folder image
        backgroundPosition: "center",
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
                  src={auth} // Use image from public folder
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
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            bgcolor={"rgba(245, 245, 245, 0.342)"}
            mt={deviceType === "mobile" ? 7 : 0}
          >
            <Box>
              <Box
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ pt: deviceType === "mobile" ? 0 : 8 }}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"start"}
                  alignItems={"center"}
                  width={"100%"}
                  sx={{ pt: deviceType === "mobile" ? 0 : 10 }}
                >
                  <Image
                    src={logo}// Use image from public folder
                    alt=""
                    width={100}
                    height={20}
                    style={{
                      display: deviceType === "mobile" ? "none" : "flex",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                  <Typography
                    mt={4}
                    variant="h4"
                    fontWeight={700}
                    fontSize={"40px"}
                  >
                    Welcome Back
                  </Typography>
                  <Typography
                    gutterBottom
                    color={"#4F4F4F"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    New to Peerwallet?{" "}
                    <Link
                      href="/reg"
                      passHref
                      style={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      Sign up
                    </Link>
                  </Typography>
                  <br />
                  <Box
                    flexDirection={"column"}
                    width={deviceType === "mobile" ? "100%" : 400}
                  >
                    <Typography gutterBottom fontSize={13}>
                      Email Address
                    </Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size="small"
                      type="email"
                      inputProps={{
                        style: { backgroundColor: "white" },
                      }}
                      placeholder="Enter email address"
                      {...getFieldProps("emailAddress")}
                      error={Boolean(
                        touched.emailAddress && errors.emailAddress
                      )}
                      helperText={errors.emailAddress}
                    />

                    <Typography mt={2} fontSize={13} gutterBottom>
                      Password
                    </Typography>
                    <TextField
                      variant="outlined"
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
                    <Button
                      onClick={() => handleSubmit()}
                      variant="contained"
                      fullWidth
                      sx={{ my: 3, p: 0.5, borderRadius: 2, textTransform:"none"  }}
                    >
                      Log in
                    </Button>
                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Link
                        href="/forgot-password"
                        passHref
                        style={{
                          fontWeight: 400,
                          color: "#4F4F4F",
                          textDecoration: "none",
                        }}
                      >
                        Forgot password?
                      </Link>
                      <Box mx={1} bgcolor={"grey"} width={2} height={20}></Box>

                      <Link
                        href="/reset-2fa"
                        passHref
                        style={{
                          fontWeight: 600,
                          color: "#4F4F4F",
                          textDecoration: "none",
                        }}
                      >
                        Reset 2FA
                      </Link>
                    </Box>
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

export default LoginPageClient;
