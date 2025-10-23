"use client";
import { useState } from "react";
import Link from "next/link";
import { signupUser } from "@/services/authServices";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  const router = useRouter();

  // Inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Messages
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Independent loading states
  const [loadingCredentials, setLoadingCredentials] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingGitHub, setLoadingGitHub] = useState(false);

  // Credentials signup
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingCredentials(true);
    setMessage("");
    setError("");

    try {
      const res = await signupUser({ name, email, password });
      console.log("✅ Signup Success:", res);
      setMessage("Signed up successfully!");
      router.push("/login");
    } catch (err: any) {
      console.error("❌ Signup Failed:", err);
      setError(
        err.response?.data?.message || "Failed to sign up. Please try again."
      );
    } finally {
      setLoadingCredentials(false);
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    setLoadingGoogle(true);
    await signIn("google", { callbackUrl: "/" });
    setLoadingGoogle(false);
  };

  // GitHub login
  const handleGitHubLogin = async () => {
    setLoadingGitHub(true);
    await signIn("github", { callbackUrl: "/" });
    setLoadingGitHub(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-green-600 to-emerald-700 text-white items-center justify-center p-12">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Join Us Today 🚀</h1>
          <p className="text-lg opacity-90">
            Create your account and unlock all premium features instantly.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Create Account
          </h2>

          {/* Messages */}
          {message && (
            <p className="text-green-600 bg-green-50 border border-green-200 rounded-lg p-3 mb-4 text-center text-sm font-medium">
              {message}
            </p>
          )}
          {error && (
            <p className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 mb-4 text-center text-sm font-medium">
              {error}
            </p>
          )}

          <form noValidate onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400 text-gray-700"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400 text-gray-700"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400 text-gray-700"
                required
              />
            </div>

            {/* Google Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loadingGoogle}
              className="flex items-center justify-center gap-3 w-full bg-white border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 cursor-pointer"
            >
              <FcGoogle size={24} />
              {loadingGoogle ? "Signing in..." : "Continue with Google"}
            </button>

            {/* GitHub Button */}
            <button
              type="button"
              onClick={handleGitHubLogin}
              disabled={loadingGitHub}
              className="flex items-center justify-center gap-3 w-full bg-black text-white font-medium px-6 py-3 rounded-xl shadow-md hover:bg-gray-900 transition-all duration-200 disabled:opacity-50 cursor-pointer"
            >
              <FiGithub size={24} />
              {loadingGitHub ? "Signing in..." : "Continue with GitHub"}
            </button>

            {/* Submit */}
            <button
              type="submit"
              disabled={loadingCredentials}
              className={`w-full ${
                loadingCredentials
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              } text-white font-semibold py-3 rounded-lg transition-all duration-200 cursor-pointer`}
            >
              {loadingCredentials ? "Signing Up..." : "Sign Up"}
            </button>

            {/* Login Link */}
            <p className="text-center text-sm mt-4 text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-green-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
