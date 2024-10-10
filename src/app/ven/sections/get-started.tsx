"use client"; 
import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import vendors_header from "../../../assets/images/vendors/get-started.png";
import plusIcon from "../../../assets/images/vendors/plus-icon.png";
import Image from "next/image";

export default function VendorsGetStarted(): React.JSX.Element {
    const theme = useTheme();
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
        <Box bgcolor={"#e8e8e8"} pb={8} pt={5}>
            <Container disableGutters={
                deviceType === "mobile" || deviceType === "tablet" ? false : true
            }>
                <Box bgcolor={"#fff"} color={'#000'} borderRadius={10}>
                    <Grid container spacing={deviceType === 'mobile' ? 2 : 1} p={deviceType === 'mobile' ? 2 : 7}>
                        <Grid item xs={12} md={6}>
                            <Box display='flex' flexDirection='column' alignItems={deviceType === 'mobile' ? 'center' : 'flex-start'}>
                                <Typography
                                    variant={deviceType === 'mobile' ? "h4" : "h3"}
                                    fontWeight={800}
                                    fontSize={deviceType === 'mobile' ? 25 : 48}
                                    color={"#009FDD"}
                                    textAlign={deviceType === 'mobile' ? "center" : "left"}
                                >
                                    Getting Started <span style={{ color: '#000' }}> As a Vendor/Merchant</span>
                                </Typography>
                                <Typography
                                    variant="body2"
                                    fontWeight={600}
                                    fontSize={deviceType === 'mobile' ? 14 : 16}
                                    color={"#000"}
                                    textAlign={deviceType === 'mobile' ? "center" : "left"}
                                    mt={2}
                                >
                                    If you have a custom gateway not yet integrated into Peerwallet, our dedicated technical team will swiftly set up the integration for you. Simply submit a support ticket, and we will handle the rest.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    fontWeight={600}
                                    fontSize={deviceType === 'mobile' ? 14 : 16}
                                    color={"#000"}
                                    textAlign={deviceType === 'mobile' ? "center" : "left"}
                                    mt={2}
                                >
                                    Unleash your fintech potential with Peerwallet—a world of finance and profit awaits!
                                </Typography>
                                <Box pt={3} textAlign={deviceType === 'mobile' ? "center" : "left"}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            width: "100%",
                                            p: 1,
                                            backgroundColor: "#009FDD",
                                            color: "#fff",
                                            borderRadius: 3,
                                            border: "2px solid #009FDD",
                                            ":hover": { background: "none", borderColor: "#FCC82B" },
                                            fontSize: deviceType === 'mobile' ? 15 : 20,
                                            fontWeight: 700,
                                        }}
                                    >
                                        <IconButton>
                                            <Image src={plusIcon} alt={""} />
                                        </IconButton>
                                        Apply to Become a Vendor
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display={deviceType === 'mobile' ? 'none' : 'block'}>
                                <Image src={vendors_header} alt="Getting Started" style={{ width: "100%" }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
