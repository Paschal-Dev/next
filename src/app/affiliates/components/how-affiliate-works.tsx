'use client';
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import marketing from "../../../assets/images/affiliates/marketing-image.png";
import marketingcircle from "../../../assets/images/affiliates/marketing-circle.png";
import faqcircle from "../../../assets/images/affiliates/faq-circle.png";
import loli from "../../../assets/images/affiliates/loli.png";
import alarm from "../../../assets/images/affiliates/alarm.png";
import Image from "next/image";

export default function HowAffiliateWorks(): React.JSX.Element {
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
    <Box bgcolor={"#fff"} style={{ padding: deviceType === 'mobile' ? "15px" : "40px" }}>
      <Container disableGutters={
        deviceType === "mobile" || deviceType === "tablet" ? false : true
      }>
        <Grid container alignItems={"center"} columnSpacing={5} textAlign={deviceType === 'mobile' ? 'center' : 'left'}>
          <Grid item md={6} xs={12}>
            <Typography variant="h2" fontWeight={900} fontSize={deviceType === 'mobile' ? 35 : 45}>
              How To Get Users To Sign Up{" "}
              <span style={{ color: "#009FDD" }}>Using Your Affiliate</span>
            </Typography>
            <Typography
              variant="h3"
              fontWeight={900}
              fontSize={deviceType === 'mobile' ? 35 : 45}
              color={"#009FDD"}
            >
              Link
            </Typography>
            <Typography variant="body2" fontSize={16} pt={3}>
              You can refer unlimited users to Peerwallet, if you have a YouTube
              channel, Twitter follower, Tiktok, or Facebook followers, then
              this becomes a starting point. You can share your affiliate link
              on your socials, or if you have some budget we recommend you run
              some campaigns.
            </Typography>
            <Box display="flex" flexDirection={deviceType === 'mobile' ? 'column': 'row'} alignItems={deviceType === 'mobile' ? 'center' : "start"} textAlign={deviceType === 'mobile' ? 'center' : 'start'} pt={deviceType === 'mobile' ? 0 : 3}>
              <Box mr={deviceType === 'mobile' ? 0 : 2} mt={1}>
                <Image src={alarm} alt="alarm" width={50} />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  Marketing Campaigns
                </Typography>
                <Typography variant="body2" fontSize={16}>
                  When you run some paid campaigns, you would be able to reach a
                  wider audience and more persons would register using your
                  affiliate link. When referring users to Peerwallet, there are
                  several keywords you can use;
                </Typography>
              </Box>
            </Box>
            <Box display="flex" flexDirection={deviceType === 'mobile' ? 'column': 'row'} alignItems={deviceType === 'mobile' ? 'center' : "start"} textAlign={deviceType === 'mobile' ? 'center' : 'start'} pt={deviceType === 'mobile' ? 0 : 3}>
              <Box mr={deviceType === 'mobile' ? 0 : 2} mt={1}>
                <Image src={loli} alt="alarm" width={50} />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  Your Target Audience
                </Typography>
                <Typography variant="body2" fontSize={16}>
                  Either you want to target sellers who should integrate
                  Peerwallet and enable them to sell globally, or you want to
                  target users who want to create unlimited virtual cards with
                  API access or, you want to target Merchants who can provide
                  financial services on Peerwallet.
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" fontSize={16} pt={3}>
              For which target method you would be using, be sure to properly
              explain how Peerwallet works to them in a few lines and also you
              can refer them with beautiful banners
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              position={"relative"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image src={faqcircle} alt="" style={{width: '100%'}} />
              <Image
                src={marketingcircle}
                alt=""
                style={{ position: "absolute", width: '100%' }}
              />
              <Image
                src={marketing}
                alt=""
                style={{ position: "absolute", width: '100%' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
