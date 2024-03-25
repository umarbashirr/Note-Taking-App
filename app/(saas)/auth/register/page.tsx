import Logo from "@/components/Logo";
import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <Logo />
      </div>
      <div className="mt-5 border rounded-lg w-full max-w-[480px] py-6 px-5 mx-auto">
        <div className="mb-5">
          <h1 className="text-xl font-semibold mb-2">Create your account</h1>
          <p className="text-sm text-gray-700">
            Join our team now and start taking notes
          </p>
        </div>
        <RegisterForm />
        <div className="mt-4">
          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link className="text-indigo-600" href="/auth/login">
              Login now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
