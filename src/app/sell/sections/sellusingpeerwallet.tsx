import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import p2p from "../../../assets/images/sell/p2p.svg";
import fees from "../../../assets/images/sell/fees.svg";
import exchange from "../../../assets/images/sell/exchange.svg";
import funds from "../../../assets/images/sell/funds.svg";
import api from "../../../assets/images/sell/api.svg";
import knowledge from "../../../assets/images/sell/knowledge.svg";
import risk from "../../../assets/images/sell/risk.svg";
import circle from "../../../assets/images/sell/circle.svg";
import ball from "../../../assets/images/sell/ball.svg";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SellUsingPeerwallet({deviceType}:any): React.JSX.Element {
  return (
    <Box bgcolor={"#000"} py={7}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Typography
            variant="h2"
            fontWeight={900}
            fontSize={ deviceType === "mobile" ? "30px" : "48px"}
            color={"#fff"}
            sx={{
              textAlign:
                deviceType === "mobile"
                  ? "center"
                  : deviceType === "tablet"
                  ? "center"
                  : "",
            }}
          >
            Why You Should{" "}
            <span style={{ color: "#009FDD" }}>Sell Using Peerwallet</span>
          </Typography>
          <Box border={"1px solid #C2C2C2"} width={"20%"} my={1}></Box>
          <Typography
            variant="body1"
            fontWeight={600}
            color={"#fff"}
            sx={{
              textAlign:
                deviceType === "mobile"
                  ? "center"
                  : deviceType === "tablet"
                  ? "center"
                  : "",
            }}
          >
            Here are a few reasons why using sell on Peerwallet is the perfect
            solution to your business needs.
          </Typography>
          <Box position={"absolute"} right={210} mt={3}>
            <Image src={ball} alt="" style={{ width: '100%' }} />
          </Box>
        </Box>
        <Grid container mt={3} spacing={3}>
          <Grid item md={6}>
            <Box
              bgcolor={"#282828"}
              borderRadius={6}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              py={4}
              px={2}
            >
              <Box display={"flex"} alignItems={"center"} pb={1}>
                <Image src={p2p} alt="p2p-image" />
                <Typography variant="h6" fontWeight={800} color={"#fff"} pl={1}>
                  P2P Multi Gateway
                </Typography>
              </Box>
              <Typography
                variant="body1"
                fontWeight={400}
                color={"#fff"}
                textAlign={"center"}
              >
                Peerwallet P2P payment gateway offers various options from
                financial institutions, banks, and licensed fintechs. Available
                gateways depend on your location, verification, industry,
                deposit, and sales history. Contact us for assistance.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              bgcolor={"#282828"}
              borderRadius={6}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              py={4}
              px={2}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Image src={fees} alt="p2p-image" />
                <Typography variant="h6" fontWeight={800} color={"#fff"} pl={1}>
                  Low Fees
                </Typography>
              </Box>
              <Typography
                variant="body1"
                fontWeight={400}
                color={"#fff"}
                textAlign={"center"}
              >
                On peerwallet, the starting fee is 1%, Vendors then add how much
                they want to charge per transaction, this can range between 2%
                to 15% depending on your location, industry, your verification
                status, your security deposit level, & your sales history on
                Peerwallet.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container mt={2} spacing={3}>
          <Grid item md={6}>
            <Box
              bgcolor={"#282828"}
              borderRadius={6}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              py={4}
              px={2}
            >
              <Box display={"flex"} alignItems={"center"} pb={1}>
                <Image src={exchange} alt="p2p-image" />
                <Typography variant="h6" fontWeight={800} color={"#fff"} pl={1}>
                  Zero Exchange Rate Fee
                </Typography>
              </Box>
              <Typography
                variant="body1"
                fontWeight={400}
                color={"#fff"}
                textAlign={"center"}
              >
                You can sell in multiple currencies, and they are converted to
                your main currency’s balance without any exchange rate fee. This
                would give you confidence of same official rate value each time
                you make a sale, without losing a penny as exchange rate fee.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              bgcolor={"#282828"}
              borderRadius={6}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              py={5}
              px={2}
            >
              <Box display={"flex"} alignItems={"center"} pb={1}>
                <Image src={fees} alt="p2p-image" />
                <Typography variant="h6" fontWeight={800} color={"#fff"} pl={1}>
                  Multi Balance Purpose
                </Typography>
              </Box>
              <Typography
                variant="body1"
                fontWeight={400}
                color={"#fff"}
                textAlign={"center"}
              >
                On Peerwallet, you can use your balance for multiple purposes;
                you can transfer to other Peerwallet user or use it at the
                Peerwallet’s Market place.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container mt={2} spacing={3}>
          <Grid item md={6}>
            <Box
              bgcolor={"#282828"}
              borderRadius={6}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              py={4}
              px={2}
            >
              <Box  display={"flex"} alignItems={"center"} pb={1}>
                <Image src={funds} alt="p2p-image" />
                <Typography variant="h6" fontWeight={800} fontSize={deviceType === "mobile" ? "19px" : ""} color={"#fff"} pl={1}>
                  Instant Availability Of Funds
                </Typography>
              </Box>
              <Typography
                variant="body1"
                fontWeight={400}
                color={"#fff"}
                textAlign={"center"}
              >
                When you make a sale on Peerwallet, the funds are available
                instantly. You can transfer them to someone else or you withdraw
                to bank or Crypto which would take between 24 – 72 hours
                depending on your account’s reputation.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              bgcolor={"#282828"}
              borderRadius={6}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              py={5}
              px={2}
            >
              <Box display={"flex"} alignItems={"center"} pb={1}>
                <Image src={api} alt="p2p-image" />
                <Typography variant="h6" fontWeight={800} color={"#fff"} pl={1}>
                  Simple API integration
                </Typography>
              </Box>
              <Typography
                variant="body1"
                fontWeight={400}
                color={"#fff"}
                textAlign={"center"}
              >
                Peerwallet has simplified how to remotely connect to several
                available features and also accept payments, you can check the
                API <br /> docs from
                <Link
                  underline="always"
                  href="#"
                  target="_blank"
                  sx={{
                    color: "#fff",
                    "&:hover": { color: "#009FDD" },
                    pl: 1,
                  }}
                >
                  HERE
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box position={"absolute"} left={154}>
          <Image src={circle} alt="" style={{ width: '90%' }} />
        </Box>
        <Grid container mt={2} spacing={3}>
          <Grid item md={6}>
            <Box
              bgcolor={"#282828"}
              borderRadius={6}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              py={4}
              px={2}
            >
              <Box display={"flex"} alignItems={"center"} pb={1}>
                <Image src={knowledge} alt="p2p-image" />
                <Typography variant="h6" fontWeight={800} color={"#fff"} pl={1}>
                  Rich Knowledgebase
                </Typography>
              </Box>
              <Typography
                variant="body1"
                fontWeight={400}
                color={"#fff"}
                textAlign={"center"}
              >
                Because we know you would need more information, we have written
                a very comprehensive knowledgebase where you can easily find
                answers to hundreds of topics easily from{" "}
                <Link
                  underline="always"
                  href="#"
                  target="_blank"
                  sx={{
                    color: "#fff",
                    "&:hover": { color: "#009FDD" },
                    pl: 1,
                  }}
                >
                  HERE
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              bgcolor={"#282828"}
              borderRadius={6}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              py={4}
              px={3}
            >
              <Box display={"flex"} alignItems={"center"} pb={1}>
                <Image src={risk} alt="p2p-image" />
                <Typography variant="h6" fontWeight={800} color={"#fff"} pl={1}>
                  High Risk Industries
                </Typography>
              </Box>
              <Typography
                variant="body1"
                fontWeight={400}
                color={"#fff"}
                textAlign={"center"}
              >
                With the basic requirements set, your business would be able to
                sell using Peerwallet. You can confirm from us via the chat for
                a quick guide.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
