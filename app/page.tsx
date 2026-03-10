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
    <div className="
      flex flex-col
      w-full min-h-screen
      bg-background dark:bg-black
      px-4 sm:px-6 md:px-10 lg:px-16
    ">
      <div className="
        w-full
        flex flex-col
        gap-12 md:gap-16
        lg:max-w-7xl lg:mx-auto
      ">
        <Navbar />
        <Hero />
        <About />
        <Mission />
        <Timeline />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}