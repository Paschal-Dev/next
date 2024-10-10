'use client';
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
// import { Helmet } from "react-helmet";
import Information from "./sections/information";
import AboutPeerwallet from "./sections/aboutpeerwallet";
import MerchantTerms from "./sections/merchantterms";
import AmlPolicy from "./sections/amlpolicy";
import terms from "../../assets/images/terms/terms.svg";
import { theme } from "../../assets/themes/theme";
import Image from "next/image";

export default function TermsAndCondition(): React.JSX.Element {
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
      {/* <Helmet>
        <title>Terms and Conditions</title>
        <meta
          name="description"
          content="Read Peerwallet's terms and conditions to understand your rights and responsibilities when using the platform."
        />
        <meta property="og:title" content="Terms and Conditions" />
        <meta
          property="og:description"
          content="Read Peerwallet's terms and conditions to understand your rights and responsibilities when using the platform."
        />

        <meta property="og:url" content="https://pwat.app/terms" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Peerwallet" />
        <meta
          property="og:image"
          content="https://pwat.app/meta-banners/terms.png"
        />
      </Helmet> */}
      <Box bgcolor={"#000"}>
        <Container
          disableGutters={
            deviceType === "mobile" || deviceType === "tablet" ? false : true
          }
        >
          <Grid container>
            <Grid
              item
              md={7}
              xs={12}
              sx={{ pt: deviceType === "mobile" ? 5 : 11 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: deviceType === "mobile" ? 700 : 900,
                  fontSize: deviceType === "mobile" ? "50px" : "64px",
                  textAlign:
                    deviceType === "mobile"
                      ? "center"
                      : deviceType === "tablet"
                      ? "center"
                      : "",
                  pt: deviceType === "mobile" ? 6 : 0,
                }}
                color={"#fff"}
              >
                Terms & <span style={{ color: "#FCC82B" }}> Conditions</span>
              </Typography>
              <Typography
                variant="body2"
                fontWeight={500}
                fontSize={"15px"}
                sx={{
                  textAlign:
                    deviceType === "mobile"
                      ? "center"
                      : deviceType === "tablet"
                      ? "center"
                      : "",
                      pb: deviceType === "mobile" ? 3 : deviceType === "tablet" ? 3 : 0,
                }}
                color={"#fff"}
              >
                Binding document about Peerwallet
              </Typography>
            </Grid>
            <Grid item md={5} xs={12}>
              <Image
                src={terms}
                alt="terms"
                style={{ display: deviceType === "mobile" ? "none" : deviceType === "tablet" ? "none" : "flex" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box bgcolor={"whitesmoke"} pb={deviceType === "mobile" ? 10 : 25}>
        <Information deviceType={deviceType} />
        <AboutPeerwallet deviceType={deviceType} />      
        <MerchantTerms deviceType={deviceType} />
        <AmlPolicy deviceType={deviceType} />
        
      </Box>
    </>
  );
}
