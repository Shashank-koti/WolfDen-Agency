import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

const About = () => {
  return (
    <section id="about">
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow background */}
      <Box
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#fff",
            textAlign: "center",
            mb: 2,
          }}
        >
          About{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, #4f8cff, #6d5dfc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ACM
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.7)",
            maxWidth: "750px",
            mx: "auto",
            textAlign: "center",
            mb: 8,
          }}
        >
          AMC is a results driven digital marketing agency focused on
          helping startups, brands, and businesses.
        </Typography>

        {/* Content */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              flex: "1 1 400px",
              maxWidth: "600px",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.6rem",
                mb: 2,
              }}
            >
              We Help Businesses Grow & Dominate the Digital World 🚀
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              Our team of experts specializes in SEO, performance marketing,
              branding, content, and web development. We focus on delivering
              real ROI and sustainable growth for our clients. 
            </Typography>

            {/* CTA */}
            <Button
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 600,
                ml:"4",
                background: "linear-gradient(135deg, #4f8cff, #6d5dfc)",
                color: "#fff",
                boxShadow: "0 0 20px rgba(79,140,255,0.6)",
                "&:hover": {
                  background: "linear-gradient(135deg, #6d5dfc, #4f8cff)",
                },
              }}
            >
              Learn More
            </Button>
          </Box>

          {/* Right Content – Stats / Highlights */}
          <Box
            sx={{
              flex: "1 1 350px",
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {[
              { value: "100+", label: "Clients Served" },
              { value: "250%", label: "Average Growth" },
              { value: "5+", label: "Years Experience" },
              { value: "24/7", label: "Support" },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  width: "160px",
                  p: 3,
                  borderRadius: 3,
                  textAlign: "center",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    border: "1px solid rgba(79,140,255,0.6)",
                    boxShadow: "0 0 20px rgba(79,140,255,0.4)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    color: "#4f8cff",
                  }}
                >
                  {item.value}
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
    </section>
  );
};

export default About;