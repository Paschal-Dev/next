"use client"; 
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import Icon1 from "../../../assets/images/vendors/icon1.png"; // Replace with the correct path to your icons
import Icon2 from "../../../assets/images/vendors/icon2.png";
import Icon3 from "../../../assets/images/vendors/icon3.png";
import Icon4 from "../../../assets/images/vendors/icon4.png";
import Icon5 from "../../../assets/images/vendors/icon5.png";
import Icon6 from "../../../assets/images/vendors/icon6.png";
import Icon7 from "../../../assets/images/vendors/icon7.png";
import Icon8 from "../../../assets/images/vendors/icon8.png";
import Icon9 from "../../../assets/images/vendors/icon9.png";
import Icon10 from "../../../assets/images/vendors/icon10.png";
import { useState, useEffect } from "react";
import { theme } from "../../../assets/themes/theme";
import Image from "next/image";

export default function VendorBenefit() {
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
            <Box textAlign={"center"}>
                <Typography variant={deviceType === 'mobile' ? 'h4' : "h3"} fontWeight={900} color={"#009FDD"} textAlign="center" pb={1} fontSize={deviceType === 'mobile' ? 35 : 48}>
                    Vendor Benefit <span style={{ color: '#000' }}>On Peerwallet</span>
                </Typography>
                <hr style={{ width: "14%", margin: "0 auto", border: "1px solid #000" }} />
            </Box>

                <Grid container spacing={3} p={deviceType === 'mobile' ? 2 : 5} mt={5} bgcolor={"#fff"} justifyContent={'center'}>
                    <Grid item xs={12} lg={6}>
                        <Box color={'#292929'} bgcolor={"#F5F5F5"} p={3} borderRadius={4} boxShadow={'rgba(52, 52, 52, 0.15)'} textAlign={'center'}>
                            <Box display="flex" flexDirection={deviceType === 'mobile' ? 'column' : 'row'} alignItems="center" gap={2} textAlign={'center'} justifyContent={'center'}>
                                <Image src={Icon1} alt="Icon" width={40} />
                                <Typography variant="h6" fontWeight={800} fontSize={19}>Launch Your Fintech Business with Ease</Typography>
                            </Box>
                            <Typography variant="body2" pt={1} fontSize={17}>
                            Experience the thrill of running your own fintech business without the typical barriers like high capital requirements and risks. Peerwallet provides the perfect platform to bring your financial services to life.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box color={'#292929'}  bgcolor={"#F5F5F5"} p={3} borderRadius={4} boxShadow={'rgba(52, 52, 52, 0.15)'} textAlign={'center'}>
                            <Box display="flex" flexDirection={deviceType === 'mobile' ? 'column' : 'row'} alignItems="center" gap={2} textAlign={'center'} justifyContent={'center'}>
                                <Image src={Icon2} alt="Icon" width={40} />
                                <Typography variant="h6" fontWeight={800} fontSize={19}>Unmatched Security and System Maintenance</Typography>
                            </Box>
                            <Typography variant="body2" pt={1} fontSize={17}>
                            With Peerwallet, you can trust that your funds and account security are our utmost priority. We have invested millions of dollars to ensure the safety of your finances, freeing you from the burdens of constant maintenance.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box color={'#292929'}  bgcolor={"#F5F5F5"} p={3} borderRadius={4} boxShadow={'rgba(52, 52, 52, 0.15)'} textAlign={'center'}>
                            <Box display="flex" flexDirection={deviceType === 'mobile' ? 'column' : 'row'} alignItems="center" gap={2} textAlign={'center'} justifyContent={'center'}>
                                <Image src={Icon3} alt="Icon" width={40} />
                                <Typography variant="h6" fontWeight={800} fontSize={19}>Effortless Profits</Typography>
                            </Box>
                            <Typography variant="body2" pt={1} fontSize={17}>
                            Sit back and watch the profits roll in effortlessly. Our automated system ensures your earnings are seamlessly deposited into your preferred payment method. You will only need a mere 10 to 30 minutes daily to monitor your thriving business.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box color={'#292929'}  bgcolor={"#F5F5F5"} p={3} borderRadius={4} boxShadow={'rgba(52, 52, 52, 0.15)'} textAlign={'center'}>
                            <Box display="flex" flexDirection={deviceType === 'mobile' ? 'column' : 'row'} alignItems="center" gap={2} textAlign={'center'} justifyContent={'center'}>
                                <Image src={Icon4} alt="Icon" width={40} />
                                <Typography variant="h6" fontWeight={800} fontSize={19}>Priority Dispute Resolution</Typography>
                            </Box>
                            <Typography variant="body2" pt={1} fontSize={17}>
                            Vendors integrating reversible payment methods are given top priority in dispute resolution, as long as the gateway terms and conditions have been properly established. Rest assured that your interests are safeguarded in the event of any conflicts.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box color={'#292929'}  bgcolor={"#F5F5F5"} p={3} borderRadius={4} boxShadow={'rgba(52, 52, 52, 0.15)'} textAlign={'center'}>
                            <Box display="flex" flexDirection={deviceType === 'mobile' ? 'column' : 'row'} alignItems="center" gap={2} textAlign={'center'} justifyContent={'center'}>
                                <Image src={Icon5} alt="Icon" width={40} />
                                <Typography variant="h6" fontWeight={800} fontSize={19}>Access to a Ready-Made Customer Base</Typography>
                            </Box>
                            <Typography variant="body2" pt={1} fontSize={17}>
                            No need to worry about finding customers—the Peerwallet community eagerly awaits your services. Plug into our existing customer base, and watch your profits soar.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box color={'#292929'}  bgcolor={"#F5F5F5"} p={3} borderRadius={4} boxShadow={'rgba(52, 52, 52, 0.15)'} textAlign={'center'}>
                            <Box display="flex" flexDirection={deviceType === 'mobile' ? 'column' : 'row'} alignItems="center" gap={2} textAlign={'center'} justifyContent={'center'}>
                                <Image src={Icon6} alt="Icon" width={40} />
                                <Typography variant="h6" fontWeight={800} fontSize={19}>Simplified Finance Licensing</Typography>
                            </Box>
                            <Typography variant="body2" pt={1} fontSize={17}>
                            Applying for a finance license becomes a breeze when your services are straightforward and easily explained. Benefit from faster approvals and clear-cut compliance measures</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box color={'#292929'}  bgcolor={"#F5F5F5"} p={3} borderRadius={4} boxShadow={'rgba(52, 52, 52, 0.15)'} textAlign={'center'}>
                            <Box display="flex" flexDirection={deviceType === 'mobile' ? 'column' : 'row'} alignItems="center" gap={2} textAlign={'center'} justifyContent={'center'}>
                                <Image src={Icon7} alt="Icon" width={40} />
                                <Typography variant="h6" fontWeight={800} fontSize={19}>Valuation and Exit Opportunities</Typography>
                            </Box>
                            <Typography variant="body2" pt={1} fontSize={17}>
                            As your Peerwallet transaction volume increases, you gain the possibility of legally exiting your vendor account. Contact us for more details on how you can unlock this opportunity.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box color={'#292929'}  bgcolor={"#F5F5F5"} p={3} borderRadius={4} boxShadow={'rgba(52, 52, 52, 0.15)'} textAlign={'center'}>
                            <Box display="flex" flexDirection={deviceType === 'mobile' ? 'column' : 'row'} alignItems="center" gap={2} textAlign={'center'} justifyContent={'center'}>
                                <Image src={Icon8} alt="Icon" width={40} />
                                <Typography variant="h6" fontWeight={800} fontSize={19}>Exclusive Opportunity Alerts</Typography>
                            </Box>
                            <Typography variant="body2" pt={1} fontSize={17}>
                            Be the first to hear about exciting opportunities within the Peerwallet Marketplace. Stay ahead of the curve and leverage new possibilities to expand your business further.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box color={'#292929'}  bgcolor={"#F5F5F5"} p={3} borderRadius={4} boxShadow={'rgba(52, 52, 52, 0.15)'} textAlign={'center'}>
                            <Box display="flex" flexDirection={deviceType === 'mobile' ? 'column' : 'row'} alignItems="center" gap={2} textAlign={'center'} justifyContent={'center'}>
                                <Image src={Icon9} alt="Icon" width={40} />
                                <Typography variant="h6" fontWeight={800} fontSize={19}>Minimal Running Costs</Typography>
                            </Box>
                            <Typography variant="body2" pt={1} fontSize={17}>
                            Leave the support, transaction tracking, customer issue resolution, system maintenance, and feature development to us. You can focus on making sales, withdrawing funds, and growing your business without the need to hire additional staff.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box color={'#292929'}  bgcolor={"#F5F5F5"} p={3} borderRadius={4} boxShadow={'rgba(52, 52, 52, 0.15)'} textAlign={'center'}>
                            <Box display="flex" flexDirection={deviceType === 'mobile' ? 'column' : 'row'} alignItems="center" gap={2} textAlign={'center'} justifyContent={'center'}>
                                <Image src={Icon10} alt="Icon" width={40} />
                                <Typography variant="h6" fontWeight={800} fontSize={19}>Establish Reputation and Expand Opportunities</Typography>
                            </Box>
                            <Typography variant="body2" pt={1} fontSize={17}>
                            By processing transactions through Peerwallet, you will build a strong reputation that attracts future investment and finance opportunities. The more you thrive, the more possibilities will come knocking at your door.</Typography>
                        </Box>
                    </Grid>
                </Grid>
        </Box>
    );
}
