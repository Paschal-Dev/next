import { Box, Button, Container, Grid, Typography } from "@mui/material";
import funds from "../../../assets/images/learnmore/fund-transfer.png";
import React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FundTransfer({ deviceType }: any): React.JSX.Element {
  return (
    <Box bgcolor={"#000"} py={4}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Box
          p={4}
          sx={{
            borderBottomLeftRadius: deviceType === "mobile" ? 20 : 30,
            borderBottomRightRadius: deviceType === "mobile" ? 20 : 30,
            borderTopLeftRadius: deviceType === "mobile" ? 20 : 30,
            borderTopRightRadius: deviceType === "mobile" ? 20 : 30,
            background: "linear-gradient(90deg, #161616 0%, #333333 100%)",
          }}
        >
          <Container>
            <Grid container spacing={3}>
              <Grid
                item
                md={6}
                xs={12}
                display={
                  deviceType === "mobile"
                    ? "none"
                    : deviceType === "tablet"
                    ? "none"
                    : "flex"
                }
              >
                <Box>
                  <Image src={funds} alt="" />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography
                  variant="h2"
                  fontWeight={800}
                  sx={{
                    textAlign: deviceType === "mobile" ? " center" : "",
                  }}
                  fontSize={deviceType === "mobile" ? "20px" : "40px"}
                  color={"#ffff"}
                >
                  Funds Transfer
                </Typography>
                <Typography variant="body2" pt={1} color={"#ffff"}>
                  It is very easy to transfer funds on Peerwallet. Payments are
                  received immediately and recipients can also withdraw anytime.
                  It is free to send money on Peerwallet and it is available
                  immediately after it has been sent to the user. There are no
                  barriers to funds transfer, users can send payments to any
                  user with any currency and any Country.
                </Typography>
                <Typography variant="body2" pt={1} color={"#ffff"}>
                  On your dashboard, you will find two balances: one in USDT,
                  representing stable currency, and the other in PWAT, stored as
                  a token. While the USDT balance remains constant, the PWAT
                  balance fluctuates based on the current token rate. You can
                  easily track the total PWAT balance from your dashboard.
                </Typography>
                <Typography variant="h6" fontWeight={700} pt={2} color={"#fff"}>
                  Low Fees
                </Typography>
                <Typography variant="body2" color={"#fff"}>
                  Currency Conversions on Peerwallet is free, the official
                  conversion rates are used so that the main value for the
                  product sold will remain the same even when converted. So, if
                  a seller wants to receive 5EUR, this means that all users who
                  are sending the funds will send them at the official exchange
                  rate without any addition.
                </Typography>
                <Box display={"flex"} justifyContent={deviceType === "mobile" ? "center" : "end"}>
                  <Button
                    variant="outlined"
                    sx={{
                      mt:2,
                      height: deviceType === "mobile" ? 60 : 70,
                      px: deviceType === "mobile" ? 2 : 3,
                      backgroundColor: "#009FDD",
                      border: "2px solid #fff",
                      color: "#fff",
                      borderRadius: 3,
                      textTransform: "uppercase",

                      ":hover": { background: "none" },
                      fontSize: 20,
                      fontWeight: 700,
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
