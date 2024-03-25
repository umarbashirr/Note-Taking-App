"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const router = useRouter();

  const submitForm = async (data: UserModel) => {
    const response = await fetch("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      credentials: "include",
    });
    const result = await response.json();
    return result;
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      email: emailRef?.current?.value || "",
      password: passwordRef?.current?.value || "",
    };
    try {
      const formResponse = await submitForm(data);
      if (formResponse.success) {
        toast.success(formResponse.message);
        resetFormValues();
        router.replace("/dashboard/overview");
      } else {
        throw new Error(formResponse.message);
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  function resetFormValues() {
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <form className="flex flex-col space-y-4" onSubmit={submitHandler}>
      <div className="flex flex-col items-start">
        <label htmlFor="email" className="mb-1">
          Email
        </label>
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter your email"
          id="email"
          className="border w-full rounded-md p-2 focus:outline-0 focus:border-gray-800 disabled:bg-gray-100"
          disabled={isLoading}
        />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="password" className="mb-1">
          Password
        </label>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter your password"
          id="password"
          className="border w-full rounded-md p-2 focus:outline-0 focus:border-gray-800 disabled:bg-gray-100"
          disabled={isLoading}
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-indigo-600 text-indigo-100 w-full py-2 rounded-md shadow-md"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
