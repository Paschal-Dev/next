import React, { useEffect, useState } from "react";
import { Typography, ListItemButton } from "@mui/material";
import { useRouter } from "next/navigation"; // Use Next.js router
import Image from "next/image"; // Next.js image component for optimization
import { Category, Post } from "../data"; // Adjust your path accordingly
import relatedImg from "../../../assets/images/kb/kb-related.png"; // Adjust image path

interface RelatedPostsProps {
  categories: Category[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ categories }) => {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const router = useRouter(); // Next.js router for navigation

  useEffect(() => {
    const getRandomPosts = () => {
      const allPosts: Post[] = categories.flatMap((category) => category.posts);
      const shuffledPosts = allPosts.sort(() => 0.5 - Math.random());
      return shuffledPosts.slice(0, 10); // Select 10 random posts
    };
    setRelatedPosts(getRandomPosts());
  }, [categories]);

  const handlePostClick = (slug: string) => {
    router.push(`/doc/read?title=${encodeURIComponent(slug)}`); // Navigate using slug
  };

  return (
    <>
      {relatedPosts.map((post) => (
        <ListItemButton
          key={post.id}
          onClick={() => handlePostClick(post.slug)} // Use slug for URL
          sx={{ pr: 3 }}
        >
          <Image src={relatedImg} alt="Related" width={40} height={40} /> {/* Optimized Image */}
          <Typography variant="body1" fontWeight={600} ml={2}>
            {post.title}
          </Typography>
        </ListItemButton>
      ))}
    </>
  );
};

export default RelatedPosts;
