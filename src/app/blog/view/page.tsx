"use client";

import React from "react";
import { useSearchParams, useRouter, notFound } from "next/navigation";
import { Box, Container, Grid, Typography } from "@mui/material";
import { blogPosts, BlogPostProps } from "../data";
import PostContent from "../components/post-content";
import RelatedTopics from "../components/related-topics";
import RecentTopics from "../components/recent-topics";
import OtherTopics from "../components/other-topics";
import { MediaProps } from "../../../utils/utils";

export default function ReadBlogPage({
  deviceType,
}: MediaProps): React.JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = searchParams.get("t");

  const post: BlogPostProps | undefined = blogPosts.find(
    (post) => post.slug === t
  );

  if (!post) {
    return notFound();
  }

  const handleBack = () => {
    router.push("/blog");
  };

  return (
    <Box
      mb={10}
      mt={deviceType === "mobile" || deviceType === "tablet" ? 8 : 5}
    >
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={8}>
            <Typography
              variant="h4"
              fontSize={deviceType === "mobile" ? 28 : 40}
              textAlign={"left"}
              fontWeight={800}
              gutterBottom
            >
              {post.title}
            </Typography>
            <PostContent post={post} onBack={handleBack} />
          </Grid>

          {/* Related and Recent Topics */}
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box bgcolor={"#E5F5FC"} py={2} mb={4} borderRadius={2}>
              <Typography
                variant="h5"
                color={"#0070f3"}
                fontWeight={800}
                px={1}
              >
                Related topics
              </Typography>
              <Box><RelatedTopics currentPostId={post.id} /></Box>
            </Box>

            <Box bgcolor={"#E5F5FC"} py={2} borderRadius={2}>
              <Typography
                variant="h5"
                color={"#0070f3"}
                fontWeight={800}
                px={1}
              >
                Recent topics
              </Typography>
              <Box>
                <RecentTopics currentPostId={post.id} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Other Topics */}
      <Box mt={5} py={2} bgcolor={"#E5F5FC"}>
        <OtherTopics currentPostId={post.id} />
      </Box>
    </Box>
  );
}
