import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import {ProjectsSection} from "@/sections/Projects"
import {TapeSection} from "@/sections/Tape"
import { FutureGoals } from "@/sections/FutureGoals";
import { AboutSection } from "@/sections/About";


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      <FutureGoals/>
      <AboutSection/>
    </div>
  );
}
