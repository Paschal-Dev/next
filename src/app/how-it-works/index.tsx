'use client';
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../../assets/themes/theme";
import { Icon } from "@iconify/react";
// import { Helmet } from "react-helmet";
import Features from "./components/features";
import HowPeerwalletWorks from "./components/how-peerwallet-works";
import TypesOfAccount from "./components/types-of-account";
import FundingWithdrawal from "./components/funding-withdrawal";
import FundTransfer from "./components/funds-transfer";
import MerchantSecurity from "./components/merchant-security";
import setting from "../../assets/images/learnmore/setting.png";
import Image from "next/image";

export default function LearnMore(): React.JSX.Element {
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
      {/* <Helmet>
        <title>How Peerwallet Works</title>
        <meta
          name="description"
          content="Learn how Peerwallet operates as a global finance marketplace with a peer-to-peer payment system, enabling seamless funding, transferring, and spending of funds worldwide."
        />
        <meta property="og:title" content="How Peerwallet Works" />
        <meta
          property="og:description"
          content="Learn how Peerwallet operates as a global finance marketplace with a peer-to-peer payment system, enabling seamless funding, transferring, and spending of funds worldwide."
        />
        <meta property="og:url" content="https://pwat.app/how-it-works" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Peerwallet" />
        <meta
          property="og:image"
          content="https://pwat.app/meta-banners/learn-more.png"
        />
      </Helmet> */}
      <Box
        bgcolor={"black"}
        pb={deviceType === "mobile" ? 4 : deviceType === "tablet" ? 4 : 25}
      >
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
                fontSize={deviceType === "mobile" ? 45 : 55}
                sx={{
                  textAlign:
                    deviceType === "mobile"
                      ? " center"
                      : deviceType === "tablet"
                      ? "center"
                      : "",
                }}
                color={"white"}
                pt={deviceType === "mobile" ? 10 : 15}
              >
                Learn More
              </Typography>
              <Typography
                variant="h2"
                fontWeight={700}
                fontSize={deviceType === "mobile" ? 45 : 55}
                sx={{
                  textAlign:
                    deviceType === "mobile"
                      ? " center"
                      : deviceType === "tablet"
                      ? "center"
                      : "",
                }}
                color={"#FCC82B"}
              >
                About Peerwallet
              </Typography>
              <Typography
                variant="h6"
                fontSize={17}
                fontWeight={400}
                sx={{
                  textAlign:
                    deviceType === "mobile"
                      ? " center"
                      : deviceType === "tablet"
                      ? "center"
                      : "",
                }}
                color={"white"}
                py={deviceType === "mobile" ? 1 : 3}
              >
                How It Works
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
                    height: deviceType === "mobile" ? 60 : 70,
                    px: deviceType === "mobile" ? 2 : 3,
                    color: "#FCC82B",
                    borderRadius: 2,
                    border: "2px solid #FCC82B",
                    ":hover": { color: "#FCC82B", borderColor: "#ffff" },
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                  onClick={handleOpen}
                >
                  <Icon
                    icon="octicon:play-24"
                    fontSize={26}
                    color="#FCC82B"
                    style={{ marginRight: 5 }}
                  />
                  PLAY VIDEO
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              position={"relative"}
              left={-250}
              top={30}
            >
              <Box
                display={
                  deviceType === "mobile"
                    ? "none"
                    : deviceType === "tablet"
                    ? "none"
                    : "flex"
                }
              >
                <Image src={setting} alt="" />
              </Box>
            </Grid>
          </Grid>
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
          ></iframe>
        </DialogContent>
      </Dialog>
      <Box bgcolor={"whitesmoke"} pb={deviceType === " mobile" ? 10 : 20}>
        <Toolbar />
        <Features deviceType={deviceType} />
        <Toolbar />
        <HowPeerwalletWorks deviceType={deviceType} />
        <Toolbar />
        <TypesOfAccount deviceType={deviceType} />
        <Toolbar />
        <FundingWithdrawal deviceType={deviceType} />
        <Toolbar />
        <FundTransfer deviceType={deviceType} />
        <Toolbar />
        <Toolbar />
        <MerchantSecurity deviceType={deviceType} />
      </Box>
    </>
  );
}
