import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import dollar from "../../../assets/images/home/dollar.svg";
import React from "react";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HowItWorks({ deviceType }: any): React.JSX.Element {
  return (
    <Box>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Box mt={2}>
          <Typography
            variant="h2"
            textAlign={"center"}
            fontSize={
              deviceType === "mobile" ? 20 : deviceType === "tablet" ? 30 : 52
            }
            fontWeight={900}
          >
            How Peerwallet Works
          </Typography>
          <hr style={{ border: "1px solid #000", width: "20%" }} />
          <Typography
            variant="body2"
            textAlign={"center"}
            fontWeight={500}
            fontSize={deviceType === "mobile" ? "14px" : "16px"}
          >
            Effortlessly convert your PWAT tokens into various opportunities
            within the Peerwallet Marketplace and vice{" "}
            <br
              style={{
                display:
                  deviceType === "mobile"
                    ? "none"
                    : deviceType === "tablet"
                    ? "none"
                    : "flex",
              }}
            />{" "}
            versa. Seamlessly spend, send, and withdraw through multiple
            channels.
          </Typography>
        </Box>
        <Box
          p={deviceType === "mobile" ? 3 : 6}
          mt={3}
          bgcolor={"#FFFFFF"}
          borderRadius={deviceType === "mobile" ? 4 : 8}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                alignItems="center"
                mb={deviceType === "mobile" ? 1 : 0}
              >
                <IconButton
                  sx={{
                    bgcolor: "#fcc82b17",
                    borderRadius: "50%",
                    padding: 1,
                  }}
                >
                  <Icon icon="ic:sharp-person" fontSize={26} color="#FCC82B" />
                </IconButton>
                <Typography
                  variant="h6"
                  ml={2}
                  fontWeight={800}
                  fontSize={deviceType === "mobile" ? "16px" : "24px"}
                >
                  Create An Account
                </Typography>
              </Box>
              <Typography
                variant="body2"
                fontSize={deviceType === "mobile" ? "14px" : "16px"}
                sx={{ textAlign: deviceType === "mobile" ? "center" : "" }}
              >
                Either as a regular user, seller, or merchant who provides
                financial services. You would only be required to create one
                account for all.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                alignItems="center"
                mb={deviceType === "mobile" ? 1 : 0}
              >
                <IconButton
                  sx={{
                    bgcolor: "#d93c6618",
                    borderRadius: "50%",
                    padding: 1,
                  }}
                >
                  <Icon
                    icon="ri:bank-card-fill"
                    fontSize={26}
                    color="#D93C65"
                  />
                </IconButton>
                <Typography
                  variant="h6"
                  ml={2}
                  fontWeight={800}
                  fontSize={deviceType === "mobile" ? "16px" : "24px"}
                >
                  Virtual Cards & Banks
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ textAlign: deviceType === "mobile" ? "center" : "" }}
                fontSize={deviceType === "mobile" ? "14px" : "16px"}
              >
                From the Marketplace, you have the convenience of selecting
                which vendor you prefer to issue your card. Simply choose and
                spend hassle-free!
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                alignItems="center"
                mb={deviceType === "mobile" ? 1 : 0}
              >
                <IconButton
                  sx={{
                    bgcolor: "#12b76a23",
                    borderRadius: "50%",
                    padding: 1,
                  }}
                >
                  <Icon
                    icon="solar:dollar-bold"
                    fontSize={26}
                    color="#12B76A"
                  />
                </IconButton>
                <Typography
                  variant="h6"
                  ml={2}
                  fontWeight={800}
                  fontSize={deviceType === "mobile" ? "16px" : "24px"}
                >
                  Multiple Payment Methods
                </Typography>
              </Box>
              <Typography
                variant="body2"
                fontSize={deviceType === "mobile" ? "14px" : "16px"}
                sx={{ textAlign: deviceType === "mobile" ? "center" : "" }}
              >
                Users have the flexibility to load, spend, and withdraw funds
                from their wallets using a variety of options, including
                approved external vendors or within the Marketplace.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                alignItems="center"
                mb={deviceType === "mobile" ? 1 : 0}
              >
                <Box
                  borderRadius={"50%"}
                  bgcolor={"#d9811c27"}
                  px={1.1}
                  pt={1.5}
                >
                  <Image src={dollar} alt="" />
                </Box>
                <Typography
                  variant="h6"
                  ml={deviceType === "mobile" ? 1 : 2}
                  fontWeight={800}
                  fontSize={deviceType === "mobile" ? "16px" : "24px"}
                >
                  Escrow Funding & Withdrawal
                </Typography>
              </Box>
              <Typography
                variant="body2"
                fontSize={deviceType === "mobile" ? "14px" : "16px"}
                sx={{ textAlign: deviceType === "mobile" ? "center" : "" }}
              >
                Every time you fund your account, the system ensures smooth{" "}
                transactions by providing an Escrow system, safeguarding all{" "}
                parties involved.
              </Typography>
            </Grid>

            <Grid item md={6}>
              <Box
                display="flex"
                alignItems="center"
                mb={deviceType === "mobile" ? 1 : 0}
              >
                <IconButton
                  sx={{
                    bgcolor: "#3842f723",
                    borderRadius: "50%",
                    padding: 1,
                  }}
                >
                  <Icon
                    icon="fluent:globe-28-filled"
                    fontSize={26}
                    color="#3840F7"
                  />
                </IconButton>
                <Typography
                  variant="h6"
                  ml={2}
                  fontWeight={800}
                  fontSize={deviceType === "mobile" ? "16px" : "24px"}
                >
                  Website Integration
                </Typography>
              </Box>
              <Typography
                variant="body2"
                fontSize={deviceType === "mobile" ? "14px" : "16px"}
                sx={{ textAlign: deviceType === "mobile" ? "center" : "" }}
              >
                Either as a regular user, seller, or merchant who provides
                financial services. You would only be required to create one
                account for all.
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Box
                display="flex"
                alignItems="center"
                mb={deviceType === "mobile" ? 1 : 0}
              >
                <IconButton
                  sx={{
                    bgcolor: "#b570fe21",
                    borderRadius: "50%",
                    padding: 1,
                  }}
                >
                  <Icon
                    icon="mdi:chart-finance"
                    fontSize={26}
                    color="#B570FE"
                  />
                </IconButton>
                <Typography
                  variant="h6"
                  ml={2}
                  fontWeight={800}
                  fontSize={deviceType === "mobile" ? "16px" : "24px"}
                >
                  Finance Marketplace
                </Typography>
              </Box>
              <Typography
                variant="body2"
                fontSize={deviceType === "mobile" ? "14px" : "16px"}
                sx={{ textAlign: deviceType === "mobile" ? "center" : "" }}
              >
                Either as a regular user, seller, or merchant who provides
                financial services. You would only be required to create one
                account for all.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
