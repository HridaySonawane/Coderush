import Footer from "@/components/Footer";
import Hero from "@/components/Landing/Hero";
import Navbar from "@/components/Landing/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
