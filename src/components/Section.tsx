import type { ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
};

function Section({ id, children, className = "" }: Props) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 w-full">{children}</div>
    </section>
  );
}

export default Section;
