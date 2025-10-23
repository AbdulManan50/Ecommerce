"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";

export default function LoginPage() {
  const router = useRouter();

  // Inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Messages
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Independent loading states
  const [loadingCredentials, setLoadingCredentials] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingGitHub, setLoadingGitHub] = useState(false);

  // Credentials login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingCredentials(true);
    setMessage("");
    setError("");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("Invalid credentials. Please try again.");
        setLoadingCredentials(false);
        return;
      }

      setMessage("Logged in successfully!");
      router.push("/");
    } catch (err) {
      console.error("❌ Login Failed:", err);
      setError("Something went wrong. Please try again.");
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
      {/* Left side */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white items-center justify-center p-12">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome Back 👋</h1>
          <p className="text-lg opacity-90">
            Login to your account and continue exploring our amazing platform.
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Login
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

          <form noValidate onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-gray-700"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-gray-700"
                required
              />
            </div>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loadingGoogle}
              className="flex items-center justify-center gap-3 w-full bg-white border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 cursor-pointer"
            >
              <FcGoogle size={24} />
              {loadingGoogle ? "Signing in..." : "Continue with Google"}
            </button>

            {/* GitHub Login */}
            <button
              type="button"
              onClick={handleGitHubLogin}
              disabled={loadingGitHub}
              className="flex items-center justify-center gap-3 w-full bg-black text-white font-medium px-6 py-3 rounded-xl shadow-md hover:bg-gray-900 transition-all duration-200 disabled:opacity-50 cursor-pointer"
            >
              <FiGithub size={24} />
              {loadingGitHub ? "Signing in..." : "Continue with GitHub"}
            </button>

            {/* Credentials Login */}
            <button
              type="submit"
              disabled={loadingCredentials}
              className={`w-full ${
                loadingCredentials
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white font-semibold py-3 rounded-lg transition-all duration-200 cursor-pointer`}
            >
              {loadingCredentials ? "Signing In..." : "Sign In"}
            </button>

            {/* Signup link */}
            <p className="text-center text-sm mt-4 text-gray-600">
              Don’t have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
