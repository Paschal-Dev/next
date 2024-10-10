import {
  Box,
  Container,
  Grid,
  Typography,
  // useMediaQuery,
  // useTheme,
} from "@mui/material";
import merchant from "../../../assets/images/faq/merchant-faq.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MerchantFaq({ deviceType }: any): React.JSX.Element {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box pt={7}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Grid container spacing={1}>
          <Grid item md={5} xs={12} sm={12}>
            <Image
              src={merchant}
              alt="users"
              style={{
                display:
                  deviceType === "mobile"
                    ? "none"
                    : deviceType === "tablet"
                    ? "none"
                    : "flex",
                    width: '100%'
              }}
            />
          </Grid>
          <Grid item md={7} xs={12} sm={12}>
            <Typography
              variant="h2"
              sx={{
                fontSize: deviceType === "mobile" ? "28px" : deviceType === "tablet" ? "32px" : "60px",
                fontWeight: deviceType === "mobile" ? 700 : 900,
                textAlign: deviceType === "mobile" ? "center" : deviceType === "tablet" ? " center" : "",
              }}
            >
              <span style={{ color: "#009FDD" }}>Merchants</span> Frequently
              Asked Questions
            </Typography>
            <Box mt={3}>
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{
                  fontSize: deviceType === "mobile" ? "16px" : "22px",
                  textAlign:
                    deviceType === "mobile"
                      ? "center"
                      : deviceType === "tablet"
                      ? "center"
                      : "",
                }}
              >
                Here is a list of the commonly asked questions by Merchants,
                they will guide you through using the platform.
              </Typography>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                my: 3,
              }}
            >
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3.6}
                    sx={{
                      position: "absolute",
                      left: deviceType === "mobile" ? "84.8%" : "91.5%",
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
                  Peerwallet has been designed to work with Merchants, they are those who fund and complete withdrawals. They exist so that global adoption can be easily achieved. The funding and withdrawal process is fully escrowed so that funds are safe.
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
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3.6}
                    sx={{
                      position: "absolute",
                      left: deviceType === "mobile" ? "84.8%" : "91.5%",
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
                    How Do I Become A Merchant?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                  First you should head to the Merchant Page to learn more and then apply from there.
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
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3.6}
                    sx={{
                      position: "absolute",
                      left: deviceType === "mobile" ? "84.8%" : "91.5%",
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
                    What Types Of Merchants Exist?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                  There are 2 types of Merchants;<br />
                  (1) Individual Merchants: They are merchants without any corporate entity. They are verified as an individual and their limits are lower compared to the Corporate Merchants. <br /><br />
                  (2) Company/Corporate Merchant: They are verified corporate entities with high transaction limits. Users will see the Company Verified seal when searching for Merchants. Also, they are more trusted because of the verification type.
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
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3.6}
                    sx={{
                      position: "absolute",
                      left: deviceType === "mobile" ? "84.8%" : "91.5%",
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
                    How Do Merchants Make Money?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                  Basically, merchants make money from exchange profits. There are lots of opportunities it provides. You can exchange via different currencies also with different payment methods to make a profit. <br />
                  For Example, you can set a 3% profit each time you want to fund or withdraw for a user. You could sell 1EUR for 1.03EUR. This means you would make a 3% profit from every funding or withdrawal. You can set your price at will.
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
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3.6}
                    sx={{
                      position: "absolute",
                      left: deviceType === "mobile" ? "84.8%" : "91.5%",
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
                    sx={{ fontSize: deviceType === "mobile" ? 15.5 : "24px" }}
                    fontWeight={400}
                    p={1}
                  >
                    Is There Instant Access To Received Funds?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                  On Peerwallet all users must select one default currency, but as a Merchant, you can sell or buy from any currency. We use official exchange rates for conversion, making it possible to exchange any currency in the world.
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
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3.6}
                    sx={{
                      position: "absolute",
                      left: deviceType === "mobile" ? "84.8%" : "91.5%",
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
                    Which Currency Can I Sell?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                  On Peerwallet all users must select one default currency, but as a Merchant, you can sell or buy from any currency. We use official exchange rates for conversion, making it possible to exchange any currency in the world.
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
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Box
                    bgcolor={"#009FDD"}
                    px={3.6}
                    sx={{
                      position: "absolute",
                      left: deviceType === "mobile" ? "84.8%" : "91.5%",
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
                    Can I Suggest A New Payment Method?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                  We are open to more suggestions on payment systems that can be used for funding or withdrawals. In other to add more payment methods, please create a new ticket from your Dashboard with the suggested payment method.
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
