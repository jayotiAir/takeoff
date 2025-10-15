"use client";

import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";

// Animation variant
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export default function VideoSection() {
    return (
   <Box
    sx={{
        position: 'relative',
        zIndex: 1,
        pt: { xs: 12, md: 20 }, // 👈 Push content down to make room for the overlap
        backgroundColor: "#003720", // or whatever background you want
        py:20
    }}
>
            <Container maxWidth="md" sx={{mt:10}}>
                {/* Heading */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    variants={fadeInUp}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: "center",
                            fontWeight: 700,
                            mb: 2,color:'#f2ec76'
                        }}
                    >
                        How we work
                    </Typography>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    variants={fadeInUp}
                >
                    <Divider
                        sx={{
                            width: "20rem",
                            height: "2px",
                            backgroundColor: "#f2ec76",
                            mx: "auto",
                            mb: 4,
                        }}
                    />
                </motion.div>

                {/* Responsive YouTube Video */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={3}
                    variants={fadeInUp}
                >
                    <Box
                        sx={{
                            position: "relative",
                            paddingTop: "56.25%", // 16:9 Aspect Ratio
                            borderRadius: 2,
                            overflow: "hidden",
                            boxShadow: 3,
                        }}
                    >
                        <iframe
                            src="https://www.youtube.com/embed/T9Llll0oKuM?rel=0&playsinline=1"
                            title="How we work"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                border: 0,
                            }}
                        />
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}
