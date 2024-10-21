"use client";

import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../../assets/themes/theme";
import Widget from "./widget/widget";
import RVImage from "../../../assets/images/rv/redeem-voucher.png";
import topBg from "../../../assets/images/rv/rv-top-bg.png";
import bg from "../../../assets/images/rv/rv-bg.png";
import line from "../../../assets/images/rv/rv-line.png";
import Image from "next/image";

export default function RedeemVoucher(): React.JSX.Element {
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
    <Box mb={deviceType === "mobile" ? 10 : 25}>
      <Box
        pt={deviceType === "mobile" || deviceType === "tablet" ? 12 : 4}
        pb={3}
        sx={{ backgroundImage: `url(${topBg.src})` }}
        textAlign={"center"}
      >
        <Typography
          variant="h3"
          fontSize={deviceType === "mobile" ? 32 : 40}
          fontWeight={800}
          color={"#fff"}
        >
          <span style={{ color: theme.palette.primary.main }}>Redeem</span>{" "}
          Peerwallet Voucher
        </Typography>
        <Image src={line} alt="" style={{ width: "100%", height: "auto" }} />
      </Box>
      <Box height={16} bgcolor={theme.palette.primary.main} width={"100%"} />
      <Box sx={{ backgroundImage: `url(${bg.src})` }}>
        <Grid container columnSpacing={deviceType === "mobile" ? 0 : 5}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            bgcolor={"#e5f5fb"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              src={RVImage}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            py={5}
            px={3}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"center"}
          >
            <Widget deviceType={deviceType} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
