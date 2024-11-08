interface ProjectProps {
  children: React.ReactNode;
  alt: string;
  img: string;
  link: string;
}

const ProjectsCards = ({ children, img, alt, link }: ProjectProps) => {
  return (
    <div className="border-borderColor border-[1px] rounded-lg">
      <div className="m-[1.2rem] h-[300px] rounded-md ">
        <div className="w-full">
          <a href={link} target="_blank">
            <img
              src={img}
              alt={alt}
              className="rounded-[5px] object-contain hover:scale-105 [transition:all_0.2s_ease-in-out]"
            />
          </a>
        </div>
        <div className="flex justify-between gap-4 items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
