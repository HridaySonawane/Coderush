import Footer from "@/components/Footer";
import About from "@/components/Landing/About";
import CTA from "@/components/Landing/CTA";
import Hero from "@/components/Landing/Hero";
import Mission from "@/components/Landing/Mission";
import Timeline from "@/components/Landing/Timeline";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-start px-16 bg-background font-sans dark:bg-black gap-16">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Timeline />
      <CTA />
      <Footer />
    </div>
  );
}
