"use client";

import {

    Divider,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import { Box, Container, Grid, Typography, Button, useMediaQuery, useTheme, Link as MuiLink } from '@mui/material'; import Link from 'next/link'; 


const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const scrollText = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

export default function ConfidentialitySection() {
    const theme = useTheme(); const isXsBelow500 = useMediaQuery('(max-width:1000px)');
    return (
        <>

            <Box
                component="section"
                sx={{
                    backgroundColor: "#f2ec76",
                    py: { xs: 10, md: 15 },
                }}
            >
                <Container>
                    <Grid
                        container
                        spacing={6}
                        direction={isXsBelow500 ? 'column' : 'row'}
                        alignItems="center"
                    >
                        {/* Text */}
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                textAlign: isXsBelow500 ? 'center' : 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: isXsBelow500 ? 'center' : 'flex-start',
                            }}
                        >
                            <motion.div
                                variants={fadeIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 700,
                                        color: "#003720",
                                        mb: 2,
                                        lineHeight: 1.3,
                                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                                    }}
                                >
                                    100%<br />
                                    CONFIDENTIALITY
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' }, // Center on xs, left on md+
                                        mb: 2,
                                    }}
                                >
                                    <Divider
                                        sx={{
                                            width: 50,
                                            height: 4,
                                            backgroundColor: "#003720",
                                        }}
                                    />
                                </Box>
                                

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "#333",
                                        maxWidth: 500,
                                    }}
                                >
                                    The information you share with us stays with us.
                                    Your projects are treated with 100% confidentiality,
                                    guaranteed every time.
                                </Typography>
                            </motion.div>
                        </Grid>

                        {/* Image */}
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                display: 'flex',
                                justifyContent: isXsBelow500 ? 'center' : 'flex-end',
                            }}
                        >
                            <motion.div
                                variants={fadeIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: 400,
                                    }}
                                >
                                    <Image
                                        src="/images/confident.svg"
                                        alt="Confidentiality Icon"
                                        width={400}
                                        height={400}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>


            {/* Ticker Section */}
            <Box
                component="section"
                sx={{
                    position: "relative",
                    backgroundColor: "#fff",
                    pt: 8,
                    pb: 6,
                    overflow: "visible",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: {xs:-10,sm:-20,md:-70},
                        width: "100%",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        zIndex: 5,
                    }}
                >
                    <Box
                        sx={{
                            display: "inline-block",
                            px: 4,
                            animation: `${scrollText} 12s linear infinite`,
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 600,
                                color: "#003720",
                                display: "inline-block",
                                fontSize: {
                                    xs: '2rem',
                                    sm: '5rem',
                                    md: '8rem',
                                },
                                whiteSpace: "nowrap",
                            }}
                        >
                            TAKE A TRIAL RUN
                        </Typography>
                    </Box>
                </Box>

                {/* Divider below the scrolling text */}
                <Box
                    sx={{
                        mt: {xs:0,sm:2,md:2},
                        maxWidth: '50rem',
                        mx: "auto",
                        zIndex: 1,
                        position: "relative",
                    }}
                >
                    <Divider
                        sx={{
                            backgroundColor: "#f2ec76",
                            height: 4,
                            borderRadius: 2,

                        }}
                    />
                </Box>
            </Box>

            {/* CTA Section */}
            <Box component="section" sx={{ backgroundColor: '#ffffff', py: { xs: 2, md: 4 }, }} >
                <Container>
                    <Grid container spacing={10} alignItems="center" direction={isXsBelow500 ? 'column' : 'row'} textAlign={isXsBelow500 ? 'center' : 'initial'} >
                        {/* Left Side: Text */} <Grid item xs={12} md={6}>
                            <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, lineHeight: 1.3, color: '#003720', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, }} >
                                LET US SHOW YOU <br /> HOW IT’S DONE.
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: { xs: '1rem', sm: '1.125rem' }, color: '#333', }} >
                                We’re willing to put our money where our mouth is to show you a better way.
                                <br /> If you’re willing to do the same, <br />
                                fill out a simple form to apply for free service.
                                <br /> It’s that easy. </Typography>
                        </Grid> {/* Right Side: Button */}
                        <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: isXsBelow500 ? 'center' : 'flex-end', mt: isXsBelow500 ? 0 : 0, }} >
                            <Link href="/test-drive" passHref>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#f2ec76',
                                        color: '#000',
                                        fontWeight: 600,
                                        px: { xs: 3, sm: 4 }, 
                                        py: 2,
                                        fontSize: { xs: '1rem', sm: '1.25rem' },
                                        borderRadius: 2,
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                        transition: 'all 0.3s ease',
                                        whiteSpace: 'nowrap', 
                                        maxWidth: '100%', 
                                        '&:hover': {
                                            backgroundColor: '#003720',
                                            color: '#f2ec76',
                                            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                                        },
                                    }}
                                >
                                    Apply now
                                </Button>

                            </Link>
                        </Grid>
                    </Grid>

                </Container>
            </Box>


        </>

    );
}
