const Techstack = () => {
  return (
    <div className="pt-[3rem] font-[400] mb-[10rem] select-none">
      <div className="grid grid-cols-4 gap-[20px] justify-center">
        {/* Typescript */}
        <div className="aspect-square py-[15px] rounded hover:bg-slate-600">
          <img
            className="w-12 h-12 block "
            src="/techstack_imgs/typescript (1).svg"
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
            src="/techstack_imgs/nextjs_icon_dark.svg "
            alt="Next.js"
          />
          <div className="pt-5">Next.js</div>
        </div>

    
      </div>
    </div>
  );
};

export default Techstack;
