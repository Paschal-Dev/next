import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import seamless_icon from "../../../assets/images/pwat/seamless.png";
import currency_icon from "../../../assets/images/pwat/currency.png";
import privacy_icon from "../../../assets/images/pwat/privacy.png";
import liquidity_icon from "../../../assets/images/pwat/liquidity.png";
import background_image from "../../../assets/images/pwat/pwat.png";
import { theme } from "../../../assets/themes/theme";
import Image from "next/image";



const cardData = [
    {
        icon: seamless_icon,
        title: "Seamless Transactions",
        description: "Peerwallet Token facilitates swift and secure peer-to-peer transactions within the platform, eliminating the need for cumbersome currency conversions."
    },
    {
        icon: currency_icon,
        title: "Currency Conversion Simplified",
        description: "Forget the frustration of fluctuating conversion rates. Peerwallet eliminates the need for multiple conversions, enabling straightforward transactions and minimizing losses."
    },
    {
        icon: privacy_icon,
        title: "Enhanced Privacy and Security",
        description: "Your financial security is our priority. PWAT incorporates advanced security measures to protect your transactions and personal information, providing you with peace of mind."
    },
    {
        icon: liquidity_icon,
        title: "Liquidity and Trading Opportunities",
        description: "Your financial security is our priority. PWAT incorporates advanced security measures to protect your transactions and personal information, providing you with peace of mind."
    }
];

export default function DiscoverPWAT(): React.JSX.Element {
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

    const styles = {
        backgroundColor: "#000211",
        color: "#fff",
        borderRadius: 5,
        textAlign: "center",
        padding: 4,
        transition: "transform 0.3s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        height: deviceType === 'mobile' ? '90%' : "100%",
        "&:hover": {
            transform: "scale(1.05)",
            border: '1px solid #009FDD',
        }
    };

    return (
        <Box bgcolor={"#131525"} pt={8} pb={8} px={deviceType === 'mobile' ? 0 : 6}>
            <Container disableGutters={
                deviceType === "mobile" || deviceType === "tablet" ? false : true
            }>
                <Typography variant={deviceType === 'mobile' ? "h4" : "h3"} fontWeight={800} fontSize={deviceType === 'mobile' ? 30 : 48} color={"#fff"} textAlign="center" mb={4}>
                    Discover The Power Of <br /> <span style={{ color: '#009FDD' }}>Peerwallet Token (PWAT)</span>
                </Typography>
                <Typography variant="body2" fontWeight={600} fontSize={16} color={"#fff"} textAlign="center" mb={deviceType === 'mobile' ? 8 : 4}>
                    Peerwallet Token (PWAT) is at the heart of the Peerwallet semi-decentralized P2P finance marketplace, <br /> offering a host of features to revolutionize your financial experience:
                </Typography>
                <Grid container spacing={deviceType === 'mobile' ? 5 : 4} sx={{ backgroundImage: deviceType === 'mobile' ? 'none' : `url(${background_image})`, backgroundSize: 'cover', }} p={deviceType === 'mobile' ? 2 : 5}>
                    {cardData.map((card, index) => (
                        <Grid item xs={12} md={3} key={index} sx={{mb: deviceType === 'mobile' ? 4 : 0}}>
                            <Box sx={styles}>
                                <Image src={card.icon} alt={card.title} />
                                <Box width={'120%'} textAlign={'center'}>
                                    <Typography variant="h6" fontSize={18} fontWeight={800} pb={2}>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" fontSize={15} color={"#fff"}>
                                        {card.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
