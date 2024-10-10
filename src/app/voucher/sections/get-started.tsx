"use client"; 
import { useEffect, useState } from "react";
import { Box, Typography, Button, useTheme, useMediaQuery, Container, IconButton } from "@mui/material";
import voucherImage from "../../../assets/images/voucher/5reasons.png"; // Ensure the path to your image is correct
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

export default function GetStarted() {
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
    const colors = ["#FCC82B", "#009FDD", "#B570FE", "#12B76A"];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [colors.length]);
    return (
        <Box bgcolor={"#000"}>
            <Container disableGutters>
                <Box display="flex" flexDirection={deviceType === 'mobile' ? 'column' : "row"} p={deviceType === 'mobile' ? 4 : 8} gap={8} alignItems="center">
                    <Box color={"#fff"} flex={1} display="flex" flexDirection="column" gap={2}>
                        <Typography variant="h3" fontWeight={700} color={"#FFC107"} fontSize={deviceType === 'mobile' ? 30 : 35}  display={deviceType === 'mobile' ? 'block' : "none"} textAlign={'center'}>
                            Getting Started With Peerwallet Vouchers Is <span style={{ color: '#fff' }}> Easy! </span>
                        </Typography>
                        <Typography variant="h3" fontWeight={700} color={"#FFC107"} fontSize={35}  display={deviceType === 'mobile' ? 'none' : "block"}>
                            Getting Started With <br />
                            Peerwallet Vouchers Is <br />
                            <span style={{ color: '#fff' }}>Easy! </span>
                        </Typography>
                        <Typography variant="body1" color={"#e0e0e0"} textAlign={deviceType === 'mobile' ? 'center' : "left"}>
                            Purchase a voucher from a verified vendor, redeem it on the Peerwallet redemption page, and if you are new, an account will be automatically created for you. Log in and start managing your funds effortlessly!
                        </Typography>
                        <Box pt={deviceType === 'mobile' ? 3 : 5}>
                            <Button
                                variant="outlined"
                                sx={{
                                    width: deviceType === 'mobile' ? "100%" : "40%",
                                    p: 2,
                                    backgroundColor: " #009FDD",
                                    color: "#fff",
                                    borderRadius: 2,
                                    textTransform: "uppercase",
                                    border: "2px solid #009FDD",
                                    ":hover": { background: "none", borderColor: "#FCC82B", color: '#FCC82B' },
                                    fontSize: 20,
                                    fontWeight: 700,
                                }}
                            >

                                GET STARTED
                            </Button>
                        </Box>
                    </Box>
                    <Box position="relative" flex={1} display="flex" justifyContent="center">
                        <Image src={voucherImage} alt="Peerwallet Voucher" style={{ width: deviceType === 'mobile' ? "115%" : '120%', height: 'auto' }} />
                        {deviceType === "mobile" && (
                        <Button
                            sx={{
                                width: "60%",
                                p: 1,
                                backgroundColor: colors[currentColorIndex],
                                color: "#fff",
                                borderRadius: 5,
                                textTransform: "uppercase",
                                ":hover": { backgroundColor: colors[currentColorIndex], cursor: 'pointer' },
                                fontSize: 15,
                                fontWeight: 700,
                                position: 'absolute',
                                left: '20%',
                                top: '60%',
                            }}
                        >
                            <IconButton>
                                <Icon icon="octicon:play-24" fontSize={26} color="#fff" />
                            </IconButton>
                            PLAY VIDEO
                        </Button>
                        )}
                         {deviceType !== "mobile" && (
                        <Button
                            sx={{
                                width: deviceType === 'mobile' ? "80%" : "32%",
                                p: 1,
                                backgroundColor: colors[currentColorIndex],
                                color: "#fff",
                                borderRadius: 5,
                                textTransform: "uppercase",
                                ":hover": { backgroundColor: colors[currentColorIndex], cursor: 'pointer' },
                                fontSize: 15,
                                fontWeight: 700,
                                position: 'absolute',
                                left: '34%',
                                top: '40%',
                            }}
                        >
                            <IconButton>
                                <Icon icon="octicon:play-24" fontSize={26} color="#fff" />
                            </IconButton>
                            PLAY VIDEO
                        </Button>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
