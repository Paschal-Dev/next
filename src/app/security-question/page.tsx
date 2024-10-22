"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import pwat from "../../assets/images/auth/peerwallet-logo.svg";
import leftbgImage from "../../assets/images/auth/login.png";
import auth from "../../assets/images/auth/auth_image.png";
import { theme } from "../../assets/themes/theme";
import { useEffect, useState } from "react";
import Image from "next/image";

const SecurityQuestions = () => {
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

  const validationSchema = Yup.object().shape({
    answer: Yup.string().required("Answer is required"),
  });

  const formik = useFormik({
    initialValues: {
      answer: "",
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
                  sx={{ pt: deviceType === "mobile" ? 0 : 10 }}
                >
                  <Image
                    src={pwat}
                    alt=""
                    width={100}
                    height={100}
                    style={{
                      display: deviceType === "mobile" ? "none" : "flex",
                      width:"auto",
                      height:"auto"
                    }}
                  />
                  <Typography
                    mt={4}
                    variant="h4"
                    fontWeight={700}
                    fontSize={deviceType === "mobile" ? "25px" : "40px"}
                  >
                    Security Question
                  </Typography>
                  <Typography
                    fontSize={"16px"}
                    color={"#4F4F4F"}
                    gutterBottom
                    textAlign={"center"}
                  >
                    Provide the answer to your previously set security question
                  </Typography>
                  <br />
                  <Box flexDirection={"column"} width={deviceType === "mobile" ? "100%" : 400 }>
                    <Typography gutterBottom fontSize={13}>
                      What's your mother's maiden name?
                    </Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      sx={{ border: "1px solid #B5D2DD", borderRadius: "8px" }}
                      size="small"
                      inputProps={{
                        style: { backgroundColor: "white" },
                      }}
                      placeholder="Enter your answer"
                      {...getFieldProps("answer")}
                      error={Boolean(touched.answer && errors.answer)}
                      helperText={errors.answer}
                    />

                    <Button
                      onClick={() => handleSubmit()}
                      variant="contained"
                      fullWidth
                      sx={{ my: 3, p: 0.5, borderRadius: 2, textTransform:"none"  }}
                    >
                      Answer & Send Reset Token
                    </Button>
                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Link
                        href={"/login"}
                        style={{
                          fontWeight: 600,
                          color: "#4F4F4F",
                          textDecoration: "none",
                        }}
                      >
                        Back to Login
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

export default SecurityQuestions;
