import Logo from "@/components/Logo";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div className="h-20 flex items-center justify-start w-full border-b">
        <div className="container mx-auto px-5 w-full h-full">
          <div className="flex items-center justify-between h-full">
            <Logo />
            <nav className="navbar flex items-center space-x-4">
              <Link
                href="/"
                className="hover:text-indigo-700 duration-200 ease-in-out transition-all"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-indigo-700 duration-200 ease-in-out transition-all"
              >
                About
              </Link>
              <Link
                href="/blogs"
                className="hover:text-indigo-700 duration-200 ease-in-out transition-all"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="hover:text-indigo-700 duration-200 ease-in-out transition-all"
              >
                Contact
              </Link>
            </nav>
            <div className="btns-container flex items-center space-x-4">
              <Link href="/auth/login">Login</Link>
              <Link
                href="/auth/register"
                className="bg-indigo-600 text-indigo-100 py-2 px-6 rounded-md shadow-md hover:bg-indigo-700 duration-200 ease-in-out transition-all"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
