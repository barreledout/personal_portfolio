import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import Techstack from "./components/Techstack";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex flex-col justify-center text-center mt-[2rem]">
        <Techstack />
      </div>
      <Projects />
      <div>hello</div>
    </div>
  );
}
