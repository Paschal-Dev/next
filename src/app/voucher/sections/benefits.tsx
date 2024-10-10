"use client"; 
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../../assets/themes/theme";
import security from "../../../assets/images/voucher/security.png";
import ease from "../../../assets/images/voucher/ease.png";
import currency from "../../../assets/images/voucher/currency.png";
import access from "../../../assets/images/voucher/access.png";
import users from "../../../assets/images/voucher/users.png";
import calculator from "../../../assets/images/voucher/calculator.png";
import { useState, useEffect } from "react";
import Image from "next/image";


export default function Benefits() {
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
        <Box bgcolor={"#e8e8e8"} color={"#000000"} pb={12} pt={7}>
            <Container disableGutters={
                deviceType === "mobile" || deviceType === "tablet" ? false : true
            }>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={5}
            >

                <Box textAlign={"center"}>
                    <Typography variant="h2" fontSize={deviceType === 'mobile' ? 35 : 48} fontWeight={900}>
                        <span style={{ color: '#009FDD' }}>Benefits</span> of Using Peerwallet Voucher
                    </Typography>
                    <hr style={{ width: "20%" }} />

                    <Typography color={"#000"} variant="body2" paddingTop={2} fontWeight={600} alignItems={'center'} textAlign={"center"}>
                        Explore the advantages of utilizing vouchers on Peerwallet, understand why our vouchers are the next best thing!</Typography>

            </Box>

            <Box sx={{ bgcolor: "#fff", p: deviceType === 'mobile' ? 4 : 8, borderRadius: 12 }}>
                <Grid container columnSpacing={8} spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Box display={'flex'} flexDirection={'column'} gap={deviceType ? 0 : 1} alignItems={'start'}>
                            <Box display={'flex'} flexDirection={'row'} gap={1}>
                                <Box><Image src={security} alt="" style={{ width: deviceType === 'mobile' ? '40px' : '35px' }} /></Box>

                                <Typography variant="h6" fontWeight={900} color="#000">Secure Transaction</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body1" color={'#000'} textAlign={'start'}>
                                    Only verified vendors can create and sell vouchers, ensuring each transaction is secure and trustworthy. This verification process protects users from potential fraud and maintains the integrity of the voucher system. </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display={'flex'} flexDirection={'column'} gap={deviceType ? 0 : 1} alignItems={'start'}>
                            <Box display={'flex'} flexDirection={'row'} gap={1}>
                                <Box><Image src={access} alt="" style={{ width: deviceType === 'mobile' ? '40px' : '35px' }} /></Box>

                                <Typography variant="h6" fontWeight={900} color="#000">Accessibility</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body1" color={'#000'} textAlign={'start'}>
                                    Users can purchase vouchers from a wide network of verified vendors, ensuring easy access to Peerwallet funds regardless of location. The platform’s user-friendly interface is intuitive, making it easy for users of all levels to navigate and use vouchers effectively.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display={'flex'} flexDirection={'column'} gap={deviceType ? 0 : 1} alignItems={'start'}>
                            <Box display={'flex'} flexDirection={'row'} gap={1}>
                                <Box><Image src={ease} alt="" style={{ width: deviceType === 'mobile' ? '40px' : '35px' }} /></Box>

                                <Typography variant="h6" fontWeight={900} color="#000">Ease of Use</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body1" color={'#000'} textAlign={'start'}>
                                    The redemption process is simple and hassle-free, requiring users to enter the voucher code and necessary details. For first-time users, the system automatically creates a Peerwallet account using the provided email during voucher redemption, streamlining the onboarding process.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display={'flex'} flexDirection={'column'} gap={deviceType ? 0 : 1} alignItems={'start'}>
                            <Box display={'flex'} flexDirection={'row'} gap={1}>
                                <Box><Image src={users} alt="" style={{ width: deviceType === 'mobile' ? '40px' : '35px' }} /></Box>

                                <Typography variant="h6" fontWeight={900} color="#000">Convenience for First-Time Users</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body1" color={'#000'} textAlign={'start'}>
                                    First-time users can quickly start using Peerwallet without the need for a complex registration process. The voucher system ensures that their account is created automatically upon voucher redemption.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display={'flex'} flexDirection={'column'} gap={deviceType ? 0 : 1} alignItems={'start'}>
                            <Box display={'flex'} flexDirection={'row'} gap={1}>
                                <Box><Image src={currency} alt="" style={{ width: deviceType === 'mobile' ? '40px' : '35px' }} /></Box>

                                <Typography variant="h6" fontWeight={900} color="#000">Instant Fund Addition</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body1" color={'#000'} textAlign={'start'}>
                                    Once a voucher is redeemed, the value is instantly reflected in the user’s Peerwallet balance, allowing for seamless and efficient fund management.</Typography>
                            </Box>
                        </Box>
                    </Grid>


                    <Grid item xs={12} md={6}>
                        <Box display={'flex'} flexDirection={'column'} gap={deviceType ? 0 : 1} alignItems={'start'}>
                            <Box display={'flex'} flexDirection={'row'} gap={1}>
                                <Box><Image src={calculator} alt="" style={{ width: deviceType === 'mobile' ? '40px' : '35px' }} /></Box>

                                <Typography variant="h6" fontWeight={900} color="#000">Transparency and Accountability</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body1" color={'#000'} textAlign={'start'}>
                                    Each voucher transaction is documented, providing a transparent and traceable record of fund transfers. This ensures accountability and allows users to keep track of their financial activities on Peerwallet.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        </Container>
        </Box >
    );
}
