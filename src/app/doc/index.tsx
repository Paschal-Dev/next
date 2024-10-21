"use client"

import React, { useEffect, useState } from "react";
import DocHeader from "./components/header";
import DocCategories from "./main";
import { Box, useMediaQuery } from "@mui/material";
import { theme } from "@/assets/themes/theme";

export default function DocMainPage(): React.JSX.Element {
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
    <Box mb={10}>
      <DocHeader deviceType={deviceType} />
      <DocCategories deviceType={deviceType} />
    </Box>
  );
}
