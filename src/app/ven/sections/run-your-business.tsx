"use client"; 
import { Box, Typography, useMediaQuery } from "@mui/material";
import steps from "../../../assets/images/vendors/steps.png";
import cost from "../../../assets/images/vendors/cost-icon.svg";
import customer from "../../../assets/images/vendors/customer-icon.svg";
import support from "../../../assets/images/vendors/support-icon.svg";
import maintenance from "../../../assets/images/vendors/maintenance-icon.svg";
import { theme } from "../../../assets/themes/theme";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function RunYourBusiness() {
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
        <Box bgcolor={"#e8e8e8"} color={"#000000"} pb={5} pt={5} width={'100%'}>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={5}
                width={'100%'}
            >
                <Box textAlign={"center"} width={deviceType === 'mobile' ? "90%" : "80%"}>
                    <Typography variant="h2" fontSize={deviceType === 'mobile' ? 28 : 48} fontWeight={900} paddingBottom={2}>
                        <span style={{ color: '#009FDD' }}>Run Your Fintech Business</span> On Peerwallet
                    </Typography>
                    <hr style={{ width: "23%" }} />
                    <Typography fontSize={deviceType === 'mobile' ? 12 : 16} paddingTop={2} variant="body1" fontWeight={600} alignItems={'center'} textAlign={"center"}>
                        Imagine owning a thriving fintech business without the hassle of building an entire website or managing a team. With a Peerwallet Merchant/Vendor account, you can dive into the world of financial services and reap greater profits than if you were to create <br style={{display: deviceType === 'mobile' ? 'none' : 'block'}}/> your own fintech platform.
                    </Typography>
                </Box>
                <Box
                    bgcolor={"#fff"}
                    alignSelf={'center'}
                    justifyContent={'center'}
                    width={'100%'}
                    position="relative"
                    textAlign="center"
                    display={deviceType === 'mobile' ? 'none' : 'block'}
                >
                    <Image src={steps} alt="" style={{ paddingTop: '40px', width: '45%'}} />
                    <Box position="absolute" top={deviceType === 'mobile' ? "10%" : "15%"} left={ deviceType === 'mobile' ? "10%" : "8%"} textAlign={ deviceType === 'mobile' ? 'center' : 'left'}>
                        <Box display={'flex'} flexDirection={deviceType === 'mobile' ? 'column' : 'row'} gap={deviceType === 'mobile' ? 0 : 1}>
                            <Box pt={1}><Image src={cost} alt="" style={{ width: '30px' }}  /></Box>
                            <Box width={ deviceType === 'mobile' ? "60%" : "28%" }>
                                <Typography variant="h6" fontSize={ deviceType === 'mobile' ? 14 : 22 } fontWeight={800} color="#009FDD">No Running Cost</Typography>
                                <Typography variant="body2" fontSize={16}>
                                    Say goodbye to unexpected expenses and budget constraints. We offer a solution with zero running costs, allowing you to allocate resources where they are needed most.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box position="absolute" top={ deviceType === 'mobile' ? "30%" : "35%"} left={ deviceType === 'mobile' ? "50%" : "60%"} textAlign={ deviceType === 'mobile' ? 'center' : 'left'}>
                        <Box display={'flex'} flexDirection={deviceType === 'mobile' ? 'column' : 'row'} gap={deviceType === 'mobile' ? 0 : 1}>
                            <Box pt={1}><Image src={maintenance} alt="" style={{ width: '30px' }} /></Box>
                            <Box width={ deviceType === 'mobile' ? "60%" : "60%" }>
                                <Typography variant="h6" fontSize={ deviceType === 'mobile' ? 14 : 22 } fontWeight={800} color="#E27A13">We Handle Maintenance</Typography>
                                <Typography variant="body2" fontSize={16}>
                                    Our dedicated team handles all equipment upkeep and system maintenance. Enjoy a hassle-free experience with smooth operations and minimal interruptions.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box position="absolute" top={ deviceType === 'mobile' ? "50%" : "55%"} left={ deviceType === 'mobile' ? "10%" : "15%"} textAlign={ deviceType === 'mobile' ? 'center' : 'left'}>
                        <Box display={'flex'} flexDirection={deviceType === 'mobile' ? 'column' : 'row'} gap={deviceType === 'mobile' ? 0 : 1}>
                            <Box pt={1}><Image src={support} alt="" style={{ width: '30px' }} /></Box>
                            <Box width={ deviceType === 'mobile' ? "60%" : "30%" }>
                                <Typography variant="h6" fontSize={ deviceType === 'mobile' ? 14 : 22 } fontWeight={800} color="#098909">We Handle Support</Typography>
                                <Typography variant="body2" fontSize={16}>
                                    Our experienced support team is available 24/7 to address any concerns or provide technical assistance. Focus on your core business while we handle the support side of things.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box position="absolute" top={ deviceType === 'mobile' ? "70%" : "78%"} left={ deviceType === 'mobile' ? "50%" : "59%"} textAlign={ deviceType === 'mobile' ? 'center' : 'left'}>
                        <Box display={'flex'} flexDirection={deviceType === 'mobile' ? 'column' : 'row'} gap={deviceType === 'mobile' ? 0 : 1}>
                            <Box pt={1}><Image src={customer} alt="" style={{ width: '30px' }} /></Box>
                            <Box width={ deviceType === 'mobile' ? "60%" : "58%" }>
                                <Typography variant="h6" fontWeight={800} fontSize={ deviceType === 'mobile' ? 14 : 22 } color="#CC0DA8">Large Customer Base</Typography>
                                <Typography variant="body2" fontSize={16}>
                                    Join our extensive network of satisfied customers spanning various industries. Benefit from our proven track record and expertise.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
