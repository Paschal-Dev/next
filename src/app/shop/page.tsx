'use client';
import React, { useEffect, useState } from "react";
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
import { Icon } from "@iconify/react";
import Categories from "./categories";
import WhyChooseUs from "./why-choose-us";
import FeedBack from "./feedbacks";
import shop_header from "../../assets/images/shop/shop-header.png";
import Image from "next/image";
// import RunYourBusiness from "./sections/run-your-business";
// import VendorsHowItWorks from "./sections/how-it-works";

export default function ShopPage(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [deviceType, setDeviceType] = useState("mobile");

  const mobile = useMediaQuery(theme.breakpoints.only("xs"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));



  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    <Box>
      <Box bgcolor={"#000"} py={deviceType === 'mobile' ? 3 : 5}>
        <Container disableGutters={deviceType === "mobile" || deviceType === "tablet" ? false : true}>
          <Grid container spacing={deviceType === 'mobile' ? 2 : 1} p={deviceType === 'mobile' ? 3 : 3}>
            <Grid item xs={12} md={8}>
              <Typography
                variant={deviceType === 'mobile' ? "h4" : "h2"}
                fontWeight={700}
                fontSize={deviceType === 'mobile' ? 30 : 64}
                color={"#FCC82B"}
                pt={deviceType === 'mobile' ? 10 : 8}
                textAlign={deviceType === 'mobile' ? "center" : "left"}
              >
                Your Free Store
              </Typography>
              <Typography
                variant={deviceType === 'mobile' ? "h4" : "h2"}
                fontWeight={700}
                fontSize={deviceType === 'mobile' ? 30 : 64}
                color={"#ffff"}
                textAlign={deviceType === 'mobile' ? "center" : "left"}
              >
                On Peerwallet
              </Typography>
              <Typography
                variant="body2"
                color={"#ffff"}
                fontSize={24}
                textAlign={deviceType === 'mobile' ? "center" : "left"}
              >
                Create your product store on peerwallet
              </Typography>
              <Box pt={deviceType === 'mobile' ? 4 : 10} textAlign={deviceType === 'mobile' ? "center" : "left"}>
                <Button
                  variant="outlined"
                  sx={{
                    width: deviceType === 'mobile' ? "80%" : "30%",
                    p: 1.4,
                    color: "#fff",
                    borderRadius: 2,
                    border: "2px solid #FCC82B",
                    ":hover": { borderColor: "#009FDD" },
                    fontSize: 20,
                    fontWeight: 700,
                    mb: deviceType === 'mobile' ? 2 : 0,
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
                    width: deviceType === 'mobile' ? "80%" : "30%",
                    p: 2,
                    backgroundColor: "#FCC82B",
                    color: "#000",
                    marginLeft: deviceType === 'mobile' ? 0 : 2,
                    borderRadius: 2,
                    textTransform: "uppercase",
                    border: "2px solid #FCC82B",
                    ":hover": { background: "none", borderColor: "#009FDD" },
                    fontSize: 20,
                    fontWeight: 700,
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
              right={deviceType === 'mobile' ? 0 : 240}
              top={deviceType === 'mobile' ? 0 : 10}
              textAlign={deviceType === 'mobile' ? "center" : "left"}
              display={deviceType === 'mobile' ? "none" : "block"}
            >
              <Image
                src={shop_header}
                alt=""
                style={{ width: "160%", display: deviceType === 'mobile' ? "none" : "flex" }}
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
        <Categories />
        <WhyChooseUs />
        <FeedBack />
        <Toolbar />
        <Toolbar />
      </Box>
    </Box>
  );
}
