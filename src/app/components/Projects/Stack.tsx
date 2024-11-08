interface StackProps {
  stack: string[];
}

const Stack = ({ stack }: StackProps) => {
  return (
    <ul className="flex">
      {stack.map((img, index) => (
        <li key={index}>
          <img src={`/techstack_imgs/${img}.svg`} alt={img} className="h-8 block rounded-sm "/>
        </li>
      ))}
    </ul>
  );
};

export default Stack;
