"use client";
import { useRouter } from 'next/navigation'; // App Router version

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  ListItemButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Work Automation", href: "/work-automation" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const handleAvatarClick = () => {
    router.push('/UpProject'); // navigate to /UpProject
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#f2ec76",
          borderBottom: "1px solid #e0e0e0",
          height: "10rem",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* 🐵 Logo */}
            <Box display="flex" alignItems="center" gap={1}>
              <Image
                src="/images/TakeOff-Monkey-Icon.svg"
                alt="TakeOff Monkey Logo"
                width={150}
                height={150}
              />
            </Box>

            {/* 🔳 Hamburger for Mobile */}
            {isMobile ? (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={() => setDrawerOpen(true)}
                  aria-label="menu"
                >
                  <MenuIcon sx={{ fontSize: 40, color: "#000" }} />
                </IconButton>

                {/* 📦 Drawer */}
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                  PaperProps={{
                    sx: {
                      backgroundColor: "#f2ec76",
                      width: "30vw",
                    },
                  }}
                >
                  {/* Header inside Drawer */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      px: 2,
                      py: 1.5,
                    }}
                  >
                    <Image
                      src="/images/TakeOff-Monkey-Icon.svg"
                      alt="Logo in Drawer"
                      width={60}
                      height={60}
                    />
                    <IconButton onClick={() => setDrawerOpen(false)}>
                      <CloseIcon sx={{ fontSize: 28, color: "#000" }} />
                    </IconButton>
                  </Box>

                  <Divider sx={{ borderColor: "#000", opacity: 0.2 }} />

                  {/* Nav Links */}
                  <List sx={{ px: 2 }}>
                    {navLinks.map((item) => (
                      <ListItem key={item.href} disablePadding>
                        <ListItemButton component={Link} href={item.href}>
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              fontWeight: 600,
                              fontSize: "1rem",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}

                    {/* 🔘 Upload Button in Drawer */}
                    <ListItem sx={{ mt: 2, px: 0 }}>
                      <Link href="/UpProject" passHref>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            fontWeight: 700,
                            fontSize: "1rem",
                            borderRadius: "20px",
                            textTransform: "none",
                            "&:hover": {
                              backgroundColor: "#000",
                              color: "#fff",
                            },
                          }}
                        >
                          Upload Project
                        </Button>
                      </Link>
                    </ListItem>
                  </List>
                </Drawer>
              </>
            ) : (
              // 🖥️ Desktop Nav Links
              <Box display="flex" alignItems="center" gap={4}>
                {navLinks.map((item) => (
                  <Link key={item.href} href={item.href} passHref>
                    <Button
                      sx={{
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "#000",
                      }}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
                <Link href="/UpProject" passHref>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#f2ec76",
                      color: "#000",
                      borderRadius: "20px",
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: "1rem",
                      "&:hover": {
                        backgroundColor: "#000",
                        color: "#fff",
                      },
                    }}
                  >
                    Upload Project
                  </Button>
                </Link>
                <Button
                  onClick={handleAvatarClick}
                  variant="contained"
                  sx={{
                    backgroundColor: '#f2ec76',
                    color: '#000',
                    borderRadius: '20px',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: '#000',
                      color: '#fff',
                    },
                  }}
                >
                  Upload Project
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
