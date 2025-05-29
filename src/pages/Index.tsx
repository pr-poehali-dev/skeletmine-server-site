import HeroSection from "@/components/sections/HeroSection";
import ServerStats from "@/components/sections/ServerStats";
import ServerFeatures from "@/components/sections/ServerFeatures";
import NewsSection from "@/components/sections/NewsSection";
import FooterCTA from "@/components/sections/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <HeroSection />
      <ServerStats />
      <ServerFeatures />
      <NewsSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
