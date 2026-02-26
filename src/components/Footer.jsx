import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  const socials = [
    {
      name: "Instagram",
      icon: <InstagramIcon sx={{ mr: 1 }} />,
      url: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon sx={{ mr: 1 }} />,
      url: "https://linkedin.com",
    },
    {
      name: "Twitter",
      icon: <TwitterIcon sx={{ mr: 1 }} />,
      url: "https://twitter.com",
    },
    {
      name: "Facebook",
      icon: <FacebookIcon sx={{ mr: 1 }} />,
      url: "https://facebook.com",
    },
  ];

  return (
    <Box
      sx={{
        pt: 10,
        pb: 5,
        mt:8
        // background: "rgba(255,255,255,0.02)",
      }}
    >
      <Container maxWidth="xl">
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start", // 🔥 left align everything
            gap: { xs: 6, md: 8 },
            textAlign: "left",
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              flex: "1 1 300px",
              maxWidth: "420px", // 🔥 keeps content from stretching
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.8rem",
                color: "#4f8cff",
                mb: 2,
                textAlign: "center",
              }}
            >
              WolfDen
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                textAlign: "center",
              }}
            >
              Expert Digital Marketing & Web Development solutions to build
              fast, scalable, and high-converting digital experiences.
            </Typography>
          </Box>

          {/* Right Content */}
          <Box
            display="flex"
            flex={2}
            justifyContent="space-evenly"
            flexWrap="wrap"
            gap={7}
          >
            {/* Links */}
            <Box>
              <Typography sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}>
                Links
              </Typography>

              {[
                "Web Design",
                "Development Process",
                "Portfolio",
                "Client Benefits",
                "Pricing",
              ].map((text) => (
                <Typography key={text} sx={{ mb: 1 }}>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      "&:hover": { color: "#4f8cff" },
                    }}
                  >
                    {text}
                  </Link>
                </Typography>
              ))}
            </Box>

            {/* Pages */}
            <Box>
              <Typography sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}>
                Pages
              </Typography>

              {["Home", "About", "Services", "Contact", "Blog"].map((text) => (
                <Typography key={text} sx={{ mb: 1 }}>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      "&:hover": { color: "#4f8cff" },
                    }}
                  >
                    {text}
                  </Link>
                </Typography>
              ))}
            </Box>

            {/* Socials */}
            <Box>
              <Typography sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}>
                Socials
              </Typography>

              {socials.map(({ name, icon, url }) => (
                <Typography
                  key={name}
                  sx={{
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link
                    href={url}
                    target="_blank"
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "rgba(255,255,255,0.7)",
                      "&:hover": { color: "#4f8cff" },
                    }}
                  >
                    {icon} {name}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Bottom */}
        <Box
          display="flex"
          justifyContent="space-between"
          mt={8}
          pt={3}
          borderTop="1px solid rgba(255,255,255,0.08)"
          flexWrap="wrap"
          gap={2}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              textAlign: "center",
              width: "100%",
            }}
          >
            © {new Date().getFullYear()} WolfDen. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
