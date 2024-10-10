"use client"; 
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import voucher_header from "../../assets/images/voucher/voucher-header.png";
import voucherMenu from "../../assets/images/voucher/voucher-sub-menu.png";
import AboutPeerwalletVoucher from "./sections/about-peerwallet-voucher";
// import VoucherSubMenu from "./sections/sub-menu";
import VoucherHowItWorks from "./sections/how-it-works";
import Benefits from "./sections/benefits";
import GetStarted from "./sections/get-started";
// import Head from "next/head";
import Image from "next/image";

export default function VoucherPage(): React.JSX.Element {
  const theme = useTheme();
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
    <Box mb={10}>
      {/* <Head>
        <title>Peerwallet Vouchers</title>
        <meta
          name="description"
          content="Learn how to buy, redeem, and use Peerwallet vouchers for seamless transactions and gifting."
        />
        <meta property="og:title" content="Peerwallet Voucher" />
        <meta
          property="og:description"
          content="Learn how to buy, redeem, and use Peerwallet vouchers for seamless transactions and gifting."
        />
        <meta property="og:url" content="https://pwat.app/voucher" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Peerwallet" />
        <meta
          property="og:image"
          content="https://pwat.app/meta-banners/voucher.png"
        />
      </Head> */}
      <Box bgcolor={"#000"} pb={deviceType === "mobile" ? 3 : 20}>
        <Container disableGutters>
          <Grid
            container
            spacing={deviceType === "mobile" ? 2 : 4}
            p={deviceType === "mobile" ? 3 : 3}
          >
            <Grid item xs={12} md={8}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                mt={deviceType === "mobile" ? 6 : "none"}
              >
                <Typography
                  variant={deviceType === "mobile" ? "h4" : "h2"}
                  fontWeight={900}
                  fontSize={deviceType === "mobile" ? 30 : 50}
                  color={"#FFF"}
                  textAlign={deviceType === "mobile" ? "center" : "left"}
                  display={deviceType === "mobile" ? "none" : "block"}
                >
                  Effortlessly <br /> Manage Your Funds with
                </Typography>
                <Typography
                  variant={deviceType === "mobile" ? "h4" : "h2"}
                  fontWeight={900}
                  fontSize={deviceType === "mobile" ? 30 : 50}
                  color={"#009FDD"}
                  textAlign={deviceType === "mobile" ? "center" : "left"}
                  display={deviceType === "mobile" ? "none" : "block"}
                >
                  Peerwallet Vouchers
                </Typography>
                <Typography
                  variant={deviceType === "mobile" ? "h4" : "h2"}
                  fontWeight={900}
                  fontSize={deviceType === "mobile" ? 30 : 50}
                  color={"#FFF"}
                  textAlign={deviceType === "mobile" ? "center" : "left"}
                  display={deviceType === "mobile" ? "block" : "none"}
                >
                  Effortlessly Manage Your Funds with{" "}
                  <span style={{ color: "#009FDD" }}>Peerwallet Vouchers</span>
                </Typography>
                <Typography
                  variant="body2"
                  color={"#ffff"}
                  fontSize={deviceType === "mobile" ? 16 : 22}
                  textAlign={deviceType === "mobile" ? "center" : "left"}
                  pt={3}
                  width={deviceType === "mobile" ? "auto" : "88%"}
                >
                  Discover a Simple, Secure, and Instant Way to Add Funds to
                  Your Peerwallet Account.
                </Typography>
                <Box pt={deviceType === "mobile" ? 3 : 5}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: deviceType === "mobile" ? "100%" : "30%",
                      p: 2,
                      backgroundColor: " #009FDD",
                      color: "#fff",
                      borderRadius: 2,
                      textTransform: "uppercase",
                      border: "2px solid #009FDD",
                      ":hover": {
                        background: "none",
                        borderColor: "#FCC82B",
                        color: "#FCC82B",
                      },
                      fontSize: 20,
                      fontWeight: 700,
                    }}
                  >
                    GET STARTED
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              position={"relative"}
              right={deviceType === "mobile" ? 0 : 80}
              top={deviceType === "mobile" ? 0 : 20}
              textAlign={deviceType === "mobile" ? "center" : "left"}
              display={deviceType === "mobile" ? "none" : "block"}
            >
              <Image
                src={voucher_header}
                alt=""
                style={{
                  display: deviceType === "mobile" ? "none" : "flex",
                }}
              />
            </Grid>
          </Grid>
          <Box
            bgcolor={"white"}
            borderRadius={"30px"}
            position={"absolute"}
            bottom={-150}
            p={2}
            left={50}
            width={"90%"}
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              display: deviceType === "mobile" ? "none" : "flex",
            }}
          >
            <Image
              src={voucherMenu}
              alt=""
              style={{
                width: "90%",
                height: 'auto',
                display: deviceType === "mobile" ? "none" : "flex",
                marginLeft: "5%",
              }}
            />
          </Box>
        </Container>
      </Box>
      <Box bgcolor={"whitesmoke"}>
        {/* <VoucherSubMenu /> */}
        <AboutPeerwalletVoucher />
        <VoucherHowItWorks />
        <Benefits />
        <GetStarted />
        <Toolbar />
        <Toolbar />
      </Box>
    </Box>
  );
}
