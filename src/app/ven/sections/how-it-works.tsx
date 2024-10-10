"use client"; 
import { Box, Typography, Grid, Container, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import gateWay from '../../../assets/images/vendors/payment-gateway.png';
import virtualCard from '../../../assets/images/vendors/virtual-card.jpg';
import physicalCard from '../../../assets/images/vendors/physical-card.jpg';
import billsPayment from '../../../assets/images/vendors/bills-payment.jpg';
import virtualBank from '../../../assets/images/vendors/virtual-bank.jpg';
import toolsIcon from '../../../assets/images/vendors/tools-icon.png';
import thumbIcon from '../../../assets/images/vendors/thumb-icon.png';
import emojiIcon from '../../../assets/images/vendors/emoji.png';
import moneyBagIcon from '../../../assets/images/vendors/money-bag.png';
import repeatIcon from '../../../assets/images/vendors/repeat-icon.png';
import { theme } from "../../../assets/themes/theme";
import Image from "next/image";




export default function VendorsHowItWorks() {
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const menuItems = [
        "Payment Gateway",
        "Virtual Card Integration",
        "Physical Card",
        "Bills Payment",
        "Virtual Bank",
    ];
    type MenuItem = (typeof menuItems)[number];



    const content: Record<MenuItem, JSX.Element> = {
        "Payment Gateway": (
            <>
                <Typography fontSize={deviceType === 'mobile' ? 28 : 48} variant="h4" fontWeight={700} color={"#FCC82B"} pb={2}>
                    Payment Gateway
                </Typography>
                <Image src={gateWay} alt="Payment Gateway" style={{ width: '100%' }} />
                <Typography variant="body1" mt={2}>
                    Peerwallet enables users to fund their cryptocurrency wallets with either crypto or fiat currencies. Users can top up their Peerwallet balance with USDT or PWAT, which can then be utilized on the Peerwallet marketplace for various purposes such as transferring to another user, purchasing a virtual card, or withdrawing to either crypto or fiat currencies. Unlike conventional P2P platforms, vendors on Peerwallet automatically sell their assets to users who wish to fund their balances.</Typography>
                <Typography variant="body1" mt={2}>
                    As a vendor, if you have authorization to sell crypto through a gateway, you can integrate it into Peerwallet, allowing users to conveniently fund their accounts using your gateway. With thousands of users on Peerwallet seeking to fund their accounts using local payment methods, this integration presents a significant opportunity for vendors.</Typography>
                <Typography variant="body1" mt={2}>
                    Forget the complexities of traditional payment systems. Let us show you an innovative way to boost your profits effortlessly.</Typography>
                <Typography variant="body1" mt={2} color={'#FCC82B'} fontWeight={700}>
                    Here is how our gateway works:</Typography>
                <Box display={'flex'} flexDirection={'row'} gap={1}>
                    <Image src={toolsIcon} alt="Payment Gateway"  style={{ paddingTop: 3, width:'20px', height:'15px' }} />
                    <Typography variant="body1" fontSize={15} color={'#FCC82B'} fontWeight={500}>
                        Customize Your Gateway: <span style={{ color: '#fff', fontSize: 13 }}>Seamlessly integrate your very own gateway into Peerwallet and set your desired fee. This is your chance to make your mark and stand out from the crowd.</span></Typography>
                </Box>
                <Box display={'flex'} flexDirection={'row'} gap={1} mt={1}>
                    <Image src={thumbIcon} alt="Payment Gateway"  style={{ paddingTop: 3, width:'20px', height:'15px' }} />
                    <Typography variant="body1" fontSize={15} color={'#FCC82B'} fontWeight={500}>
                        Stand Out to Sellers: <span style={{ color: '#fff', fontSize: 13 }}>Sellers who have integrated Peerwallet will instantly spot your gateway during checkout, but only if they have enabled your gateway category and meet the necessary criteria. It is all about targeting the right audience.</span></Typography>
                </Box>
                <Box display={'flex'} flexDirection={'row'} gap={1} mt={1}>
                    <Image src={emojiIcon} alt="Payment Gateway"  style={{ paddingTop: 3, width:'20px', height:'15px' }} />
                    <Typography variant="body1" fontSize={15} color={'#FCC82B'} fontWeight={500}>
                        Empower Your Customers: <span style={{ color: '#fff', fontSize: 13 }}>Imagine a customer ready to pay $10 to a specific seller. They choose to use your gateway, and at this pivotal moment, your gateway checks if the customer has at least $10 in their Peerwallet balance. It is a win-win situation.</span></Typography>
                </Box>
                <Box display={'flex'} flexDirection={'row'} gap={1} mt={1}>
                    <Image src={moneyBagIcon} alt="Payment Gateway"  style={{ paddingTop: 3, width:'20px', height:'15px' }} />
                    <Typography variant="body1" fontSize={15} color={'#FCC82B'} fontWeight={500}>
                        Profit Time: <span style={{ color: '#fff', fontSize: 13 }}>Once both parties meet the conditions, the customer initiates the payment. The funds are securely added to escrow. As the vendor, you receive the payment of $10, plus an additional 3.5% (you determine the rate). Watch your profits grow effortlessly.</span></Typography>
                </Box>
                <Box display={'flex'} flexDirection={'row'} gap={1} mt={1}>
                    <Image src={repeatIcon} alt="Payment Gateway"  style={{ paddingTop: 3, width:'20px', height:'15px' }} />
                    <Typography variant="body1" fontSize={15} color={'#FCC82B'} fontWeight={500}>
                        Repeat Success: <span style={{ color: '#fff', fontSize: 13 }}>The beauty of this system is that it keeps working for you. Transaction after transaction, your profits soar while you focus on what truly matters to you.</span></Typography>
                </Box>
            </>
        ),
        "Virtual Card Integration": (
            <>
                <Typography fontSize={deviceType === 'mobile' ? 28 : 48} variant="h4" fontWeight={700} color={"#FCC82B"} pb={2}>
                    Virtual Card Integration
                </Typography>
                <Image src={virtualCard} alt="Payment Gateway" style={{ width: '100%' }} />
                <Typography variant="body1" mt={2}>
                Step into the Future Become a virtual card vendor on Peerwallet and expand your reach to a community eager to explore new options. Our team of experts is ready to assist you in integrating your virtual card services seamlessly.</Typography>
                <Typography variant="body1" mt={2}>
                Customers can purchase and load your virtual cards using their Peerwallet balance, and you can withdraw your funds at your convenience. By setting your own rates, loading fees, and custom fees, you have the flexibility to tailor your offering to attract customers and maximize profits.</Typography>
            </>
        ),
        "Physical Card": (
            <>
                <Typography fontSize={deviceType === 'mobile' ? 28 : 48} variant="h4" fontWeight={700} color={"#FCC82B"} pb={2}>
                    Physical Card
                </Typography>
                <Image src={physicalCard} alt="Payment Gateway" style={{ width: '100%' }} />
                <Typography variant="body1" mt={2}>
                Coming Soon! Stay tuned for the release of our physical card services, offering even more possibilities for your fintech business. This exciting addition will further expand your revenue streams and captivate a broader audience.</Typography>
            </>
        ),
        "Bills Payment": (
            <>
                <Typography fontSize={deviceType === 'mobile' ? 28 : 48} variant="h4" fontWeight={700} color={"#FCC82B"} pb={2}>
                    Bills Payment
                </Typography>
                <Image src={billsPayment} alt="Payment Gateway" style={{ width: '100%' }} />
                <Typography variant="body1" mt={2}>
                Coming Soon! In the near future, Peerwallet will introduce bills payment solutions, giving you the opportunity to serve customers diverse financial needs. Do not miss out on this upcoming feature that will solidify your position as a comprehensive fintech provider.</Typography>
            </>
        ),
        "Virtual Bank": (
            <>
                <Typography fontSize={deviceType === 'mobile' ? 28 : 48} variant="h4" fontWeight={700} color={"#FCC82B"} pb={2}>
                    Virtual Bank
                </Typography>
                <Image src={virtualBank} alt="Payment Gateway" style={{ width: '100%' }} />
                <Typography variant="body1" mt={2}>
                Coming Soon! The virtual bank feature is just around the corner, opening doors to a whole new level of financial services. Prepare to offer customers the convenience and security of virtual banking, solidifying your place as a trusted fintech leader.</Typography>
            </>
        ),
    };
    const [selectedItem, setSelectedItem] = useState(menuItems[0]);

       // Change content every 5 seconds on mobile
       useEffect(() => {
        if (deviceType === "mobile") {
            const interval = setInterval(() => {
                setSelectedItem((prevItem) => {
                    const currentIndex = menuItems.indexOf(prevItem);
                    const nextIndex = (currentIndex + 1) % menuItems.length;
                    return menuItems[nextIndex];
                });
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [deviceType, menuItems]);


    const styles = {
        backgroundColor: '#000',
        background: 'linear-gradient(180deg, #1A1A1A 0%, #161616 100%)',
        color: "#fff",
        borderRadius: "10px",
        border: '1px solid #F7B239',
        p: 6,
        width: deviceType === 'mobile' ? '110%' : '90%',
    };
    return (
        <Box bgcolor={"#e8e8e8"} color={"#000000"} pb={5} pt={5}>
            <Container disableGutters={
                deviceType === "mobile" || deviceType === "tablet" ? false : true
            }>
                <Box textAlign={"center"} px={deviceType === 'mobile' ? 0 : 2}>
                    <Typography variant="h2" fontSize={deviceType === 'mobile' ? 28 : 48} fontWeight={900} paddingBottom={1}>
                        How It Works
                    </Typography>
                    <hr style={{ width: "20%", border: "1px solid #000" }} />
                    <Typography fontSize={15} paddingTop={2} variant="body1" fontWeight={600} alignItems={'center'} textAlign={"center"}>
                        How does it work, you ask? Peerwallet is a cutting-edge Semi Decentralized Finance Marketplace, offering a wide range of solutions such as gateway payments, virtual and physical cards, bills payments, and virtual bank accounts. As an approved vendor on Peerwallet, you have the power to provide these services to users and charge custom fees, driving your profits to new heights. Let us explore the exciting solutions awaiting you:
                    </Typography>
                </Box>
            </Container>
            <Grid container spacing={deviceType === 'mobile' ? 0 : 2} mt={6} bgcolor={"#000"} padding={deviceType === 'mobile' ? 1 : 5}>
                <Grid item xs={4} display={deviceType === 'mobile' ? 'none' : 'block'}>
                    <Box component="ul" sx={{ listStyleType: 'none', padding: 0, position: 'relative' }}>
                        {menuItems.map((item) => (
                            <Box
                                component="li"
                                key={item}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    marginBottom: 2,
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        display: 'inline-block',
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        backgroundColor: selectedItem === item ? '#F7B239' : '#e8e8e8',
                                        marginRight: 1,
                                    },
                                    '&:hover::before': {
                                        backgroundColor: '#F7B239',
                                    },
                                    '&:not(:last-child)::after': {
                                        content: '""',
                                        position: 'absolute',
                                        left: '5px',
                                        top: '50%',
                                        width: '2px',
                                        height: 'calc(100% - 20px)',
                                        backgroundColor: '#e8e8e8',
                                        zIndex: -1,
                                    },
                                    '&:hover::after, &:hover::before': {
                                        backgroundColor: '#F7B239',
                                    },
                                }}
                                onClick={() => setSelectedItem(item)}
                            >
                                <Typography
                                    variant="body1"
                                    fontSize={24}
                                    borderRadius={'5px'}
                                    p={1}
                                    fontWeight={selectedItem === item ? 800 : 400}
                                    color={selectedItem === item ? '#FAC62B' : '#fff'}
                                    sx={{
                                        position: 'relative',
                                        transition: 'border 0.3s ease',
                                        border: selectedItem === item ? '1px solid #F7B239' : 'none',
                                        '&:hover': {
                                            border: '1px solid #F7B239',
                                            fontWeight: 800,
                                        },
                                    }}
                                >
                                    {item}
                                </Typography>
                            </Box>
                        ))}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: '10px',
                                width: '2px',
                                height: '100%',
                                backgroundColor: '#e8e8e8',
                                zIndex: -1,
                                '&:hover': {
                                    backgroundColor: '#F7B239',
                                },
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={styles}>
                        {content[selectedItem]}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
