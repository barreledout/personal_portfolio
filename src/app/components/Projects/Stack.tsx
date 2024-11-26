import { cn } from "@/lib/utils";

interface StackProps {
  stack: [string, string, string?, string?][];
  LiClassName?: string;
  DivClassName?: string;
}

const Stack = ({ stack, LiClassName, DivClassName }: StackProps) => {
  return (
    <ul className="flex relative w-full">
      {stack.map(([lang, rotation, translate, left], index) => (
        <li
          className={cn(
            `w-11 rounded-sm absolute top-0 left-${left} rotate-${rotation} group-hover:rotate-0 group-hover:translate-x-[${translate}] [transition:all_0.1s_ease-in-out]`,
            LiClassName
          )}
          key={index}
        >
          <div
            className={cn(
              `"w-10 h-10 p-[5px] bg-red-200/20 rounded-lg`,
              DivClassName
            )}
          >
            <img
              src={`/techstack_imgs/${lang}.svg`}
              alt={lang}
              className="w-full h-full"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Stack;
