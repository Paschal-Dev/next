// src/components/RelatedPosts.tsx
import React, { useEffect, useState } from "react";
import { Typography, ListItemButton, Box } from "@mui/material";
import { BlogPostProps, blogPosts } from "../data";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface RecentPostsProps {
  currentPostId: string;
}

const RecentTopics: React.FC<RecentPostsProps> = ({ currentPostId }) => {
  const [recentPosts, setRecentPosts] = useState<BlogPostProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getRandomPosts = () => {
      const allPosts: BlogPostProps[] = blogPosts.filter(
        (post) => post.slug !== currentPostId
      );
      const shuffledPosts = allPosts.sort(() => 0.5 - Math.random());
      return shuffledPosts.slice(0, 6);
    };
    setRecentPosts(getRandomPosts());
  }, [currentPostId]);

  const handlePostClick = (slug: string) => {
    router.push(`./view?t=${slug}`);
  };

  return (
    <Box>
      {recentPosts.map((post) => (
        <ListItemButton
          key={post.id}
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
            height={100} 
            style={{ width: "100%", height: "auto" }} 
          />
          <Typography variant="body2" fontWeight={600}>
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {post.date}
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="body2" fontWeight={600}>
              Read More
            </Typography>
            <Icon icon="mdi:arrow-right" fontSize={20} />
          </Box>
        </ListItemButton>
      ))}
    </Box>
  );
};

export default RecentTopics;
