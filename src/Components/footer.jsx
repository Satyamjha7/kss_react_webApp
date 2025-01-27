import React, { useState } from "react";
import { Box, Container, Grid, Typography, TextField, Button, IconButton, Snackbar, Alert } from "@mui/material";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
            setSnackbar({
                open: true,
                message: "Please enter a valid email address",
                severity: "error",
            });
            return;
        }

        setLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setSnackbar({
                open: true,
                message: "Successfully subscribed!",
                severity: "success",
            });
            setEmail("");
        } catch (error) {
            setSnackbar({
                open: true,
                message: "Failed to subscribe. Please try again.",
                severity: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="styled-footer">
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            Our Mission
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            Empowering Communities, Changing Lives. Together, we can create a sustainable future
                            for all. Join us in making a difference, one step at a time.
                        </Typography>
                        <Box component="form" onSubmit={handleSubscribe}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Subscribe to our mission"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                    borderRadius: 1,
                                    input: { color: "#ffffff" },
                                    mb: 2
                                }}
                                aria-label="Email subscription input"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                disabled={loading}
                                className="subscribe-button"
                                aria-label="Subscribe button"
                            >
                                {loading ? "Subscribing..." : "Subscribe"}
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            {[
                                "About Us",
                                "Our Projects",
                                "Donate",
                                "Contact",
                                "Volunteer Opportunities",
                            ].map((link) => (
                                <Typography key={link} className="quick-link" variant="body1" aria-label={link}>
                                    {link}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Acharyavan Mahishi, Distt- Saharsa
                            <br />
                            Bihar, India 852216
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Email: kosisevasadan@gmail.com
                            <br />
                            Phone: +91 9934797023
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <IconButton aria-label="Facebook" className="social-button">
                                <FaFacebook size={24} />
                            </IconButton>
                            <IconButton aria-label="Twitter" className="social-button">
                                <FaTwitter size={24} />
                            </IconButton>
                            <IconButton aria-label="Instagram" className="social-button">
                                <FaInstagram size={24} />
                            </IconButton>
                            <IconButton aria-label="LinkedIn" className="social-button">
                                <FaLinkedin size={24} />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 4, pt: 4, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                    <Typography variant="body2" align="center" color="rgba(255,255,255,0.6)">
                        © {new Date().getFullYear()} Kosi Seva Sadan. All rights reserved.
                    </Typography>
                </Box>
            </Container>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
                <Alert
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    severity={snackbar.severity}
                    sx={{ width: "100%" }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </footer>
    );
};

export default Footer;
