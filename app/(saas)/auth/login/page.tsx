import LoginForm from "@/components/LoginForm";
import Logo from "@/components/Logo";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <Logo />
      </div>
      <div className="mt-5 border rounded-lg w-full max-w-[480px] py-6 px-5 mx-auto">
        <div className="mb-5">
          <h1 className="text-xl font-medium mb-2">Login to your account</h1>
          <p className="text-sm text-gray-700">
            Welcome Back! We are happy to see you again
          </p>
        </div>
        <LoginForm />
        <div className="mt-4">
          <p className="text-sm text-center">
            Don&lsquo;t have an account?{" "}
            <Link className="text-indigo-600" href="/auth/register">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
