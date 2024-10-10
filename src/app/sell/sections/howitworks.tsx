import React from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import start from "../../../assets/images/sell/pre-start.svg";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HowItWorks({deviceType}:any): React.JSX.Element {
  
  return (
    <Box py={6}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Typography variant="h2" fontSize={"48px"} fontWeight={900}>
            <span style={{ color: "#009FDD" }}>How</span> It Works
          </Typography>
          <Box border={"1px solid #C2C2C2"} width={"12%"} mb={2}></Box>
          <Typography variant="body1" fontWeight={500} fontSize={deviceType === "mobile" ? "14px" : ""} textAlign={"center"}>
            Peerwallet, a P2P semi-decentralized finance marketplace, uses third
            parties for funding and withdrawals. At checkout, customers choose a
            gateway to pay, and funds are credited to your Peerwallet account
            and then sent to your withdrawal method when due. Merchants or
            vendors, including fintech companies and banks, enable these
            payments. To prevent fraud, they set basic requirements for sellers,
            such as:
          </Typography>
        </Box>

        <Box bgcolor={"#fff"} borderRadius={deviceType === "mobile" ? "30px" : "48px"} p={5} mt={4}>
          <Grid container spacing={3}>
            <Grid item md={6} sm={12}>
              <Box
                display={"flex"}
                alignItems={"start"}
                gap={2}
              >
                <Box
                  bgcolor={"#009FDD"}
                  borderRadius={"10%"}
                  p={1}
                >
                  <Icon
                    icon="mdi:account-check"
                    style={{ fontSize: deviceType === "mobile" ? 27 : 35 }}
                    color="#fff"
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: deviceType === "mobile" ? 600 : 800,
                      fontSize: deviceType === "mobile" ? "14px" : "16px",
                    }}
                  >
                    Account Verification
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: deviceType === "mobile" ? "14px" : "16px",
                      fontWeight: 400,
                    }}
                  >
                    On Peerwallet, you can begin without verification though
                    with some limits, most Vendors will set their gateways to
                    only show to sellers who have at least verified their
                    account, some would require Company verification level.
                  </Typography>
                </Box>
              </Box>

              <Box
                display={"flex"}
                alignItems={"start"}
                gap={2}
                mt={deviceType === "mobile" ? 3 : deviceType === "tablet" ? 3 : 10}
              >
                <Box
                  bgcolor={"#009FDD"}
                  borderRadius={"10%"}
                  p={1.5}
                >
                  <Image src={start} alt="" />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: deviceType === "mobile" ? 600 : 800,
                      fontSize: deviceType === "mobile" ? "14px" : "16px",
                    }}
                  >
                    Pre-Start
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: deviceType === "mobile" ? "14px" : "16px",
                      fontWeight: 400,
                    }}
                  >
                    There are some sellers who want to begin selling without
                    actually depositing funds for security deposit, this feature
                    is called Pre-Start where the earned funds are placed on
                    hold until it gets to the pre- start value and then
                    automatically locked, please learn more from
                    <Link
                      href="#"
                      target="_blank"
                      sx={{
                        color: "#000",
                        "&:hover": { color: "#009FDD" },
                        pl: 1,
                      }}
                    >
                      HERE
                    </Link>{" "}
                  </Typography>
                </Box>
              </Box>
              <Box
                display={"flex"}
                alignItems={"start"}
                gap={2}
                mt={deviceType === "mobile" ? 3 : deviceType === "tablet" ? 3 : 10}
              >
                <Box
                  bgcolor={"#009FDD"}
                  borderRadius={"10%"}
                  p={1.5}
                >
                   <Icon
                      icon="material-symbols:domain-verification-outline"
                      style={{ fontSize: deviceType === "mobile" ? 27 : 35 }}
                      color="#fff"
                    />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: deviceType === "mobile" ? 600 : 800,
                      fontSize: deviceType === "mobile" ? "14px" : "16px",
                    }}
                  >
                    Domain Verification
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: deviceType === "mobile" ? "14px" : "16px",
                      fontWeight: 400,
                    }}
                  >
                    Domain verification is optional but highly recommended if
                    you want access to pre-approved vendors with quality
                    gateways for customer wallet loading at checkout. It ensures
                    your business category is correctly placed, facilitating
                    pre-approval from financial partners. While not required for
                    selling through the Peerwallet shop, verifying your domain
                    is advisable if you intend to sell from your domain,
                    enhancing your business’s credibility and operational
                    efficiency on Peerwallet.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Box
                display={"flex"}
                alignItems={"start"}
                gap={2}
              >
                
                  <Box
                    bgcolor={"#009FDD"}
                    borderRadius={"10%"}
                    p={1}
                  >
                    <Icon
                      icon="streamline:briefcase-dollar-solid"
                      style={{ fontSize: deviceType === "mobile" ? 27 : 35 }}
                      color="#fff"
                    />
                  </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: deviceType === "mobile" ? 600 : 800,
                      fontSize: deviceType === "mobile" ? "14px" : "16px",
                    }}
                  >
                    Security Deposit
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: deviceType === "mobile" ? "14px" : "16px",
                      fontWeight: deviceType === "mobile" ? 400 : 400,
                    }}
                  >
                    Vendors who offer crypto gateways normally do not require
                    security deposit since Crypto payments aren’t reversible.
                    Those vendors who have integrated credit-debit card gateways
                    would require you have some security deposits first if you
                    want your customers to pay using their gateway. Since you
                    are a new seller without any reputation yet on Peerwallet,
                    this is a feature which protects vendors incase there is a
                    chargeback request, funds from your security deposit would
                    be used to settle it incase you don’t have any balance on
                    Peerwallet.
                  </Typography>
                  <Typography
                    pt={4}
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "14px" : "16px",
                      fontWeight: deviceType === "mobile" ? 400 : 400,
                    }}
                  >
                    Most vendors would require you lock a minimum of $500 for a
                    duration of 3 Months which is automatically re-locked if you
                    are actively selling, learn more
                    <Link
                      underline="always"
                      href="#"
                      target="_blank"
                      sx={{
                        color: "#000",
                        "&:hover": { color: "#009FDD" },
                        pl: 1,
                      }}
                    >
                      HERE
                    </Link>{" "}
                    The total value to lock is dependent on your estimated
                    weekly volume.
                  </Typography>
                  <Typography
                    pt={4}
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "14px" : "16px",
                      fontWeight: deviceType === "mobile" ? 400 : 400,
                    }}
                  >
                    Expected Volumes & Holds: This only applies when your
                    customers are paying you via reversible payment method,
                    according to this link
                    <Link
                      href="#"
                      target="_blank"
                      sx={{
                        color: "#000",
                        "&:hover": { color: "#009FDD" },
                        pl: 1,
                      }}
                    >
                      HERE
                    </Link>{" "}
                  </Typography>
                  <Typography
                    pt={4}
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "14px" : "16px",
                      fontWeight: deviceType === "mobile" ? 400 : 400,
                    }}
                  >
                    Your sales limits are calculated this way. 100 / 20 *
                    security deposit.20 in this case is your security level, as
                    you begin to sell without very low chargebacks the rate
                    would reduce which would then increase your sales Limit for
                    the week. In this scenario, your sales Limit for the week
                    for a $500 security deposit at 20% margin is $2,500, when
                    you make sales above $2,500 weekly the extra would go on
                    hold for 14 days before it’s then available for withdrawals.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
