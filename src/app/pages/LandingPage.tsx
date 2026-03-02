import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { FeatureTabs } from "../components/FeatureTabs";
import { ShareableCarousel } from "../components/ShareableCarousel";
import { ROICalculator } from "../components/ROICalculator";
import { SecurityBlock } from "../components/SecurityBlock";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="bg-[#F5EDE4] min-h-screen font-sans selection:bg-[#FF6B00] selection:text-white">
      <Header />
      <main>
        <Hero />
        <FeatureTabs />
        <ShareableCarousel />
        <ROICalculator />
        <SecurityBlock />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
