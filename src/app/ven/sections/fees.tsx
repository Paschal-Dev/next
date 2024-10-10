"use client"; 
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import feesImage from '../../../assets/images/vendors/fees.png';
import { useState, useEffect } from 'react';
import { theme } from '../../../assets/themes/theme';
import Image from 'next/image';

export default function FeesSection() {
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
        <Box bgcolor={"#000"} px={deviceType === 'mobile' ? 0 : 10} py={6}>
            <Container disableGutters={
                deviceType === "mobile" || deviceType === "tablet" ? false : true
            }>
                <Box sx={{
                    background: '#1c1c1e',
                    p: deviceType === 'mobile' ? 0 : 5,
                    borderRadius: 4,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Grid container spacing={14}>
                        <Grid item xs={12} md={6}  display={deviceType === 'mobile' ? 'none' : 'block'}>
                            <Image src={feesImage} alt="Fees"  style={{ borderRadius: 4, width: '120%' }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box color="#fff" p={deviceType === 'mobile' ? 2 : 4} display="flex" flexDirection="column" justifyContent="center">
                                <Typography variant="h3" fontSize={'48px'} component="h2" fontWeight={800} color="#FAC62B" mb={2}>
                                    FEES
                                </Typography>
                                <Typography variant="body1" mb={2} fontWeight={600}>
                                    Streamlined for Your Success. To maintain your Vendor account on Peerwallet, you will encounter the following fees:
                                </Typography>
                                <Box bgcolor="#FAC62B4D" p={deviceType === 'mobile' ? 1 : 2} borderRadius={4} display="inline-block">
                                    <Typography variant="body1" fontWeight={600}>
                                        Subscription Fee (Billed Yearly): $100
                                    </Typography>
                                    <Typography variant="body1" fontWeight={600}>
                                        Transaction Fee (Per Transaction): 1% + $0.3
                                    </Typography>
                                </Box>
                            </Box>

                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </Box>
    );
}
