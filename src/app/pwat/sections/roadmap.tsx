"use client"; 
import { useState, useEffect } from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import roadMap from '../../../assets/images/pwat/road-map.png';
import { theme } from '../../../assets/themes/theme';
import Image from 'next/image';

const Roadmap = () => {
  const [isSlidingRight, setIsSlidingRight] = useState(true);
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
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSlidingRight(prev => !prev);
    }, 5000); // Change interval as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <Box bgcolor="#000611" pt={8} pb={8}>
      <Container disableGutters={
                deviceType === "mobile" || deviceType === "tablet" ? false : true
            }>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h4" color="#00AEEF" fontWeight={800}>
            Our Roadmap
          </Typography>
          <Typography variant="body1" color="#fff">
            Navigating Our Path To Financial Empowerment
          </Typography>
        </Box>
        <Container sx={{ overflow: 'hidden', position: 'relative' }}>
          <Image
            src={roadMap}
            alt="Roadmap"
            style={{
              width: deviceType === 'mobile' ? '180%' : '145%',
              left: isSlidingRight ? '0' : 'auto',
              right: isSlidingRight ? 'auto' : '0',
              animation: isSlidingRight ? 'slideRight 5s infinite' : 'slideLeft 5s infinite',
              // '@keyframes slideRight': {
              //   '0%': { transform: 'translateX(0)' },
              //   '50%': { transform: 'translateX(-30%)' },
              //   '100%': { transform: 'translateX(0)' },
              // },
              // '@keyframes slideLeft': {
              //   '0%': { transform: 'translateX(0)' },
              //   // '50%': { transform: 'translateX(-10%)' },
              //   '100%': { transform: 'translateX(0)' },
              // },
            }}
          />
        </Container>
      </Container>
    </Box>
  );
};

export default Roadmap;
