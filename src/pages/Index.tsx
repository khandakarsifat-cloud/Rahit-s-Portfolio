import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-10 text-center border-t border-border/50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <p className="text-sm text-muted-foreground">
          © 2024 <span className="gradient-text font-medium">Al Rahit</span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
