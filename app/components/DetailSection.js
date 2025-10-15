"use client";

import {
    Box,
    Container,
    Typography,
    Grid,
    Divider,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
if (typeof window !== 'undefined') {
    // safe to use window here
    console.log(window.location.href);
}


const details = [
    {
        title: "Fast",
        description: "48 hours for takeoffs, and 75 hours for irrigation design",
    },
    {
        title: "Simple",
        description:
            "We’ll make things easy for you. Simply upload your project details and let us get to work.",
    },
    {
        title: "Accurate",
        description:
            "We point out all discrepancies and contradictions within the documents, provide cost-savings ideas, detail references, and more.",
    },
    {
        title: "Cost-effective",
        description:
            "Convenient projects, plans and subscriptions. Pay only for the quality work we complete!",
    },
    {
        title: "Custom",
        description:
            "When we complete a takeoff for you, it’s specific to your needs. We can input data in any preferred format as well as accommodate custom descriptions and naming conventions.",
    },
];




// Animation Variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};


export default function DetailsSection() {
    const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Set initial value
        setIsMobile(window.innerWidth < 1000);

        // Optional: listen to resize to update dynamically
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        window.addEventListener('resize', handleResize);

        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                backgroundColor: "#fff",
                pt: { xs: 20, md: 30 },
                pb: { xs: 10, md: 15 },
                overflow: "visible",
                zIndex: 1,

            }}
        >
            {/* Absolutely positioned OVERLAPPING image */}
            <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{
                    position: "absolute",
                    top: -110,
                    right: 400,
                    zIndex: 5,
                    width: "100%",
                    maxWidth: "500px",
                    display: isMobile ? "none" : "block",
                }}
            >

                <Image
                    src="/images/difference-in-details.jpg"
                    alt="Top Overlapping Image"
                    width={726}
                    height={491}
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                    }}
                />
            </motion.div>

            <Container>
                <Grid container spacing={10} alignItems="flex-start" justifyContent={{ xs: 'center', sm: 'center' }}>
                    {/* LEFT COLUMN */}
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                                lineHeight: 1.2,
                                color: "#003720",
                                textAlign: { xs: "center", sm: 'center', md: "left" },
                            }}
                        >
                            Our<br />Difference<br />Is in the<br />Details
                        </Typography>

                        <Box
                            sx={{
                                width: "100%",
                                height: "auto",
                                overflow: "hidden",
                                borderRadius: 2,
                            }}
                        >
                            <Image
                                src="/images/difference-in-details.jpg"
                                alt="Details Image"
                                width={800}
                                height={500}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "8px",
                                    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* RIGHT COLUMN */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mt: { xs: 0, md: 15 }, maxWidth: 700, justifyContent: { xs: 'center', sm: 'center',md:'left' } }}>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {details.map((item, index) => (
                                    <motion.div key={index} variants={itemVariants}>
                                        <Box sx={{ mb: 4, justifyContent: { xs: 'center', sm: 'center',md:'left' } }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: "#003720",
                                                    textAlign: "left",
                                                    textAlign: { xs: 'center', sm: 'center',md:'left' }
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: { xs: 'center', sm: 'center', md: 'left' }, // Center on xs, left on md+
                                                    mb: 2,
                                                }}
                                            >
                                                <Divider
                                                    sx={{
                                                        width: 50,
                                                        my: 1,
                                                        backgroundColor: "#003720",
                                                        textAlign: { xs: 'center', sm: 'center' ,md:'left'}

                                                    }}
                                                />

                                            </Box>

                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: "#333",
                                                    textAlign: "left",
                                                    textAlign: { xs: 'center', sm: 'center',md:'left' }

                                                }}
                                            >
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
}
