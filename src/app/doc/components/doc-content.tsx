"use client";

import React, { useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { Post } from "../data";
import Image from "next/image";

interface PostDetailProps {
  post: Post;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/${post.contentFile}`);
        if (!response.ok) throw new Error("Failed to load document");
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error("Error fetching content:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [post.contentFile]);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error loading content. Please try again later.</Box>;
  }

  return (
    <Box>
      <Image
        src={post.banner}
        alt={post.title}
        width={100}
        height={100}
        style={{ borderRadius: 15, width: "100%", height: "auto" }}
      />
      <Box>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <Button
          onClick={() => router.push("/doc")}
          variant="contained"
          color="primary"
          style={{ marginTop: 20 }}
        >
          Back to Knowledge Base
        </Button>
      </Box>
    </Box>
  );
};

export default PostDetail;
