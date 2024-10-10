import { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import sellers from "../../../assets/images/faq/sellers-faq.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SellersFaq({ deviceType }: any): React.JSX.Element {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Grid container spacing={5}>
          <Grid item md={7}>
            <Typography
              variant="h3"
              sx={{
                fontSize: deviceType === "mobile" ? "28px" : deviceType === "tablet" ? "32px" : "64px",
                fontWeight: deviceType === "mobile" ? 700 : 900,
                 textAlign: deviceType === "mobile" ? "center" : deviceType === "tablet" ? "center" : ""
              }}
            >
              <span style={{ color: "#009FDD" }}>Sellers</span> Frequently Asked
              Questions
            </Typography>
            <Box mt={2}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: deviceType === "mobile" ? "14px" : "22px",
                  fontWeight: 500,
                  textAlign: deviceType === "mobile" ? "center" : deviceType === "tablet" ? "center" : "",
                }}
              >
                Here is a list of the commonly asked questions by Sellers,{" "}
                <br /> they will guide you through using the platform.
              </Typography>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mt: 3,
                mb: 1,
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
                    px={3.6}
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
                    Can I Integrate Peerwallet On My Website?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                  Yes, there are more than 10 ready plugins you can quickly integrate into your shopping cart, we have developed the popular ones. You can also integrate Peerwallet using a custom integration via our API system. Please navigate HERE for API & Plugins
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                elevation={0}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
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
                    Is There Instant Access To Received Funds?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                  When you accept payment with Peerwallet, funds received are available for withdrawal immediately. No waiting, no additional verification needed.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
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
                    Are Charge Backs Possible On Peerwallet?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                  No!. Funds on Peerwallet are final they are irreversible. So funds added to the Peerwallet wallet can be spent at will and cannot be charged back.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
              }}
            >
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
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
                    How Do I Withdraw My Funds On Peerwallet?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                  Peerwallet uses the peer-to-peer system for withdrawal also, and you would be transacting with verified & approved Merchants only on Peerwallet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 16px 0 rgba(52, 52, 52, 0.15)",
                borderRadius: "12px",
                width: "97%",
                mb: 1,
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
                    Which Requirements Are Needed To Accept Payments From My
                    Website?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "rgba(245, 245, 245, 0.452)" }}
                >
                  <Typography variant="body2">
                  All you need is a registered account. Verified and non-verified accounts can accept payments, but non-verified accounts can only do this with lots of Limits. We do not accept websites selling the following; Guns, Hard Drugs, Fraudulent services, etc. Please read our terms and conditions for more info
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
          <Grid item md={5}>
            <Image
              src={sellers}
              alt="sellers"
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
        </Grid>
      </Container>
    </Box>
  );
}
