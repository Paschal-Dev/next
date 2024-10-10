"use client"; 
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';

// Import images
import arrowImage from '../../../assets/images/pwat/arrow.png';
import yellowRectangle from '../../../assets/images/pwat/yellow-rectangle.png';
import backgroundImage from '../../../assets/images/pwat/elipse-background.png';
import icon1 from '../../../assets/images/pwat/icon1.png';
import icon2 from '../../../assets/images/pwat/icon2.png';
import icon3 from '../../../assets/images/pwat/icon3.png';
import { theme } from '../../../assets/themes/theme';
import PwatSpin from '@/components/pwat-spin';
import { useState, useEffect } from 'react';
import Image from 'next/image';



const ImageContainer = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pt: 5,
  '& .coin-image': {
    position: 'absolute',
    zIndex: 2,
    right: '33%',
    top: '37%',
  },
  '& .arrow-image': {
    position: 'absolute',
    zIndex: 1,
    right: '2%',
    top: -30,
  },
  '& .yellow-rectangle': {
    position: 'absolute',
    zIndex: 1,
    right: '21%',
    top: '102%',
  },
  '& .yellow-rectangle2': {
    position: 'absolute',
    zIndex: 1,
    right: '21%',
    top: '99%',
  },
  '& .background-image': {
    position: 'relative',
    zIndex: 0,
    right: 0
  }
};

const cardData = [
  {
    icon: icon1,
    title: 'Effortless Transactions',
    description: 'Peerwallet Token (PWAT) enables seamless peer-to-peer transactions, eliminating delays. Experience instant, direct transfers and instant settlement.'
  },
  {
    icon: icon2,
    title: 'Global Accessibility',
    description: 'With PWAT, geographical barriers fade away. Access your funds, make payments, and engage in financial activities from anywhere in the world.'
  },
  {
    icon: icon3,
    title: 'Empowering Innovation',
    description: 'Join a vibrant ecosystem that encourages innovation. PWAT’s availability for trading means you’re part of a forward-looking community.'
  }
];

export default function Embark() {
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

  const CardTextContainer = {
    width: deviceType === 'mobile' ? '100%' : '120%',
    color: '#fff',
    '& .MuiTypography-h4': {
      color: '#00AEEF'
    }
  };

  return (
    <Box bgcolor="#000611" pt={deviceType === 'mobile' ? 10 : 15} pb={deviceType === 'mobile' ? 4 : 8}>
      <Container disableGutters={
        deviceType === "mobile" || deviceType === "tablet" ? false : true
      }>
        <Grid container spacing={4}>
          <Grid item xs={12} md={deviceType === 'mobile' ? 12 : 6}>
            <Box sx={CardTextContainer}>
              <Typography variant={deviceType === 'mobile' ? 'h4' : 'h3'} fontWeight={800} mb={4} textAlign={deviceType === 'mobile' ? 'center' : 'left'}>
                Embark On The Future Of Finance With Peerwallet Token (PWAT).
              </Typography>
              {cardData.map((card, index) => (
                <Box key={index} display="flex" mb={4} width={deviceType === 'mobile' ? '85%' : '65%'}>
                  <Box mr={deviceType === 'mobile' ? 1 : 2}>
                    <Image src={card.icon} alt={card.title} style={{ width: 40, height: 40 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={700} mb={1}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="#fff">
                      {card.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} display={deviceType === 'mobile' ? 'none' : 'block'}>
            <Box sx={ImageContainer} >
              <Image className="background-image" src={backgroundImage} alt="Background" style={{ width: '90%' }} />
              <Image className="arrow-image" src={arrowImage} alt="Arrow" style={{ width: '70%' }} />
              <Image className="yellow-rectangle" src={yellowRectangle} alt="Arrow" style={{ width: '31%' }} />
              <Image className="yellow-rectangle2" src={yellowRectangle} alt="Arrow" style={{ width: '31%' }} />
              <PwatSpin width={"65%"} top={"36%"} left={0} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
