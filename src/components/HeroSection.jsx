import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <section id="home">
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // pb: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Glow background */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: "500px", md: "900px" },
          height: { xs: "500px", md: "900px" },
          background:
            "radial-gradient(circle, rgba(79,140,255,0.25), transparent 60%)",
          top: "-200px",
          right: { xs: "-200px", md: "-300px" },
          zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>

        {/* Heading */}
        <Typography
          sx={{
            fontWeight: 800,
            lineHeight: 1.2,
            color: "#fff",
            fontSize: {
              xs: "2rem",
              sm: "2.8rem",
              md: "3.5rem",
              lg: "3rem",
            },
          }}
        >
          Scale Your Business With{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, #4f8cff, #6d5dfc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Digital Marketing
          </Box>
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            mt: 3,
            mx: "auto",
            color: "rgba(255,255,255,0.7)",
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            maxWidth: "650px",
            lineHeight: 1.7,
          }}
        >
          At WolfDen, we craft high-converting strategies using SEO, paid ads,
          social media, and growth marketing to help your brand dominate the
          digital world and generate consistent leads.
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            mt: 5,
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            sx={{
              px: { xs: 3, md: 4 },
              py: 1.3,
              borderRadius: "999px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: { xs: "0.9rem", md: "1rem" },
              background: "linear-gradient(135deg, #4f8cff, #6d5dfc)",
              color: "#fff",
              boxShadow: "0 0 20px rgba(79,140,255,0.6)",
              "&:hover": {
                background: "linear-gradient(135deg, #6d5dfc, #4f8cff)",
              },
            }}
          >
            Get Free Strategy
          </Button>

          <Button
            variant="outlined"
            sx={{
              px: { xs: 3, md: 4 },
              py: 1.3,
              borderRadius: "999px",
              textTransform: "none",
              fontSize: { xs: "0.9rem", md: "1rem" },
              color: "#d0d7ff",
              borderColor: "rgba(255,255,255,0.2)",
              "&:hover": {
                borderColor: "#4f8cff",
                color: "#4f8cff",
                background: "rgba(79,140,255,0.1)",
              },
            }}
          >
            View Case Studies
          </Button>
        </Box>
      </Container>
    </Box>
    </section>
  );
};

export default HeroSection;