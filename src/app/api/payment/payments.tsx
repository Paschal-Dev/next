/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Box,
  Container,
  Link,
  Typography,
  createTheme,
  ThemeProvider,
  Grid,
  useMediaQuery,
} from "@mui/material";
import payment from "../../../assets/images/api/payment.svg";
import React, { useEffect, useState } from "react";
import Field from "./field";
import Image from "next/image";

const theme = createTheme();
export default function PaymentLink(): React.JSX.Element {

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
    <Box sx={{ mb: 10 }}>
      <Container disableGutters={deviceType === "mobile" || deviceType === "tablet" ? false : true}>
        <Box bgcolor={"#fff"} py={3} borderRadius={4} sx={{mt: deviceType === "mobile" ? 6 : 3}}>
          <Container>
            <Typography
              variant="h2"
              sx={{
                fontSize: deviceType === "mobile" ? "18px" : "28px",
              }}
              fontWeight={900}
              color={"#009FDD"}
              pb={2}
              id="payment"
            >
              Payment Integration & Payment Links
            </Typography>
          </Container>
          <Box bgcolor={"whitesmoke"} p={0.5}></Box>
          <Container>
            <Box pt={2}>
              <Image src={payment} alt="" style={{width:"95%", height:"auto"}} />
            </Box>
            <Typography
              variant="body2"
              fontWeight={400}
              sx={{
                fontSize: deviceType === "mobile" ? "14px" : "16px",
              }}
              py={2}
            >
              On Peerwallet, you can accept payment from your website via
              several methods; this simplifies the whole process no matter the
              programming language you would be using. All you need to do is to
              send in some specific POST values to a link, and then peerwallet
              would return a success response with a link if everything you have
              sent is correct.
            </Typography>
            <Typography
              variant="body2"
              fontWeight={400}
              sx={{
                fontSize: deviceType === "mobile" ? "14px" : "16px",
              }}
              pb={2}
            >
              The link is then embedded on your website so that the customer is
              able to pay from his or her Peerwallet balance or pay using the
              P2P integrations already integrated by Merchants on Peerwallet.
            </Typography>
            <Typography
              variant="body2"
              fontWeight={400}
              sx={{
                fontSize: deviceType === "mobile" ? "14px" : "16px",
              }}
              pb={4}
            >
              If you want to limit the type of payment methods you want to
              appear on your payment gateway page, you can do that from your
              seller tab, or click{" "}
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
                  HERE
                </Link>{" "}
              </ThemeProvider>
              to Learn more.
            </Typography>
          </Container>
          <Box bgcolor={"whitesmoke"} p={0.3}></Box>
          <Container>
            <Typography
              variant="h2"
              fontWeight={700}
              sx={{ fontSize: deviceType === "mobile" ? "18px" : "24px" }}
              pt={3}
              id="end-point"
            >
              End Point
            </Typography>
            <Box bgcolor={"#004E6D"} p={3} mt={1} borderRadius={3}>
              <Typography
                variant="body2"
                fontWeight={500}
                fontSize={"16px"}
                color={"#17FF93"}
              >
                "https://peerwallet.com/pay/calls<br style={{display:deviceType === "mobile" ? "flex" : "none"}} />/create-link"
              </Typography>
            </Box>
          </Container>
          <Box bgcolor={"whitesmoke"} p={0.3} mt={3}></Box>
          <Container>
            <Typography
              variant="h2"
              sx={{ fontSize: deviceType === "mobile" ? "18px" : "24px" }}
              fontWeight={700}
              pt={3}
            >
              Send your keys via headers
            </Typography>
            {/* <TableContainer >
                <Table aria-label="simple table">
                  <TableHead>
                      <TableCell>type</TableCell>
                      <TableCell>type</TableCell>
                      <TableCell>type</TableCell>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer> */}
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
                sx={{ pb: deviceType === "mobile" ? 7 : 13 }}
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
              <Grid item md={3} sm={3} xs={3} borderRight={"2px solid #D9D9D9"}>
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
              variant="h2"
              fontWeight={700}
              fontSize={"15px"}
              pt={3}
              id="explanation"
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
                pb={13}
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
              <Grid item md={3} sm={3} xs={3} borderRight={"2px solid #D9D9D9"}>
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
                  This must be a valid email address, if the user doesn’t have
                  an account on Peerwallet, a new account would be automatically
                  created for the user.
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  sx={{
                    fontSize: deviceType === "mobile" ? "10px" : "12px",
                    p: deviceType === "mobile" ? 1 : 2,
                  }}
                >
                  If the user already has a Peerwallet account the value here
                  can be the customer’s peerwallet account number also, this
                  would also work.
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
                  This is the amount you want to charge. Just include the amount
                  without comma. Example 10.04 or 40 or 20.019
                </Typography>
              </Grid>

              <Grid
                item
                md={4}
                sm={4}
                xs={4}
                borderTop={"2px solid #D9D9D9"}
                borderRight={"2px solid #D9D9D9"}
                pb={8}
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
                  currency_code
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
              <Grid item md={5} sm={5} xs={5} borderTop={"2px solid #D9D9D9"}>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  sx={{
                    fontSize: deviceType === "mobile" ? "10px" : "12px",
                    p: deviceType === "mobile" ? 1 : 2,
                  }}
                >
                  This is the currency in which you want to sell. Currencies
                  should be in their currency codes example; USD, EUR, GBP, INR,
                  AUD e.t.c. The currency code here could also differ from your
                  primary currency on Peerwallet; Peerwallet shall accurately
                  convert this to your primary balance when the customer has
                  paid.
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
                    p: deviceType === "mobile" ? 1 : 2,
                  }}
                  color={"#12B76A"}
                >
                  secret
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
                  Here a unique secret code that MUST be sent at each call, this
                  unique code is what identifies each link you have created. You
                  can also manually fetch the status of a payment using the
                  secret value.
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
                  verification
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
                    mt: deviceType === "mobile" ? 1 : 4,
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
                  Here you specify if you want the customer to have a verified
                  Peerwallet account before they can pay you. Allowed values
                  here are YES or NO. If you set it as YES, then you want only
                  verified users on Peerwallet to be able to pay you.
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  sx={{
                    fontSize: deviceType === "mobile" ? "10px" : "12px",
                    px: deviceType === "mobile" ? 1 : 2,
                    pb: 1,
                  }}
                >
                  You should set this as NO or leave it empty if you want to
                  collect payment from general users who already have account
                  with peerwallet or who are using the integration for the first
                  time.
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
                  language
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
                    mt: deviceType === "mobile" ? 1 : 4,
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
                  This would help customers who don’t speak English, so that
                  they would be able to pay and see the checkout page in their
                  preferred language. Allowed values here are language codes
                  like en, fr, ru e.t.c. The default value here is en if nothing
                  was sent.
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
                  order_name
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
                    mt: deviceType === "mobile" ? 1 : 4,
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
                  This is the name of the order, if nothing was sent, we would
                  replace this with the following text; ‘General Payments’
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
                  order_description
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
                    mt: deviceType === "mobile" ? 1 : 4,
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
                  This is the description for the order which would be seen by
                  the customer when paying. If nothing was sent, we would
                  replace this with: Order For General Payments
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
                  order_url
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
                    mt: deviceType === "mobile" ? 1 : 4,
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
                  This is where the customer should be redirected to after
                  payment is successful. If nothing was sent, we shall redirect
                  the customer to a custom success URL on Peerwallet.
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
                  redirect_url_failed
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
                    mt: deviceType === "mobile" ? 1 : 4,
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
                  This is where the customer should be redirected to after
                  payment has failed.
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
                  post_url
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
                    mt: deviceType === "mobile" ? 1 : 4,
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
                  fontSize={"12px"}
                  sx={{
                    fontSize: deviceType === "mobile" ? "10px" : "12px",
                    p: deviceType === "mobile" ? 1 : 2,
                  }}
                >
                  Here is where we would send POST values to; the URL you
                  specify here would receive POST return values from Peerwallet.
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
                pb={3}
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
                  off_id
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
                    mt: deviceType === "mobile" ? 1 : 4,
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
                  If you are also an approved Merchant on Peerwallet you can
                  include here your offer ID if you want your customers to pay
                  you using your active offer. Leave this part empty if you want
                  your customers to be able to pay you via other Merchants on
                  Peerwallet. Do not include this if you do not really
                  understand how this work or what it is. Also, do not place any
                  value the value must be correct else your customers won’t see
                  any P2P payment gateway.
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
                  recurring
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
                    mt: deviceType === "mobile" ? 1 : 4,
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
                  If you want this payment set as a recurring payment, just
                  enter yes or 1, Note that, payment would be charged from the
                  user's Peerwallet balance and not from the payment method,
                  <ThemeProvider theme={theme}>
                    <Link
                      href="#"
                      target="_blank"
                      sx={{
                        color: "#000",
                        "&:hover": { color: "primary.dark" },
                        pl: 1,
                      }}
                    >
                      click here to learn more.
                    </Link>
                  </ThemeProvider>
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
                  recurring_duration
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
                    mt: deviceType === "mobile" ? 1 : 4,
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
                  If you have set this payment as recurring above, you should
                  enter the duration. Currently, Peerwallet only supports
                  recurring payment Monthly & Yearly.
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              fontWeight={400}
              sx={{
                fontSize: deviceType === "mobile" ? "14px" : "16px",
              }}
              pt={6}
              id="premium"
            >
              If you are on the premium checkout plan, the fields below are
              required else just ignore if not needed. Also, when you send this
              information for the payment link generation, they are auto filled
              for non-premium users so that your users don’t need to enter it
              again before paying.
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
                  u_fname
                </Typography>
              </Grid>
              <Grid item md={3} sm={3} xs={3} borderRight={"2px solid #D9D9D9"}>
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
                <Box bgcolor={"#FFD5D5"}  sx={{
                    ml: deviceType === "mobile" ? 4 : 5,
                    mt: deviceType === "mobile" ? 1 : 3,
                    width: deviceType === "mobile" ? "20%" : "10%",
                  }}>
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
                  The first name of the customer
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
                  u_lname
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
                <Box bgcolor={"#FFD5D5"}  sx={{
                    ml: deviceType === "mobile" ? 4 : 5,
                    mt: deviceType === "mobile" ? 1 : 2,
                    width: deviceType === "mobile" ? "20%" : "10%",
                  }}>
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
                  The last name of the customer
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
                  u_address
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
                  The address of the customer
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
                  u_city
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
                  The customer’s city
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
                  u_state
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
                  The customer’s state
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
                  u_postal_code
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
                  The zip or postal code of the customer
                </Typography>
              </Grid>

              <Grid
                item
                md={4}
                sm={4}
                xs={4}
                borderTop={"2px solid #D9D9D9"}
                borderRight={"2px solid #D9D9D9"}
                pb={5}
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
                  u_country
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
                    mt: deviceType === "mobile" ? 1 : 4,
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
                  The customer’s country. Allowed fields here are1) US, CN, UK,
                  FR and so on2) United States, United Kingdom, China e.t.c.Use
                  this link to fetch the available County names on Peerwallet{" "}
                  <br />
                  <ThemeProvider theme={theme}>
                    <Link
                      href="#"
                      target="_blank"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                        color: "#000",
                        "&:hover": { color: "primary.dark" },
                      }}
                    >
                      https://peerwallet.
                      <br
                        style={{
                          display: deviceType === "mobile" ? "flex" : "none",
                        }}
                      />
                      com/api/api/countries
                    </Link>
                  </ThemeProvider>
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <Box border={"1px solid #D9D9D9"}></Box>
          <Field />
        </Box>
      </Container>
    </Box>
  );
}
