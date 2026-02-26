import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Babu from "../pics/BabuFashions.png";
import Bagaara from "../pics/BagaaraLogo.png";
import NutBreaker from "../pics/NutBreakerIndia.png";
import ScoopStation from "../pics/ScoopStationDenton.png";
import Vivea from "../pics/ViveaFashion.png";
import Cinema from "../pics/CinemaBandiDenton.png"
import Swadista from "../pics/Swadista.png"
import VRlogo from "../pics/VRlogo.jpeg"

const logos = [Babu, Bagaara, NutBreaker, ScoopStation, Vivea, Cinema, Swadista, VRlogo];

const Clients = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 8 },
        mt:10,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "2.6rem" },
            color: "#fff",
            textAlign: "center",
            mb: 6,
          }}
        >
          Trusted By{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, #4f8cff, #6d5dfc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Leading Brands
          </Box>
        </Typography>

        {/* Scrolling Logos */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 8,
              width: "max-content",
              animation: "scroll 25s linear infinite",

              "&:hover": {
                animationPlayState: "paused",
              },

              "@keyframes scroll": {
                from: { transform: "translateX(0)" },
                to: { transform: "translateX(-50%)" },
              },
            }}
          >
            {/* Duplicate logos for infinite loop */}
            {[...logos, ...logos].map((logo, i) => (
              <Box
                sx={{
                  width: {xs: 80, md:120},
                  height: {xs: 80, md:120},
                  borderRadius: "50%",
                //   background: "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                //   backdropFilter: "blur(8px)",
                //   border: "1px solid rgba(255,255,255,0.1)",
                  overflow: "hidden",
                  transition: "0.3s",
                //   filter: "grayscale(100%)",

                  "&:hover": {
                    filter: "grayscale(0%)",
                    transform: "scale(1.1)",
                    border: "1px solid #4f8cff",
                    boxShadow: "0 0 18px rgba(79,140,255,0.5)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="client"
                  sx={{
                    width: "65%",
                    height: "65%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Clients;
