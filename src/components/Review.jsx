import React from "react";
import { Box, Typography, Container, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
  {
    name: "Abhiram",
    role: "Startup Founder",
    review:
      "WolfDen transformed our digital presence. Their SEO and paid marketing strategy helped us generate 3x more leads in just 3 months.",
    
  },
  {
    name: "Sandeep",
    role: "E-commerce Owner",
    review:
      "The team is highly professional. Our sales increased significantly after their social media and content strategy.",
  
  },
  {
    name: "Praveen",
    role: "Tech Entrepreneur",
    review:
      "From branding to web development, everything was top notch. Highly recommended for any business looking to grow online.",
   
  },
  {
    name: "shashank",
    role: "Pet Shop Owner",
    review:
      "Professional, creative, and detail oriented. They truly understood our brand and translated it into a beautiful digital experience.",
  
  },
];

const Review = () => {
  return (
    <section id="reviews">
    <Box sx={{ py: { xs: 8, md: 12 }, textAlign: "center" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#fff",
            mb: 2,
          }}
        >
          Hear From Our{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, #4f8cff, #6d5dfc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Happy Clients
          </Box>
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            color: "rgba(255,255,255,0.7)",
            maxWidth: "650px",
            mx: "auto",
            mb: 8,
          }}
        >
          We focus on delivering measurable results and building long-term
          relationships with our clients.
        </Typography>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {testimonials.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "100%",
                  sm: "45%",
                  md: "30%",
                },
                p: 4,
                borderRadius: 4,
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.35s ease",
                textAlign: "left",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-10px)",
                  border: "1px solid rgba(79,140,255,0.6)",
                  boxShadow: "0 0 30px rgba(79,140,255,0.4)",
                },
              }}
            >
              {/* Stars */}
              <Box sx={{ display: "flex", mb: 2 }}>
                {[1, 2, 3, 4, 5/2].map((_, i) => (
                  <StarIcon key={i} sx={{ color: "#4f8cff" }} />
                ))}
              </Box>

              {/* Review */}
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                {item.review}
              </Typography>

              {/* User */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar src={item.img} />
                <Box>
                  <Typography sx={{ color: "#fff", fontWeight: 600 }}>
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {item.role}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
    </section>
  );
};

export default Review;