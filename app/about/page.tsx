import CTA from "@/components/CTA";
import Difference from "@/components/About/Difference";
import Hero from "@/components/About/Hero";
import Numbers from "@/components/About/Numbers";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-start px-16 bg-background font-sans dark:bg-black gap-16">
      <Navbar />
      <Hero />
      <Difference />
      <Numbers />
      <CTA />
      <Footer />
    </div>
  );
};

export default page;
