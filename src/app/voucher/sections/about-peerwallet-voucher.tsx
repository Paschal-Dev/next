"use client"; 
import { useState, useEffect } from "react";
import { Box, Button, Container, IconButton, Typography, useMediaQuery } from "@mui/material";
import { Icon } from "@iconify/react";
import { theme } from "../../../assets/themes/theme";
import voucher from '../../../assets/images/voucher/voucher.png'
import Image from "next/image";

export default function AboutPeerwalletVoucher() {
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
        }, 1500);

        return () => clearInterval(interval);
    }, [colors.length]);

    return (
        <Box bgcolor={"#e8e8e8"} color={"#000000"} pt={deviceType === 'mobile' ? 10 : 20}>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={3}
                width={'100%'}
            >
                <Container disableGutters={
                    deviceType === "mobile" || deviceType === "tablet" ? false : true
                }>
                    <Box textAlign={"center"}>
                        <Typography variant="h2" fontSize={deviceType === 'mobile' ? 35 : 48} fontWeight={900}>
                            <span style={{ color: '#009FDD' }}>About</span> Peerwallet Vouchers
                        </Typography>
                        <hr style={{ width: "27%" }} />
                        <Typography px={deviceType === 'mobile' ? 0 : 28} paddingTop={2} variant="body2" fontWeight={600} alignItems={'center'} textAlign={"center"}>
                            Peerwallet has developed an innovative voucher system to help you manage your funds. These vouchers provide a secure and convenient way to add money to your Peerwallet balance. By purchasing vouchers from verified vendors within the Peerwallet network, you can quickly and effortlessly enhance your financial experience.
                        </Typography>
                    </Box>
                </Container>

                <Box bgcolor={'#fff'} p={deviceType === 'mobile' ? 2 : 5} justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'row'} position={'relative'}>
                    <Image
                        src={voucher}
                        alt=""
                        style={{
                            width: "100%",
                            // height: deviceType === 'mobile' ? 'auto' : '100%',
                            paddingBottom: deviceType === 'mobile' ? 2 : 40,
                            paddingLeft: 6,
                            paddingRight: 6
                        }}
                    />
                    {deviceType === "mobile" && (
                        <Button
                            sx={{
                                width: deviceType === 'mobile' ? "50%" : "19%",
                                p: deviceType === 'mobile' ? 1 : 1.5,
                                backgroundColor: colors[currentColorIndex],
                                color: "#fff",
                                borderRadius: 5,
                                border: '1px solid #fff',
                                textTransform: "uppercase",
                                ":hover": { backgroundColor: colors[currentColorIndex], cursor: 'pointer' },
                                fontSize: deviceType === 'mobile' ? 10 : 20,
                                fontWeight: 700,
                                position: 'absolute',
                                right: 100,
                                top: '50%',
                                zIndex: 3
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
                                width: deviceType === 'mobile' ? "80%" : "19%",
                                p: 1.5,
                                backgroundColor: colors[currentColorIndex],
                                color: "#fff",
                                borderRadius: 5,
                                border: '1px solid #fff',
                                textTransform: "uppercase",
                                ":hover": { backgroundColor: colors[currentColorIndex], cursor: 'pointer' },
                                fontSize: 20,
                                fontWeight: 700,
                                position: 'absolute',
                                right: 510,
                                top: 360,
                                zIndex: 3
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
        </Box>
    );
}
