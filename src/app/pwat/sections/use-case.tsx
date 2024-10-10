import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';

// Import images
import icon1 from '../../../assets/images/pwat/p2pgateway.png'; // Replace with the correct path
import icon2 from '../../../assets/images/pwat/virtualcard.png'; // Replace with the correct path
import icon3 from '../../../assets/images/pwat/p2premittance.png'; // Replace with the correct path
import icon4 from '../../../assets/images/pwat/virtualbank.png'; // Replace with the correct path
import icon5 from '../../../assets/images/pwat/billspayment.png'; // Replace with the correct path
import icon6 from '../../../assets/images/pwat/wallettransfer.png'; // Replace with the correct path
import { theme } from '../../../assets/themes/theme';
import Image from 'next/image';

const CardContainer = {
  backgroundColor: '#192027',
  color: '#fff',
  borderRadius: '12px',
  textAlign: 'center',
  padding: '24px',
  minHeight: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& .MuiTypography-h6': {
    marginBottom: '16px'
  }
};

const cardData = [
  {
    icon: icon1, // Replace with the correct path
    title: 'P2P Gateway',
    description: 'Utilize Peerwallet Token (PWAT) as your dedicated peer-to-peer gateway. Seamlessly conduct direct transactions with enhanced security and promptness, simplifying the way you transfer funds.'
  },
  {
    icon: icon2, // Replace with the correct path
    title: 'Virtual Cards',
    description: 'Experience the future of virtual transactions through PWAT’s integrated virtual card. Effortlessly navigate the digital landscape, making payments and purchases with the utmost convenience.'
  },
  {
    icon: icon3, // Replace with the correct path
    title: 'P2P Remittance',
    description: 'Leverage PWAT for swift and secure cross-border remittances. Seamlessly send and receive funds across geographical boundaries, ensuring your remittances reach their destination promptly.'
  },
  {
    icon: icon4, // Replace with the correct path
    title: 'Virtual Banks',
    description: 'Transform your banking interactions with PWAT virtual banking solutions. Seamlessly manage your finances, access funds, and oversee transactions through an intuitive virtual banking experience.'
  },
  {
    icon: icon5, // Replace with the correct path
    title: 'Bills Payment',
    description: 'Simplify your bill settlement process with PWAT streamlined bills payment feature. Effortlessly manage your financial obligations by utilizing your PWAT holdings for quick and convenient payments.'
  },
  {
    icon: icon6, // Replace with the correct path
    title: 'Wallet Transfer',
    description: 'Experience the remarkable convenience and ease of wallet-to- wallet transfers with PWAT. Seamlessly move your assets between wallets, whether for personal connections or business transactions.'
  }
];

export default function UseCases() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box bgcolor="#131525" pt={8} pb={8}>
      <Container>
        <Typography variant={isMobile ? 'h4' : 'h3'} fontWeight={800} color="#009FDD" textAlign="center" mb={2}>
          PWAT’s <span style={{color: '#fff'}}> Use Cases</span>
        </Typography>
        <Typography variant="body2" color="#fff" textAlign="center" mb={8}>
          Experience a range of services that Peerwallet Token (PWAT) offers, empowering you with seamless and <br /> efficient solutions for your financial needs
        </Typography>
        <Grid container spacing={4}>
          {cardData.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={CardContainer}>
                <Box borderRadius={'100%'} bgcolor={'#272D34'} p={4} width={50} height={50} marginBottom={6}>
                <Image src={card.icon} alt={card.title}  width={50}/>
                </Box>
                <Typography variant="h6" fontWeight={700}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="#888">
                  {card.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
