"use client"; 
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../../assets/themes/theme";
import dot from "../../assets/images/faq/dot.svg";
import map from "../../assets/images/faq/map.svg";
import question from "../../assets/images/faq/questionmark.svg";
import UsersFaq from "./sections/usersfaq";
import MerchantFaq from "./sections/merchantfaq";
import SellersFaq from "./sections/sellersfaq";
import Image from "next/image";

export default function Faq(): React.JSX.Element {
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
    <Box>
      <Box bgcolor={"#000000"} pb={2.4}>
        <Container disableGutters>
          <Grid container>
            <Grid item md={6} sm={12} xs={12} sx={{ pt: 10 }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight:
                    deviceType === "mobile"
                      ? 700
                      : deviceType === "tablet"
                      ? 750
                      : 900,
                  fontSize:
                    deviceType === "mobile"
                      ? "50px"
                      : deviceType === "tablet"
                      ? "80px"
                      : "128px",
                  textAlign:
                    deviceType === "mobile"
                      ? "center"
                      : deviceType === "tablet"
                      ? "center"
                      : " ",
                }}
                color={"#FCC82B"}
              >
                FAQ
              </Typography>
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{
                  fontSize: deviceType === "mobile" ? "14px" : "24px",
                  textAlign:
                    deviceType === "mobile"
                      ? "center"
                      : deviceType === "tablet"
                      ? "center"
                      : " ",
                }}
                color={"#FFFFFF"}
              >
                Frequently Asked Questions
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              xs={12}
              pt={4}
              sx={{
                display:
                  deviceType === "mobile"
                    ? "none"
                    : deviceType === "tablet"
                    ? "none"
                    : "flex",
              }}
            >
              <Box>
                <Image
                  src={question}
                  alt="questionmark"
                  style={{
                    position: "relative",
                    left: "1%",
                    width: '100%'
                  }}
                />
                <Image
                  src={dot}
                  alt="dot"
                  style={{
                    position: "absolute",
                    right: "12%",
                    bottom: "80%",
                    width: '3%'
                  }}
                />
                <Image
                  src={dot}
                  alt="dot"
                  style={{
                    position: "absolute",
                    right: "10%",
                    bottom: "46%",
                    width: '3%'
                  }}
                />
                <Image
                  src={map}
                  alt="dot"
                  style={{
                    position: "absolute",
                    right: "0%",
                    bottom: "3.5%",
                    width: '8%'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box bgcolor={"whitesmoke"}>
        <UsersFaq deviceType={deviceType} />
        <Toolbar />
        <SellersFaq deviceType={deviceType} />
        <Toolbar />
        <MerchantFaq deviceType={deviceType} />
        <Toolbar />
        <Toolbar />
      </Box>
    </Box>
  );
}
