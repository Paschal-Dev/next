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
import VoucherIssueSidebar from "./voucherissuesidebar";

export default function VoucherIssue(): React.JSX.Element {

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
            <Container id="issue">
              <Box
                mt={deviceType === "mobile" ? 5 : 4}
                mb={deviceType === "mobile" ? 6 : ""}
                id="payment"
              >
                <Typography variant="h2" fontSize={20} fontWeight={900}>
                  Vouchers - Issue
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  my={2}
                >
                  <span style={{ fontWeight: 500 }}>Issue: </span>
                  Approved vendors on Peerwallet can issue Peerwallet vouchers,
                  which can be redeemed later. The minimum number of vouchers
                  that can be created is 1, and the maximum is 5000.
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mb={2}
                >
                  <span style={{ fontWeight: 500 }}>Quantity: </span>
                  Within a single API call, you can specify the total quantity
                  of vouchers to be created. The minimum quantity is 1, and the
                  maximum per call is 100.
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mb={2}
                >
                  <span style={{ fontWeight: 500 }}>Expiry Date: </span>
                  Each voucher is valid for 1 year from the date of issuance.
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mb={2}
                >
                  <span style={{ fontWeight: 500 }}>Payment: </span>
                  Ensure you have sufficient balance, as the payment for
                  vouchers will be deducted from your account balance.
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mb={2}
                >
                  <span style={{ fontWeight: 500 }}>Codes: </span>
                  The voucher codes will be sent to your email and will be
                  displayed only once when you initiate the issue API. The codes
                  cannot be fetched again via the API, as Peerwallet does not
                  store them. All codes are hashed using a one-way hashing
                  algorithm and cannot be retrieved by us. Please ensure you
                  store the voucher codes correctly when you initiate the issue
                  API. For future reference, you can refer to the email for the
                  list of codes.
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mb={2}
                  id="point"
                >
                  <span style={{ fontWeight: 500 }}>Order ID: </span>
                  Store the Order ID to fetch voucher codes within that group in
                  the future.
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mb={2}
                >
                  <span style={{ fontWeight: 500 }}>Permission: </span>
                  This API call requires the "transfer funds" permission, which
                  must be enabled in your API settings.
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
                  /voucher-issue"
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
                    quantity
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
                    The total number of vouchers you want to buy. Minimum is 1
                    while maximum is 100 per call.
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
                      mt: deviceType === "mobile" ? 1 : 3,
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
                    The amount stored in the voucher. Minimum is 1 while maximum
                    is 5000
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
                    currency
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
                    The default and only voucher currency for now is USD.
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
                Return Values Success Sample
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
                  "purchase_status":
                  <span style={{ color: "#17FF93" }}>"success"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "order_id":
                  <span style={{ color: "#17FF93" }}> "AQ09O09OLK"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "currency":
                  <span style={{ color: "#17FF93" }}> "USD" </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "quantity":
                  <span style={{ color: "#FCC82B" }}>5</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "amount": <span style={{ color: "#FCC82B" }}>2000</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "total_charged": <span style={{ color: "#FCC82B" }}>50</span>
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "voucher_codes":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "00000000000000000000,
                    <br
                      style={{
                        display: deviceType === "mobile" ? "flex" : "none",
                      }}
                    />
                    00000000000000000000,
                    <br
                      style={{
                        display: deviceType === "mobile" ? "flex" : "none",
                      }}
                    />
                    00000000000000000000,
                    <br />
                    00000000000000000000, 00000000000000000000"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "exp_date":{" "}
                  <span style={{ color: "#FCC82B" }}> 1749504154</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "date_created":
                  <span style={{ color: "#FCC82B" }}> 1717968154</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "receipt_url":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "https://peerwallet.com/map/receipt?token=UIGIYOG97t6d9ygoihg87ghfeid
                    <br
                      style={{
                        display: deviceType === "mobile" ? "flex" : "none",
                      }}
                    />
                    ygfudivyvgeuivyievguiy"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "note":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "Voucher purchase was successful"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  <span style={{ color: "#fff" }}>{"}"}</span>
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid item md={3}>
            <VoucherIssueSidebar anchor={"right"} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
