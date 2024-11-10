import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import Techstack from "./components/Techstack";

export default function Home() {
  return (
    <div className={`w-[650px] `}>
      <Hero />
      <Techstack />
      <Projects />
    </div>
  );
}
