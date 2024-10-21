"use client";
import { Box, Container, Grid, Link, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainSideBar from "../component/mainsidebar";
import VirtualCardServicesSideBar from "./virtualcardservicessidebar";
import { theme } from "@/assets/themes/theme";

export default function VirtualCardServices(): React.JSX.Element {

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
                id="list"
                mt={deviceType === "mobile" ? 5 : 4}
                mb={deviceType === "mobile" ? 6 : ""}
              >
                <Typography variant="h2" fontSize={20} fontWeight={900}>
                  List all virtual card offers
                </Typography>
                <Typography variant="body2" fontSize={"16px"} mt={1}>
                  Fetch all virtual card offers created on Peerwallet, you would
                  need the offer id of a particular virtual card when you want
                  to create a card from that Merchant.
                </Typography>
                <Typography variant="body2" fontSize={"16px"} mt={2}>
                  All created cards can also be managed from the peerwallet
                  dashboard form the ‘My shop - My Virtual Cards’ menu.
                </Typography>
                <Typography variant="body2" fontSize={"16px"} mt={2}>
                  CALL URL:{" "}
                  <Link href=" " color={"#009fdd"}>
                    https://peerwallet.com/pay/calls/vcard-list
                  </Link>
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
                  /vcard-list"
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
              <Typography variant="body2" fontSize={"20px"} fontWeight={800}>
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
                    Here is your public key. To use this, please make sure the
                    API status is turned on.
                  </Typography>
                </Grid>
              </Grid>

              <Typography
                variant="h2"
                fontWeight={700}
                fontSize={"28px"}
                pt={3}
              >
                Return Sample
              </Typography>
              <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3}  >
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
                  "data":
                  <span style={{ color: "#fff" }}>{"{"}</span>
                  <br />
                  "offer_id":
                  <span style={{ color: "#17FF93" }}>"GTFTIU988T"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "merchant":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "Test Merchant"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "card_primary_currency":
                  <span style={{ color: "#17FF93" }}> "GBP" </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "selling_currency":
                  <span style={{ color: "#17FF93" }}>"EUR"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "type": <span style={{ color: "#17FF93" }}>
                    "Virtual"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "issuer":{" "}
                  <span style={{ color: "#17FF93" }}>"Mastercard"</span>
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "allow_custom_name":
                  <span style={{ color: "#17FF93" }}> yes</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "allow_custom_address":{" "}
                  <span style={{ color: "#17FF93" }}> No</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "custom_address_allowed_for_countries":
                  <span style={{ color: "#17FF93" }}> "Allow None"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "only_verified_users":
                  <span style={{ color: "#17FF93" }}> "No"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "loading_fee_percentage":
                  <span style={{ color: "#17FF93" }}>"12"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "fixed_loading_fee":
                  <span style={{ color: "#17FF93" }}>"0"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "creation_cost":
                  <span style={{ color: "#17FF93" }}> "3"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "card_monthly_fee":
                  <span style={{ color: "#17FF93" }}>"3"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "minimum_load_fee":
                  <span style={{ color: "#17FF93" }}> "0"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "min_load":
                  <span style={{ color: "#17FF93" }}> "2"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "max_load":
                  <span style={{ color: "#17FF93" }}>"500"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "total_accumulated_load":
                  <span style={{ color: "#17FF93" }}>"25000"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "restricted_countries":
                  <span style={{ color: "#17FF93" }}> "3"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "Allow All":
                  <span style={{ color: "#17FF93" }}>"3"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "status":
                  <span style={{ color: "#17FF93" }}> "active"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "admin_approval":
                  <span style={{ color: "#17FF93" }}> "approved"</span> <br />
                  <span id="create" style={{ color: "#fff" }}>{"},"}</span>
                  <br />
                  "note":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "Virtual cards successfully fetched"
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
                variant="body2"
                fontSize={"24px"}
                fontWeight={700}
                id="Explanation-Table"
                mt={3}
              >
                Create virtual cards
              </Typography>
              <Typography variant="body2" fontSize={"16px"} mt={2}>
                You can create virtual cards via the API easily, if the vendors
                allows multiple and unlimited creation, you can do this via this
                API.
              </Typography>
              <Typography variant="body2" fontSize={"16px"} mt={2}>
                CALL URL:{" "}
                <Link href=" " color={"#009fdd"}>
                  https://peerwallet.com/pay/calls/vcard-issue
                </Link>{" "}
              </Typography>
              <Typography
                variant="h2"
                fontWeight={700}
                fontSize={"28px"}
                id="Explanation-Table"
                mt={6}
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
                  /vcard-issue"
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

              <Typography variant="body2" fontSize={"20px"} fontWeight={800}>
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
                    Here is your private key. To use this, please make sure the
                    API status is turned on.
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                variant="body2"
                fontSize={"20px"}
                fontWeight={700}
                mt={2}
              >
                Below are the variables to be sent and their meaning.
              </Typography>
              <Grid
                container
                border={"2px solid #D9D9D9"}
                sx={{ borderTopLeftRadius: 19, borderTopRightRadius: 19 }}
                bgcolor={"#009edd3b"}
                mt={2}
              >
                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  borderRight={"2px solid #D9D9D9"}
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
                    offer_id
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
                      mt: deviceType === "mobile" ? 1 : 2,
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
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      borderTopRightRadius: 20,
                      fontSize: deviceType === "mobile" ? "12px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
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
                    This is the id of the offer{" "}
                  </Typography>
                </Grid>

                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
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
                    amount
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
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    This is the amount you want to load. The total to be paid
                    would be the following; Amount + loading fee or minimum load
                    fee + card cost + peerwallet fee + loading_fixed_fee (if
                    set) Check all of these values from the list virtual cards
                    offer call.
                  </Typography>
                </Grid>
              </Grid>
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
                Return Sample
              </Typography>
              <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3}>
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
                  "card_status":
                  <span style={{ color: "#17FF93" }}>"success"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "identifier":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "3636apfyjwfiuwg62987bvcsvog"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "card_id":
                  <span style={{ color: "#17FF93" }}> "FJG96674T3" </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "amount":
                  <span style={{ color: "#FCC82B" }}>200</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "charged_currency":{" "}
                  <span style={{ color: "#17FF93" }}>"EUR"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "card_total": <span style={{ color: "#FCC82B" }}>185</span>
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "fee_in_local_currency":
                  <span style={{ color: "#FCC82B" }}> 0.6</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "total_charged_in_local_currency":{" "}
                  <span style={{ color: "#FCC82B" }}> 430</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "date":
                  <span style={{ color: "#FCC82B" }}>439483409</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "date_text":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "Mon, 5th of June 2022"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "merchant":
                  <span style={{ color: "#17FF93" }}>"Test Merchant"</span>{" "}
                  <span id="fetch" style={{ color: "#fff" }}>,</span> <br />
                  "receipt_url":
                  <span style={{ color: "#17FF93" }}>
                    "https://peerwallet.com/map
                    <br
                      style={{
                        display: deviceType === "mobile" ? "flex" : "none",
                      }}
                    />
                    /receipt?token=UG78gHGDGY87pwI
                    <br
                      style={{
                        display: deviceType === "mobile" ? "flex" : "none",
                      }}
                    />
                    hjgbhzxbnlhfgueirewydoopelFUh85u"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "note":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "Card creation was succesful"
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
                variant="body2"
                fontSize={"24px"}
                fontWeight={700}
                id="Explanation-Table"
                mt={3}
              >
                Fetch created card details
              </Typography>
              <Typography variant="body2" fontSize={"16px"} mt={2}>
                Here you can fetch the details of a card previously created
                using the ‘identifier’ value generated when creating the card.
              </Typography>
              <Typography variant="body2" fontSize={"16px"} mt={2}>
                CALL URL:{" "}
                <Link href=" " color={"#009fdd"}>
                  https://peerwallet.com/pay/calls/vcard-fetch-card-details
                </Link>{" "}
              </Typography>

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
                mt={6}
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
                  /vcard-fetch-card-details"
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
                mt={2}
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
                  sx={{ pb: 4 }}
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
                    Here is your private key. To use this, please make sure the
                    API status is turned on.
                  </Typography>
                </Grid>
              </Grid>

              <Typography
                variant="body2"
                fontSize={"20px"}
                fontWeight={800}
                mt={2}
              >
                Below are the variables to be sent and their meaning.
              </Typography>
              <Grid
                container
                border={"2px solid #D9D9D9"}
                sx={{ borderTopLeftRadius: 19, borderTopRightRadius: 19 }}
                bgcolor={"#009edd3b"}
                mt={2}
              >
                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  borderRight={"2px solid #D9D9D9"}
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
                    offer_id
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
                      mt: deviceType === "mobile" ? 1 : 2,
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
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      borderTopRightRadius: 20,
                      fontSize: deviceType === "mobile" ? "12px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
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
                    This is the id of the offer{" "}
                  </Typography>
                </Grid>

                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
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
                    identifier
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
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
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
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    This is the id generated when the card was created
                  </Typography>
                </Grid>
              </Grid>

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
                Return Sample
              </Typography>
              <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3}>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  fontSize={"16px"}
                  color={"#FB8888"}
                  id="Return-Values-Error-Sample"
                >
                  <span style={{ color: "#fff" }}>{"{"}</span>
                  <br />
                  "status": <span style={{ color: "#17FF93" }}>"200"</span>
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "merchant":
                  <span style={{ color: "#17FF93" }}>"Test Merchant"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "nickname":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "my quick card"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "data":
                  <span style={{ color: "#fff" }}>{"{"}</span>
                  <br />
                  "card_num":
                  <span style={{ color: "#FCC82B" }}>-8770</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "card_name":
                  <span style={{ color: "#17FF93" }}> "John Doe"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "card_primary_currency":
                  <span style={{ color: "#17FF93" }}> "USD" </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "card_balance":
                  <span style={{ color: "#17FF93" }}>"30"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "exp_month": <span style={{ color: "#17FF93" }}>
                    "01"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "exp_year": <span style={{ color: "#FCC82B" }}>29</span>
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "cvv":
                  <span style={{ color: "#FCC82B" }}> 342</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "billing_address":{" "}
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    test road street
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "billing_city":
                  <span style={{ color: "#17FF93" }}> "test city"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "billing_state":
                  <span style={{ color: "#17FF93" }}> "test state"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "billing_postal_code":
                  <span style={{ color: "#FCC82B" }}>902932</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "billing_country":
                  <span style={{ color: "#FCC82B" }}>billing_country</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "billing_country":
                  <span style={{ color: "#17FF93" }}> "test country"</span>{" "}
                  <span id="load" style={{ color: "#fff" }}>,</span> <br />
                  <span style={{ color: "#fff" }}>{"},"}</span>
                  <br />
                  "note":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "Virtual card details successfully fetched"
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
                variant="body2"
                fontSize={"24px"}
                fontWeight={700}
                id="Explanation-Table"
                mt={3}
              >
                Load virtual card
              </Typography>
              <Typography variant="body2" fontSize={"16px"} mt={2}>
                You can top-up a card, the offer needs to remain active to be
                able to load the card.
              </Typography>
              <Typography variant="body2" fontSize={"16px"} mt={2}>
                CALL URL:{" "}
                <Link href=" " color={"#009fdd"}>
                  https://peerwallet.com/pay/calls/vcard-load
                </Link>{" "}
              </Typography>

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
                mt={6}
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
                  /vcard-load"
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
                mt={2}
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
                  sx={{ pb: 4 }}
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
                    Here is your private key. To use this, please make sure the
                    API status is turned on.
                  </Typography>
                </Grid>
              </Grid>

              <Typography
                variant="body2"
                fontSize={"20px"}
                fontWeight={800}
                mt={2}
              >
                Below are the variables to be sent and their meaning.
              </Typography>
              <Grid
                container
                border={"2px solid #D9D9D9"}
                sx={{ borderTopLeftRadius: 19, borderTopRightRadius: 19 }}
                bgcolor={"#009edd3b"}
                mt={2}
              >
                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  borderRight={"2px solid #D9D9D9"}
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
                    offer_id
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
                      mt: deviceType === "mobile" ? 1 : 2,
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
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      borderTopRightRadius: 20,
                      fontSize: deviceType === "mobile" ? "12px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
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
                    This is the id of the offer
                  </Typography>
                </Grid>

                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
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
                    identifier
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
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
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
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    This the unique token generated when creating the card
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
                    amount
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
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
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
                <Grid item md={5} sm={5} xs={5} borderTop={"2px solid #D9D9D9"}>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    The amount you want to load, in the selling currency of the
                    card
                  </Typography>
                </Grid>
              </Grid>

              <Typography
                variant="h2"
                fontWeight={700}
                fontSize={"28px"}
                pt={3}
              >
                Return Sample
              </Typography>
              <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3}>
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
                  "load_status":
                  <span style={{ color: "#17FF93" }}>"success"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "identifier":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "534753FH9T96T7t349837434"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "amount":
                  <span style={{ color: "#FCC82B" }}>34</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "charged_currency":
                  <span style={{ color: "#17FF93" }}> "EUR"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "card_total":
                  <span style={{ color: "#FCC82B" }}> 36 </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "fee_in_local_currency":
                  <span style={{ color: "#FCC82B" }}>0.1</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "total_charged_in_local_currency":{" "}
                  <span style={{ color: "#FCC82B" }}>33210</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "date": <span style={{ color: "#FCC82B" }}>439309432</span>
                  <span id="transaction" style={{ color: "#fff" }}>,</span> <br />
                  "date_text":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "15th of May, 2022"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "merchant":{" "}
                  <span style={{ color: "#17FF93" }}> Test Merchant</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "receipt_url":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "https://peerwallet.com/map/receipt?token=363wuyAvbcxspoiuw89gyug
                    <br
                      style={{
                        display: deviceType === "mobile" ? "flex" : "none",
                      }}
                    />
                    iuxcAQID0dwrpIJGYgyuCVBNC
                    <br
                      style={{
                        display: deviceType === "mobile" ? "flex" : "none",
                      }}
                    />
                    RDUR6D686fg"
                  </span>
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "note":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "Card load was succesful"
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
                variant="body2"
                fontSize={"24px"}
                fontWeight={700}
                id="Explanation-Table"
                mt={3}
              >
                Fetch Card Transactions
              </Typography>
              <Typography variant="body2" fontSize={"16px"} mt={2}>
                You can fetch the transactions done on a card easily, send the
                required fields for a response.
              </Typography>
              <Typography variant="body2" fontSize={"16px"} mt={2}>
                CALL URL:{" "}
                <Link href=" " color={"#009fdd"}>
                  https://peerwallet.com/pay/calls/vcard-fetch-card-trans
                </Link>{" "}
              </Typography>

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
                mt={6}
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
                  /vcard-fetch-card-trans"
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
                mt={2}
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
                  sx={{ pb: 4 }}
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
                    Here is your private key. To use this, please make sure the
                    API status is turned on.
                  </Typography>
                </Grid>
              </Grid>

              <Typography
                variant="body2"
                fontSize={"20px"}
                fontWeight={800}
                mt={2}
              >
                Below are the variables to be sent and their meaning.
              </Typography>
              <Grid
                container
                border={"2px solid #D9D9D9"}
                sx={{ borderTopLeftRadius: 19, borderTopRightRadius: 19 }}
                bgcolor={"#009edd3b"}
                mt={2}
              >
                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  borderRight={"2px solid #D9D9D9"}
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
                    offer_id
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
                      mt: deviceType === "mobile" ? 1 : 2,
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
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      borderTopRightRadius: 20,
                      fontSize: deviceType === "mobile" ? "12px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
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
                    This is the id of the offer
                  </Typography>
                </Grid>

                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
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
                    identifier
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
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
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
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    This the unique token generated when creating the card
                  </Typography>
                </Grid>
              </Grid>
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
                Return Sample
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
                  "data":
                  <span id="created" style={{ color: "#fff" }}>[</span>
                  <br />
                  "transactions":
                  <span style={{ color: "#17FF93" }}>"data--"</span>{" "}
                  <span style={{ color: "#fff" }}>]</span>
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
                variant="body2"
                fontSize={"24px"}
                fontWeight={700}
                id="Explanation-Table"
                mt={3}
              >
                List all created virtual cards
              </Typography>
              <Typography variant="body2" fontSize={"16px"} mt={2}>
                This would list out all the virtual cards your account has
                created.
              </Typography>
              <Typography variant="body2" fontSize={"16px"} mt={2}>
                CALL URL:{" "}
                <Link href=" " color={"#009fdd"}>
                  https://peerwallet.com/pay/calls/vcard-list-my-cards
                </Link>{" "}
              </Typography>

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
                mt={6}
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
                  /vcard-list-my-cards"
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
                mt={2}
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
                  sx={{ pb: 4 }}
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
                    Here is your private key. To use this, please make sure the
                    API status is turned on.
                  </Typography>
                </Grid>
              </Grid>

              <Typography
                variant="h2"
                fontWeight={700}
                fontSize={"28px"}
                pt={3}
              >
                Return Sample
              </Typography>
              <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3} mb={10}>
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
                  "identifier":
                  <span style={{ color: "#17FF93" }}>
                    "YGUvduywt696924tyughskf"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "offer_id":
                  <span style={{ color: "#17FF93" }}> "0734 IGOKSB"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "card_id":
                  <span style={{ color: "#17FF93" }}> "PRFJISDFDGG" </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "merchant":
                  <span style={{ color: "#17FF93" }}>
                    "The test merchant"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "card_primary_currency":{" "}
                  <span style={{ color: "#17FF93" }}>"GBP"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "type": <span style={{ color: "#17FF93" }}>"Virtual"</span>
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "issuer":
                  <span style={{ color: "#17FF93" }}> "Visa"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "date_created":{" "}
                  <span style={{ color: "#FCC82B" }}> 5359802834</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "status":
                  <span style={{ color: "#17FF93" }}> "active"</span> <br />
                  <span style={{ color: "#fff" }}>{"},"}</span>
                  <br />
                  <span style={{ color: "#fff" }}>{"}"}</span>
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid item md={3}>
            <VirtualCardServicesSideBar anchor={"right"} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
