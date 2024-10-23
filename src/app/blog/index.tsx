"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { blogPosts, BlogPostProps } from "./data";
import { Icon } from "@iconify/react";
import { theme } from "../../assets/themes/theme";
import headImage from "../../assets/images/blog/blog-head-image.png";
import Image from "next/image";

export default function BlogsPage(): React.JSX.Element {
  const [page, setPage] = useState<number>(1);
  const postsPerPage = 15;
  const postsSectionRef = useRef<HTMLDivElement>(null);
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

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  useEffect(() => {
    if (postsSectionRef.current) {
      postsSectionRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [page]);

  const displayedPosts = blogPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return (
    <Box mb={15}>
      <Box
        bgcolor={"#000"}
        color={"#ffffff"}
        pt={deviceType === "mobile" || deviceType === "tablet" ? 8 : 4}
        pb={4}
        mb={5}
        position="relative"
      >
        <Container
          disableGutters={
            deviceType === "mobile" || deviceType === "tablet" ? false : true
          }
        >
          <Grid container alignItems={"center"} mb={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                alignItems={"start"}
                mt={deviceType === "mobile" ? 0 : -12}
              >
                <Typography
                  variant="h2"
                  color={theme.palette.secondary.main}
                  fontSize={deviceType === "mobile" ? 40 : 56}
                  fontWeight={800}
                >
                  Peerwallet’s
                  <br />
                  <span style={{ color: theme.palette.primary.main }}>
                    Blog
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={deviceType === "mobile" ? 20 : 24}
                  lineHeight={1.2}
                >
                  Your guide to financial innovation
                </Typography>
              </Box>
            </Grid>
            {deviceType !== "mobile" && deviceType !== "tablet" && (
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                display={"flex"}
                justifyContent={"center"}
              >
                <Image
                  src={headImage}
                  alt="Banner-Image"
                  style={{ width: "80%", height: "auto" }}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
      <Box ref={postsSectionRef}>
        <Container
          disableGutters={
            deviceType === "mobile" || deviceType === "tablet" ? false : true
          }
        >
          <Grid container spacing={5}>
            {displayedPosts.map((post: BlogPostProps) => (
              <Grid item key={post.id} xs={12} md={6} lg={4}>
                <Box
                  display={"flex"}
                  alignItems={"start"}
                  flexDirection={"column"}
                  gap={1}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={10}
                    height={10}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6" fontWeight={800} lineHeight={1.2}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {post.date}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    lineHeight={1.8}
                  >
                    {post.preview}
                  </Typography>
                  <Button
                    component={Link}
                    href={`blog/view?t=${post.slug}`}
                    sx={{ color: "#000", fontSize: 14, fontWeight: 600 }}
                  >
                    Read More <Icon icon="mdi:arrow-right" fontSize={20} />
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box display={"flex"} mt={2} justifyContent={"center"}>
            <Pagination
              count={Math.ceil(blogPosts.length / postsPerPage)}
              page={page}
              onChange={handlePageChange}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
