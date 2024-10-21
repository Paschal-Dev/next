'use client';
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  Grid,
  Button,
  Container,
} from "@mui/material";
import { theme } from "../../assets/themes/theme";
// import { useNavigate } from "react-router-dom";
import webDevelopment from "../../assets/images/shop/web-development.png";
import userExperience from "../../assets/images/shop/user-experience.png";
import domain from "../../assets/images/shop/domain.png";
import content from "../../assets/images/shop/content.png";
import seo from "../../assets/images/shop/seo.png";
import email from "../../assets/images/shop/email.png";
import Ebooks from "../../assets/images/shop/e-book.png";
import contentMarketing from "../../assets/images/shop/content-marketing.png";
import smMarketing from "../../assets/images/shop/sm-marketing.png";
import digital from "../../assets/images/shop/digital-advertising.png";
import graphics from "../../assets/images/shop/graphics.png";
import copy from "../../assets/images/shop/copy-writing.png";
import arrowImage from "../../assets/images/shop/arrow.png";
import similar_store from "../../assets/images/shop/similar-store.png";
import Image from "next/image";
// import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";
import Link from "next/link";

const categories = [
  { title: "Web Development", image: webDevelopment, id: "web-development" },
  { title: "User Experience", image: userExperience, id: "user-experience" },
  { title: "Domain Registration", image: domain, id: "domain-registration" },
  { title: "Content Management", image: content, id: "content-management" },
  { title: "SEO", image: seo, id: "seo" },
  { title: "Email Marketing", image: email, id: "email-marketing" },
  { title: "Electronic Books", image: Ebooks, id: "ebooks" },
  { title: "Social Media Marketing", image: smMarketing, id: "social-media-marketing" },
  { title: "Content Marketing", image: contentMarketing, id: "content-marketing" },
  { title: "Digital Advertising", image: digital, id: "digital-advertising" },
  { title: "Graphics Design", image: graphics, id: "graphics-design" },
  { title: "Copy Writing", image: copy, id: "copy-writing" },
];



