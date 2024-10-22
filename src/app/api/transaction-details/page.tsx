/* eslint-disable react/no-unescaped-entities */
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
import TransactionReceiptSidebar from "./transactionreceiptsidebar";

export default function TransactionReceipt(): React.JSX.Element {

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
              >
                <Typography variant="h2" fontSize={20} fontWeight={900}>
                  Transaction Receipt
                </Typography>
                <Typography variant="body2" fontSize={"16px"} mt={1}>
                  You can view more details of a transaction as the Seller using
                  the Pay ID or the Invoice ID of the transaction. When a
                  transaction is competed on Peerwallet, the parties involved
                  are able to view same receipts from the dashboard, this API
                  call gives the Seller a remote information about a
                  transaction.
                </Typography>
                <Typography variant="body2" fontSize={"16px"} mt={2} id="End-Point">
                  The Pay ID is the unique code generated when creating the
                  Payment link, or you can manually copy receipt ID from your
                  dashboard to view more information about a transaction
                  transaction.
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
                  "https://peerwallet.com/pay/calls<br style={{display:deviceType === "mobile" ? "flex" : "none"}} />/transaction"
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
                id="Explanation-Table"
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
                  >
                    Invoice_id or pay_id
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
                    id="Post-Fields"
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
                    This is the pay id of the payment, this was generated when
                    creating the link, it’s also the unique code at the end of
                    every payment link. The invoice ID is the unique ID to
                    locate your invoice, you can manually get this from the
                    invoice from your dashboard or from the verify payment call.
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
                  <span style={{ color: "#fff" }}>[</span>
                  <br />
                  <br />
                  "api-private-key"<span style={{ color: "#fff" }}>,</span>{" "}
                  <br /> "invoice_id"
                  <br />
                  <br />
                  <span style={{ color: "#fff" }}>]</span>
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
              <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3} mb={6}>
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
                  <span style={{ color: "#17FF93" }}>"Paid"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "invoice_id":
                  <span style={{ color: "#17FF93" }}> "EUID90SKUI"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "receipt_id":
                  <span style={{ color: "#17FF93" }}>"44EYW09E87" </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "data":
                  <span style={{ color: "#fff" }}>{"{"}</span>
                  <br />
                  "customer_email":
                  <span style={{ color: "#17FF93" }}>
                    "sample@mail.com"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "selling_currency":{" "}
                  <span style={{ color: "#17FF93" }}>"USD"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  selling_amouunt":{" "}
                  <span style={{ color: "#FCC82B" }}>30.21</span>
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "selling_total_amount":
                  <span style={{ color: "#FCC82B" }}> 30.55</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "seller_currency":
                  <span style={{ color: "#17FF93" }}> "GBP"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "seller_amount":
                  <span style={{ color: "#FCC82B" }}> 25.55</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "seller_net_amount":
                  <span style={{ color: "#FCC82B" }}>25.1</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "payment_method":{" "}
                  <span style={{ color: "#17FF93" }}>"Stripe"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "exchange_rate":{" "}
                  <span style={{ color: "#FCC82B" }}>1.0212</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "payment_mode":
                  <span style={{ color: "#17FF93" }}> "API"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "payment_type":
                  <span style={{ color: "#17FF93" }}> "P2P"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "fees_by":
                  <span style={{ color: "#17FF93" }}> "sellers"</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "merchant":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "Sample Merchant"
                  </span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  "date_processed":
                  <span style={{ color: "#FCC82B" }}>1680322096</span>{" "}
                  <span style={{ color: "#fff" }}>,</span> <br />
                  "date_paid_failed":
                  <span style={{ color: "#FCC82B" }}> 1680333097</span>{" "}
                  <span style={{ color: "#fff" }}>,</span>
                  <br />
                  <span style={{ color: "#fff" }}>{"},"}</span>
                  <br />
                  "note":
                  <span style={{ color: "#17FF93" }}>
                    {" "}
                    "Transaction fetched!"
                  </span>{" "}
                  <br />
                  <span style={{ color: "#fff" }}>{"}"}</span>
                </Typography>
              </Box>
              
            </Container>
          </Grid>
          <Grid item md={3}>
            <TransactionReceiptSidebar anchor={"right"} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
