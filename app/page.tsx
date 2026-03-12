import BackgroundMotion from "@/components/background/BackgroundMotion";
import HeroSection from "@/components/ui/HeroSection";
import SkillsSection from "@/components/ui/SkillsSection";
import Timeline from "@/components/ui/Timeline";
import ProjectsSection from "@/components/ui/ProjectsSection";
import SummerTrainingSection from "@/components/ui/SummerTrainingSection";
import CertificationsSection from "@/components/ui/CertificationsSection";
import AchievementsSection from "@/components/ui/AchievementsSection";

import ContactSection from "@/components/ui/ContactSection";
import CodingProfile from "@/components/dashboard/CodingProfile";
import ServerStatus from "@/components/mern/ServerStatus";
import ArchitectureDiagram from "@/components/mern/ArchitectureDiagram";
import LiveStats from "@/components/mern/LiveStats";
import TerminalLogs from "@/components/mern/TerminalLogs";
import ApiPlayground from "@/components/mern/ApiPlayground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundMotion />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <SummerTrainingSection />
      <CertificationsSection />
      <AchievementsSection />
      <Timeline />
      
      <CodingProfile />
      <LiveStats />
      <ArchitectureDiagram />
      <TerminalLogs />
      <ApiPlayground />
      <ContactSection />
      <ServerStatus />
    </main>
  );
}
