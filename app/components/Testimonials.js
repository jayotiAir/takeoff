'use client';

import { Box, Typography, IconButton, Stack, Rating } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const testimonials = [
    {
        quote: '“We’ve saved hours thanks to Takeoff Monkey.”',
        author: '– Happy Contractor',
    },
    {
        quote: '“Takeoff Monkey made my life so much easier.”',
        author: '– Jane Doe, Estimator',
    },
    {
        quote: '“Highly recommend for busy contractors.”',
        author: '– John Smith, Project Manager',
    },
];

export default function TestimonialSection() {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);

    const nextTestimonial = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            nextTestimonial();
        }, 5000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
     <Box sx={{ width: '100%', textAlign: 'center', mt: 4 }}>
  {/* Testimonial Section */}
  <Box
    sx={{
      width: '100%',
      position: 'relative',
      backgroundColor: '#003720',
      overflow: 'hidden',
      py: { xs: 6, sm: 8, md: 10 }, // Responsive vertical padding
      px: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      flexDirection: 'column',
    }}
  >
    {/* Background image */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    >
      <Image
        src="/images/leaves-bg.svg"
        alt="Background"
        fill
        style={{
          objectFit: 'cover', // Better coverage
          objectPosition: 'center',
        }}
        priority
      />
    </Box>

    {/* Overlay Text */}
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 600,
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 600,
          mb: 2,
          fontSize: {
            xs: '1.5rem',
            sm: '2rem',
            md: '2.5rem',
          },
        }}
      >
        Testimonials
      </Typography>

      <Rating
        value={5}
        readOnly
        sx={{
          color: '#f2ec76',
          mb: 2,
        }}
      />

      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 2,
          fontSize: {
            xs: '1rem',
            sm: '1.2rem',
            md: '1.5rem',
          },
        }}
      >
        {testimonials[index].quote}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontSize: {
            xs: '0.875rem',
            sm: '1rem',
          },
        }}
      >
        {testimonials[index].author}
      </Typography>

      {/* Buttons directly below the text */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 3 }}
      >
        <IconButton
          onClick={prevTestimonial}
          sx={{
            color: '#f2ec76',
            border: '1px solid #f2ec76',
            '&:hover': {
              backgroundColor: '#003720',
              color: '#fff',
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={nextTestimonial}
          sx={{
            color: '#f2ec76',
            border: '1px solid #f2ec76',
            '&:hover': {
              backgroundColor: '#003720',
              color: '#fff',
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Stack>
    </Box>
  </Box>
</Box>

    );
}
