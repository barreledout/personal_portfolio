interface H1Props {
  children: string;
}

export const H1 = ({ children }: H1Props) => {
  return (
  <p className="text-[1.5em] font-[200] text-left py-4">{children}</p>
);
};
