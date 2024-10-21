"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import bar from "../../../assets/images/api/bar.png";
import Image from "next/image";

const drawerWidth = "100%";

interface SidebarProps {
  anchor: "left" | "right";
}

export default function VirtualCardIntegrationSideBar({ anchor }:SidebarProps): React.JSX.Element{
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "virtual",
        "card",
        "details",
        "terminate",
        "balance",
        "transaction",
      ];
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            setActiveLink(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id: string) => {
    setActiveLink(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Use a media query to check if the screen width is greater than 960px
  const isDesktop = useMediaQuery("(min-width:960px)");

  // Only render the drawer if the screen is wide enough
  return (
    <>
    {
      isDesktop ? (
        <Drawer
          variant="permanent"
          sx={{
            zIndex: 0,
            height: "calc(100vh)",
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              position: "relative",
              height: "100%",
              zIndex: 0,
              overflow: "hidden",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            },
          }}
          anchor={anchor}
        >
          <Box pt={3}>
            <Typography variant="body2" fontWeight={700} fontSize={"18px"} ml={3}>
              On this page
            </Typography>
    
            <Box ml={3}>
              <ul style={{ fontWeight: 700, fontSize: "14px", paddingLeft: 20 }}>
                <li
                  onClick={() => handleClick("virtual")}
                  style={{
                    paddingBottom: 2,
                    listStyleType: "disc",
                    cursor: "pointer",
                    color:
                      activeLink === "virtual" ? "#009FDD" : "#000",
                  }}
                >
                  <Link
                    href="#virtual"
                    color="inherit"
                    underline="none"
                  >
             Virtual Card Integration
                  </Link>
                </li>
                <li
                  onClick={() => handleClick("card")}
                  style={{
                    paddingBottom: 2,
                    listStyleType: "disc",
                    cursor: "pointer",
                    color: activeLink === "card" ? "#009FDD" : "#000",
                  }}
                >
                  <Link href="#card" color="inherit" underline="none">
                  Card Creation
                  </Link>
                </li>
                <li
                  onClick={() => handleClick("details")}
                  style={{
                    paddingBottom: 2,
                    listStyleType: "disc",
                    cursor: "pointer",
                    color: activeLink === "details" ? "#009FDD" : "#000",
                  }}
                >
                  <Link href="#details" color="inherit" underline="none">
                  Card Details
                  </Link>
                  <li
                    onClick={() => handleClick("terminate")}
                    style={{
                      paddingBottom: 2,
                      listStyleType: "disc",
                      cursor: "pointer",
                      color: activeLink === "terminate" ? "#009FDD" : "#000",
                    }}
                  >
                    <Link href="#terminate" color="inherit" underline="none">
                    Terminate Card
                    </Link>
                  </li>
                  <li
                    onClick={() => handleClick("balance")}
                    style={{
                      paddingBottom: 2,
                      listStyleType: "disc",
                      cursor: "pointer",
                      color:
                        activeLink === "balance"
                          ? "#009FDD"
                          : "#000",
                    }}
                  >
                    <Link
                      href="#balance"
                      color="inherit"
                      underline="none"
                    >
                      Card Balance
                    </Link>
                  </li>
                  <li
                    onClick={() => handleClick("transaction")}
                    style={{
                      paddingBottom: 2,
                      listStyleType: "disc",
                      cursor: "pointer",
                      color:
                        activeLink === "transaction"
                          ? "#009FDD"
                          : "#000",
                    }}
                  >
                    <Link
                      href="#transaction"
                      color="inherit"
                      underline="none"
                    >
                      Card Transactions
                    </Link>
                  </li>
                </li>
              </ul>
            </Box>
    
            <Box
              pb={47}
              mt={15}
              sx={{
                borderTopLeftRadius: 85,
                borderTopRightRadius: 85,
                background: "linear-gradient(0deg, #005677 0%, #009FDD 100%)",
              }}
            >
              <Image src={bar} alt="" style={{ width: "95%", marginTop: -70, height:"100%" }} />
              <Typography
                variant="body2"
                fontWeight={900}
                fontSize={"18px"}
                color={"#fff"}
                textAlign={"center"}
              >
                Need Help?
              </Typography>
              <Typography
                variant="body2"
                fontSize={"12px"}
                color={"#fff"}
                textAlign={"center"}
              >
                Feel free to reach out to us for enquiries, resolutions, and
                anything else!
              </Typography>
              <Box display={"flex"} justifyContent={"center"} pt={3}>
                <Button
                  variant="contained"
                  sx={{
                    py: 0.5,
                    px: 2,
                    bgcolor: "#FCC82B",
                    color: "#000",
                    borderRadius: 5,
                    ":hover": { bgcolor: "#fff", color: "#FCC82B" },
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  Contact Us Go
                </Button>
              </Box>
            </Box>
          </Box>
        </Drawer>
      ) : null
    }
    </>
  );
};

 