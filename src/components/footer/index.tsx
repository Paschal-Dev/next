"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FooterMenuSet from "./components/footer-menus";
import { Icon } from "@iconify/react";
import Image from "next/image";
import playstore from "../../assets/images/footer/playstore.png";
import apple from "../../assets/images/footer/apple.png";
import bgcover from "../../assets/images/footer/footertop-bg.png";
import footercard from "../../assets/images/footer/footer-card.png";
import bg from "../../assets/images/footer/footer-bg.png";
import pwat from "../../assets/images/peerwallet-logo.png";
import { theme } from "../../assets/themes/theme";
import { ContainedBtn } from "../../components/buttons";

export default function Footer(): React.JSX.Element {
  const [deviceType, setDeviceType] = useState("mobile");

  const mobile = useMediaQuery(theme.breakpoints.only("xs"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));

  const footerMenus1 = [
    { label: "Developers", href: "./dev" },
    { label: "How it Works", href: "./how-it-works" },
    { label: "Contact Us", href: "./contact-us" },
    { label: "API", href: "/api" },
    { label: "Affiliates", href: "./affiliates" },
    { label: "Shop", href: "./shop" },
  ];

  const footerMenus2 = [
    { label: "Knowledge base", href: "./doc" },
    { label: "Blog", href: "/blog" },
    { label: "Terms & Condition", href: "./terms" },
    { label: "Privacy Policy", href: "./policy" },
    { label: "Login", href: "/login" },
    { label: "Redeem Voucher", href: "./shop/voucher" },
  ];

  const footerMenus3 = [
    { label: "Sellers", href: "./sell" },
    { label: "Send Money", href: "./send" },
    { label: "Vendors", href: "./ven" },
    { label: "Merchant", href: "./mer" },
    { label: "Virtual Cards", href: "./vcard" },
    { label: "Vouchers", href: "./voucher" },
  ];

  const mobileFooterMenus1 = [
    { label: "Login", href: "/login" },
    { label: "How it Works", href: "./how-it-works" },
    { label: "API", href: "./api" },
    { label: "Knowledge base", href: "/doc" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "./contact-us" },
    { label: "Developers", href: "/dev" },
    { label: "Terms & Condition", href: "./terms" },
    { label: "Privacy Policy", href: "./policy" },
  ];

  const mobileFooterMenus2 = [
    { label: "Sellers", href: "/sell" },
    { label: "Shop", href: "/shop" },
    { label: "Affiliates", href: "/affiliates" },
    { label: "Vendors", href: "/ven" },
    { label: "Vouchers", href: "/voucher" },
    { label: "Merchant", href: "/mer" },
    { label: "Send Money", href: "/send" },
    { label: "Virtual Cards", href: "/vcard" },
    { label: "Redeem Voucher", href: "/shop/voucher" },
  ];

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
    <Box
      color={"#fff"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      sx={{
        backgroundImage: `url(${bg.src})`,
        paddingTop: 0,
      }}
    >
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Box
          position={"absolute"}
          bottom={deviceType === "mobile" ? 60 : 100}
          bgcolor={"whitesmoke"}
          borderRadius={deviceType === "mobile" ? 4 : 8}
          sx={{
            position: "relative",
            backgroundImage: `url(${bgcover.src})`,
            backgroundSize: "cover",
          }}
        >
          <Box
            borderRadius={deviceType === "mobile" ? 4 : 8}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#ffffffbd",
            }}
          ></Box>
          <Grid container>
            <Grid
              item
              xs={12}
              md={8}
              p={3}
              zIndex={3}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Box textAlign={"center"} mb={2}>
                <Typography
                  variant="h6"
                  fontWeight={deviceType === "mobile" ? 800 : 700}
                  fontSize={deviceType === "mobile" ? "1.5em" : 60}
                  color={"black"}
                >
                  Get Started{" "}
                  <span style={{ color: "#009FDD" }}>In Minutes</span>
                </Typography>
                <Typography
                  variant="body2"
                  color={"#000"}
                  fontWeight={400}
                  fontSize={deviceType === "mobile" ? "1em" : 30}
                >
                  Create your Peerwallet account today!
                </Typography>
              </Box>
              <ContainedBtn text="Get Started" />
            </Grid>
            {deviceType !== "mobile" && (
              <Grid item xs={12} md={4} zIndex={3}>
                <Image src={footercard} alt=""  />
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>

      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Grid container mt={deviceType === "mobile" ? 0 : -2}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            display={"flex"}
            flexDirection={"column"}
            alignItems={
              deviceType === "mobile" || deviceType === "tablet"
                ? "center"
                : "start"
            }
          >
            <Image src={pwat} alt="Logo" />
            <Typography
              variant="body1"
              fontWeight={500}
              textAlign={
                deviceType === "mobile" || deviceType === "tablet"
                  ? "center"
                  : "left"
              }
              width={
                deviceType === "mobile" || deviceType === "tablet"
                  ? "90%"
                  : "50%"
              }
            >
              Peerwalet is a peer to peer payment platform which accepts funding
              in over 300 payment methods
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              flexDirection={"row"}
              gap={2}
              my={3}
            >
              <Link
                underline="none"
                href="https://play.google.com"
                target="_blank"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  border={1}
                  borderColor="#ffff"
                  px={3}
                  borderRadius={2}
                  py={1}
                >
                  <Box mr={2} display="flex" alignItems="center">
                    <Image
                      src={playstore}
                      alt="Play Store"
                      width={deviceType === "mobile" ? 20 : 40}
                      height={deviceType === "mobile" ? 20 : 40}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      color="#fff"
                      fontSize={deviceType === "mobile" ? 12 : 14}
                      fontWeight={300}
                    >
                      Get it on
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#fff"
                      fontSize={deviceType === "mobile" ? 12 : 14}
                      fontWeight={700}
                    >
                      Google Play
                    </Typography>
                  </Box>
                </Box>
              </Link>
              <Link
                underline="none"
                href="https://www.apple.com/app-store/"
                target="_blank"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  border={1}
                  borderColor="#ffff"
                  px={2}
                  borderRadius={2}
                  py={1}
                >
                  <Box mr={1} display="flex" alignItems="center">
                    <Image
                      src={apple}
                      alt="App Store"
                      width={deviceType === "mobile" ? 20 : 40}
                      height={deviceType === "mobile" ? 20 : 40}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      fontSize={deviceType === "mobile" ? 12 : 14}
                      color="#fff"
                      fontWeight={300}
                    >
                      Download on the
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#fff"
                      fontSize={deviceType === "mobile" ? 12 : 14}
                      fontWeight={700}
                    >
                      App Store
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box width={"100%"} display="flex" alignItems="center">
              {deviceType !== "mobile" ? (
                <Grid container rowSpacing={3}>
                  <Grid item xs={12} sm={4} md={4}>
                    <FooterMenuSet
                      deviceType={deviceType}
                      title="Quick Links"
                      menus={footerMenus1}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <FooterMenuSet
                      deviceType={deviceType}
                      title="Quick Links"
                      menus={footerMenus2}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <FooterMenuSet
                      deviceType={deviceType}
                      title="Quick Links"
                      menus={footerMenus3}
                    />
                  </Grid>
                </Grid>
              ) : (
                <Grid container rowSpacing={3}>
                  <Grid item xs={6} display={"flex"}>
                    <FooterMenuSet
                      deviceType={deviceType}
                      title="Quick Links"
                      menus={mobileFooterMenus1}
                    />
                  </Grid>
                  <Grid item xs={6} display={"flex"}>
                    <FooterMenuSet
                      deviceType={deviceType}
                      title="Quick Links"
                      menus={mobileFooterMenus2}
                    />
                  </Grid>
                </Grid>
              )}
            </Box>
          </Grid>
        </Grid>
        <Box></Box>
      </Container>
      <Box
        borderTop={"1px solid white"}
        borderBottom={"1px solid white"}
        p={1}
        mt={3}
      >
        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
          <Link px={1}>
            <IconButton>
              <Icon icon="ri:facebook-fill" fontSize={26} color="#B5B5B5" />
            </IconButton>
          </Link>
          <Link px={1}>
            <IconButton>
              <Icon icon="mdi:twitter" fontSize={26} color="#B5B5B5" />
            </IconButton>
          </Link>
          <Link px={1}>
            <IconButton>
              <Icon
                icon="mingcute:telegram-fill"
                fontSize={26}
                color="#B5B5B5"
              />
            </IconButton>
          </Link>
          <Link px={1}>
            <IconButton>
              <Icon icon="mdi:linkedin" fontSize={26} color="#B5B5B5" />
            </IconButton>
          </Link>
          <Link>
            <IconButton>
              <Icon icon="bi:youtube" fontSize={26} color="#B5B5B5" />
            </IconButton>
          </Link>
        </Box>
      </Box>
      <Box
        m={"auto"}
        mt={3}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        textAlign={"center"}
        gap={2}
        width={"95%"}
      >
        <Typography
          variant="body2"
          fontSize={deviceType === "mobile" ? 10 : 12}
        >
          Peerwallet Limited has no relation to Paypal, Stripe, Cashapp,
          MoneyGram, Neteller, Venmo, Apple, ChimpChange, Western Union,
          Payoneer, WorldRemit, Paxum, Amazon OkPay, Payza, Walmart, Reloadit,
          Perfect Money, Square Cash, NetSpend, Chase QuickPay, Skill WebMoney,
          Google Wallet, Blue Bird, Vanilla, MyVanilla, One Vanilla or any other
          payment method. We make no claims about being supported by or
          supporting these services. Their respective wordmarks and trademarks
          belong to them alone.
        </Typography>
        <Typography variant="body2" color={"#FCC82B"}>
          Copyright @ 2024 all rights reserved | Peerwallet Limited s.r.o.
        </Typography>
      </Box>
    </Box>
  );
}
