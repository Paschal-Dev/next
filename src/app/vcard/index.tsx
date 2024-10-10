"use client";
import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
// import { Helmet } from "react-helmet-async";
import VCHeader from "./sections/header";
import HowItWorks from "./sections/how-it-works";
import WhyChoose from "./sections/why-choose";
import { theme } from "../../assets/themes/theme";
// import { useLocation } from "react-router-dom";

export default function VirtualCard(): React.JSX.Element {
  // const description: string =
  //   "Discover how to use Peerwallet's virtual cards for secure online transactions, enabling easy and safe spending of your funds.";
  // const location = useLocation();
  // const [desc, setDesc] = React.useState<string>(description);
  // const [url, setUrl] = React.useState("vcard");
  // const [imgOg, setImgOg] = React.useState("og:image");
  // const [imgURL, setImgURL] = React.useState(
  //   "https://pwat.app/meta-banners/virtua-cards.png"
  // );
  const [deviceType, setDeviceType] = useState<string>("mobile");

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

  // useEffect(() => {
  //   setDesc(description);
  //   setUrl("vcard");
  //   setImgOg("og:image");
  //   setImgURL("https://pwat.app/meta-banners/virtua-cards.png");
  // }, [location]);

  return (
    <Box mb={deviceType === "mobile" ? 10 : 25}>
      {/* <Helmet>
        <title>Virtual Cards</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="/vcard" />
        <meta property="og:title" content="Virtual Cards" />
        <meta
          property="og:description"
          content="Discover how to use Peerwallet's virtual cards for secure online transactions, enabling easy and safe spending of your funds."
        />
        <meta property="og:url" content={`https://pwat.app/${url}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Peerwallet" />
        <meta property={imgOg} content={imgURL} />
      </Helmet> */}
      <VCHeader deviceType={deviceType} />
      <HowItWorks deviceType={deviceType} />
      <WhyChoose deviceType={deviceType} />
    </Box>
  );
}
