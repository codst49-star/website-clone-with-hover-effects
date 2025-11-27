import AnnouncementBanner from "@/components/sections/announcement-banner";
import HeaderNavigation from "@/components/sections/header-navigation";
import HeroSection from "@/components/sections/hero-section";
import FeaturedToolsTabs from "@/components/sections/featured-tools-tabs";
import AiToolsGrid from "@/components/sections/ai-tools-grid";
import JustLaunchedSection from "@/components/sections/just-launched-section";
import FeaturedNewsSection from "@/components/sections/featured-news-section";
import ToolkitsSection from "@/components/sections/toolkits-section";
import GuideSection from "@/components/sections/guide-section";
import ComparisonSection from "@/components/sections/comparison-section";
import ShowcaseSection from "@/components/sections/showcase-section";
import AboutDirectorySection from "@/components/sections/about-directory-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <HeaderNavigation />
      
      <div className="w-full">
        <HeroSection />
        
        <section className="py-10 bg-background">
          <FeaturedToolsTabs />
          <div className="px-10 max-lg:px-4 mt-8">
            <AiToolsGrid />
          </div>
        </section>
        
        <JustLaunchedSection />
        <FeaturedNewsSection />
        <ToolkitsSection />
        <GuideSection />
        <ComparisonSection />
        <ShowcaseSection />
        <AboutDirectorySection />
        <TestimonialsSection />
      </div>
      
      <Footer />
    </main>
  );
}