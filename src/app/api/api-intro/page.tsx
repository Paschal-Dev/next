/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Link, Typography, useMediaQuery } from "@mui/material";
import ApiIntroductionSidebar from "./introduction-sidebar";
import MainSideBar from "../component/mainsidebar";
import { theme } from "@/assets/themes/theme";

export default function ApiIntroduction(): React.JSX.Element {

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
      {/* <Box
        p={2}
        bgcolor={"#009FDD"}
        position={"fixed"}
        width={"100%"}
        zIndex={1}
      ></Box> */}
      <Box bgcolor={"whitesmoke"}>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <MainSideBar />
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              overflowY: "scroll", // Ensures scrollbar is always visible
              height: "100vh",
              "&::-webkit-scrollbar": {
                width: "9px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#009FDD",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#b7e2f3ec",
              },
              "&::-webkit-scrollbar-button": {
                display: "none",
              },
              scrollbarWidth: "auto", // Ensures scrollbar is visible by default
              scrollbarColor: "#009FDD #b7e2f3ec",
            }}
          >
            <Container
              disableGutters={
                deviceType === "mobile" || deviceType === "tablet"
                  ? false
                  : true
              }
            >
              <Box mt={deviceType === "mobile" ? 6 : 4}>
                <Typography
                  variant="h2"
                  fontSize={20}
                  fontWeight={900}
                  id="api-introduction"
                >
                  API Introduction
                </Typography>
                <Typography variant="body2" fontSize={"16px"} mt={1}>
                  Include your public or private key depending on requirement.
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mt={2}
                >
                  <span style={{ fontSize: "18px", fontWeight: 500 }}>
                    The Note Response:
                  </span>
                  The errors are handled in a simple manner and a 'note'
                  variable is always returned so that developers can quickly
                  understand the interpreted response returned.
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mt={2}
                >
                  <span
                    style={{ fontSize: "18px", fontWeight: 500, color: "red" }}
                  >
                    Private Key:
                  </span>
                  If anyone has access to your Private key, they can transfer
                  all your Peerwallet funds! You should not display your private
                  key to users! Additionally, you should set more security
                  feature for your API when setting up{" "}
                  <Link href="" color={"#009fdd"}>
                    from here
                  </Link>
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid item md={3}>
            <ApiIntroductionSidebar anchor={"right"} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
