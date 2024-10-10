import { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import users from "../../../assets/images/faq/user-faq.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function UsersFaq({ deviceType }: any): React.JSX.Element {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box pt={3}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Grid container spacing={2}>
          <Grid item md={5} xs={12} sm={12}>
            <Image
              src={users}
              alt="users"
              style={{ width: '100%', display: deviceType === "mobile" ? "none" : deviceType === "tablet" ? " none" : "flex" }}
            />
          </Grid>
          <Grid item md={7} xs={12} sm={12}>
            <Typography
              variant="h3"
              sx={{
                fontSize: deviceType === "mobile" ? "28px" : deviceType === "tablet" ? "32px" : "62px",
                fontWeight: deviceType === "mobile" ? 700 : 900,
                textAlign: deviceType === "mobile" ? "center" : deviceType === "tablet" ? "center" : "",
              }}
            >
              <span style={{ color: "#009FDD" }}>Users</span> Frequently Asked
              Questions
            </Typography>
            <Typography
              variant="body2"
              fontWeight={500}
              sx={{
                fontSize: deviceType === "mobile" ? "14px" : "22px",
                textAlign: deviceType === "mobile" ? "center" : deviceType === "tablet" ? "center" : "",
                mt: 2
              }}
            >
              Here is a list of the commonly asked questions by users and
              customers, they will guide you through using the platform.
            </Typography>

            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                my: 3,
              }}
            >
              <Accordion
                elevation={0}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3.8}
                    sx={{
                      position: "absolute",
                      left: deviceType === "mobile" ? "84%" : "91.5%",
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "16px" : "24px" }}
                    fontWeight={400}
                  >
                    What is Peerwallet?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                    Peerwallet is a global Finance Market place where everything is achieved on a person-to-person model. A person-to-person or a peer-to-peer payment system that makes it possible for anyone to receive, transfer & spend funds easily from anywhere and all from one place.

                    Imagine a wallet where you can fund with Paypal, Mastercard, Visa, Local Bank Transfer, Venmo, Cash APP, Neteller, Wire, Paystack, Flutterwave, Stripe, PayU, Paytm, Skrill, Square, Payoneer, Alipay, and 250 more options! All together makes Peerwallet a global payment system that can be used by all and accepted by all.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 3,
              }}
            >
              <Accordion
                elevation={0}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3.8}
                    sx={{
                      position: "absolute",
                      left: deviceType === "mobile" ? "84%" : "91.5%",
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "16px" : "24px" }}
                    fontWeight={400}
                  >
                    How Does It Work?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                    There are 3 type of account privileges on Peerwallet;
                    Merchants: They are verified & approved individuals or Companies who provide funding, withdrawals, and other services on the Market place.
                    Sellers: They are those who have integrated Peerwallet to accept payments from their website or sellers who are receiving payments without a website, either selling offline or whichever method.
                    Users: They are the everyday users of Peerwallet, people who pay online, spend, withdraw, and so on.

                    Interestingly, one can be all at the same time, you can be a Merchant, Seller, and also a User; it requires just some additional verifications and commitments.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 3,
              }}
            >
              <Accordion
                elevation={0}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3.8}
                    sx={{
                      position: "absolute",
                      left: deviceType === "mobile" ? "84%" : "91.5%",
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "16px" : "24px" }}
                    fontWeight={400}
                  >
                    Who Are Merchants?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                  Peerwallet has been designed to work around Merchants, they are those who fund and complete withdrawals. They exist so that global adaptation can be easily achieved. The funding and withdrawal process is fully escrowed so your funds are fully safe.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 3,
              }}
            >
              <Accordion
                elevation={0}
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3.8}
                    sx={{
                      position: "absolute",
                      left: deviceType === "mobile" ? "84%" : "91.5%",
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "16px" : "24px" }}
                    fontWeight={400}
                    p={1}
                  >
                    What Methods Are Used For Payments?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                  There are over 300 payment methods comprising Bank transfers, Cash in shops, Giftcards, Electronic Payments, and many more. This has made it possible for users around the world to be able to use Peerwallet with lots of funding and withdrawal options.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 3,
              }}
            >
              <Accordion
                elevation={0}
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel5-content"
                  id="panel5-header"
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3.8}
                    sx={{
                      position: "absolute",
                      left: deviceType === "mobile" ? "84%" : "91.5%",
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "16px" : "24px" }}
                    fontWeight={400}
                  >
                    Are Peerwallet Funds Volatile?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                  No! Funds on the Peerwallet platform have already been converted to Fiat from our custom coin. Funds on Peerwallet are fully backed by cash.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
              }}
            >
              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel6-content"
                  id="panel6-header"
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3.8}
                    sx={{
                      position: "absolute",
                      left: deviceType === "mobile" ? "84%" : "91.5%",
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: deviceType === "mobile" ? "16px" : "24px" }}
                    fontWeight={400}
                  >
                    How Do I Get Started?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                  Create an account to get started. Peerwallet has been intelligently built and structured to solve most financial problems around the World, we are glad and eager to see you try Peerwallet!
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
