'use client';
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../assets/themes/theme";
import risk from "../../assets/images/shop/risk-icon.png";
import currency from "../../assets/images/shop/currency-icon.png";
import globe from "../../assets/images/shop/globe-icon.png";
import store from "../../assets/images/shop/store-icon.png";
import thumb from "../../assets/images/shop/thumb-icon.png";
import support from "../../assets/images/shop/support-icon.png";
import { useState, useEffect } from "react";
import Image from "next/image";


export default function WhyChooseUs() {
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
        <Box bgcolor={"#e8e8e8"} color={"#000000"} pb={5} pt={5}>
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
                <Box textAlign={"center"} width={deviceType === 'mobile' ? "90%" : "70%"}>
                    <Typography variant="h2" fontSize={deviceType === 'mobile' ? 28 : 48} fontWeight={900}>
                        Why Choose Us?
                    </Typography>
                    <hr style={{ width: "25%" }} />
                </Box>
                <Box sx={{ bgcolor: "#fff", p: deviceType === 'mobile' ? 4 : 8, borderRadius: 12 }}>
                    <Grid container columnSpacing={8} spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Box display={'flex'} flexDirection={'column'} gap={deviceType === 'mobile' ? 0 : 1} >
                                <Box display={'flex'} flexDirection={'row'} gap={1}>
                                    <Box><Image src={risk} alt="" style={{ width: '30px' }} /></Box>

                                    <Typography variant="h6" fontWeight={900} color="#000">High Risk Businesses</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" color={'#000'}>
                                        Embrace opportunity without limitations. At Peerwallet, we welcome high-risk businesses and provide a platform for you to thrive. Whether you are in the gaming industry, adult entertainment, or other high-risk sectors, our inclusive approach ensures that you can access the same level of support and services as any other merchant.</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display={'flex'} flexDirection={'column'} gap={deviceType === 'mobile' ? 0 : 1} >
                                <Box display={'flex'} flexDirection={'row'} gap={1}>
                                    <Box><Image src={store} alt="" style={{ width: '30px' }} /></Box>

                                    <Typography variant="h6" fontWeight={900} color="#000">Free Product Store</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" color={'#000'}>
                                        Set up your store on Peerwallet without worrying about upfront costs or hidden fees. With our free product store option, you can showcase your products or services to a global audience at no cost, allowing you to focus on growing your business without financial constraints.</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display={'flex'} flexDirection={'column'} gap={deviceType === 'mobile' ? 0 : 1}>
                                <Box display={'flex'} flexDirection={'row'} gap={1}>
                                    <Box><Image src={currency} alt="" style={{ width: '30px' }} /></Box>

                                    <Typography variant="h6" fontWeight={900} color="#000">Multiple Payment Methods</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" color={'#000'}>
                                        Enjoy flexibility and convenience with Peerwallet is support for multiple payment methods. Whether it is credit/debit cards, bank transfers, or cryptocurrencies, we ensure that your customers can choose the payment option that suits them best, making transactions seamless and hassle-free.</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display={'flex'} flexDirection={'column'} gap={deviceType === 'mobile' ? 0 : 1}>
                                <Box display={'flex'} flexDirection={'row'} gap={1}>
                                    <Box><Image src={thumb} alt="" style={{ width: '30px' }} /></Box>

                                    <Typography variant="h6" fontWeight={900} color="#000">Automated Approval</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" color={'#000'}>
                                        Save time and effort with Peerwallet is automated approval process. Say goodbye to lengthy waiting times and manual reviews—our streamlined system ensures quick and efficient approval for your store, enabling you to start selling and generating revenue without delays.</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display={'flex'} flexDirection={'column'} gap={deviceType === 'mobile' ? 0 : 1}>
                                <Box display={'flex'} flexDirection={'row'} gap={1}>
                                    <Box><Image src={globe} alt="" style={{ width: '30px' }} /></Box>

                                    <Typography variant="h6" fontWeight={900} color="#000">Global Reach</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" color={'#000'}>
                                        Expand your business horizons with Peerwallet is global reach. With our platform, you can connect with customers from around the world, tapping into diverse markets and reaching audiences beyond geographical boundaries. Benefit from our international payment capabilities and localization features, making it easier than ever to grow your business on a global scale.</Typography>
                                </Box>
                            </Box>
                        </Grid>


                        <Grid item xs={12} md={6}>
                            <Box display={'flex'} flexDirection={'column'} gap={deviceType === 'mobile' ? 0 : 1}>
                                <Box display={'flex'} flexDirection={'row'} gap={1}>
                                    <Box><Image src={support} alt="" style={{ width: '30px' }} /></Box>

                                    <Typography variant="h6" fontWeight={900} color="#000">Professional Support</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1" color={'#000'}>
                                        Receive expert assistance every step of the way with Peerwallet is dedicated support team. From setting up your store to optimizing your sales strategy, our knowledgeable professionals are here to provide guidance and support tailored to your specific needs. With Peerwallet, you are never alone on your journey to success.</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            </Container>
           
        </Box>
    );
}
