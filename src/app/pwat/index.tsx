"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import rectangle from "../../assets/images/pwat/rectangle.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import DiscoverPWAT from "./sections/discover";
import Embark from "./sections/embark";
import UseCases from "./sections/use-case";
import PWATFaq from "./sections/faq";
import Roadmap from "./sections/roadmap";
import PwatSpin from "../../components/pwat-spin";
import Image from "next/image";
// import Head from 'next/head';

export default function PWAT(): React.JSX.Element {
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
    <>
      {/* <Head>
        <title>PWAT - Peerwallet Token</title>
        <meta
          name="description"
          content="Explore the features and benefits of PWAT, Peerwallet's custom token, and how it integrates with the platform to enhance your financial transactions."
        />
        <meta property="og:title" content="PWAT - Peerwallet Token" />
        <meta
          property="og:description"
          content="Explore the features and benefits of PWAT, Peerwallet's custom token, and how it integrates with the platform to enhance your financial transactions."
        />
        <meta property="og:url" content="https://pwat.app/pwat" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Peerwallet" />
        <meta
          property="og:image"
          content="https://pwat.app/meta-banners/pwat.png"
        /></Head> */}
      <Box
        bgcolor={"#000211"}
        pb={deviceType === "mobile" ? 6 : 10}
        pt={deviceType === "mobile" ? 10 : 5}
        px={deviceType === "mobile" ? 0 : 10}
      >
        <Container
          disableGutters={
            deviceType === "mobile" || deviceType === "tablet" ? false : true
          }
        >
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box
                color={"#fff"}
                width={deviceType === "mobile" ? "auto" : "100%"}
              >
                <Typography
                  variant={deviceType === "mobile" ? "h4" : "h3"}
                  fontWeight={800}
                  fontSize={deviceType === "mobile" ? 30 : 48}
                  color={"#00AEEF"}
                  textAlign={deviceType === "mobile" ? "center" : "left"}
                >
                  More Financial Possibilities{" "}
                  <span style={{ color: "#fff" }}>With PWAT</span>
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  fontSize={deviceType === "mobile" ? 18 : 18}
                  color={"#fff"}
                  textAlign={deviceType === "mobile" ? "center" : "left"}
                  mt={2}
                >
                  Experience Next-Level P2P Transactions with Peerwallet Token
                  (PWAT)
                </Typography>
                <Box
                  display="flex"
                  flexDirection={deviceType === "mobile" ? "column" : "row"}
                  justifyContent={
                    deviceType === "mobile" ? "center" : "flex-start"
                  }
                  mt={deviceType === "mobile" ? 4 : 8}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#00AEEF",
                      color: "#fff",
                      borderRadius: 2,
                      textTransform: "uppercase",
                      padding: "10px 20px",
                      fontSize: 18,
                      fontWeight: 700,
                      margin:
                        deviceType === "mobile" ? "10px 0" : "10px 10px 10px 0",
                      width: "100%",
                    }}
                  >
                    GET STARTED
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#fff",
                      color: "#fff",
                      borderRadius: 2,
                      textTransform: "uppercase",
                      padding: "10px 20px",
                      fontSize: 18,
                      fontWeight: 700,
                      margin: deviceType === "mobile" ? "10px 0" : "10px",
                      width: "100%",
                    }}
                  >
                    <IconButton>
                      <Icon icon="octicon:play-24" fontSize={26} color="#fff" />
                    </IconButton>
                    PLAY VIDEO
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              pt={0}
              position={"relative"}
              display={deviceType === "mobile" ? "none" : "block"}
            >
              <Box
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <PwatSpin width={300} />
                <Box width={'100%'} height={"34vh"} display={"flex"} alignItems={"end"} justifyContent={"center"} position={"absolute"} top={4}>
                  <Image
                    src={rectangle}
                    style={{ width: "80%", height:"100%"}} alt=""/>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                color={"#fff"}
                textAlign={deviceType === "mobile" ? "center" : "left"}
              >
                <Box
                  mb={2}
                  sx={{
                    background:
                      "linear-gradient(90deg, #0D0F1E 0%, #1A1D2A 100%)",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" fontWeight={700}>
                    100 Million
                  </Typography>
                  <Typography variant="body2" color={"#888"}>
                    Total Supply
                  </Typography>
                </Box>
                <Box
                  mb={2}
                  sx={{
                    background:
                      "linear-gradient(90deg, #0D0F1E 0%, #1A1D2A 100%)",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" fontWeight={700}>
                    25 Million
                  </Typography>
                  <Typography variant="body2" color={"#888"}>
                    Locked (till 22 AUG, 2024)
                  </Typography>
                </Box>
                <Box
                  mb={2}
                  sx={{
                    background:
                      "linear-gradient(90deg, #0D0F1E 0%, #1A1D2A 100%)",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" fontWeight={700}>
                    50 Million
                  </Typography>
                  <Typography variant="body2" color={"#888"}>
                    For Internal Transfers
                  </Typography>
                </Box>
                <Box
                  mb={2}
                  sx={{
                    background:
                      "linear-gradient(90deg, #0D0F1E 0%, #1A1D2A 100%)",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" fontWeight={700}>
                    25 Million
                  </Typography>
                  <Typography variant="body2" color={"#888"}>
                    Available For Sale
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box bgcolor={"#000211"}>
        <DiscoverPWAT />
        <Embark />
        <UseCases />
        <Roadmap />
        <PWATFaq />
        <Toolbar />
        <Toolbar />
      </Box>
    </>
  );
}
