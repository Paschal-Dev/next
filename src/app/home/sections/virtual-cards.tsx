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
import card from "../../../assets/images/home/card.svg";
import bgcover from "../../../assets/images/home/bgcover.png";
import { Icon } from "@iconify/react";
import knot from "../../../assets/images/home/knot.png";
import React, { useEffect, useState } from "react";
import sphere from "../../../assets/images/home/sphere.png";
import Image from "next/image";
import { theme } from "@/assets/themes/theme";


export default function VirtualCards(): React.JSX.Element {

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
    <Container
      disableGutters={
        deviceType === "mobile" || deviceType === "tablet" ? false : true
      }
    >
      <Box mt={3} bgcolor={"#FFFFFF"} borderRadius={8}>
        <Grid container>
          <Grid item md={6} xs={12} pl={5} pt={5}>
            <Image src={card} alt="" style={{ width: "100%", height:"100%" }} />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
              position: "relative",
              backgroundImage: `url(${bgcover})`,
              backgroundSize: "cover",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#009edd00",
              }}
            />
            <Container maxWidth={"xl"}>
              <Typography
                variant="h2"
                fontWeight={900}
                sx={{
                  textAlign: deviceType === "mobile" ? "center" : "",
                  fontSize: deviceType === "mobile" ? "18px" : "50px",
                  pb: deviceType === "mobile" ? 1 : 0,
                }}
                pt={3}
              >
                Spend Your Balance 
                With <span style={{ color: "#009FDD" }}> Virtual Cards</span>
              </Typography>
              <Box
                display={deviceType === "mobile" ? "none" : "flex"}
                flexDirection={"column"}
                border={1}
                width={"30%"}
                mb={5}
              ></Box>
              <Typography
                variant="body2"
                mb={3}
                sx={{
                  textAlign: deviceType === "mobile" ? "center" : "",
                }}
              >
                From the P2P marketplace, we have several Vendors offering
                Virtual cards &
                <br
                  style={{
                    display: deviceType === "mobile" ? "none" : "flex",
                  }}
                />
                other ways to spend your wallet balance on Peerwallet. Visa,
                Mastercard, and
                <br
                  style={{
                    display: deviceType === "mobile" ? "none" : "flex",
                  }}
                />
                several other options.All you need to do is to order and then
                load your card
                <br
                  style={{
                    display: deviceType === "mobile" ? "none" : "flex",
                  }}
                />
                balance from your wallet funds on Peerwallet
              </Typography>

              <Grid container mb={5}>
                <Grid item md={6} xs={12} sm={6}>
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <Image src={knot} alt="" width={11} />
                    <Box ml={2}>
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        fontSize={15}
                      >
                        Flexible loading
                      </Typography>
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        fontSize={15}
                      >
                        Transparent fees
                      </Typography>
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        fontSize={15}
                      >
                        Multiple Merchant Options
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <Image src={knot} alt="" width={11} />
                    <Box ml={2}>
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        fontSize={15}
                      >
                        P2P Spending
                      </Typography>
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        fontSize={15}
                      >
                        Virtual cards spend
                      </Typography>
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        fontSize={15}
                      >
                        Transaction histories
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Box display={"flex"} alignItems={"center"}>
                <Button
                  variant="outlined"
                  sx={{
                    height: deviceType === "mobile" ? 60 : 70,
                    px: 3,
                    backgroundColor: "#009FDD",
                    color: "#fff",
                    borderRadius: 3,
                    fontSize: deviceType === "mobile" ? 12 : 20,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    border: "2px solid #009FDD",
                    ":hover": {
                     
                      borderColor: "#000",
                      backgroundColor: "#000",
                    },
                  }}
                >
                  get started
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    marginLeft: 2,
                    height: deviceType === "mobile" ? 60 : 70,
                    px: 3,
                    color: "#009FDD",
                    fontSize: deviceType === "mobile" ? 12 : 20,
                    fontWeight: 700,
                    borderRadius: 4,
                    border: "2px solid #009FDD",
                    ":hover": {
                      color: "#009FDD",
                      borderColor: "#000",
                      background: "#000",
                    },
                  }}
                  onClick={handleOpen}
                >
                  <Icon
                    icon="octicon:play-24"
                    color="#009FDD"
                    fontSize={deviceType === "mobile" ? 20 : 32}
                    style={{ marginRight: 5 , }}
                  />
                  PLAY VIDEO
                </Button>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"end"}
              >
                <Image src={sphere} alt="" />
              </Box>
            </Container>
          </Grid>
        </Grid>
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
    </Container>
  );
}
