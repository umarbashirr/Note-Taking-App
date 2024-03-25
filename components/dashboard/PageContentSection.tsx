import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const PageContentSection = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <section
      id="main"
      className={twMerge(
        "bg-white rounded-3xl p-6 mr-6 h-full min-h-[calc(100vh-80px)]",
        className
      )}
    >
      {children}
    </section>
  );
};

export default PageContentSection;
