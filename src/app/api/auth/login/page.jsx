"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.ok) {
      toast.success("You have successfully logged in here!");
      router.push("/admin");
    } else {
      toast.error("Invalid credential!");
      console.error(result.error);
    }
  };

  return (
    <div>
      <Toaster />
      <div className="flex justify-center">
        <div className="bg-base-100 shadow-xl md:mx-0 mx-5 p-10 rounded-md w-96">
          <h1 className="text-main text-4xl my-5 uppercase text-center">
            Login Here
          </h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
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
                placeholder="Type Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <div className="flex justify-between">
              <h1>
                Don&apos;t have an account?{" "}
                <Link
                  className="text-main link-hover"
                  href={"/admin/register"}
                >
                  Register Now
                </Link>
              </h1>
              <button
                className="btn bg-main hover:border-2 hover:border-main hover:bg-transparent hover:text-black text-white"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
