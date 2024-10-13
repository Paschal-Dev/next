"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@iconify/react";
import Image from 'next/image';
import Link from 'next/link';
import pwat from "../../assets/images/peerwallet-logo.png";
import { useRouter } from 'next/navigation';  // Update here
import { theme } from "../../assets/themes/theme"; 

const pages = [
  { name: "How it works", link: "./how-it-works" },
  { name: "FAQ", link: "./faq" },
  { name: "Virtual Card", link: "./vcard" },
  { name: "Sellers", link: "./sell" },
  { name: "PWAT", link: "./pwat" },
  { name: "Knowledge base", link: "./doc" },
];

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(null);
  const router = useRouter();  // Now using `next/navigation`

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: "black", padding: 15 }}>
      <Container disableGutters sx={{ px: "-50px" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <Link href="/" passHref>
              <Image src={pwat} alt={""}  />
            </Link>
          </Box>
          <Container>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"end"}
              gap={3}
            >
              {pages.map((page, index) => (
                <Link key={index} href={page.link} passHref style={{textDecorationLine: 'none'}}>
                  <Typography
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontSize: 20,
                      fontWeight: 600,
                      ":hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {page.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Container>
          <Box
            bgcolor={"#FCC82B"}
            borderRadius={"50%"}
            mx={4}
            sx={{
              "&:hover": {
                bgcolor: "#ffff",
              },
            }}
          >
            <IconButton onClick={handleOpenLangMenu}>
              <Icon icon="fluent:globe-28-filled" fontSize={26} color="#000" />
            </IconButton>
            <Menu
              id="menu-language"
              anchorEl={anchorElLang}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElLang)}
              onClose={handleCloseLangMenu}
            >
              {languages.map((language) => (
                <MenuItem key={language.code} onClick={handleCloseLangMenu}>
                  {language.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Button
            variant="outlined"
            sx={{
              width: "10%",
              p: 0.5,
              color: "#fff",
              textTransform:"capitalize",
              borderRadius: 2,
              border: "2px solid #009FDD",
              ":hover": { border: "2px solid #FCC82B" },
              fontSize: 20,
            }}
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "10%",
              p: 1,
              textTransform:"capitalize",
              backgroundColor: "#009FDD",
              color: "#fff",
              marginLeft: 2,
              borderRadius: 2,
              border: "2px solid #009FDD",
              ":hover": { background: "none", border: "2px solid #009FDD" },
              fontSize: 16,
            }}
            onClick={() => router.push("/reg")}
          >
            Sign Up
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
