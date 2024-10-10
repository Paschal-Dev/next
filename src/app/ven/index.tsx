"use client"; 
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import vendors_header from "../../assets/images/vendors/vendors_header.svg";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import RunYourBusiness from "./sections/run-your-business";
import VendorsHowItWorks from "./sections/how-it-works";
import VendorBenefit from "./sections/vendor-benefit";
import FeesSection from "./sections/fees";
import VendorsGetStarted from "./sections/get-started";
import Image from "next/image";

export default function Vendors(): React.JSX.Element {
  const [open, setOpen] = useState(false);
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      {/* <Helmet>
        <title>Own a Fintech Business</title>
        <meta
          name="description"
          content="Revamp your financial future with Peerwallet: Unlock the world of fintech"
        />
        <meta property="og:title" content="Own a Fintech Business" />
        <meta
          property="og:description"
          content="Revamp your financial future with Peerwallet: Unlock the world of fintech"
        />
        <meta property="og:url" content="https://pwat.app/ven" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Peerwallet" />
        <meta
          property="og:image"
          content="https://pwat.app/meta-banners/vendors.png"
        />
      </Helmet> */}
      <Box bgcolor={"#000"} pb={deviceType === "mobile" ? 3 : 10}>
        <Container
          disableGutters={
            deviceType === "mobile" || deviceType === "tablet" ? false : true
          }
        >
          <Grid
            container
            spacing={deviceType === "mobile" ? 0 : 1}
            p={deviceType === "mobile" ? 0 : 4}
          >
            <Grid item xs={12} md={8}>
              <Typography
                variant={deviceType === "mobile" ? "h4" : "h2"}
                fontWeight={900}
                fontSize={deviceType === "mobile" ? 25 : 53}
                color={"#ffff"}
                pt={deviceType === "mobile" ? 10 : 10}
                textAlign={deviceType === "mobile" ? "center" : "left"}
              >
                Own A
              </Typography>
              <Typography
                variant={deviceType === "mobile" ? "h4" : "h2"}
                fontWeight={900}
                fontSize={deviceType === "mobile" ? 25 : 53}
                color={"#FCC82B"}
                textAlign={deviceType === "mobile" ? "center" : "left"}
                pb={1}
              >
                Fintech Business
              </Typography>
              <Typography
                variant="body2"
                color={"#ffff"}
                fontSize={deviceType === "mobile" ? 15 : 23}
                textAlign={deviceType === "mobile" ? "center" : "left"}
                fontWeight={500}
              >
                REVAMP YOUR FINANCIAL FUTURE WITH <br /> PEERWALLET: UNLOCK THE
                WORLD OF FINTECH
              </Typography>
              <Box
                pt={deviceType === "mobile" ? 4 : 8}
                textAlign={deviceType === "mobile" ? "center" : "left"}
              >
                <Button
                  variant="outlined"
                  sx={{
                    width: deviceType === "mobile" ? "100%" : "30%",
                    p: 1.4,
                    color: "#fff",
                    borderRadius: 2,
                    border: "2px solid #FCC82B",
                    ":hover": { borderColor: "#009FDD" },
                    fontSize: 20,
                    fontWeight: 800,
                    mb: deviceType === "mobile" ? 2 : 0,
                  }}
                  onClick={handleOpen}
                >
                  <IconButton>
                    <Icon icon="octicon:play-24" fontSize={26} color="#fff" />
                  </IconButton>
                  PLAY VIDEO
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    width: deviceType === "mobile" ? "100%" : "30%",
                    p: 2,
                    backgroundColor: "#009FDD",
                    color: "#fff",
                    marginLeft: deviceType === "mobile" ? 0 : 2,
                    borderRadius: 2,
                    textTransform: "uppercase",
                    border: "2px solid #009FDD",
                    ":hover": { background: "none", borderColor: "#FCC82B" },
                    fontSize: 20,
                    fontWeight: 800,
                  }}
                >
                  GET STARTED
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              position={"relative"}
              right={deviceType === "mobile" ? 0 : 150}
              top={deviceType === "mobile" ? 0 : "14px"}
              textAlign={deviceType === "mobile" ? "center" : "left"}
            >
              <Image
                src={vendors_header}
                alt=""
                style={{
                  width: "132%",
                  display: deviceType === "mobile" ? "none" : "flex",
                }}
              />
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
      <Box bgcolor={"whitesmoke"}>
        <RunYourBusiness />
        <VendorsHowItWorks />
        <VendorBenefit />
        <FeesSection />
        <VendorsGetStarted />
        <Toolbar />
        <Toolbar />
      </Box>
    </Box>
  );
}
