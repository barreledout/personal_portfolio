import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import Techstack from "./components/Technologies_section/Techstack";

export default function Home() {
  return (
    <div className={`max-w-[450px] flex flex-col gap-20 sm:max-w-full`}>
      <Hero />
      <Techstack />
      <Projects />
    </div>
  );
}
