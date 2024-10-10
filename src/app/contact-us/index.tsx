"use client"; 
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import message from "../../assets/images/contact/message.svg";
import React, { useEffect, useState } from "react";
import Contact from "./contact";
import { theme } from "../../assets/themes/theme";
import Image from "next/image";
// import Head from "next/head";

export default function ContactUs(): React.JSX.Element {
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
    <Box bgcolor={"#000"}>
      {/* <Head>
        <title>Contact Us</title>
        <meta name="description" content="Connect with Us for Support" />
        <meta property="og:title" content="Redeem Peerwallet Voucher" />
        <meta property="og:description" content="Connect with Us for Support" />
        <meta property="og:url" content="https://pwat.app/contact-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Peerwallet" />
        <meta
          property="og:image"
          content="https://pwat.app/meta-banners/contact-us.png"
        />
      </Head> */}
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Grid container pb={3}>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              pt:
                deviceType === "mobile" ? 11 : deviceType === "tablet" ? 15 : 9,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: deviceType === "mobile" ? 750 : 900,
                fontSize: deviceType === "mobile" ? "60px" : "96px",
                textAlign:
                  deviceType === "mobile"
                    ? "center"
                    : deviceType === "tablet"
                    ? "center"
                    : "",
              }}
              color={"#fff"}
            >
              Contact <span style={{ color: "#FCC82B" }}>US</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                fontSize: deviceType === "mobile" ? "18px" : "26px",
                textAlign:
                  deviceType === "mobile"
                    ? "center"
                    : deviceType === "tablet"
                    ? "center"
                    : "",
              }}
              color={"#fff"}
            >
              Here’s how you can reach us
            </Typography>
          </Grid>
          <Grid item md={6} xs={12} pt={4}>
            <Box
              display={
                deviceType === "mobile"
                  ? "none"
                  : deviceType === "tablet"
                  ? "none"
                  : "flex"
              }
            >
              <Image src={message} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box bgcolor={"whitesmoke"} pb={deviceType=== "mobile" ? 10 : 20}>
        <Contact deviceType={deviceType} />
       
      </Box>
    </Box>
  );
}
