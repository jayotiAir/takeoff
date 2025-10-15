import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import LeavesSection from "./components/LeavesSection";
import MainContent from "./components/MainContent";
import { Box } from "@mui/material";
import VideoSection from "./components/VideoSection";
import DetailSection from "./components/DetailSection";
import ConfidentialitySection from "./components/ConfidentialitySection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <LeavesSection />

      <MainContent />

      <VideoSection />
      <DetailSection />
   <ConfidentialitySection/>
   <Testimonials/>
<Footer/>
    </>
  );
}
