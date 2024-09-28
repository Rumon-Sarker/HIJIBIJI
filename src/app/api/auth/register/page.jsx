"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/register", { name, email, password });
      router.push("/api/auth/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-base-100 shadow-xl md:mx-0 mx-5 p-10 rounded-md w-96">
          <h1 className="text-main text-4xl my-5 uppercase text-center">
            Register Here
          </h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <label className="form-control w-full max-w-xs">
              <span className="label-text">Name</span>
              <input
                className="input input-bordered"
                type="text"
                placeholder="Type Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <span className="label-text">Email</span>
              <input
                className="input input-bordered"
                type="email"
                placeholder="Type Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <span className="label-text">Password</span>
              <input
                className="input input-bordered"
                type="password"
                placeholder="Create a strong Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <div className="flex justify-between">
              <h1>
                Already have an account?{" "}
                <Link className="text-main link-hover" href={"/api/auth/login"}>
                  Login Now
                </Link>
              </h1>
              <button
                className="btn bg-main hover:border-2 hover:border-main hover:bg-transparent hover:text-black text-white"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
