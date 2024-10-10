'use client';
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
// import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";

export default function AffiliateFAQ(): React.JSX.Element {
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

    return (
        <Box style={{ padding: deviceType === 'mobile' ? '20px' : '60px' }}>
            <Box textAlign={'center'} justifyContent={'center'} mb={4}>
                <Typography variant="h2" fontWeight={900} fontSize={deviceType === 'mobile' ? 35 : 45} textAlign={'center'}>
                    Frequently Asked{" "}
                    <span style={{ color: "#009FDD" }}>Questions</span>
                </Typography>
                <Typography variant="body2" fontSize={16} pt={3} textAlign={'center'}>
                    Let’s Answer Some Of Your Questions Or Frequently Asked Questions
                </Typography>
            </Box>
            <Box
                display="flex"
                flexDirection={deviceType === 'mobile' ? "column" : 'row'}
                gap={deviceType === 'mobile' ? 0 : 2}
            >
                <Box
                    width={deviceType === 'mobile' ? '100%' : '50%'}
                    sx={{
                        display: "flex",
                        flexDirection: 'column',
                    }}>
                    <Accordion
                        sx={{ mb: 1 }}
                    >
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header"
                            expandIcon={
                                <Box
                                    sx={{
                                        bgcolor: '#009FDD',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: deviceType === 'mobile' ? '90px' : '60px',
                                    }}
                                >
                                    <ExpandMoreIcon sx={{ color: 'white', transition: 'transform 0.2s' }} />
                                </Box>
                            }
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingRight: 0,
                                '& .MuiAccordionSummary-content': {
                                    marginRight: 'auto',
                                }
                            }}
                        >
                            <Typography>How much can I earn referring people to Peerwallet?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ maxHeight: '160px', overflowY: 'auto' }}>
                            <Typography>How much you can earn is unlimited, and you would be paid each time your referred users receive payments on Peerwallet. You would earn 20% of the total fees they paid.</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={{ mb: 1 }}
                    >
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header"
                            expandIcon={
                                <Box
                                    sx={{
                                        bgcolor: '#009FDD',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: deviceType === 'mobile' ? '90px' : '60px',
                                    }}
                                >
                                    <ExpandMoreIcon sx={{ color: 'white', transition: 'transform 0.2s' }} />
                                </Box>
                            }
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingRight: 0,
                                '& .MuiAccordionSummary-content': {
                                    marginRight: 'auto',
                                }
                            }}
                        >
                            <Typography>How do you know when I refer someone to peerwallet?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ maxHeight: '160px', overflowY: 'auto' }}>
                            <Typography>From here you would first need to set your affiliate link, when that is done then you can give your friends to access peerwallet. When they do that, we would automatically store you as their sponsor</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={{ mb: 1 }}
                    >
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header"
                            expandIcon={
                                <Box
                                    sx={{
                                        bgcolor: '#009FDD',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: deviceType === 'mobile' ? '90px' : '60px',
                                    }}
                                >
                                    <ExpandMoreIcon sx={{ color: 'white', transition: 'transform 0.2s' }} />
                                </Box>
                            }
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingRight: 0,
                                '& .MuiAccordionSummary-content': {
                                    marginRight: 'auto',
                                }
                            }}
                        >
                            <Typography>What if they don’t register after clicking my affiliate link?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ maxHeight: '160px', overflowY: 'auto' }}>
                            <Typography>When someone clicks your affiliate link and doesn’t register, we still store your link on their browser’s cookies which is active for 90 days, when the user comes back to peerwallet again even after several days, we would still recognize you as their sponsor</Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                        sx={{ mb: 1 }}
                    >
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header"
                            expandIcon={
                                <Box
                                    sx={{
                                        bgcolor: '#009FDD',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: deviceType === 'mobile' ? '90px' : '60px',
                                    }}
                                >
                                    <ExpandMoreIcon sx={{ color: 'white', transition: 'transform 0.2s' }} />
                                </Box>
                            }
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingRight: 0,
                                '& .MuiAccordionSummary-content': {
                                    marginRight: 'auto',
                                }
                            }}
                        >
                            <Typography>How do I check how many users I have referred?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ maxHeight: '160px', overflowY: 'auto' }}>
                            <Typography>From the affiliates page, you would see the total number of users you have referred to Peerwallet.</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box
                    width={deviceType === 'mobile' ? '100%' : '50%'}
                    sx={{
                        display: "flex",
                        flexDirection: 'column',
                    }}>
                    <Accordion
                        sx={{ mb: 1 }}
                    >
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header"
                            expandIcon={
                                <Box
                                    sx={{
                                        bgcolor: '#009FDD',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: deviceType === 'mobile' ? '90px' : '60px',
                                    }}
                                >
                                    <ExpandMoreIcon sx={{ color: 'white', transition: 'transform 0.2s' }} />
                                </Box>
                            }
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingRight: 0,
                                '& .MuiAccordionSummary-content': {
                                    marginRight: 'auto',
                                }
                            }}
                        >
                            <Typography>What is the minimum payout?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ maxHeight: '160px', overflowY: 'auto' }}>
                            <Typography>The minimum payout is €5 or the equivalent in your primary currency</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={{ mb: 1 }}
                    >
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header"
                            expandIcon={
                                <Box
                                    sx={{
                                        bgcolor: '#009FDD',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: deviceType === 'mobile' ? '90px' : '60px',
                                    }}
                                >
                                    <ExpandMoreIcon sx={{ color: 'white', transition: 'transform 0.2s' }} />
                                </Box>
                            }
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingRight: 0,
                                '& .MuiAccordionSummary-content': {
                                    marginRight: 'auto',
                                }
                            }}
                        >
                            <Typography>How do I get paid?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ maxHeight: '160px', overflowY: 'auto' }}>
                            <Typography>When you have earned above the minimum balance, payments would be sent to your Peerwallet balance, and from there you can easily withdraw your funds</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={{ mb: 1 }}
                    >
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header"
                            expandIcon={
                                <Box
                                    sx={{
                                        bgcolor: '#009FDD',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: deviceType === 'mobile' ? '90px' : '60px',
                                    }}
                                >
                                    <ExpandMoreIcon sx={{ color: 'white', transition: 'transform 0.2s' }} />
                                </Box>
                            }
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingRight: 0,
                                '& .MuiAccordionSummary-content': {
                                    marginRight: 'auto',
                                }
                            }}
                        >
                            <Typography>What is the total number of users I can refer?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ maxHeight: '160px', overflowY: 'auto' }}>
                            <Typography>There is no limit to how many users you can refer to Peerwallet</Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                        sx={{ mb: 1 }}
                    >
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header"
                            expandIcon={
                                <Box
                                    sx={{
                                        bgcolor: '#009FDD',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: deviceType === 'mobile' ? '90px' : '60px',
                                    }}
                                >
                                    <ExpandMoreIcon sx={{ color: 'white', transition: 'transform 0.2s' }} />
                                </Box>
                            }
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingRight: 0,
                                '& .MuiAccordionSummary-content': {
                                    marginRight: 'auto',
                                }
                            }}
                        >
                            <Typography>How do I contact Support in case of an issue?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ maxHeight: '160px', overflowY: 'auto' }}>
                            <Typography>You can contact us via the live chat or via support ticket from the member area.</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    );
}
