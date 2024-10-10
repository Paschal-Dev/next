'use client';
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
// import { Helmet } from "react-helmet-async";
import Sellers from "./components/sellers";
import AffiliateFAQ from "./components/affiliate-faq";
import AffiliateHow from "./components/affiliate-how";
import HowAffiliateWorks from "./components/how-affiliate-works";
import faq from "../../assets/images/affiliates/faq.png";
import Image from "next/image";

export default function Affiliate(): React.JSX.Element {
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
    <>
      {/* <Helmet>
        <title>Affiliate Program</title>
        <meta
          name="description"
          content="Learn about Peerwallet's affiliate program and how you can earn by promoting the platform."
        />
        <meta property="og:title" content="Affiliate Program" />
        <meta
          property="og:description"
          content="Learn about Peerwallet's affiliate program and how you can earn by promoting the platform."
        />
        <meta property="og:url" content="https://pwat.app/affiliates" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Peerwallet" />
        <meta
          property="og:image"
          content="https://pwat.app/meta-banners/affiliates.png"
        />
      </Helmet> */}
      <Box bgcolor={"#000"} pb={deviceType === "mobile" ? 8 : 15}>
        <Container
          disableGutters={
            deviceType === "mobile" || deviceType === "tablet" ? false : true
          }
        >
          <Grid container>
            <Grid item xs={12} md={7}>
              <Typography
                variant={deviceType === "mobile" ? "h4" : "h2"}
                fontWeight={700}
                fontSize={deviceType === "mobile" ? 30 : 55}
                color={"#FCC82B"}
                pt={deviceType === "mobile" ? 10 : 15}
                textAlign={deviceType === "mobile" ? "center" : "left"}
              >
                Affiliate Programme
              </Typography>
              <Typography
                variant={deviceType === "mobile" ? "h4" : "h2"}
                fontWeight={700}
                fontSize={deviceType === "mobile" ? 30 : 55}
                color={"#ffff"}
                textAlign={deviceType === "mobile" ? "center" : "left"}
              >
                on Peerwallet
              </Typography>
              <Typography
                variant="body1"
                color={"#ffff"}
                textAlign={deviceType === "mobile" ? "center" : "left"}
              >
                Earn from users’ transactions when you refer them to Peerwallet.
              </Typography>
              <Box pt={deviceType === "mobile" ? 3 : 5}>
                <Button
                  variant="outlined"
                  sx={{
                    width: deviceType === "mobile" ? "100%" : "30%",
                    p: 2,
                    color: "#FCC82B",
                    borderRadius: 2,
                    border: "2px solid #FCC82B",
                    ":hover": { border: "2px solid #009FDD", color: "#fff" },
                    fontSize: 20,
                    fontWeight: 700,
                    mb: deviceType === "mobile" ? 2 : 0,
                  }}
                  onClick={handleOpen}
                >
                  <Icon
                    icon="octicon:play-24"
                    fontSize={26}
                    style={{ marginRight: 4 }}
                  />
                  PLAY VIDEO
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: deviceType === "mobile" ? "100%" : "30%",
                    py: 2,
                    px: 3,
                    color: "#fff",
                    marginLeft: deviceType === "mobile" ? 0 : 2,
                    borderRadius: 2,
                    textTransform: "uppercase",
                    border: "2px solid #009FDD",
                    ":hover": { background: "none", borderColor: "#009FDD" },
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                >
                  GET STARTED
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Image
                src={faq}
                alt=""
                style={{
                  width: "100%",
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
      <Box bgcolor={"whitesmoke"} pb={15}>
        <AffiliateHow />
        <Sellers />
        <HowAffiliateWorks />
        <AffiliateFAQ />
      </Box>
    </>
  );
}
