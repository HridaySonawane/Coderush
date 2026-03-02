import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Community/Hero";
import OurTeam from "@/components/Teams/OurTeam";
import React from "react";
import Inside from "@/components/Community/Inside";

const page = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-start px-16 bg-background font-sans dark:bg-black gap-16">
      <Navbar />
      <Hero />
      <Inside />
      <CTA />
      <Footer />
    </div>
  );
};

export default page;
