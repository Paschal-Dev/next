"use client";
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
import MainSideBar from "../component/mainsidebar";
import AllOffersSidebar from "./allofferssidebar";

export default function AllOffers(): React.JSX.Element {

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
            <Container id="Transaction-Receipt">
              <Box
                mt={deviceType === "mobile" ? 5 : 4}
                mb={deviceType === "mobile" ? 6 : ""}
                id="payment"
              >
                <Typography variant="h2" fontSize={20} fontWeight={900}>
                  Offers
                </Typography>
                <Typography variant="body2" fontSize={"16px"} mt={1} id="End-Point">
                  This would show all active offers on Peerwallet, you can
                  search using your preferred offer by adding other values to
                  the call.
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
                id="Explanation-Table"
              >
                End Point
              </Typography>
              <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3}>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  fontSize={"16px"}
                  color={"#17FF93"}
                >
                  "https://peerwallet.com/pay/calls
                  <br
                    style={{
                      display: deviceType === "mobile" ? "flex" : "none",
                    }}
                  />
                  /offers"
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
                    api-public-key
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
                sx={{ borderTopRightRadius: 19, borderTopLeftRadius: 19 }}
                bgcolor={"#009edd3b"}
                mt={4}
                mb={4}
               
              >
                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  borderRight={"2px solid #D9D9D9"}
                  pb={4}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      borderTopLeftRadius: 20,
                      fontSize: deviceType === "mobile" ? "12px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                    bgcolor={"#009FDD"}
                    color={"#fff"}
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
                    currency
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
                    bgcolor={"#FFD5D5"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 3,
                      width: deviceType === "mobile" ? "20%" : "10%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB0505"}
                    >
                      NO
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
                    You can limit your search by adding a currency, example; USD
                  </Typography>
                </Grid>

                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    payment_method
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FFD5D5"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
                      width: deviceType === "mobile" ? "20%" : "10%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB0505"}
                    >
                      NO
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    You can limit your search by adding a preferred payment
                    method, example; PayPal
                  </Typography>
                </Grid>

                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    exchange_rate
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FFD5D5"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
                      width: deviceType === "mobile" ? "20%" : "10%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB0505"}
                    >
                      NO
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={5} sm={5} xs={5} borderTop={"2px solid #D9D9D9"}>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    You can limit your search by adding a maximum exchange rate.
                    Example if you add 2.0 only offers within 2.0 would be
                    returned not greater than 2.0
                  </Typography>
                </Grid>

                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    checkout_status
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FFD5D5"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
                      width: deviceType === "mobile" ? "20%" : "10%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB0505"}
                    >
                      NO
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                   id="Post-Fields"
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    You can limit your search by adding a checkout status as YES
                    or NO. Checkout status as YES means it would return only
                    offers that qualify to be used at the gateway
                  </Typography>
                </Grid>


              </Grid>

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
              <Typography
                variant="h2"
                fontWeight={700}
                fontSize={"28px"}
                pt={3}
              >
                Return Values Success Sample
              </Typography>
              <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3} >
                <Typography
                  variant="body2"
                  fontWeight={500}
                  fontSize={"16px"}
                  color={"#FB8888"}
                  id="Return-Values-Error-Sample"
                >
                  <span style={{ color: "#fff" }}>{"{"}</span>
                  <br />
                  "status": <span style={{ color: "#FCC82B" }}>200</span>
                  <span style={{ color: "#fff" }}>,</span> <br />
                 
                  "data":
                  <span style={{ color: "#fff" }}>{"{"}</span>
                  <br />
                  "offer_id": 
                  <span style={{ color: "#17FF93" }}>"QOP09SOLA"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "currency": 
                  <span style={{ color: "#17FF93" }}> "GBP"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "exchange_rate": 
                  <span style={{ color: "#FCC82B" }}> 1.09 </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "min_order": 
                  <span style={{ color: "#FCC82B" }}>
                  100
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "max_order":{" "}
                  <span style={{ color: "#FCC82B" }}>2000</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                 "payment_method":{" "}
                  <span style={{ color: "#17FF93" }}>PayPal</span>
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "description":
                  <span style={{ color: "#17FF93" }}> "Here is the description written by the Merchant. It’s the terms for the offer"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "checkout_status":                   <span style={{ color: "#17FF93" }}> 1</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "restricted_currencies":
                  <span style={{ color: "#17FF93" }}>  "Allow All"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "restricted_currencies":
                  <span style={{ color: "#17FF93" }}> "Allow All"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "only_verified_domains":
                  <span style={{ color: "#FCC82B" }}>0</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "only_verified_users": 
                  <span style={{ color: "#FCC82B" }}>1</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "allowed_time":
                  <span style={{ color: "#FCC82B" }}> 30</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "merchant":
                  <span style={{ color: "#17FF93" }}>"Test User"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  <span style={{ color: "#fff" }}>{"},"}</span> <br />                
                  "note":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "Offer has been successfully fetched"
                  </span>{" "}
                  <br />
                  <span style={{ color: "#fff" }}>{"}"}</span>
                </Typography>
              </Box>
              <Typography variant="h2" fontWeight={700} fontSize={"28px"} pt={3} id="error">
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
            "Offer could not be fetched"
            </span>
            <br />
            <span style={{ color: "#fff" }}>{"}"}</span>
          </Typography>
          </Box>
            </Container>
          </Grid>
          <Grid item md={3}>
            <AllOffersSidebar anchor={"right"} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
