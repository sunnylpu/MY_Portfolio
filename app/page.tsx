import BackgroundMotion from "@/components/background/BackgroundMotion";
import HeroSection from "@/components/ui/HeroSection";
import SkillsSection from "@/components/ui/SkillsSection";
import Timeline from "@/components/ui/Timeline";
import ProjectsSection from "@/components/ui/ProjectsSection";
import ContactSection from "@/components/ui/ContactSection";
import ServerStatus from "@/components/mern/ServerStatus";
import ArchitectureDiagram from "@/components/mern/ArchitectureDiagram";
import LiveStats from "@/components/mern/LiveStats";
import TerminalLogs from "@/components/mern/TerminalLogs";
import ApiPlayground from "@/components/mern/ApiPlayground";
import AchievementsSection from "@/components/ui/AchievementsSection";
import CodingProfile from "@/components/dashboard/CodingProfile";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundMotion />
      <HeroSection />
      <SkillsSection />
      <Timeline />
      <CodingProfile />
      <AchievementsSection />
      <LiveStats />
      <ArchitectureDiagram />
      <TerminalLogs />
      <ProjectsSection />
      <ApiPlayground />
      <ContactSection />
      <ServerStatus />
    </main>
  );
}
