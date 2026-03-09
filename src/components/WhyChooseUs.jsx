import React from "react";
import { Box, Typography, Container } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InsightsIcon from "@mui/icons-material/Insights";

const benefits = [
  {
    title: "Complete Transparency",
    desc: "We provide real time reporting and clear insights so you always know your growth.",
    icon: <SecurityIcon />,
  },
  {
    title: "24/7 Dedicated Support",
    desc: "Our team is always ready to help you scale your business anytime.",
    icon: <SupportAgentIcon />,
  },
  {
    title: "ROI Focused Growth",
    desc: "We focus on results, not vanity metrics. Every strategy drives revenue.",
    icon: <AutoGraphIcon />,
  },
  {
    title: "Fast Execution",
    desc: "Speed matters. We launch and optimize campaigns quickly.",
    icon: <AccessTimeIcon />,
  },
  {
    title: "Data Driven Decisions",
    desc: "Smart analytics and insights power every growth decision.",
    icon: <InsightsIcon />,
  },
];

const WhyChooseUs = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, position: "relative" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#fff",
            textAlign: "center",
            mb: 2,
          }}
        >
          What You Get With{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, #4f8cff, #6d5dfc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            WolfDen
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            maxWidth: "700px",
            mx: "auto",
            mb: 8,
          }}
        >
          We go beyond services. We become your long term growth partner and
          focus on building sustainable, scalable digital success.
        </Typography>

        {/* Timeline */}
        <Box
          sx={{
            position: "relative",
            maxWidth: "900px",
            mx: "auto",
            pl: { xs: 3, md: 0 },
          }}
        >
          {/* Vertical line for all screens */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 8, md: "50%" },
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(180deg, #4f8cff, rgba(79,140,255,0.1))",
              transform: { md: "translateX(-50%)" },
            }}
          />

          {benefits.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "row",
                  md: index % 2 === 0 ? "row" : "row-reverse",
                },
                alignItems: "center",
                mb: 6,
              }}
            >
              {/* Circle */}
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "#4f8cff",
                  mr: { xs: 2, md: 0 },
                  ml: { md: 2 },
                  boxShadow: "0 0 12px #4f8cff",
                  zIndex: 2,
                }}
              />

              {/* Content */}
              <Box
                sx={{
                  flex: 1,
                  p: 3,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "0.3s",
                  ml: { xs: 2, md: 0 },
                  "&:hover": {
                    border: "1px solid #4f8cff",
                    boxShadow: "0 0 20px rgba(79,140,255,0.4)",
                  },
                }}
              >
                <Box sx={{ color: "#4f8cff", mb: 1 }}>
                  {item.icon}
                </Box>

                <Typography sx={{ color: "#fff", fontWeight: 600 }}>
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.95rem",
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;