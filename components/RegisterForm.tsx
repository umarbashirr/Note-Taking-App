"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const nameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);

  const submitForm = async (data: UserModel) => {
    const response = await fetch("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      fullName: nameRef.current.value || "",
      email: emailRef?.current?.value || "",
      password: passwordRef?.current?.value || "",
    };
    try {
      const formResponse = await submitForm(data);
      if (formResponse.success) {
        toast.success("User created successfully!");
      } else {
        throw new Error(formResponse.message);
      }
      setIsLoading(false);
      resetFormValues();
    } catch (error: any) {
      setIsLoading(false);
      console.error(error.message);
      toast.error(error.message);
    }
  };

  function resetFormValues() {
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <form className="flex flex-col space-y-4" onSubmit={submitHandler}>
      <div className="flex flex-col items-start">
        <label htmlFor="name" className="mb-1">
          Full Name
        </label>
        <input
          ref={nameRef}
          type="text"
          placeholder="Enter your name"
          autoFocus
          id="name"
          className="border w-full rounded-md p-2 focus:outline-0 focus:border-gray-800 disabled:bg-gray-100"
          disabled={isLoading}
        />
      </div>
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
          disabled={isLoading}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
