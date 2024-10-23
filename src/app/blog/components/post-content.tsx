// src/components/PostContent.tsx
import React, { useEffect, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { BlogPostProps } from "../data";
import Image from "next/image";


interface PostDetailProps {
  post: BlogPostProps;
  onBack?: () => void;
}

const PostContent: React.FC<PostDetailProps> = ({ post, onBack }) => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/${post.contentFile}`);
        if (!response.ok) {
          throw new Error("Content not found");
        }
        const text = await response.text();
        setContent(text);
      } catch (error) {
        setError(true);
        console.error("Error fetching content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [post.contentFile]);

  if (loading) {
    return <Typography variant="body1">Loading Blog...</Typography>;
  }

  if (error) {
    return (
      <Box>
        <Typography variant="h6" color="error">
          Sorry, the content could not be found.
        </Typography>
        {onBack && <Button onClick={onBack}>Back to Blog</Button>}
      </Box>
    );
  }

  return (
    <Box>
      <Image
        src={post.image}
        alt={post.title}
        width={100}
        style={{ borderRadius: 4, width: "100%", height: "auto" }}
      />
      <Box>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {onBack && <Button onClick={onBack}>Back to Blog</Button>}
      </Box>
    </Box>
  );
};

export default PostContent;
