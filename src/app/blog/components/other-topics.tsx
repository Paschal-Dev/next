import React from "react";
import {
  Box,
  Typography,
  ListItemButton,
  Grid,
  Container,
} from "@mui/material";
import { blogPosts, BlogPostProps } from "../data";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface OtherTopicsProps {
  currentPostId: string;
}

const OtherTopics: React.FC<OtherTopicsProps> = ({ currentPostId }) => {
  const router = useRouter();
  const getRandomTopics = (
    posts: BlogPostProps[],
    excludeId: string,
    count: number
  ): BlogPostProps[] => {
    const filteredPosts = posts.filter((post) => post.id !== excludeId);
    const shuffledPosts = filteredPosts.sort(() => 0.5 - Math.random());
    return shuffledPosts.slice(0, count);
  };

  const otherTopics = getRandomTopics(blogPosts, currentPostId, 3);

  const handlePostClick = (slug: string) => {
    router.push(`./view?t=${slug}`);
  };

  return (
    <Container>
      <Box my={2}>
        <Typography variant="h4" textAlign="center" fontWeight={800}>
          Other Topics
        </Typography>
        <hr style={{ width: "10%" }} />
      </Box>
      <Grid container>
        {otherTopics.map((post) => (
          <Grid key={post.id} item sm={12} md={6} lg={4}>
            <ListItemButton
              onClick={() => handlePostClick(post.slug)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: 1,
                mb: 1,
              }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={100}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography variant="body2" fontWeight={700}>
                {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {post.date}
              </Typography>
              <Box display={"flex"} alignItems={"center"}>
                <Typography variant="body2" fontWeight={700}>
                  Read More
                </Typography>
                <Icon icon="mdi:arrow-right" fontSize={20} />
              </Box>
            </ListItemButton>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OtherTopics;
