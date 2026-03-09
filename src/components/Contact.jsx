import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("number", form.number);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwK3At7pqaTH36f5Rft9oby4Y3hAtpar35Qzr7g39dh4pDBEnGOopCFX5ADQKxXzXOFWw/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      alert("Request sent successfully 🚀");

      setForm({
        name: "",
        number: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section id="contact">
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          mt: 10,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle, rgba(79,140,255,0.25), transparent 70%)",
            top: "-200px",
            right: "-200px",
          }}
        />

        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              alignItems: "center",
            }}
          >
            {/* LEFT SIDE */}
            <Box sx={{ flex: "1 1 450px" }}>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "3rem" },
                  color: "#fff",
                  mb: 2,
                }}
              >
                Let’s Grow Your{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #4f8cff, #6d5dfc)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Business
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  mb: 4,
                  lineHeight: 1.7,
                }}
              >
                Tell us about your goals. Our team will craft a custom growth
                strategy and help your business scale faster.
              </Typography>

              {[
                "Free growth strategy call",
                "24/7 support & quick response",
                "Data driven results",
                "ROI focused campaigns",
              ].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 2,
                  }}
                >
                  <CheckCircleIcon sx={{ color: "#4f8cff" }} />
                  <Typography sx={{ color: "#d0d7ff" }}>{item}</Typography>
                </Box>
              ))}
            </Box>

            {/* RIGHT SIDE FORM */}
            <Box
              sx={{
                flex: "1 1 400px",
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 40px rgba(79,140,255,0.15)",
              }}
            >
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  sx={inputStyle}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Your Number"
                  name="number"
                  value={form.number}
                  onChange={handleChange}
                  sx={inputStyle}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  sx={inputStyle}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  sx={inputStyle}
                  margin="normal"
                />

                <Button
                  fullWidth
                  type="submit"
                  disabled={loading}
                  sx={{
                    mt: 3,
                    py: 1.5,
                    borderRadius: "999px",
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1rem",
                    background: "linear-gradient(135deg, #4f8cff, #6d5dfc)",
                    color: "#fff",
                    boxShadow: "0 0 20px rgba(79,140,255,0.6)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #6d5dfc, #4f8cff)",
                    },
                  }}
                >
                  {loading ? (
                    <CircularProgress size={24} sx={{ color: "white" }} />
                  ) : (
                    "Send Request 🚀"
                  )}
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 2,
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.15)",
    },
    "&:hover fieldset": {
      borderColor: "#4f8cff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#4f8cff",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255,255,255,0.6)",
  },
};

export default Contact;