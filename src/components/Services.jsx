import React from "react";
import { Box, Typography, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CampaignIcon from "@mui/icons-material/Campaign";
import BrushIcon from "@mui/icons-material/Brush";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CodeIcon from "@mui/icons-material/Code";

const services = [
  {
    title: "SEO Optimization",
    desc: "Boost your rankings, increase organic traffic, and dominate search results with our advanced SEO strategies.",
    icon: <SearchIcon fontSize="large" />,
  },
  {
    title: "Social Media Marketing",
    desc: "Build strong brand presence, engage your audience, and drive growth across all major platforms.",
    icon: <CampaignIcon fontSize="large" />,
  },
  {
    title: "Graphic Designing",
    desc: "Create stunning visuals and brand identity that captures attention and builds trust.",
    icon: <BrushIcon fontSize="large" />,
  },
  {
    title: "Email Marketing",
    desc: "Convert leads into loyal customers with powerful email campaigns and automation.",
    icon: <EmailIcon fontSize="large" />,
  },
  {
    title: "Content Writing",
    desc: "High-quality, SEO optimized content that connects with your audience and drives results.",
    icon: <ArticleIcon fontSize="large" />,
  },
  {
    title: "Photography",
    desc: "Professional visuals that showcase your brand and create a strong digital presence.",
    icon: <CameraAltIcon fontSize="large" />,
  },
  {
    title: "Web Development",
    desc: "Modern, high performance websites designed to convert visitors into customers.",
    icon: <CodeIcon fontSize="large" />,
  },
];

const Services = () => {
  return (
    <section id="services">
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        {/* Heading */}
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#fff",
            mb: 2,
          }}
        >
          Our{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, #4f8cff, #6d5dfc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Services
          </Box>
        </Typography>

        {/* Subheading */}
        <Typography
          sx={{
            color: "rgba(255,255,255,0.7)",
            maxWidth: "700px",
            mx: "auto",
            mb: 8,
          }}
        >
          We provide end to end digital marketing and growth solutions that help
          your business scale faster, generate quality leads, and build a strong
          brand in the competitive digital world.
        </Typography>

        {/* Flexbox Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "100%",   // small → 1
                  sm: "48%",    // medium → 2
                  md: "30%",    // large → 3
                },
                p: 4,
                borderRadius: 4,
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.35s ease",
                textAlign: "left",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
 
                "&:hover": {
                  transform: "translateY(-12px)",
                  border: "1px solid rgba(79,140,255,0.6)",
                  boxShadow: "0 0 35px rgba(79,140,255,0.4)",
                },
              }}
            >
              {/* Glow effect */}
              <Box
                sx={{
                  position: "absolute",
                  width: "140px",
                  height: "140px",
                  background:
                    "radial-gradient(circle, rgba(79,140,255,0.25), transparent)",
                  top: "-40px",
                  right: "-40px",
                }}
              />

              {/* Icon */}
              <Box sx={{ color: "#4f8cff", mb: 2 }}>
                {service.icon}
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#fff",
                  mb: 1,
                }}
              >
                {service.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                {service.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
    </section>
  );
};

export default Services;