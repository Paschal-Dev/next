import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import selling from "../../../assets/images/sell/start-selling.svg";
import method from "../../../assets/images/sell/method.svg";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function GettingStarted({ deviceType }: any): React.JSX.Element {
  return (
    <Box bgcolor={"#000"} py={deviceType === "mobile" ? 4 : 7}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Typography
              variant="h2"
              fontWeight={900}
              fontSize={deviceType === "mobile" ? "35px" : "64px"}
              color={"#fff"}
              sx={{textAlign : deviceType === "mobile" ? "center" : deviceType === "tablet" ? "center" : ""}}
            >
              Getting <span style={{ color: "#009FDD" }}> Started</span>
            </Typography>
            <Typography
              variant="body2"
              fontSize={deviceType === "mobile" ? "16px" : "24px"}
              fontWeight={600}
              color={"#fff"}
              pt={3}
              sx={{textAlign : deviceType === "mobile" ? "center" : deviceType === "tablet" ? "center" : ""}}
            >
              Depending on the method which would be deployed, the popular
              method are to
            </Typography>
            <Box borderRadius={"24px"} py={2} px={1} bgcolor={"#282828"} mt={3}>
              <Box display={"flex"} alignItems={"center"} gap={1} m={1}>
                <Icon
                  icon="mdi:account-plus"
                  style={{ fontSize: 15 }}
                  color="#009FDD"
                />
                <Typography
                  variant="body2"
                  color={"#fff"}
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                >
                  Create an account
                </Typography>
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={1} m={1}>
                <Icon
                  icon="mdi:account-check"
                  style={{ fontSize: 15 }}
                  color="#009FDD"
                />
                <Typography
                  variant="body2"
                  color={"#fff"}
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                >
                  Verify your account
                </Typography>
              </Box>
              <Box display={"flex"} alignItems={"start"} gap={1} m={1}>
                <Icon
                  icon="material-symbols:domain-verification-sharp"
                  style={{ fontSize: 15 }}
                  color="#009FDD"
                />

                <Typography
                  variant="body2"
                  color={"#fff"}
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                >
                  Verify your domain name & select your industry
                </Typography>
              </Box>
              <Box display={"flex"} alignItems={"start"} gap={1} m={1}>
                <Icon
                  icon="streamline:briefcase-dollar-solid"
                  style={{ fontSize: 15 }}
                  color="#009FDD"
                />

                <Typography
                  variant="body2"
                  color={"#fff"}
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                >
                  Add some security deposits or use the Pre-start option
                </Typography>
              </Box>
              <Box display={"flex"} alignItems={"start"} gap={1} m={1}>
                <Image src={method} alt="" />
                <Typography
                  variant="body2"
                  color={"#fff"}
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                >
                  Set your withdrawal method Create an account
                </Typography>
              </Box>
              <Box display={"flex"} alignItems={"start"} gap={1} m={1}>
                <Icon
                  icon="eos-icons:api"
                  style={{ fontSize: 25 }}
                  color="#009FDD"
                />

                <Typography
                  variant="body2"
                  color={"#fff"}
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                >
                  Integrate Peerwallet using available ready make plugins or via
                  the API Create an account
                </Typography>
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={1} m={1}>
                <Icon
                  icon="streamline:payment-10-solid"
                  style={{ fontSize: 15 }}
                  color="#009FDD"
                />

                <Typography
                  variant="body2"
                  color={"#fff"}
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                >
                  Accept payment!
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              fontWeight={400}
              fontSize={"16px"}
              color={"#fff"}
              pt={2}
              pb={3}
              sx={{textAlign : deviceType === "mobile" ? "center" : deviceType === "tablet" ? "center" : ""}}

            >
              Accept payments from customers globally, easily send funds to
              another Peerwallet user or withdraw your funds easily.
            </Typography>
            <Box display={"flex"} justifyContent={deviceType === "mobile" ? "center" : deviceType === "tablet" ? "center" : ""} > 
            <Button
              variant="outlined"
              sx={{
                p: 2,
                backgroundColor: "#009FDD",
                color: "#fff",
                borderRadius: "12px",
                textTransform: "uppercase",
                border: "2px solid #009FDD",
                ":hover": { background: "none" },
                fontSize: 24,
                fontWeight: 800,
              }}
            >
              get started
            </Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Image src={selling} alt="" style={{ width: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
