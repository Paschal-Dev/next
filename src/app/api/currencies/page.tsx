"use client";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainSideBar from "../component/mainsidebar";
import CurrenciesSidebar from "./currenciessidebar";
import { theme } from "@/assets/themes/theme";

export default function Currencies(): React.JSX.Element {

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
            <Container>
              <Box
                mt={deviceType === "mobile" ? 5 : 4}
                mb={deviceType === "mobile" ? 6 : ""}
                id="payment"
              >
                <Typography variant="h2" fontSize={20} fontWeight={900}>
                  Currencies
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  mt={1}
                  id="End-Point"
                >
                  Easily fetch all allowed currencies used on Peerwallet
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

              <Typography variant="h2" fontWeight={700} fontSize={"28px"}>
                End Point
              </Typography>
              <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3}>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  fontSize={"16px"}
                  color={"#17FF93"}
                  id="Post-Fields"
                >
                  "https://peerwallet.com/pay/calls
                  <br
                    style={{
                      display: deviceType === "mobile" ? "flex" : "none",
                    }}
                  />
                  /currencies"
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
                id="Return-Values-Success-Sample"
                mt={2}
              >
                Post Fields
              </Typography>
              <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3}>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  fontSize={"16px"}
                  color={"#17FF93"}
                >
                  "api-public-key"
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
                pt={3}
              >
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
                  "data": <span style={{ color: "#fff" }}>{"{"}</span>
                  <br />
                  "sign":
                  <span style={{ color: "#17FF93" }}> "$" </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "code":
                  <span style={{ color: "#17FF93" }}>"USD"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "name":{" "}
                  <span
                    id="Return-Values-Error-Sample"
                    style={{ color: "#17FF93" }}
                  >
                    "United States dollars"
                  </span>{" "}
                  <br />
                  <span style={{ color: "#fff" }}>{"},"}</span>
                  <br />
                  "note":
                  <span style={{ color: "#17FF93" }}>
                    "Available currencies has been fetched"
                  </span>{" "}
                  <br />
                  <span style={{ color: "#fff" }}>{"}"}</span>
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
                pt={3}
              >
                Return Values Error Sample
              </Typography>
              <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3} mb={10}>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  fontSize={"16px"}
                  color={"#FB8888"}
                >
                  <span style={{ color: "#fff" }}>{"{"}</span>
                  <br />
                  "status": <span style={{ color: "#FCC82B" }}>500</span>
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "note":
                  <span style={{ color: "#17FF93" }}>
                    "Available currencies could not be fetched"
                  </span>
                  <br />
                  <span style={{ color: "#fff" }}>{"}"}</span>
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid item md={3}>
            <CurrenciesSidebar anchor={"right"} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
