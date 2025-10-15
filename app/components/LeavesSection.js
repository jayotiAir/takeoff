"use client";

import { Box, keyframes } from "@mui/material";
import Image from "next/image";

// 🍃 Shared swing animation
const swingSkewRotate = keyframes`
  0% { transform: skew(-5deg, 0deg) rotate(1deg); }
  50% { transform: skew(-5deg, 0deg) rotate(-1.5deg); }
  100% { transform: skew(-5deg, 0deg) rotate(1deg); }
`;

// ✨ Fade in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;



export default function HeroSectionWithLeaves() {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "40rem", sm: "50rem", md: "60rem" },
        backgroundColor: "#000",
        overflow: "hidden", // allow leaves to overflow visually
      }}
    >
      {/* 🌿 Top Left Leaf */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-10px", md: "-11px" },
          left: { xs: "-100px", md: "-200px" },
          width: { xs: "60vw", md: "40vw" },
          transformOrigin: "bottom center",
          animation: `${swingSkewRotate} 7s ease-in-out infinite`,
          zIndex: 1,
        }}
      >
        <Image
          src="/images/leaves_Top_Left.svg"
          alt="Top Left Leaf"
          width={800}
          height={600}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Box>

    {/* 🌿 Top Right Leaf */}
<Box
  sx={{
    position: "absolute",
    top: { xs: "-9px", md: "-9px" },
    right: { xs: "-100px", md: "-200px" },
    width: { xs: "60vw", md: "50vw" },
    transformOrigin: "bottom center",
    animation: `${swingSkewRotate} 6.5s ease-in-out infinite`,
    animationDelay: "1.5s",
    zIndex: 0, // Put leaf behind the header content,
     overflow: "hidden", 
  }}
>
  <Image
    src="/images/leafs-home-right-top.svg"
    alt="Top Right Leaf"
    width={800}
    height={600}
    style={{ width: "100%", height: "auto", display: "block" }}
  />
</Box>

{/* 🟡 Center Content (Logo + Divider + Text) */}
<Box
  sx={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",
    justifyContent: "center",
    gap: { xs: 2, sm: 4, md: 8 },
    zIndex: 10, // Header content on top
    color: "white",
    textAlign: { xs: "center", sm: "left" },
    px: { xs: 4, sm: 6, md: 8 },  // Add padding to avoid leaf overlap
    width: "100%",
  }}
>
  {/* Logo, Divider, Heading */}
</Box>


      {/* 🌿 Bottom Left Leaf */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "-80px", md: "-120px" },
          left: { xs: "-80px", md: "-200px" },
          width: { xs: "60vw", md: "50vw" },
          transformOrigin: "bottom center",
          animation: `${swingSkewRotate} 5s ease-in-out infinite`,
          zIndex: 10,
           overflow: "visible", 
        }}
      >
        <Image
          src="/images/leafs-home-left-bottom.svg"
          alt="Bottom Left Leaf"
          width={800}
          height={600}
          style={{ width: "100%", height: "auto", display: "block", overflow: "visible",  }}
        />
      </Box>

      {/* 🌿 Bottom Right Leaf */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "-80px", md: "-120px" },
          right: { xs: "-80px", md: "-200px" },
          width: { xs: "60vw", md: "50vw" },
          transformOrigin: "bottom center",
          animation: `${swingSkewRotate} 5s ease-in-out infinite`,
          animationDelay: "2s",
          zIndex: 1,
        }}
      >
        <Image
          src="/images/leafs-home-right-bottom.svg"
          alt="Bottom Right Leaf"
          width={800}
          height={600}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Box>

      {/* 🎯 Center Content (Logo + Divider + Text) */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, sm: 4, md: 8 },
          zIndex: 10,
          color: "white",
          textAlign: { xs: "center", sm: "left" },
          px: 2,
          width: "100%",
          
        }}
      >
        {/* 🟡 Logo */}
        <Box
          sx={{
            maxWidth: { xs: "120px", sm: "160px", md: "250px" },
            width: "100%",


          }}
        >
          <Image
            src="/images/TakeOff-Monkey-Logo-Yellow.svg"
            alt="TakeOff Monkey Logo"
            width={400}
            height={400}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>

        {/* 🟡 Divider */}
        <Box
          sx={{
            width: { xs: "60px", sm: "4px" },
            height: { xs: "2px", sm: "80px", md: "90px" },
            backgroundColor: "white",
          }}
        />

        {/* 🟡 Heading */}
        <Box
          component="h1"
          sx={{
            maxWidth: { xs: "140px", sm: "180px", md: "250px" },
            fontSize: { xs: "1.5rem", sm: "2rem", md: "3.5rem" },
            fontWeight: 600,
            lineHeight: 1.2,
            fontFamily: "inherit",
            width: "100%",
          }}
          className="bde-heading-2-215 bde-heading is-animated"
          data-entrance="fade"
        >
          Estimating<br />
          Magic.
        </Box>
      </Box>
    </Box>
  );
}
