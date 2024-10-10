import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import globe from "../../../assets/images/learnmore/globe.png";
import fit from "../../../assets/images/learnmore/features.png";
import multi from "../../../assets/images/learnmore/multicurrency.png";
import semi from "../../../assets/images/learnmore/semi.png";
import send from "../../../assets/images/learnmore/send.png";
import { Icon } from "@iconify/react";
import React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Features({ deviceType }: any): React.JSX.Element {
  return (
    <Box>
      <Container>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            variant="h6"
            fontWeight={900}
            fontSize={deviceType === "mobile" ? 25 : 60}
            color={"#009FDD"}
          >
            Our Features
          </Typography>
          <Box border={1} width={"10%"} />
          <br />

          <Typography
            variant="body2"
            fontSize={deviceType === "mobile" ? 14 : 16}
            fontWeight={500}
            textAlign={"center"}
          >
            The Peerwallet platform provides a system that would accommodate all
            types of{" "}
            <br
              style={{ display: deviceType === "mobile" ? "none" : "flex" }}
            />
            users with the features below;
          </Typography>
        </Box>
      </Container>
      <Box bgcolor={"#FFFFFF"} py={deviceType === "mobile" ? 2 : 8} mt={3}>
        <Container
          disableGutters={
            deviceType === "mobile" || deviceType === "tablet" ? false : true
          }
        >
          <Box
            bgcolor={"#FFFFFF"}
            sx={{
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              boxShadow: "5px 5px 14px 4px #6B6B6B1A",
              p: deviceType === "mobile" ? 2 : 0,
            }}
          >
            <Grid container spacing={3}>
              <Grid
                item
                display={
                  deviceType === "mobile"
                    ? "none"
                    : deviceType === "tablet"
                    ? "none"
                    : "flex"
                }
                p={3}
                md={4}
                xs={12}
                bgcolor={"#F2F8FB"}
                sx={{
                  borderTopLeftRadius: 30,
                  borderBottomLeftRadius: 30,
                }}
              >
                <Box display={"flex"} justifyContent={"center"}>
                  <Image src={fit} alt="" style={{width: "100%", height: '100%'}} />
                </Box>
              </Grid>
              <Grid
                item
                md={8}
                xs={12}
                pb={4}
                px={deviceType === "mobile" ? 0 : 2}
              >
                <Grid container pt={2}>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center">
                      <Box>
                        <Image src={send} alt="" style= {{width: "80%"}} />
                      </Box>
                      <Typography variant="h6" fontWeight={700}>
                        Send and Recieve Money
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      ml={deviceType === "mobile" ? 0 : 1}
                      fontSize={"16px"}
                      mb={
                        deviceType === "mobile"
                          ? 2
                          : deviceType === "tablet"
                          ? 2
                          : 0
                      }
                     
                    >
                      With an email address or Peerwallet account number, users
                      can easily send money and receivers can easily withdraw
                      from the list of Approved Merchants on the platform.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center">
                      <Box>
                        <Image src={semi} alt="" style ={{ width: "80%"}} />
                      </Box>
                      <Typography variant="h6" fontWeight={700} fontSize={20}>
                        Semi-Decentralized
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      ml={deviceType === "mobile" ? 0 : 1}
                      fontSize={16}
                    
                    >
                      Peerwallet is a Semi-Decentralized platform that gives the
                      community more options to rule, manage and control
                      compared to other payment systems
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container pt={2}>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center">
                      <IconButton>
                        <Icon
                          icon="mingcute:plugin-fill"
                          fontSize={26}
                          color="#009FDD"
                        />
                      </IconButton>
                      <Typography variant="h6" fontWeight={700}>
                        Plugins & API
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      ml={deviceType === "mobile" ? 0 : 1}
                      fontSize={16}
                      mb={
                        deviceType === "mobile"
                          ? 2
                          : deviceType === "tablet"
                          ? 2
                          : 0
                      }
                     
                    >
                      Users can easily add payment plugins to their WordPress,
                      Woocommerce, Prestashop, and Magento websites.
                      Also,developers can integrate via API
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center">
                      <IconButton>
                        <Icon
                          icon="mingcute:card-pay-fill"
                          fontSize={26}
                          color="#009FDD"
                        />
                      </IconButton>
                      <Typography variant="h6" fontWeight={700} fontSize={20}>
                        Multiple Payment Methods
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      ml={deviceType === "mobile" ? 0 : 1}
                      fontSize={16}
                      
                    >
                      There are over 300 payment options which users can fund
                      and withdraw from. This will enable users to pay easily
                      with their most preferred payment option
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container pt={2}>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center">
                      <Box>
                        <Image src={multi} alt="" style={{width: '80%'}} />
                      </Box>
                      <Typography variant="h6" fontWeight={700}>
                        Multi-Currencies
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      ml={deviceType === "mobile" ? 0 : 1}
                      fontSize={16}
                      mb={
                        deviceType === "mobile"
                          ? 2
                          : deviceType === "tablet"
                          ? 2
                          : 0
                      }
                      
                    >
                      During registration, users can only select one primary
                      currency but would be able to transact in more than 200
                      currencies easily without additional conversion fees.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center">
                      <Box>
                        <Image src={globe} alt="" style={{width: '80%'}} />
                      </Box>
                      <Typography variant="h6" fontWeight={700} fontSize={20}>
                        Global Access
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      ml={deviceType === "mobile" ? 0 : 1}
                      fontSize={16}
                    >
                      Registration to the Peerwallet platform is opened to users
                      Globally. The access to Peerwallet for both users and
                      Merchants is based on interest.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
