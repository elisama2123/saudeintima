import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import EbookOffer from "@/components/EbookOffer";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import LearningOutcomes from "@/components/LearningOutcomes";

const Index = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#6b0d5e] to-fuchsia-900 text-white flex flex-col">
    <Header />
    <main className="container mx-auto flex-grow flex flex-col items-center justify-center text-center">
      <Hero />
      <Features />
      <LearningOutcomes />
      <Testimonials />
      <EbookOffer />
    </main>
    <Footer />
  </div>
);

export default Index;
