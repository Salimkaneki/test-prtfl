import Image from "next/image";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/HeroSection";
import '@fontsource/sora/300.css';  // Light
import '@fontsource/sora/400.css';  // Regular
import '@fontsource/sora/500.css';  // Medium
import '@fontsource/sora/600.css';  // SemiBold
import '@fontsource/sora/700.css';  // Bold

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}

