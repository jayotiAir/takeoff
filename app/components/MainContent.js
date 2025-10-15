"use client";

import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};

const services = [
    {
        title: "Construction Takeoffs",
        link: "/work",
        image: "/images/construction-takeoff.jpg",
    },
    {
        title: "Irrigation Design",
        link: "/work",
        image: "/images/irrigation-design.jpg",
    },
    {
        title: "Landscape Design+Drafting",
        link: "/work",
        image: "/images/landscape-design-drafting.jpg",
    },
    {
        title: "Workflow Automation",
        link: "/automation",
        image: "/images/workflow-automation.jpg",
    },
];

export default function MainContent() {
    return (
        <Box
            sx={{
                position: "relative",
                backgroundColor: "#f5f5f5",
                py: { xs: 8, md: 12 },
                zIndex: 10,
                mb: { xs: -15, md: -20 }, // ❗️This is what makes it overlap
                justifyContent:{xs:'center',sm:'center'}
            }}
        >
            <Container>
                {/* Heading 1 */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            textAlign: "center",
                            mb: 2,
                            color: "#003720",
                        }}
                    >
                        Professional takeoff services to help
                    </Typography>
                </motion.div>

                {/* Heading 2 */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    variants={fadeInUp}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            textAlign: "center",
                            mb: 2,
                            color: "#003720",
                        }}
                    >
                        Your business truly takeoff.
                    </Typography>
                </motion.div>

                {/* Paragraph */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={3}
                    variants={fadeInUp}
                >
                    <Typography
                        sx={{
                            textAlign: "center",
                            mb: 4,
                            maxWidth: { xs: 900, sm: 900, md: 1000 },
                            mx: "auto",
                            lineHeight: 2.5,
                            px: { xs: 2, sm: 0 },
                        }}
                    >
                        Takeoff Monkey offers professional takeoff services, enabling you
                        to increase the quality and quantity of your bids while lowering
                        your overhead! We pride ourselves on being the best construction
                        estimating solution in the United States. Stop spending endless
                        hours pouring over plans to submit a bid. Let us do the heavy
                        lifting and help turn your estimators into rock stars.
                    </Typography>
                </motion.div>

                {/* Button */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={4}
                    variants={fadeInUp}
                    style={{ textAlign: "center" }}
                >
                    <Button
                        variant="contained"
                        href="/upload-project"
                        sx={{
                            px: 4,
                            py: 1.5,
                            backgroundColor: "#f2ec76",
                            color: "#000",
                            "&:hover": {
                                backgroundColor: "#000",
                                color: "#f2ec76",
                            },
                        }}
                    >
                        Upload Project
                    </Button>
                </motion.div>
            </Container>

            <Container
                sx={{
                    position: "relative",
                    zIndex: 10,
                    mt: 6, justifyContent:{xs:'center'}
                }}
            >
                <Box
                    sx={{
                        maxWidth: 1000,
                        mx: "auto",
                        position: "relative",
                        zIndex: 10,
                        mt: 6,
                        mb: { xs: -10, md: -20 }, // 👈 Pull this section into the next one
                    }}
                >

                    <Grid container spacing={4} justifyContent="center">
                        {services.map((service, index) => (
                            <Grid item key={index} xs={12} sm={6} md={6}>
                                <Card
                                    sx={{
                                        position: "relative",
                                        height: 350,
                                        width: 450,
                                        overflow: "hidden",
                                        transition:
                                            "transform 0.3s ease, box-shadow 0.3s ease",
                                        "&:hover": {
                                            transform: "scale(1.03)",
                                            boxShadow:
                                                "0 8px 20px rgba(0,0,0,0.3)",
                                            "& .MuiCardMedia-root": {
                                                filter: "brightness(1.1)",
                                                transform: "scale(1.05)",
                                            },
                                            "& .MuiBox-root": {
                                                backgroundColor:
                                                    "rgba(0,0,0,0.6)",
                                            },
                                        },
                                    }}
                                >
                                    <CardActionArea
                                        href={service.link}
                                        sx={{
                                            height: "100%",
                                            position: "relative",
                                            width: "100%",
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={service.image}
                                            alt={service.title}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                zIndex: 1,
                                                transition:
                                                    "filter 0.3s ease, transform 0.3s ease",
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                backgroundColor:
                                                    "rgba(0,0,0,0)",
                                                zIndex: 2,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                textAlign: "center",
                                                px: 2,
                                                transition:
                                                    "background-color 0.3s ease",
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: "#fff",
                                                    fontWeight: "bold",
                                                    whiteSpace: "pre-line",
                                                }}
                                            >
                                                {service.title}
                                            </Typography>
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
