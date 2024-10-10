'use client';
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import seller from "../../../assets/images/affiliates/seller.png";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Sellers(): React.JSX.Element {
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
    <Box bgcolor={"#000"} py={6}>
      <Container disableGutters={
                deviceType === "mobile" || deviceType === "tablet" ? false : true
            }>
        <Box
          py={3}
          px={2}
          sx={{
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            background: "linear-gradient(90deg, #161616 0%, #333333 100%)",
          }}
        >
            <Grid container textAlign={deviceType === 'mobile' ? 'center' : 'left'}>
              <Grid item md={6}>
                <Image
                  src={seller}
                  alt=""
                  style={{ display: deviceType === 'mobile' ? "none" : "flex", width: '90%', height: '90%' }}
                />
              </Grid>
              <Grid item md={6}>
                <Typography
                  variant="h2"
                  fontWeight={700}
                  fontSize={deviceType === 'mobile' ? 40 : 55}
                  color={"#fff"}
                >
                  Seller’s <span style={{ color: "#FCC82B" }}> Auto </span>
                </Typography>
                <Typography
                  variant="h2"
                  fontWeight={700}
                  fontSize={deviceType === 'mobile' ? 40 : 55}
                  color={"#FCC82B"}
                >
                  Affiliate
                </Typography>
                <Typography variant="body2" fontSize={16} color={"#fff"}>
                  If you integrate Peerwallet into your website to receive
                  payment, or you create a payment link to receive funds from a
                  non-peerwallet user, when the user registers & pays, you
                  automatically become their sponsor.
                </Typography>
                <Typography variant="body2" fontSize={16} pt={2} color={"#fff"}>
                  This makes the whole affiliate process even more interesting
                  and easy, since users are coming to peerwallet for the first
                  time using your payment link or from your website, they should
                  automatically become your referred users which we have
                  implemented.
                </Typography>
                <Typography variant="body2" fontSize={16} color={"#fff"}>
                  This would only function when you have set your affiliate link{" "}
                  <br />
                  from{" "}
                  <Link underline="always">
                    <span style={{ color: "#009FDD" }}>here </span>
                  </Link>
                </Typography>
              </Grid>
            </Grid>
        </Box>
      </Container>
    </Box>
  );
}
