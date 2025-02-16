"use client"; // Required for using React hooks

import { useState } from "react";
import { useRouter } from "next/navigation";
import config from "@/config"; // Import config.ts

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(`${config.apiUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
    } catch (error) {
      alert("Connection error. Please try again later.");
      return;
    }

    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      router.push("/welcome");
    } else {
      alert("Wrong credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl">Login</h1>
      <form onSubmit={loginUser} className="border p-4 rounded-md">
        <input className="border p-2 m-2 w-full" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input className="border p-2 m-2 w-full" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md w-full">Login</button>
      </form>
    </div>
  );
}
