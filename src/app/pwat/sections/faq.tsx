"use client"; 
import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, Accordion, AccordionSummary, AccordionDetails, useMediaQuery, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Import images
import questionImage from '../../../assets/images/pwat/question-mark.png'; // Replace with the correct path
import circleImage from '../../../assets/images/pwat/faq-elipse.png'; // Replace with the correct path
import Image from 'next/image';

const ImageContainer = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    '& .question-image': {
        position: 'relative',
        zIndex: 2
    },
    '& .circle-image': {
        position: 'absolute',
        zIndex: 0
    }
};

const faqData = [
    {
        question: 'What is Peerwallet Token (PWAT)?',
        answer: 'Peerwallet Token (PWAT) is the official token of the Peerwallet platform, offering a seamless solution for peer-to-peer transactions and enabling various financial activities.'
    },
    {
        question: 'How Does PWAT Enhance Transactions?',
        answer: 'PWAT simplifies transactions within the Peerwallet ecosystem, enabling users to load, withdraw, spend, and accept payments effortlessly.'
    },
    {
        question: 'Can I Trade PWAT Tokens?',
        answer: 'From the 1st of January 2024, PWAT will be available for trading, offering ample liquidity and the potential for growth in the dynamic cryptocurrency market.'
    },
    {
        question: 'How Many PWAT Tokens Are There?',
        answer: 'The total supply of PWAT tokens is 100 million, ensuring long-term availability and versatility.'
    }
];

export default function PWATFaq() {
    const [expanded, setExpanded] = useState<string | false>(false);
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

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box bgcolor="#131525" pt={8} pb={8} px={deviceType === 'mobile' ? 0 : 10}>
            <Container disableGutters={
                deviceType === "mobile" || deviceType === "tablet" ? false : true
            }>
                <Box textAlign={'center'} mb={deviceType === 'mobile' ? 2 : 6}>
                    <Typography variant="h4" fontSize={deviceType === 'mobile' ? 35 : 48} fontWeight={800} color="#FCC82B" mb={2}>
                        Frequently <span style={{ color: '#fff' }}> Asked Questions</span>
                    </Typography>
                    <Typography variant="body1" color="#fff">
                    Below are answers to some of the most common questions about Peerwallet Token, its features, and its role in revolutionizing peer-to-peer financial interactions. Feel free to reach out to us for further assistance.</Typography>
                </Box>
            </Container>
                
                <Grid container spacing={deviceType === 'mobile' ? 0 : 4} pt={deviceType === 'mobile' ? 2 : 4}>
                    <Grid item xs={12} md={deviceType === 'mobile' ? 8 : 7}>
                        <Box pl={deviceType === 'mobile' ? 4 : 0}>
                            {faqData.map((faq, index) => (
                                <Accordion 
                                    key={index} 
                                    expanded={expanded === `panel${index}`} 
                                    onChange={handleChange(`panel${index}`)} 
                                    sx={{ mb: 1, width: deviceType === 'mobile' ? '90%' :  "96%", backgroundColor: '#000211', color: '#fff'}}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{ color: "#000", fontSize: 50 }} />}
                                        aria-controls={`panel${index}-content`}
                                        id={`panel${index}-header`}
                                    >
                                        <Box
                                            bgcolor={"#FCC82B"}
                                            px={deviceType === 'mobile' ? 4.3 : 3.8}
                                            sx={{
                                                position: "absolute",
                                                left: deviceType === 'mobile' ? "78%" : "90%",
                                                top: 0,
                                                bottom: 0,
                                                height:deviceType === 'mobile' ? '100%' :  "100%",
                                            }}
                                        />
                                        <Typography fontSize={deviceType === 'mobile' ? 15 : 25} py={deviceType === 'mobile' ? 0 : 1.5} px={deviceType === 'mobile' ? 1 : 0}>
                                            {faq.question}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ bgcolor: "#fff", color: '#000' }}>
                                        <Typography variant="body2">
                                            {faq.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}  display={deviceType === 'mobile' ? 'none' : 'block'}>
                        <Box sx={ImageContainer}>
                            <Image className="circle-image" src={circleImage} alt="Circle" style={{ width: '100%', height: 'auto' }} />
                            <Image className="question-image" src={questionImage} alt="Question Mark" style={{ width: '90%', height: 'auto' }} />
                        </Box>
                    </Grid>
                </Grid>
        </Box>
    );
}
