import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import contactus from "../../assets/images/contact/contact-us.svg";
import { Icon } from "@iconify/react";
import React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Contact({ deviceType }: any): React.JSX.Element {
  return (
    <Box bgcolor={"#fff"} py={5}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Grid container>
          <Grid item md={6} xs={12}>
            <Image              
              src={contactus}
              alt="contactus"
              style={{
                display:
                  deviceType === "mobile"
                    ? "none"
                    : deviceType === "tablet"
                    ? "none"
                    : "flex",
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: deviceType === "mobile" ? 700 : 900,
                  fontSize: deviceType === "mobile" ? "20px" : "40px",
                  textAlign: deviceType === "mobile" ? "center" : deviceType === "tablet" ? "center" : ''
                }}
              >
                Connect with Us for Support
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  fontSize: deviceType === "mobile" ? "14px" : "16px",
                  textAlign: deviceType === "mobile" ? "center" : deviceType === "tablet" ? "center" : ''
                }}
              >
                Have questions, comments, or feedback? We are here to help! Reach
                out to us through any of mediums below:
              </Typography>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              pt={2}
             
            >
              <Box sx={{ mt: deviceType === "mobile" ? -3 : 0 }}>
                <Box
                  bgcolor={"#009FDD"}
                  borderRadius={"10%"}
                  mr={2}
                  sx={{ p: deviceType === "mobile" ? 0 : 1 }}
                >
                  <IconButton>
                    <Icon
                      icon="mdi:location"
                      style={{ fontSize: deviceType === "mobile" ? 27 : 35 }}
                      color="#fff"
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: deviceType === "mobile" ? 600 : 800,
                    fontSize: deviceType === "mobile" ? "18px" : "24px",
                  }}
                >
                  Address
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: deviceType === "mobile" ? "14px" : "16px",
                    fontWeight: deviceType === "mobile" ? 400 : 400,
                  }}
                >
                  Pražákova 1008/69 639 00 Brno, Czech Republic.
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"start"}
              pt={5}
            >
              <Box sx={{ mt: deviceType === "mobile" ? 1 : 0 }}>
                <Box
                  bgcolor={"#009FDD"}
                  borderRadius={"10%"}
                  mr={2}
                  sx={{ p: deviceType === "mobile" ? 0 : 1 }}
                >
                  <IconButton>
                    <Icon
                      icon="mdi:skype"
                      style={{ fontSize: deviceType === "mobile" ? 27 : 35 }}
                      color="#fff"
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: deviceType === "mobile" ? 600 : 800,
                    fontSize: deviceType === "mobile" ? "18px" : "24px",
                  }}
                >
                  Skype
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: deviceType === "mobile" ? "14px" : "16px",
                    fontWeight: deviceType === "mobile" ? 400 : 400,
                  }}
                >
                  Skype support is available for Vendors & sellers on
                  Peerwallet,
                  <a href="#" style={{ color: "#3840F7" }}>
                    Click here to message us on Skype!
                  </a>
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              pt={5}
              sx={{ pl: deviceType === "mobile" ? 1 : 0 }}
            >
              <Box sx={{ mt: deviceType === "mobile" ? -6 : 0 }}>
                <Box
                  bgcolor={"#009FDD"}
                  borderRadius={"10%"}
                  mr={2}
                  sx={{ p: deviceType === "mobile" ? 0 : 1 }}
                >
                  <IconButton>
                    <Icon
                      icon="fa6-solid:language"
                      style={{ fontSize: deviceType === "mobile" ? 23 : 30 }}
                      color="#fff"
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: deviceType === "mobile" ? 600 : 800,
                    fontSize: deviceType === "mobile" ? "18px" : "24px",
                  }}
                >
                  Languages
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: deviceType === "mobile" ? "14px" : "16px",
                    fontWeight: deviceType === "mobile" ? 400 : 400,
                  }}
                >
                  We support over 50 Languages on Peerwallets, all
                  communications are responded to via your chosen default
                  language.
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              pt={5}
              sx={{ pl: deviceType === "mobile" ? 1 : 0 }}
            >
              <Box sx={{ mt: deviceType === "mobile" ? -8 : -3 }}>
                <Box
                  bgcolor={"#009FDD"}
                  borderRadius={"10%"}
                  mr={2}
                  sx={{ p: deviceType === "mobile" ? 0 : 1 }}
                >
                  <IconButton>
                    <Icon
                      icon="mdi:ticket"
                      style={{ fontSize: deviceType === "mobile" ? 27 : 35 }}
                      color="#fff"
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: deviceType === "mobile" ? 600 : 800,
                    fontSize: deviceType === "mobile" ? "18px" : "24px",
                  }}
                >
                  Support Tickets
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: deviceType === "mobile" ? "14px" : "16px",
                    fontWeight: deviceType === "mobile" ? 400 : 400,
                  }}
                >
                  All support requests on Peerwallet are via the official
                  support tickets, we are available 24 hours a day and 7 days a
                  week. Responses during weekends are slower.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
