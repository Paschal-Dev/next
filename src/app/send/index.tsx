"use client";

import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import SendHeader from "./send-page/sections/header";
import SendSteps from "./send-page/sections/steps";
import WhyChoose from "./send-page/sections/why-choose";
import SendHowItWorks from "./send-page/sections/how-it-works";
import TransferSecurity from "./send-page/sections/transfer.security";
import { theme } from "../../assets/themes/theme";

export default function SendMainPage(): React.JSX.Element {
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
    <Box mb={deviceType === "mobile" ? 8 : 15}>
      <SendHeader deviceType={deviceType} />
      <SendSteps deviceType={deviceType} />
      <WhyChoose deviceType={deviceType} />
      <SendHowItWorks deviceType={deviceType} />
      <TransferSecurity deviceType={deviceType} />
    </Box>
  );
}
