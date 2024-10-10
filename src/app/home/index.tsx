"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { Icon } from "@iconify/react";
import HowItWorks from "./sections/how-it-works";
import VirtualCards from "./sections/virtual-cards";
import Carouselg from "./sections/carousel";
import pwat from "../../assets/images/home/pwat-coin.svg";
import typeImg from "../../assets/images/home/type.svg";
import PwatSpin from "@/components/pwat-spin";
import { theme } from "../../assets/themes/theme";
import Image from "next/image";
// import Head from "next/head";

export default function HomePage(): React.JSX.Element {
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

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Head>
        <title>
          Welcome to Peerwallet - A Semi Decentralized Finance Marketplace
        </title>
        <meta
          name="description"
          content="Effortlessly send, receive, and spend payments with a single Peerwallet account. Explore our Marketplace for a diverse range of global financial solutions, including virtual cards, gift cards, virtual banks, bill payments, and more."
        />
        <meta
          property="og:title"
          content="Welcome to Peerwallet - A Semi Decentralized Finance Marketplace"
        />
        <meta
          property="og:description"
          content="Effortlessly send, receive, and spend payments with a single Peerwallet account. Explore our Marketplace for a diverse range of global financial solutions, including virtual cards, gift cards, virtual banks, bill payments, and more."
        />
        <meta property="og:url" content="https://pwat.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Peerwallet" />
        <meta
          property="og:image"
          content="https://pwat.app/meta-banners/p2p.png"
        />
      </Head> */}
      <Box bgcolor={"black"}>
        <Container
          disableGutters={
            deviceType === "mobile" || deviceType === "tablet" ? false : true
          }
        >
          <Grid container spacing={1}>
            <Grid item xs={12} md={7}>
              <Typography
                variant="h2"
                fontWeight={700}
                fontSize={deviceType === "mobile" ? 35 : 55}
                color={"white"}
                sx={{
                  textAlign:
                    deviceType === "mobile"
                      ? "center"
                      : deviceType === "tablet"
                      ? "center"
                      : "",
                  pt:
                    deviceType === "mobile"
                      ? 15
                      : deviceType === "tablet"
                      ? 20
                      : 10,
                }}
              >
                P2P Semi Decentralized
              </Typography>
              <Typography
                variant="h2"
                fontWeight={700}
                fontSize={deviceType === "mobile" ? 35 : 55}
                color={"#FCC82B"}
                sx={{
                  textAlign:
                    deviceType === "mobile"
                      ? "center"
                      : deviceType === "tablet"
                      ? "center"
                      : "",
                }}
              >
                Finance Marketplace
              </Typography>
              <Typography
                variant="body2"
                fontWeight={500}
                color={"white"}
                py={3}
                sx={{
                  textAlign:
                    deviceType === "mobile"
                      ? "center"
                      : deviceType === "tablet"
                      ? "center"
                      : "",
                  fontSize: deviceType === "mobile" ? "14px" : "24px",
                }}
              >
                Finance P2P Marketplace which provides multiple options to load,
                withdraw, spend or accept payments online with PWAT.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent:
                    deviceType === "mobile"
                      ? "center"
                      : deviceType === "tablet"
                      ? "center"
                      : "",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    height: deviceType === "mobile" ? 60 : 80,
                    px: 3,
                    color: "#fff",
                    borderRadius: 2,
                    border: "2px solid #009FDD",
                    ":hover": { borderColor: "#FCC82B" },
                    fontSize: deviceType === "mobile" ? 12 : 20,
                    fontWeight: 700,
                  }}
                  onClick={handleOpen}
                >
                  <Icon
                    icon="octicon:play-24"
                    color="#fff"
                    fontSize={deviceType === "mobile" ? 20 : 32}
                    style={{ marginRight: 5 }}
                  />
                  PLAY VIDEO
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    height: deviceType === "mobile" ? 60 : 80,
                    px: 3,
                    backgroundColor: "#009FDD",
                    color: "#fff",
                    marginLeft: 2,
                    borderRadius: 2,
                    textTransform: "uppercase",
                    border: "2px solid #009FDD",
                    ":hover": { background: "none" },
                    fontSize: deviceType === "mobile" ? 12 : 20,
                    fontWeight: 700,
                  }}
                >
                  get started
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} position={"relative"}>
              <Box display={deviceType === "mobile" ? "none" : "flex"}>
                <Image src={pwat} alt="" width={500} height={500} />
                <PwatSpin width={"48%"} left={"37%"} bottom={"5%"} />
              </Box>
            </Grid>
          </Grid>
          <Box
            position={"relative"}
            pb={
              deviceType === "mobile" ? 48 : deviceType === "tablet" ? 40 : 25
            }
          >
            <Box
              position={"absolute"}
              bgcolor={"#FFFFFF"}
              mt={3}
              p={4}
              borderRadius={8}
            >
              <Box>
                <Image src={typeImg} alt="" width={deviceType === "mobile" ? 350 : 0}/>
              </Box>
              <Grid container columnSpacing={8}>
                <Grid item xs={12} md={3}>
                  <hr
                    style={{
                      border: "1px solid #009FDD",
                      width: "20%",
                      display:
                        deviceType === "mobile"
                          ? "flex"
                          : deviceType === "tablet"
                          ? "flex"
                          : "none",
                    }}
                  />
                  <Typography
                    variant="body2"
                    textAlign={"center"}
                    mb={
                      deviceType === "mobile"
                        ? 2
                        : deviceType === "tablet"
                        ? 2
                        : 0
                    }
                  >
                    All fees are fully transparent with no hidden charges. The
                    fees vary depending on the mode, but they are as low as
                    0.1%.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <hr
                    style={{
                      border: "1px solid #FCC82B",
                      width: "20%",
                      display:
                        deviceType === "mobile"
                          ? "flex"
                          : deviceType === "tablet"
                          ? "flex"
                          : "none",
                    }}
                  />
                  <Typography
                    variant="body2"
                    textAlign={"center"}
                    mb={
                      deviceType === "mobile"
                        ? 2
                        : deviceType === "tablet"
                        ? 2
                        : 0
                    }
                  >
                    On Peerwallet, information is 100% encrypted. Transfer of
                    files and data are fully protected via our custom encryption
                    method.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} ml={0}>
                  <hr
                    style={{
                      border: "1px solid rgba(128, 0, 128, 0.968)",
                      width: "20%",
                      display:
                        deviceType === "mobile"
                          ? "flex"
                          : deviceType === "tablet"
                          ? "flex"
                          : "none",
                    }}
                  />
                  <Typography
                    variant="body2"
                    textAlign={"center"}
                    mb={
                      deviceType === "mobile"
                        ? 2
                        : deviceType === "tablet"
                        ? 2
                        : 0
                    }
                  >
                    The Peerwallet funds are issued in crypto (PWAT) which can
                    then be used for spending on the Marketplace instantly.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <hr
                    style={{
                      border: "1px solid #0AA81A",
                      width: "20%",
                      display:
                        deviceType === "mobile"
                          ? "flex"
                          : deviceType === "tablet"
                          ? "flex"
                          : "none",
                    }}
                  />
                  <Typography variant="body2" textAlign={"center"}>
                    Funding & Withdrawals are initiated by approved Vendors, we
                    added a simple & easy to use Escrow system with account
                    security.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogContent>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/AsNynSC76yg?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ border: "none", backgroundColor: "transparent" }}
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>

      <Box
        bgcolor={"whitesmoke"}
        pb={deviceType === "mobile" ? 13 : 25}
        pt={25}
      >
        <HowItWorks />
        <Toolbar />
        <Carouselg />
        <VirtualCards />
      </Box>
    </>
  );
}
