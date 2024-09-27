"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/register", { name, email, password });
      router.push("/auth/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button
          className="btn bg-main hover:border-2 hover:border-main hover:text-black text-white"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
