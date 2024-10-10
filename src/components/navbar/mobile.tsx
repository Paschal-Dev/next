/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Box, Button, Menu, MenuItem, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import Hidden from "@mui/material/Hidden";
import Link from 'next/link';
import { useRouter } from 'next/navigation';  // Next.js router for navigation
import { MenuOpenOutlined } from "@mui/icons-material";
import pwat from "../../assets/images/auth/peerwallet-logo.svg";
import MobileDrawer from "./drawer/mobile_drawer";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

const MobileNavbar = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrolled, setScrolled] = React.useState(false);
  const [show, setShow] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(
    null
  );

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    // Add more languages as needed
  ];

  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const smallScreen = useMediaQuery(theme.breakpoints.only("xs"));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const tabletMini = useMediaQuery(theme.breakpoints.only("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = () => {
    setScrolled(window.pageYOffset > 0);
    if (window.pageYOffset > 600) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  const handleLogin = () => {
    router.push('/login');  // Navigate to the login page
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {show ? (
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: "transparent",
            backdropFilter: "blur(14px )",
          }}
        >
          <Toolbar>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                component={Link}
                href={"/"}
              >
                <Image src={pwat} alt="" width={128} />
              </Box>
              <Box display={"flex"} flexDirection={"row"}>
                <Button
                  variant="outlined"
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Box
                  bgcolor={"#FCC82B"}
                  borderRadius={"50%"}
                  mx={1}
                  sx={{
                    "&:hover": {
                      bgcolor: "#ffff",
                    },
                  }}
                >
                  <IconButton onClick={handleOpenLangMenu}>
                    <Icon
                      icon="fluent:globe-28-filled"
                      fontSize={26}
                      color="#000"
                    />
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
                      <MenuItem
                        key={language.code}
                        onClick={handleCloseLangMenu}
                      >
                        {language.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <IconButton
                  edge="start"
                  onClick={handleDrawerToggle}
                  aria-label="open drawer"
                  sx={{ ml: 1 }}
                >
                  <MenuOpenOutlined color="secondary" />
                </IconButton>
              </Box>
            </div>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar
          position="fixed"
          elevation={0}
          sx={{ backgroundColor: "black" }}
        >
          <Toolbar>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={pwat} alt="" width={128} />
              </Box>
              <Box display={"flex"} flexDirection={"row"}>
                <Box
                  bgcolor={"#FCC82B"}
                  borderRadius={"50%"}
                  mx={1}
                  sx={{
                    "&:hover": {
                      bgcolor: "#ffff",
                    },
                  }}
                >
                  <IconButton onClick={handleOpenLangMenu}>
                    <Icon
                      icon="fluent:globe-28-filled"
                      fontSize={26}
                      color="#000"
                    />
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
                      <MenuItem
                        key={language.code}
                        onClick={handleCloseLangMenu}
                      >
                        {language.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Button variant="outlined" onClick={handleLogin}>
                  Login
                </Button>

                <IconButton
                  edge="start"
                  onClick={handleDrawerToggle}
                  aria-label="open drawer"
                  sx={{ ml: 1 }}
                >
                  <MenuIcon color="warning" />
                </IconButton>
              </Box>
            </div>
          </Toolbar>
        </AppBar>
      )}

      <nav aria-label="mailbox folders">
        <Hidden mdUp implementation="css">
          <MobileDrawer
            setMobileOpen={setMobileOpen}
            mobileOpen={mobileOpen}
          />
        </Hidden>
      </nav>
    </div>
  );
};

export default MobileNavbar;
