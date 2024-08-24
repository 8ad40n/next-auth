"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SignUp() {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const newUser = {email, password};
    console.log(newUser);

    axios.post("http://localhost:3000/signup/api", newUser)
    .then(res =>{
      console.log("User created Successfully!", res.data);
      if(res.data.data.insertedId)
      {
        e.target.reset();
      }
    })
    .catch(err => {
      console.error("Error creating user!", err);
    });
  };

  return (
    <div className="">
      <form onSubmit={handleLogin} className="mt-20">
        <h1 className="text-2xl font-bold mb-6">SignUp</h1>
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
        <Button className="w-1/3">SignUp</Button>
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
