import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import Logo from "../pics/logoWolf.png";

const navItems = ["Home", "About", "Services", "Reviews", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => setOpen(!open);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        mt: "8px",
        backdropFilter: "blur(14px)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box
          component="a"
          href="/home"
          sx={{
            textDecoration: "none",
            display: "flex", // ✅ makes logo & text in one line
            alignItems: "center", // ✅ vertical center
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="WolfDen Logo"
            sx={{
              height: 50,
              width: "auto",
              objectFit: "contain",
            }}
          />

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              // ml: 1.5,
              color: "#4f8cff",
              cursor: "pointer",
            }}
          >
            WolfDen
          </Typography>
        </Box>

        {/* Desktop Menu */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              background: "rgba(255,255,255,0.05)",
              padding: "6px 10px",
              borderRadius: "999px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {navItems.map((item) => (
              <a href={`#${item.toLowerCase()}`}>
                <Button
                  key={item}
                  sx={{
                    color: "#d0d7ff",
                    textTransform: "none",
                    fontWeight: 500,
                    px: 2,
                    borderRadius: "999px",
                    "&:hover": {
                      background: "rgba(79,140,255,0.15)",
                      color: "#4f8cff",
                    },
                  }}
                >
                  {item}
                </Button>
              </a>
            ))}
          </Box>
        )}

        {/* CTA + Mobile Menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {!isMobile && (
            <Button
              sx={{
                textTransform: "none",
                px: 3,
                py: 1,
                borderRadius: "999px",
                background: "linear-gradient(135deg, #4f8cff, #6d5dfc)",
                color: "#fff",
                fontWeight: 600,
                boxShadow: "0 0 18px rgba(79,140,255,0.6)",
                "&:hover": {
                  background: "linear-gradient(135deg, #6d5dfc, #4f8cff)",
                },
              }}
            >
              Talk
            </Button>
          )}

          {isMobile && (
            <IconButton onClick={toggleDrawer} sx={{ color: "#fff" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 260,
            height: "100%",
            background: "#0a0f1e",
            color: "#fff",
            p: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, color: "#4f8cff" }}>
            WolfDen
          </Typography>

          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item}
                onClick={toggleDrawer}
                sx={{
                  borderRadius: 2,
                  "&:hover": {
                    background: "rgba(79,140,255,0.15)",
                  },
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Button
            fullWidth
            sx={{
              mt: 2,
              textTransform: "none",
              borderRadius: 3,
              background: "linear-gradient(135deg, #4f8cff, #6d5dfc)",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Talk
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
