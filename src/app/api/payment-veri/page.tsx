'use client';
import {
  Box,
  Container,
  Grid,
  Link,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../../../assets/themes/theme";
import PaymentVerificationSidebar from "./paymentverificatinsidebar";
import MainSideBar from "../component/mainsidebar";

export default function PaymentVerification(): React.JSX.Element {

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

  return (
    <Box>
      {/* <Box
        p={2}
        bgcolor={"#009FDD"}
        position={"fixed"}
        width={"100%"}
        zIndex={1}
      ></Box> */}
      <Box bgcolor={"whitesmoke"}>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <MainSideBar />
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              overflowY: "scroll", // Ensures scrollbar is always visible
              height: "100vh",
              "&::-webkit-scrollbar": {
                width: "9px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#009FDD",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#b7e2f3ec",
              },
              "&::-webkit-scrollbar-button": {
                display: "none",
              },
              scrollbarWidth: "auto", // Ensures scrollbar is visible by default
              scrollbarColor: "#009FDD #b7e2f3ec",
            }}
          >
            <Container >
              <Box
                mt={deviceType === "mobile" ? 5 : 4}
                mb={deviceType === "mobile" ? 6 : ""}
              >
                <Typography variant="h2" fontSize={20} fontWeight={900} id="Payment-Verification">
                  Payment Verification
                </Typography>
                <Typography variant="body2" fontSize={"16px"} mt={1}  id="End-Point">
                  Payment verification is an extra verification pattern to check
                  the status of a transaction. The major value required for this
                  check is the secret code sent when creating the payment link.
                </Typography>
              </Box>
              <hr
                style={{
                  border: "1px solid #6b707f",
                  width: "100%",
                  marginTop: 30,
                  marginBottom: 30,
                }}
              />

              <Typography
                variant="h2"
                fontWeight={700}
                fontSize={"28px"}
                
              >
                End Point
              </Typography>
              <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3} id="Explanation-Table">
                <Typography
                  variant="body2"
                  fontWeight={500}
                  fontSize={"16px"}
                  color={"#17FF93"}
                >
                  "https://peerwallet.com/pay/calls/verify-payment"
                </Typography>
              </Box>
              <hr
                style={{
                  border: "1px solid #6b707f",
                  width: "100%",
                  marginTop: 30,
                  marginBottom: 30,
                }}
              />
              <Typography
                variant="body2"
                fontSize={"20px"}
                fontWeight={800}
                
              >
                Send your keys via headers
              </Typography>
              <Grid
                container
                border={"1px solid #D9D9D9"}
                borderRadius={5}
                bgcolor={"#009edd3b"}
                mt={2}
              >
                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  borderRight={"2px solid #D9D9D9"}
                  sx={{ pb: 6 }}
                >
                  <Typography
                    variant="h2"
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      borderTopLeftRadius: 20,
                      fontSize: deviceType === "mobile" ? "12px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                  >
                    VALUE
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    api-private-key
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "12px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                  >
                    REQUIRED
                  </Typography>
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 4,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={5} sm={5} xs={5}>
                  <Typography
                    variant="h2"
                    sx={{
                      borderTopRightRadius: 20,
                      fontSize: deviceType === "mobile" ? "12px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                  >
                    DESCRIPTION
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    This is your Public API Keys which can be found here.
                    <ThemeProvider theme={theme}>
                      <Link
                        href="#"
                        target="_blank"
                        sx={{
                          color: "primary.main",
                          "&:hover": { color: "primary.dark" },
                          pl: 1,
                        }}
                      >
                        https://peerwallet.
                        <br
                          style={{
                            display: deviceType === "mobile" ? "flex" : "none",
                          }}
                        />
                        com/map/api-keys
                      </Link>
                    </ThemeProvider>
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                variant="body2"
                fontSize={"20px"}
                fontWeight={800}
                id="Explanation-Table"
                mt={3}
              >
                Below are the POST values to send and their explanations on each
                field.
              </Typography>
              <Grid
                container
                border={"1px solid #D9D9D9"}
                borderRadius={5}
                bgcolor={"#009edd3b"}
                mt={1}
              >
                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  borderRight={"2px solid #D9D9D9"}
                  sx={{ pb: 6 }}
                >
                  <Typography
                    variant="h2"
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      borderTopLeftRadius: 20,
                      fontSize: deviceType === "mobile" ? "12px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                  >
                    VALUE
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                    id="Post-Fields"
                  >
                    secret
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "12px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                  >
                    REQUIRED
                  </Typography>
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 4,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={5} sm={5} xs={5}>
                  <Typography
                    variant="h2"
                    sx={{
                      borderTopRightRadius: 20,
                      fontSize: deviceType === "mobile" ? "12px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                  >
                    DESCRIPTION
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    This is the secret sent when creating the payment link.
                  </Typography>
                </Grid>
              </Grid>

              <Typography variant="h2" fontWeight={700} fontSize={"28px"} mt={2}>
          Post Fields
        </Typography>
        <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3}>
          <Typography
            variant="body2"
            fontWeight={500}
            fontSize={"16px"}
            color={"#17FF93"}
            id="Return-Values-Success-Sample"
          >
            <span style={{ color: "#fff" }}>[</span>
            <br /><br />
            "api-private-key"<span style={{ color: "#fff" }}>,</span> <br />{" "}
            "secret" <br /><br />
            <span style={{ color: "#fff" }}>]</span>
          </Typography>
        </Box>
        <Typography variant="h2" fontWeight={700} fontSize={"28px"} pt={3} id="Return-Values-Error-Sample">
          Return Values Success Sample
        </Typography>
        <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3}>
          <Typography
            variant="body2"
            fontWeight={500}
            fontSize={"16px"}
            color={"#FB8888"}
          >
            <span style={{ color: "#fff" }}>{"{"}</span>
            <br />
            "status": <span style={{ color: "#FCC82B" }}>200</span>
            <span style={{ color: "#fff" }}>,</span> <br />
            "payment_status":
            <span style={{ color: "#17FF93" }}>
            "Paid",
            </span>{" "}
            <br />
            "escrow_status": <span style={{ color: "#FCC82B" }}> "completed",</span>
            <br />
            "last_date":  <span style={{ color: "#17FF93" }}>"25th of December, 2022",</span>{" "}
            <span style={{ color: "#fff" }}>,</span> <br />
            "note":{" "}
            <span style={{ color: "#17FF93" }}> "Payment verification has been processed"</span>
            <br />
            <span style={{ color: "#fff" }}>{"}"}</span>
          </Typography>
        </Box>
        <Typography variant="h2" fontWeight={700} fontSize={"28px"} pt={3} id="error">
          Return Values Error Sample
        </Typography>
        <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3} mb={6}>
          <Typography
            variant="body2"
            fontWeight={500}
            fontSize={"16px"}
            color={"#FB8888"}
          >
            <span style={{ color: "#fff" }}>{"{"}</span>
            <br />
            "status": <span style={{ color: "#FCC82B" }}>111</span>
            <span style={{ color: "#fff" }}>,</span> <br />
            "note":
            <span style={{ color: "#17FF93" }}>
              "API key is either not correct or its in-active"
            </span>
            <br />
            <span style={{ color: "#fff" }}>{"}"}</span>
          </Typography>
          </Box>
            </Container>
          </Grid>
          <Grid item md={3}>
            <PaymentVerificationSidebar anchor={"right"} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
