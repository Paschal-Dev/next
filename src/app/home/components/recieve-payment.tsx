"use client"; 
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Icon } from "@iconify/react";
import circle from "../../../assets/images/home/circle.png";
import money from "../../../assets/images/home/money-logo.png";
import React, { useEffect, useState } from "react";
import PwatSpin from "@/components/pwat-spin";
import Image from "next/image";
import { theme } from "@/assets/themes/theme";

export default function RecievePayment(): React.JSX.Element {

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

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      py={deviceType === "mobile" ? 2 : 5}
      px={deviceType === "mobile" ? 0 : 3}
    >
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Box
          px={deviceType === "mobile" ? 2 : 4}
          py={deviceType === "mobile" ? 3 : 6}
          mb={deviceType === "mobile" ? 1 : 0}
          bgcolor={"#FFFFFF"}
          borderRadius={deviceType === "mobile" ? 4 : 8}
        >
          <Container>
            <Grid container columnSpacing={3}>
              <Grid item md={7} xs={12}>
                <Typography
                  variant="h3"
                  fontWeight={900}
                  sx={{
                    textAlign:
                      deviceType === "mobile"
                        ? "center"
                        : deviceType === "tablet"
                        ? "center"
                        : "",
                    fontSize:
                      deviceType === "mobile"
                        ? "18px"
                        : deviceType === "tablet"
                        ? "30px"
                        : "56px",
                  }}
                >
                  <span style={{ color: "#12B76A" }}>Recieve</span> Payments
                  Easily With Peerwallet PWAT
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={deviceType === "mobile" ? "14px" : "20px"}
                  sx={{
                    textAlign: deviceType === "mobile" ? "center" : "",
                    pt: deviceType === "mobile" ? 2 : 0,
                  }}
                >
                  Accept payments easily from your website or via a direct
                  transfer to your Account number or email address on
                  Peerwallet.
                </Typography>
                <Box
                  mt={2}
                  p={2}
                  bgcolor={"#D1FADF"}
                  borderRadius={deviceType === "mobile" ? 4 : 8}
                >
                  <Grid container rowSpacing={2}>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#12B76A"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          Several withdrawal options
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#12B76A"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          Multi Currency options
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#12B76A"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          A powerful open API
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#12B76A"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          Instant Avalibility of funds
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#12B76A"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          Coverage around the world
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#12B76A"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          Instant notifications
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#12B76A"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          Business without borders
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#12B76A"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          No receiving limit
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#12B76A"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          Affiliates and partnerships
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={
                    deviceType === "mobile"
                      ? "center"
                      : deviceType === "tablet"
                      ? "center"
                      : ""
                  }
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#12B76A",
                      mt: 2,
                      height: deviceType === "mobile" ? 60 : 80,
                      px: 3,
                      color: "#fff",
                      borderRadius: 3,
                      fontSize: deviceType === "mobile" ? 12 : 20,
                      fontWeight: 700,
                      border: "2px solid #12B76A",
                      ":hover": {
                        background: "#000",
                        borderColor: "#FCC82B",
                      },
                    }}
                    onClick={handleOpen}
                  >
                    <Icon
                      icon="octicon:play-24"
                      color="#fff"
                      fontSize={deviceType === "mobile" ? 20 : 32}
                      style={{ marginRight: 5 }}
                    />
                    PLAY VIDEO
                  </Button>
                </Box>
              </Grid>

              <Grid item md={5} mt={deviceType === "mobile" ? 0 : 10}>
                <Box
                  position="relative"
                  pl={3}
                  top={"-11%"}
                  display={
                    deviceType === "mobile"
                      ? "none"
                      : deviceType === "tablet"
                      ? "none"
                      : "flex"
                  }
                >
                  <Image src={circle} alt="" width={400} />
                  <Image
                    src={money}
                    alt=""
                    width={456}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "55%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <PwatSpin width={"75%"} right={0} bottom={0} />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogContent>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/AsNynSC76yg?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ border: "none", backgroundColor: "transparent" }}
          ></iframe>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
