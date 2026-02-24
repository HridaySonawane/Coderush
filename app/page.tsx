import Footer from "@/components/Footer";
import About from "@/components/Landing/About";
import Hero from "@/components/Landing/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-start px-16 bg-background font-sans dark:bg-black">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
