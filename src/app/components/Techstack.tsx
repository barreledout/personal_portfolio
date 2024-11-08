import { PageWrapper } from "./FramerMotion/PageWrapper";

const Techstack = () => {
  return (
    <div className="pt-[3rem] font-[400] mb-[10rem] select-none">
      <PageWrapper delayAmt={.4}>
        <h1 className="text-[2em] font-[400] py-5">Current Tech Stack</h1>
        <div className="grid grid-cols-4 gap-[20px] justify-center">
          {/* Typescript */}
          <div className="aspect-square py-[15px] rounded hover:bg-slate-600">
            <img
              className="w-12 h-12 block "
              src="/techstack_imgs/typescript.svg"
              alt="Typescript"
            />
            <div className="pt-5 ">Typescript</div>

            {/* React */}
          </div>
          <div className="aspect-square py-[15px] rounded hover:bg-slate-600">
            <img
              className="w-12 h-12 block "
              src="/techstack_imgs/react.svg "
              alt="React"
            />
            <div className="pt-5">React</div>
          </div>

          {/* Tailwind CSS */}
          <div className="aspect-square py-[15px] rounded hover:bg-slate-600">
            <img
              className="w-12 h-12 block "
              src="/techstack_imgs/tailwindcss.svg "
              alt="Tailwind CSS"
            />
            <div className="pt-5">Tailwind CSS</div>
          </div>

          {/* Next.js */}
          <div className="aspect-square py-[15px] rounded hover:bg-slate-600">
            <img
              className="w-12 h-12 block "
              src="/techstack_imgs/nextjs.svg "
              alt="Next.js"
            />
            <div className="pt-5">Next.js</div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Techstack;
