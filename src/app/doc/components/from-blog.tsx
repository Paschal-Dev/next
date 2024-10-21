import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import BlogPreview from "../components/blog";
import blogPrev1 from "../../../assets/images/kb/kb-blog1.png";
import blogPrev2 from "../../../assets/images/kb/kb-blog2.png";
import blogPrev3 from "../../../assets/images/kb/kb-blog3.png";

export default function FromBlog(): React.JSX.Element {
  return (
    <Box
      bgcolor={"#E5F5FC"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={3}
      py={4}
      mt={5}
    >
      <Box>
        <Typography variant="h3" fontSize={36} fontWeight={900}>
          From Our Blog
        </Typography>
        <hr style={{ width: "25%" }} />
      </Box>
      <Container>
        <Grid container>
          <Grid item sm={12} md={6} lg={4}>
            <BlogPreview
              image={blogPrev1}
              blogTitle="Understanding Peerwallet’s Checkout Process"
              desc="Learn how Peerwallet simplifies online purchases with its intuitive checkout process. Enjoy a hassle-free shopping experience with secure payment options and easy navigation."
            />
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <BlogPreview
              image={blogPrev2}
              blogTitle="Treatment of Chargebacks on the Peerwallet Platform"
              desc="Discover how Peerwallet handles chargebacks, ensuring fair and efficient resolution for all parties involved. Trust in Peerwallet's reliable system to manage chargeback disputes effectively, providing peace of mind for buyers and sellers."
            />
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <BlogPreview
              image={blogPrev3}
              blogTitle="P2P Remittance Simplified: Seamless Transactions on Peerwallet"
              desc="Learn how Peerwallet simplifies online purchases with its intuitive checkout process. Enjoy a hassle-free shopping experience with secure payment options and easy navigation."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
