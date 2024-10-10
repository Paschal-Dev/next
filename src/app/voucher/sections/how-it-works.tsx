"use client";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import redeemVoucherImage from "../../../assets/images/voucher/redeem-voucher.png";
import Icon1 from "../../../assets/images/voucher/icon1.png";
import Icon2 from "../../../assets/images/voucher/icon2.png";
import Icon3 from "../../../assets/images/voucher/icon3.png";
import { useState, useEffect } from "react";
import { theme } from "../../../assets/themes/theme";
import Image from "next/image";

export default function VoucherHowItWorks() {
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
        <Box bgcolor={"#000"} pb={5}>
            <Container disableGutters={
                deviceType === "mobile" || deviceType === "tablet" ? false : true
            }>

                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={5}
                    pt={5}
                >
                    <Box textAlign={"center"} pb={5}>
                        <Typography variant="h2" fontSize={deviceType === 'mobile' ? 35 : 48} fontWeight={900} pb={0} color={"#fff"}>
                            <span style={{ color: '#009FDD' }}>How</span> It Works
                        </Typography>
                        <hr style={{ width: "14%" }} />
                        <Typography color={"#fff"} paddingTop={2} variant="body2" fontWeight={600} alignItems={'center'} textAlign={"center"}>
                            Purchasing vouchers on Peerwallet is a straightforward process exclusive to approved vendors, and redeeming <br /> a Peerwallet voucher is equally simple. Here is how it works:</Typography>
                    </Box>
                </Box>
                <Box
                    pt={deviceType === 'mobile' ? 0 : 5}
                    px={deviceType === 'mobile' ? 0 : 10}
                    pb={deviceType === 'mobile' ? 0 : 6}
                >
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Image
                                src={redeemVoucherImage}
                                alt="Peerwallet Voucher"
                                style={{
                                    width: '87%',
                                    display: deviceType === 'mobile' ? 'none' : 'flex',
                                    height: 'auto'
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display={"flex"} flexDirection={"column"} gap={3}>
                                <Box
                                    bgcolor={"#1c1c1e"}
                                    p={3}
                                    borderRadius={4}
                                    display={'flex'}
                                    flexDirection={deviceType === 'mobile' ? 'column' : 'row'}
                                    gap={2}
                                    sx={{
                                        color: '#fff',
                                        fontWeight: 700,
                                        fontSize: deviceType === 'mobile' ? 18 : 15,
                                        transition: "all 0.3s ease-in-out",
                                        ":hover": {
                                            border: "1px solid #009FDD",
                                            color: '#009FDD',
                                            cursor: 'pointer',
                                            "& img": {
                                                filter: "brightness(0) saturate(100%) invert(32%) sepia(87%) saturate(3730%) hue-rotate(178deg) brightness(97%) contrast(101%)",
                                            },
                                        },
                                    }}
                                >
                                    <Image
                                        src={Icon1}
                                        style={{
                                            transition: "all 0.3s ease-in-out",
                                            width: "deviceType === 'mobile' ? '10%' : '5%'",
                                            height: "deviceType === 'mobile' ? '10%' : '5%'"
                                        }} alt={""} />
                                    <Box>
                                        Buy Peerwallet Vouchers
                                        <Typography variant={deviceType === 'mobile' ? 'body1' : "body2"} color={"#e0e0e0"} pt={1}>
                                            Log in to your Peerwallet account, navigate to the marketplace from your dashboard, click on the Buy Voucher option, enter the number of vouchers (1-100) and the amount (1 to 5,000 USD), then confirm the purchase; successful transactions will redirect you to a page listing all purchased vouchers.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    bgcolor={"#1c1c1e"}
                                    p={3}
                                    borderRadius={4}
                                    display={'flex'}
                                    flexDirection={deviceType === 'mobile' ? 'column' : 'row'}
                                    gap={2}
                                    sx={{
                                        color: '#fff',
                                        fontWeight: 700,
                                        fontSize: deviceType === 'mobile' ? 18 : 15,
                                        transition: "all 0.3s ease-in-out",
                                        ":hover": {
                                            border: "1px solid #009FDD",
                                            color: '#009FDD',
                                            cursor: 'pointer',
                                            "& img": {
                                                filter: "brightness(0) saturate(100%) invert(32%) sepia(87%) saturate(3730%) hue-rotate(178deg) brightness(97%) contrast(101%)",
                                            },
                                        },
                                    }}
                                >
                                    <Image
                                        src={Icon2}
                                        style={{
                                            width: "deviceType === 'mobile' ? '10%' : '5%'",
                                            height: "deviceType === 'mobile' ? '10%' : '5%'",
                                            transition: "all 0.3s ease-in-out",
                                        }} alt={""} />
                                    <Box>
                                        Redeem Peerwallet Vouchers
                                        <Typography variant="body2" color={"#e0e0e0"} pt={1}>
                                            Go to <a href="https://peerwallet.com/shop/voucher" style={{ color: "#FCC82B" }}>peerwallet.com/shop/voucher</a>, fill in the necessary information including your email and other relevant details, and receive a confirmation email upon successful redemption; new users will have an account automatically created using the provided email.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    bgcolor={"#1c1c1e"}
                                    p={3}
                                    borderRadius={4}
                                    display={'flex'}
                                    flexDirection={deviceType === 'mobile' ? 'column' : 'row'}
                                    gap={2}
                                    sx={{
                                        color: '#fff',
                                        fontWeight: 700,
                                        fontSize: deviceType === 'mobile' ? 18 : 16,
                                        transition: "all 0.3s ease-in-out",
                                        ":hover": {
                                            border: "1px solid #009FDD",
                                            color: '#009FDD',
                                            cursor: 'pointer',
                                            "& img": {
                                                filter: "brightness(0) saturate(100%) invert(32%) sepia(87%) saturate(3730%) hue-rotate(178deg) brightness(97%) contrast(101%)",
                                            },
                                        },
                                    }}
                                >
                                    <Image
                                        src={Icon3}
                                        style={{
                                            width: "deviceType === 'mobile' ? '10%' : '5%'",
                                            height: "deviceType === 'mobile' ? '10%' : '5%'",
                                            transition: "all 0.3s ease-in-out",
                                        }} alt={""} />
                                    <Box>
                                        Manage Your Funds
                                        <Typography variant="body2" color={"#e0e0e0"} pt={1}>
                                            The value of redeemed vouchers is instantly reflected in your Peerwallet balance, allowing for seamless and efficient fund management, with all transactions documented for transparency and ease of tracking your financial activities on Peerwallet.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </Box>
    );
}
