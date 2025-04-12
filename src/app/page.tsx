import Head from "next/head";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import '@fontsource/sora/300.css';  // Light
import '@fontsource/sora/400.css';  // Regular
import '@fontsource/sora/500.css';  // Medium
import '@fontsource/sora/600.css';  // SemiBold
import '@fontsource/sora/700.css';  // Bold
import ProjectsSection from "@/components/ProjectsSection";


export default function Home() {
  return (
    <>
      <Head>
        <title>David - Creative Developer</title>
        <meta name="description" content="Personal portfolio of David, a creative frontend developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection/>
        {/* Add other sections here */}
      </main>
      
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} David. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}