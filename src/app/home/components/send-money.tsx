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
import phone from "../../../assets/images/home/phone.png";
import coin from "../../../assets/images/home/double-coin.png";
import React, { useEffect, useState } from "react";
import PwatSpin from "@/components/pwat-spin";
import Image from "next/image";
import { theme } from "@/assets/themes/theme";

export default function SendMoney(): React.JSX.Element {

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
          py={deviceType === "mobile" ? 0 : 6}
          pt={deviceType === "mobile" ? 2 : 0}
          bgcolor={"#FFFFFF"}
          borderRadius={deviceType === "mobile" ? 4 : 8}
        >
          <Container>
            <Grid container spacing={3}>
              <Grid item md={7} xs={12}>
                <Typography
                  variant="h2"
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
                  fontWeight={900}
                >
                  <span style={{ color: "#009FDD" }}>Send</span> Money Easily
                  With Peerwallets PWAT
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={400}
                  fontSize={deviceType === "mobile" ? "14px" : "20px"}
                  sx={{
                    textAlign: deviceType === "mobile" ? "center" : "",
                    pt: deviceType === "mobile" ? 2 : 0,
                  }}
                >
                  All you need is an email address or a users Peerwallet
                  account number. Money transfers are instant and the user can
                  spend immediately.
                </Typography>
                <Box
                  mt={2}
                  p={2}
                  bgcolor={"#E5F5FC"}
                  borderRadius={deviceType === "mobile" ? 4 : 8}
                >
                  <Grid container rowSpacing={2}>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#009FDD"
                        />
                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          Send up to €1M on one click
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#009FDD"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          Full data privacy compliance
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#009FDD"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          100% transparent fees
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#009FDD"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          No spending restrictions
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#009FDD"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          Real-time spending overview
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#009FDD"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          No signup restriction
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#009FDD"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          Instant payment delivery
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#009FDD"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          Pay online from websites
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Icon
                          icon="ic:round-double-arrow"
                          fontSize={20}
                          color="#009FDD"
                        />

                        <Typography variant="h6" fontWeight={700} fontSize={15}>
                          Several TopUp Options
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
                      mt: 2,
                      height: deviceType === "mobile" ? 60 : 80,
                      px: 3,
                      color: "#fff",
                      borderRadius: 3,
                      fontSize: deviceType === "mobile" ? 12 : 20,
                      fontWeight: 700,
                      border: "2px solid #009FDD",
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

              <Grid item md={5} xs={12} position={"relative"}>
                <Box
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
                    src={phone}
                    alt=""
                    width={450}
                    style={{
                      position: "absolute",
                      left: "2%",
                      top: "10%",
                    }}
                  />
                  <PwatSpin width={"75%"} left={"14%"} bottom={"15%"} />
                  <Image
                    src={coin}
                    alt=""
                    width={450}
                    style={{
                      position: "absolute",
                      bottom: "14%",
                      left: 0,
                    }}
                  />
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
