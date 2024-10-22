/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Link,
  Typography,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import getting from "../../assets/images/api/gettingstarted.svg";
import Image from "next/image";

const theme = createTheme();

export default function Main(): React.JSX.Element {

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
    <Box pt={3} id="getting-started">
      <Container disableGutters={deviceType === "mobile" || deviceType === "tablet" ? false : true}>
        <Box
          bgcolor={"#fff"}
          borderRadius={3}
          sx={{ mt: deviceType === "mobile" ? 2 : 0 }}
        >
          <Container>
            <Typography
              variant="h2"
              sx={{
                fontWeight: deviceType === "mobile" ? 700 : 900,
                fontSize: deviceType === "mobile" ? "30px" : "50px",
                p: deviceType === "mobile" ? 2 : 3,
                textAlign: deviceType === "mobile" ? "center" : "",
              }}
            >
              Getting <span style={{ color: "#009FDD" }}>Started</span>
            </Typography>
          </Container>
          <Box border={"1px solid #D9D9D9"}></Box>
          <Container>
            <Box p={3}>
              <Image src={getting} alt="" style={{width:'99%', height:"100%"}}/>
              <Typography
                variant="body2"
                sx={{ fontSize: deviceType === "mobile" ? "14px" : "16px" }}
                fontWeight={400}
                pb={1}
              >
                First you need to set your
                <ThemeProvider theme={theme}>
                  <Link
                    href="#"
                    target="_blank"
                    sx={{
                      color: "primary.main",
                      "&:hover": { color: "primary.dark" },
                      pl: 1,
                    }}
                  >
                    API keys & permission
                  </Link>
                </ThemeProvider>
                , before anything.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: deviceType === "mobile" ? "14px" : "16px",
                  pb: deviceType === "mobile" ? 1 : 3,
                }}
                fontWeight={400}
              >
                Some of these calls require you become a Merchant on Peerwallet,
                If you aren't, you <br />
                can apply or learn more
                <ThemeProvider theme={theme}>
                  <Link
                    href="#"
                    target="_blank"
                    sx={{
                      color: "primary.main",
                      "&:hover": { color: "primary.dark" },
                      pl: 1,
                    }}
                  >
                    from here
                  </Link>
                </ThemeProvider>
              </Typography>
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
