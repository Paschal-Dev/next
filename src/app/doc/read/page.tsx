"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Container, Grid, Typography } from "@mui/material";
import { knowledgeBase } from "../data";
import Image from "next/image";
import PostDetail from "../components/doc-content";
import RelatedPosts from "../components/related-doc";
import BlogPreview from "../components/blog";
import blogPrev1 from "../../../assets/images/kb/kb-blog1.png";
import blogPrev2 from "../../../assets/images/kb/kb-blog2.png";
import blogPrev3 from "../../../assets/images/kb/kb-blog3.png";
import { theme } from "../../../assets/themes/theme";

function PostDetailContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  const post = knowledgeBase
    .flatMap((category) => category.posts)
    .find((post) => post.slug === title);

  if (!post) {
    return <Typography variant="h5">Post not found</Typography>;
  }

  return (
    <Box mb={25} mt={5}>
      <Container>
        <Typography
          variant="h4"
          fontSize={40}
          textAlign={"left"}
          fontWeight={800}
          gutterBottom
        >
          {post.title}
        </Typography>
        <Image
          src={post.infographic}
          alt={post.title}
          width={100}
          height={100}
          style={{ marginBottom: 20, width: "100%", height: "auto" }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={8}>
            <PostDetail post={post} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box bgcolor={"#E5F5FC"} py={2} height={"97%"} borderRadius={2}>
              <Typography
                variant="h5"
                color={theme.palette.primary.main}
                fontWeight={800}
                px={1}
              >
                Related topics
              </Typography>
              <Box>
                <RelatedPosts categories={knowledgeBase} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
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
            <Grid item xs={12} md={6} lg={4}>
              <BlogPreview
                image={blogPrev1}
                blogTitle="Understanding Peerwallet’s Checkout Process"
                desc="Learn how Peerwallet simplifies online purchases with its intuitive checkout process. Enjoy a hassle-free shopping experience with secure payment options and easy navigation."
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <BlogPreview
                image={blogPrev2}
                blogTitle="Treatment of Chargebacks on the Peerwallet Platform"
                desc="Discover how Peerwallet handles chargebacks, ensuring fair and efficient resolution for all parties involved. Trust in Peerwallet's reliable system to manage chargeback disputes effectively, providing peace of mind for buyers and sellers."
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <BlogPreview
                image={blogPrev3}
                blogTitle="P2P Remittance Simplified: Seamless Transactions on Peerwallet"
                desc="Learn how Peerwallet simplifies online purchases with its intuitive checkout process. Enjoy a hassle-free shopping experience with secure payment options and easy navigation."
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default function PostDetailPage(): React.JSX.Element {
  return (
    <Suspense fallback={<Typography variant="h6">Loading...</Typography>}>
      <PostDetailContent />
    </Suspense>
  );
}
