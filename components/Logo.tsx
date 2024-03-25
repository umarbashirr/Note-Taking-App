import { NotebookPen } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="uppercase text-xl font-bold flex items-center gap-2"
    >
      <NotebookPen className="text-indigo-600" />
      <p className="text-indigo-600">Write It.</p>
    </Link>
  );
};

export default Logo;