const Categories = () => {
  // const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [deviceType, setDeviceType] = useState("mobile");

  const styles = {
    backgroundColor: "#000",
    background: "linear-gradient(180deg, #1A1A1A 0%, #161616 100%)",
    color: "#fff",
    borderRadius: "10px",
    p: deviceType === 'mobile' ? 0 : "25px",
    width: "auto",
  };
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

  const itemsPerPage = deviceType === 'mobile' ? 1 : 6; // Show 1 item per page on mobile

  // const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, categories.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  // const handleCategoryClick = (category: { title: string; image: string }) => {
  //   navigate("./products", { state: { product: category } });
  // };
  // const handleCategoryClick = (id: string) => {
  //   router.push(`/shop/product/${id}`); // Navigate to dynamic product page
  // };

  const showNext = currentIndex + itemsPerPage < categories.length;
  const showPrev = currentIndex > 0;

  return (
    <Box bgcolor={"#e8e8e8"} color={"#000000"} pb={deviceType === 'mobile' ? 3 : 5} pt={5}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={5}
      >
        <Box textAlign={"center"} width={deviceType === "mobile" ? "auto" : "70%"}>
          <Typography
            variant="h2"
            fontSize={deviceType === "mobile" ? 28 : 48}
            fontWeight={900}
            paddingBottom={1}
          >
            Popular Categories
          </Typography>
          <hr style={{ width: "25%", margin: "0 auto" }} />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor={deviceType === "mobile" ? "transparent" : "white"}
          width={deviceType === "mobile" ? "auto" : "94.7%"}
          padding={4}
          flexDirection={deviceType === "mobile" ? "column" : "row"} // Adjust flex direction for mobile
        >
          {deviceType === "mobile" && (
            <Box
              display="flex"
              justifyContent="center"
            >
              {showPrev && (
                <IconButton onClick={handlePrev} sx={{
                  left: -150,
                  top: 180,
                }}>
                  <Image
                    src={arrowImage}
                    alt="Previous"
                    style={{
                      transform: "rotate(180deg)",
                      width: "60px", // Smaller icon size for mobile
                      height: "60px",
                    }}
                  />
                </IconButton>
              )}
            </Box>
          )}
          {deviceType !== "mobile" && showPrev && (
            <IconButton
              onClick={handlePrev}
              sx={{
                left: 60,
                top: -10,
              }}
            >
              <Image
                src={arrowImage}
                alt="Previous"
                style={{
                  transform: "rotate(180deg)",
                  width: "70px",
                  height: "70px",
                }}
              />
            </IconButton>
          )}
           <Box display="flex" overflow="hidden" justifyContent="center" width="100%">
            {categories.slice(currentIndex, currentIndex + itemsPerPage).map((category) => (
              <Link key={category.id} href={`../shop/product/`} passHref>
                <Box textAlign="center" mx={1.5} sx={{ cursor: "pointer" }}>
                  <Image src={category.image} alt={category.title} width={160} height={160} />
                  <Typography fontSize={12} color="black">{category.title}</Typography>
                </Box>
              </Link>
            ))}
          </Box>

          {deviceType === "mobile" && (
            <Box
              display="flex"
              justifyContent="center"
            >
              {showNext && (
                <IconButton onClick={handleNext} sx={{
                  right: -150,
                  top: -180,
                }}>
                  <Image
                    src={arrowImage}
                    alt="Next"
                    style={{
                      width: "60px", // Smaller icon size for mobile
                      height: "60px",
                    }}
                  />
                </IconButton>
              )}
            </Box>
          )}

          {deviceType !== "mobile" && showNext && (
            <IconButton
              onClick={handleNext}
              sx={{
                right: 60,
                top: -10,
              }}
            >
              <Image
                src={arrowImage}
                alt="Next"
                style={{ width: "70px", height: "70px" }}
              />
            </IconButton>
          )}
        </Box>

        <Grid container spacing={deviceType === 'mobile' ? 0 : 2} bgcolor={"#000"} padding={deviceType === 'mobile' ? 3 : 5}>
          <Box sx={styles} display={"flex"} flexDirection={"row"}>
            <Container disableGutters={
              deviceType === "mobile" || deviceType === "tablet" ? false : true
            }>
              <Grid
                container
                spacing={deviceType === "mobile" ? 0 : 4}
                p={deviceType === "mobile" ? 2 : 2}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"center"}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  display={deviceType === "mobile" ? "none" : "block"}
                >
                  <Image
                    src={similar_store}
                    alt=""
                    style={{
                      width: "100%",
                      display: deviceType === "mobile" ? "none" : "flex",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant={deviceType === "mobile" ? "h4" : "h3"}
                    fontWeight={deviceType === "mobile" ? 700 : 800}
                    fontSize={deviceType === "mobile" ? 28 : 48}
                    color={"#fff"}
                    pb={3}
                    textAlign={"center"}
                    display={deviceType === 'mobile' ? 'block' : 'none'}
                  >
                    Create A <span style={{ color: "#FCC82B" }}> Similar Store on Peerwallet</span>
                  </Typography>
                  <Typography
                    variant={deviceType === "mobile" ? "h4" : "h3"}
                    fontWeight={deviceType === "mobile" ? 700 : 800}
                    fontSize={deviceType === "mobile" ? 28 : 48}
                    color={"#fff"}
                    textAlign={"left"}
                    display={deviceType === 'mobile' ? 'none' : 'block'}
                  >
                    Create A{" "}
                    <span style={{ color: "#FCC82B" }}>Similar</span>
                  </Typography>
                  <Typography
                    variant={deviceType === "mobile" ? "h4" : "h3"}
                    fontWeight={deviceType === "mobile" ? 700 : 800}
                    fontSize={deviceType === "mobile" ? 28 : 48}
                    color={"#FCC82B"}
                    textAlign={"left"}
                    pb={3}
                    display={deviceType === 'mobile' ? 'none' : 'block'}
                  >
                    Store on Peerwallet
                  </Typography>
                  <Typography
                    variant="body2"
                    color={"#fff"}
                    fontSize={deviceType === "mobile" ? 16 : 14}
                    textAlign={deviceType === "mobile" ? "center" : "left"}
                    width={deviceType === "mobile" ? "auto" : "80%"}
                  >
                    Unlock the potential of Peerwallet by creating your very own
                    store within the platform. Join the thriving community of
                    entrepreneurs and innovators and establish your digital
                    presence in the ever-expanding marketplace. With
                    Peerwallet seamless integration and user-friendly
                    interface, setting up your store is simple and hassle-free.
                    <br />
                    <br />
                    Take advantage of Peerwallet robust features and reach a
                    global audience eager to engage with your products or
                    services. Start building your store on Peerwallet today and
                    embark on a journey towards digital success.
                  </Typography>
                  <Box
                    pt={5}
                    textAlign={deviceType === "mobile" ? "center" : "left"}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        width: "90%",
                        p: deviceType === "mobile" ? 2 : 1.5,
                        backgroundColor: "#FCC82B",
                        color: "#000",
                        borderRadius: 2,
                        textTransform: "uppercase",
                        border: "2px solid #FCC82B",
                        ":hover": {
                          background: "none",
                          borderColor: "#009FDD",
                          color: "#fff",
                          p: deviceType === "mobile" ? 2 : 1.5,
                          width: deviceType === "mobile" ? "90%" : "40%",
                        },
                        fontSize: 24,
                        fontWeight: 800,
                      }}
                    >
                      GET STARTED
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Categories;
