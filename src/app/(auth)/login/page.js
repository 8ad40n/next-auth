"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <div className="">
      <form onSubmit={handleLogin} className="mt-20">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <Input
          className="w-1/3 mx-auto mb-4"
          type="email"
          name="email"
          placeholder="Enter email"
        ></Input>
        <Input
          className="w-1/3 mx-auto mb-4"
          type="password"
          name="password"
          placeholder="Enter password"
        ></Input>
        <Button className="w-1/3">Login</Button>
      </form>

      <div className="flex flex-col gap-2 mt-4">
        <Button className="w-1/3 mx-auto">
          <div className="flex justify-center items-center gap-2">
            <FaGoogle />
            <p>Login with google</p>
          </div>
        </Button>
        <Button className="w-1/3 mx-auto">
          <div className="flex justify-center items-center gap-2">
            <FaGithub />
            <p>Login with github</p>
          </div>
        </Button>
      </div>
    </div>
  );
}
