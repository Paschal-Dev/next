'use client';
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  useMediaQuery,
  Grid,
} from "@mui/material";
// import { useLocation } from "react-router-dom";
import { theme } from "../../../assets/themes/theme";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import blueSupportIcon from "../../../assets/images/product/blue-support-icon.png";
import deliveryIcon from "../../../assets/images/product/delivery-icon.png";
import p2pIcon from "../../../assets/images/product/p2p-icon.png";
import paymentOptionIcon from "../../../assets/images/product/payment-option-icon.png";
import productImage from "../../../assets/images/product/product.png";
import Image from "next/image";
import { useParams,  } from "next/navigation";

const ProductPage = () => {
  // const router = useRouter();
  const { id } = useParams();  // Access dynamic route params
  console.log({ id });
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

  const [quantity, setQuantity] = useState(0); // Start with 0 quantity

  const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleDecrease = () =>
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0)); // Ensure quantity does not go below 0

  // if (!product) return <div>No product selected</div>;

  return (
    <Box bgcolor={"#fff"} color={"#000000"} pb={8}>
      <Box gap={5}>
        <Box mt={deviceType === "mobile" ? 6 : 'none'} textAlign={"center"} bgcolor={"#009FDD"} color={"#fff"} p={3}>
          <Typography
            variant="h2"
            fontSize={deviceType === 'mobile' ? 35 : 28}
            fontWeight={600}
          >
            Product Flash
          </Typography>
        </Box>
        <Container disableGutters={deviceType === "mobile" || deviceType === "tablet" ? false : true}>
          <Grid container p={deviceType === 'mobile' ? 1 : 5} spacing={5}>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              display={"flex"}
              flexDirection={"column"}
            >
              <Image
                src={productImage}
                alt=""
                style={{
                  borderRadius: "34px",
                  width: deviceType === "mobile" ? '100%' : "100%",
                }}
              />

              <Grid container display={deviceType === "mobile" ? 'none' : 'flex'}>
                <Grid item md={4}>
                  <Image
                    src={productImage}
                    alt=""
                    style={{ width: "100%", borderRadius: "12px" , height: "100%" }}
                  />
                </Grid>
                <Grid item md={4}>
                  <Image
                    src={productImage}
                    alt=""
                    style={{ width: "100%", borderRadius: "12px" , height: "100%" }}
                  />
                </Grid>
                <Grid item md={4}>
                  <Image
                    src={productImage}
                    alt=""
                    style={{ width: "100%", borderRadius: "12px" , height: "100%" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography
                  variant="h3"
                  fontSize={deviceType === "mobile" ? 35 : 40}
                  fontWeight={800}
                  color={"rgba(0, 159, 221, 1)"}
                  pt={2}
                >
                  Product Name
                </Typography>
                <Typography variant="body1" fontSize={20} fontWeight={500}>
                  By SDS Resources
                </Typography>
                <Typography variant={"h4"} fontWeight={800} mt={2}>
                  ($)USD 50.00
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={deviceType === 'mobile' ? 18 : 20}
                  fontWeight={500}
                  mt={3}
                >
                  Quick and simple product tagline
                </Typography>
                <Box mt={1} display={"flex"} flexDirection={"row"}>
                  <Button
                    sx={{
                      p: deviceType === 'mobile' ? 1 : 0.5,
                      mr: 1,
                      borderRadius: 2,
                      border: "1px solid black",
                      color: "black",
                      width: deviceType === "mobile" ? '30%' : "24%",
                    }}
                  >
                    Variation 1
                  </Button>
                  <Button
                    sx={{
                      p: deviceType === 'mobile' ? 1 : 0.5,
                      mr: 1,
                      borderRadius: 2,
                      border: "1px solid black",
                      color: "black",
                      width: deviceType === "mobile" ? '30%' : "24%",
                    }}
                  >
                    Variation 1
                  </Button>
                  <Button
                    sx={{
                      p: deviceType === 'mobile' ? 1 : 0.5,
                      borderRadius: 2,
                      border: "1px solid black",
                      color: "black",
                      width: deviceType === "mobile" ? '30%' : "24%",
                    }}
                  >
                    Variation 1
                  </Button>
                </Box>
                <Box display={"flex"} flexDirection={"row"} mt={7} gap={2}>
                  <Box
                    display="flex"
                    alignItems="center"
                    border={"2px solid #009FDD"}
                    borderRadius={2}
                  >
                    <IconButton onClick={handleDecrease}>
                      <RemoveIcon style={{ color: "#009FDD" }} />
                    </IconButton>
                    <Typography variant="h6" mx={2}>
                      {quantity}
                    </Typography>
                    <IconButton onClick={handleIncrease}>
                      <AddIcon style={{ color: "#009FDD" }} />
                    </IconButton>
                  </Box>
                  <Button
                    variant="outlined"
                    sx={{
                      width: deviceType === 'mobile' ? "80%" : "50%",
                      p: 2,
                      backgroundColor: "#009FDD",
                      color: "#fff",
                      marginLeft: deviceType === 'mobile' ? 0 : 2,
                      borderRadius: 2,
                      textTransform: "uppercase",
                      ":hover": {
                        background: "none",
                        borderColor: "#FCC82B",
                        color: "#000",
                        p: 2,
                        width: deviceType === 'mobile' ? "80%" : "50%",
                      },
                      fontSize: 20,
                      fontWeight: 700,
                    }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        textAlign={deviceType === 'mobile' ? "center" : "left"}
        bgcolor={"#fff"}
        color={"#000"}
        py={4}
        px={12}
        mb={2}
        display={deviceType === "mobile" ? 'none' : "block"}
      >
        <Container disableGutters={deviceType === "mobile" || deviceType === "tablet" ? false : true} >
          <Box width={"50%"} >
            <Typography
              textAlign={"left"}
              variant="h1"
              fontWeight={900}
              fontSize={deviceType === 'mobile' ? 35 : 32}
              color={"#009FDD"}
              p={2}
            >
              Product Description
            </Typography>
            <Typography
              p={2}
              textAlign={"left"}
              variant="body1"
            // fontSize={16}
            >
              Unlock the potential of Peerwallet by creating your very own store
              within the platform. Join the thriving community of entrepreneurs
              and innovators and establish your digital presence in the
              ever-expanding marketplace. With Peerwallet is seamless integration
              and user-friendly interface, setting up your store is simple and
              hassle-free.{" "}
            </Typography>
            <Typography
              p={2}
              textAlign={"left"}
              variant="body1"
            // fontSize={16}
            >
              Take advantage of Peerwallet is robust features and reach a global
              audience eager to engage with your products or services. Start
              building your store on Peerwallet today and embark on a journey
              towards digital success.
            </Typography>
          </Box>
        </Container>
      </Box>
      {deviceType !== "mobile" && (
        <Box
          bgcolor={"#99D9F1B2"}
          color={"#000"}
          px={deviceType === 'mobile' ? 10 : 14}
          py={4}
          mb={16}
        >
          <Box display="flex" gap={4}>
            <Box display={"flex"} flexDirection={"row"} gap={1}>
              <Box border={"2px solid #009FDD"} borderRadius={2} py={2} px={2}>
                <Image src={deliveryIcon} alt="" style={{width: '90%'}} />
              </Box>
              <Box display={"flex"} flexDirection={"column"} pt={1}>
                <Typography variant="h6" fontWeight={700} fontSize={16}>
                  Fast & Secure Delivery
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  Easy & fast purchase
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"row"} gap={1}>
              <Box border={"2px solid #009FDD"} borderRadius={2} py={2} px={2}>
                <Image src={paymentOptionIcon} alt="" style={{width: '100%'}} />
              </Box>
              <Box display={"flex"} flexDirection={"column"} pt={1}>
                <Typography variant="h6" fontWeight={700} fontSize={16}>
                  Multi Payment Options
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  Variety of options to pay
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"row"} gap={1}>
              <Box border={"2px solid #009FDD"} borderRadius={2} py={2} px={2}>
                <Image src={p2pIcon} style={{width: '100%'}} alt=""/>
              </Box>
              <Box display={"flex"} flexDirection={"column"} pt={1}>
                <Typography variant="h6" fontWeight={700} fontSize={16}>
                  P2P System
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  Advanced p2p gateway
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"row"} gap={1}>
              <Box border={"2px solid #009FDD"} borderRadius={2} py={2} px={2}>
                <Image src={blueSupportIcon} alt="" style={{width: '100%'}}/>
              </Box>
             
             <Box display={"flex"} flexDirection={"column"} pt={1}>
                <Typography variant="h6" fontWeight={700} fontSize={16}>
                  Pro Quality Support
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  24/7 live support
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {deviceType === "mobile" && (
        <Box
          bgcolor={"#99D9F1B2"}
          color={"#000"}
          px={deviceType === 'mobile' ? 10 : 14}
          py={4}
          mb={16}
        >
            <Box
              display="grid"
              gridTemplateColumns="1fr" // This ensures 1 item per row
              gap={4}
              alignItems={'center'}
            >
              <Box display={"flex"} flexDirection={"row"} gap={1}>
                <Box border={"2px solid #009FDD"} borderRadius={2} py={2} px={2}>
                  <Image src={deliveryIcon} style={{width: '100%'}} alt=""/>
                </Box>
             
             <Box display={"flex"} flexDirection={"column"} pt={1}>
                  <Typography variant="h6" fontWeight={700} fontSize={16}>
                    Fast & Secure Delivery
                  </Typography>
                  <Typography variant="body2" fontSize={12}>
                    Easy & fast purchase
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"} flexDirection={"row"} gap={1}>
                <Box border={"2px solid #009FDD"} borderRadius={2} py={2} px={2}>
                  <Image src={paymentOptionIcon} style={{width: '100%'}} alt="" />
                </Box>
             
            <Box display={"flex"} flexDirection={"column"} pt={1}>
                  <Typography variant="h6" fontWeight={700} fontSize={16}>
                    Multi Payment Options
                  </Typography>
                  <Typography variant="body2" fontSize={12}>
                    Variety of options to pay
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"} flexDirection={"row"} gap={1}>
                <Box border={"2px solid #009FDD"} borderRadius={2} py={2} px={2}>
                  <Image src={p2pIcon} style={{width: '100%'}} alt="" />
                </Box>
             
            <Box display={"flex"} flexDirection={"column"} pt={1}>
                  <Typography variant="h6" fontWeight={700} fontSize={16}>
                    P2P System
                  </Typography>
                  <Typography variant="body2" fontSize={12}>
                    Advanced p2p gateway
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"} flexDirection={"row"} gap={1}>
                <Box border={"2px solid #009FDD"} borderRadius={2} py={2} px={2}>
                  <Image src={blueSupportIcon} style={{width: '100%'}} alt="" />
                </Box>
             
            <Box display={"flex"} flexDirection={"column"} pt={1}>
                  <Typography variant="h6" fontWeight={700} fontSize={16}>
                    Pro Quality Support
                  </Typography>
                  <Typography variant="body2" fontSize={12}>
                    24/7 live support
                  </Typography>
                </Box>
              </Box>
            </Box>
        </Box>
      )}

    </Box>
  );
};

export default ProductPage;
