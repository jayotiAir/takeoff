import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Link,
    IconButton,
    Divider,
    Button,
    Stack, Container
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: '#f2ec76', py: 6 }}>
            <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
                <Grid container spacing={4} justifyContent={{ xs: 'center', md: 'space-between' }}
                    alignItems={{ xs: 'center', md: 'flex-start' }}
                    direction={{ xs: 'column', md: 'row' }} >
                    {/* Logo and Social Icons */}
                    <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Box mb={2}>
                            <Link href="https://www.takeoffmonkey.com" underline="none">
                                <img
                                    src="https://www.takeoffmonkey.com/wp-content/uploads/2024/09/TakeOff-Monkey-Logo.svg"
                                    alt="TakeOff Monkey Logo"
                                    style={{ maxWidth: 'auto' }}
                                />
                            </Link>
                        </Box>

                        <Stack direction="row" spacing={2} justifyContent='center'>
                            <IconButton
                                component="a"
                                href="https://www.facebook.com/TakeoffMonkey/"
                                target="_blank"
                                rel="noopener"
                                aria-label="Facebook"
                                sx={{
                                    backgroundColor: '#003720',
                                    color: '#fff',
                                    padding: '10px',
                                    borderRadius: '6px',
                                    transition: 'background-color 500ms ease',
                                    '&:hover': {
                                        backgroundColor: '#005c34', // Slightly lighter green on hover
                                    },
                                }}
                            >
                                <FacebookIcon sx={{ fontSize: 28 }} />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://www.instagram.com/takeoffmonkey/"
                                target="_blank"
                                rel="noopener"
                                aria-label="Instagram"
                                sx={{
                                    backgroundColor: '#003720',
                                    color: '#fff',
                                    padding: '10px',
                                    borderRadius: '6px',
                                    transition: 'background-color 500ms ease',
                                    '&:hover': {
                                        backgroundColor: '#005c34',
                                    },
                                }}
                            >
                                <InstagramIcon sx={{ fontSize: 28 }} />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://www.linkedin.com/company/takeoff-monkey-llc/"
                                target="_blank"
                                rel="noopener"
                                aria-label="LinkedIn"
                                sx={{
                                    backgroundColor: '#003720',
                                    color: '#fff',
                                    padding: '10px',
                                    borderRadius: '6px',
                                    transition: 'background-color 500ms ease',
                                    '&:hover': {
                                        backgroundColor: '#005c34',
                                    },
                                }}
                            >
                                <LinkedInIcon sx={{ fontSize: 28 }} />
                            </IconButton>
                        </Stack>

                        <Typography variant="body2" mt={2} sx={{ justifyContent: 'center', textAlign: 'center', fontSize: { xs: 2, sm: '1rem', md: '1.5rem' } }}>
                            © 2025 Takeoff Monkey
                        </Typography>
                        <Typography variant="body2" sx={{ justifyContent: 'center', textAlign: 'center', fontSize: { xs: 2, sm: '1rem', md: '1.5rem' } }}>All Rights Reserved.</Typography>
                    </Grid>

                    {/* Navigation Links */}
                    <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Stack spacing={1}>
                            {[
                                { label: 'About', href: '/about/' },
                                { label: 'Process', href: 'https://www.takeoffmonkey.com/process/' },
                                { label: 'Work', href: '/work/' },
                                { label: 'Automation', href: '/automation/' },
                                { label: 'Blog', href: '/blog/' },
                                { label: 'FAQs', href: '/faq/' },
                                { label: 'Take a Trial Run', href: '/test-drive/', bold: true },
                                { label: 'Contact', href: '/contact/' },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    underline="none" // ✅ No underline
                                    sx={{ display: 'inline-block' }} // Optional for consistent alignment
                                >
                                    <Typography
                                        component="span"
                                        sx={{
                                            fontSize: {
                                                xs: '1.25rem',   // ~20px on small screens
                                                sm: '1.5rem',    // ~24px
                                                md: '1.8125rem', // 29px
                                            },
                                            lineHeight: {
                                                xs: '1.75rem',   // ~28px
                                                sm: '2rem',      // ~32px
                                                md: '2.1875rem', // 35px
                                            },
                                            color: '#221f20',
                                            fontWeight: item.bold ? 'bold' : 'normal',
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                </Link>
                            ))}
                        </Stack>
                    </Grid>


                    {/* CTA Section */}
                    <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography
                            gutterBottom
                            sx={{
                                fontFamily: '"Montserrat", sans-serif',
                                fontWeight: 800,
                                color: '#003720',
                                fontSize: {
                                    xs: '1.125rem',   // ~18px on small screens
                                    sm: '1.25rem',    // ~20px
                                    md: '1.4375rem',  // 23px on desktops
                                },
                                lineHeight: 1.4,
                                width: {
                                    xs: 'auto',
                                    md: '7.0625rem',  // Optional fixed width for larger screens
                                },
                            }}
                        >
                            LET’S DO THIS
                        </Typography>

                        <Divider sx={{ mb: 2, width: '100px' }} />
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#fff",
                                color: "#000",
                                borderRadius: "20px",
                                textTransform: "none",
                                fontWeight: 900,
                                fontSize: "1.5rem",
                                "&:hover": {
                                    backgroundColor: "#000",
                                    color: "#fff",
                                },
                            }}
                        >
                            Upload Project
                        </Button>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
};

export default Footer;
