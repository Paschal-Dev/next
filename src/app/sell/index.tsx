"use client"; 
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import sell from "../../assets/images/sell/sell.svg";
import AboutSell from "./sections/aboutsell";
import HowItWorks from "./sections/howitworks";
import SellUsingPeerwallet from "./sections/sellusingpeerwallet";
import GettingStarted from "./sections/gettingstarted";
// import Head  from "next/head";
import { theme } from "../../assets/themes/theme";
import Image from "next/image";

export default function Sell(): React.JSX.Element {
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
    <>
      {/* <Head>
        <title>Sell On Peerwallet</title>
        <meta
          name="description"
          content="Accept payments from your website or via payment or product links."
        />
        <meta property="og:title" content="Sell On Peerwallet" />
        <meta
          property="og:description"
          content="Accept payments from your website or via payment or product links."
        />
        <meta property="og:url" content="https://pwat.app/sell" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Peerwallet" />
        <meta
          property="og:image"
          content="https://pwat.app/meta-banners/sellers.png"
        />
      </Head> */}
      <Box bgcolor={"#000"}>
        <Container
          disableGutters={
            deviceType === "mobile" || deviceType === "tablet" ? false : true
          }
        >
          <Grid container py={5} alignItems={"center"}>
            <Grid item md={7} xs={12}>
              <Box>
                <Typography
                  variant="h2"
                  fontSize={deviceType === "mobile" ? "50px" : "64px"}
                  fontWeight={900}
                  color={"#fff"}
                  pt={
                    deviceType === "mobile"
                      ? 7
                      : deviceType === "tablet"
                      ? 9
                      : ""
                  }
                  sx={{
                    textAlign:
                      deviceType === "mobile"
                        ? "center"
                        : deviceType === "tablet"
                        ? "center"
                        : "",
                  }}
                >
                  <span style={{ color: "#FCC82B" }}>Sell</span> On Peerwallet
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  fontSize={deviceType === "mobile" ? "20px" : "24px"}
                  color={"#fff"}
                  pb={5}
                  sx={{
                    textAlign:
                      deviceType === "mobile"
                        ? "center"
                        : deviceType === "tablet"
                        ? "center"
                        : "",
                  }}
                >
                  Accept payments from your website or via payment or product
                  links.
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent={
                    deviceType === "mobile"
                      ? "center"
                      : deviceType === "tablet"
                      ? "center"
                      : ""
                  }
                >
                  <Button
                    variant="contained"
                    sx={{
                      p: 2,
                      color: "#fff",
                      borderRadius: "12px",
                      textTransform: "uppercase",
                      border: "2px solid #009FDD",
                      ":hover": { background: "none" },
                      fontSize: 24,
                      fontWeight: 800,
                    }}
                  >
                    get started
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              md={5}
              xs={12}
              display={
                deviceType === "mobile"
                  ? "none"
                  : deviceType === "tablet"
                  ? "none"
                  : "flex"
              }
            >
              <Image src={sell} alt="sell-image" style={{width: '100%'}} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box bgcolor={"whitesmoke"} pb={20}>
        <AboutSell deviceType={deviceType} />
        <SellUsingPeerwallet deviceType={deviceType} />
        <HowItWorks deviceType={deviceType} />
        <GettingStarted deviceType={deviceType} />
      </Box>
    </>
  );
}
