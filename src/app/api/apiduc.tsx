"use client";
import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import example from "../../assets/images/api/example.svg";
import circle from "../../assets/images/api/circle.svg";
import green from "../../assets/images/api/green.svg";
import React, { useEffect, useState } from "react";
import Card from "./card";
import Image from "next/image";
import { theme } from "@/assets/themes/theme";

export default function ApiDoc(): React.JSX.Element {

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
    <Box py={3} id="apidoc">
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Box bgcolor={"#fff"} borderRadius={4}>
          <Typography
            variant="h2"
            p={3}
            sx={{
              fontSize: deviceType === "mobile" ? "30px" : "50px",
              fontWeight: deviceType === "mobile" ? 700 : 900,
              }}
            pb={2}
          >
            API <span style={{ color: "#009FDD" }}>Documentation</span>
          </Typography>
          <Box border={"1px solid #D9D9D9"}></Box>
          <Box p={3}>
            <Grid container spacing={1}>
              <Grid item md={6} xs={12} sm={6}>
                <Box
                  border={"2px solid #009FDD"}
                  bgcolor={"#009eddad"}
                  px={2}
                  py={2}
                  borderRadius={4}
                  sx={{
                    boxShadow: "4px 8px 15px 2px rgba(0, 159, 221, 0.2)",
                  }}
                >
                  <Grid container>
                    <Grid item xs={8}>
                      <Typography
                        variant="h6"
                        fontWeight={800}
                        fontSize={"16px"}
                        color={"#fff"}
                        pb={1}
                      >
                        Examples
                      </Typography>
                      <Typography
                        variant="body2"
                        fontWeight={500}
                        fontSize={"12px"}
                        color={"#fff"}
                        pb={2}
                      >
                        From the Dev Page you can <br />
                        do some samples
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          px: 3,
                          bgcolor: "#fff",
                          color: "#009FDD",
                          borderRadius: 5,

                          ":hover": { bgcolor: "#009FDD", color: "#fff" },
                          fontSize: 18,
                          fontWeight: 700,
                        }}
                      >
                        Go
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Box mt={3} position={"relative"}>
                        <Image
                          src={circle}
                          alt=""
                          style={{
                            width: "90%",
                            top: 30,
                            height:"100%"
                          }}
                        />
                        <Image
                          src={example}
                          alt=""
                          style={{
                            position: "absolute",
                            left: "30%",
                            top: "2%",
                            height:"100%"
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item md={6} xs={12} sm={6}>
                <Box
                  border={"2px solid #0AA81A"}
                  bgcolor={"#0aa81acc"}
                  px={2}
                  py={2}
                  borderRadius={4}
                  sx={{
                    boxShadow: "4px 8px 15px 2px rgba(10, 168, 26, 0.2)",
                  }}
                >
                  <Grid container>
                    <Grid item xs={8}>
                      <Typography
                        variant="h6"
                        fontWeight={800}
                        fontSize={"16px"}
                        color={"#fff"}
                        pb={1}
                      >
                        API Support
                      </Typography>
                      <Typography
                        variant="body2"
                        fontWeight={500}
                        fontSize={"12px"}
                        color={"#fff"}
                        pb={2}
                      >
                        Facing issues? Send a message to the Tech Department
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          px: 3,
                          bgcolor: "#fff",
                          color: "#0AA81A",
                          borderRadius: 5,

                          ":hover": { bgcolor: "#0AA81A", color: "#fff" },
                          fontSize: 18,
                          fontWeight: 700,
                        }}
                      >
                        Go
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Box mt={3}>
                        <Image
                          src={green}
                          alt=""
                          style={{
                            position: "relative",
                            left: 21,
                            top: 25,
                            width: "90%",
                            height:'100%'
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Card />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
