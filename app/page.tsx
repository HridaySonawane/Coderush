import Hero from "@/components/Landing/Hero";
import Navbar from "@/components/Landing/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-start px-16 bg-background font-sans dark:bg-black">
      <Navbar />
      <Hero />
    </div>
  );
}
