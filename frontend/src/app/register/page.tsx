"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import config from "@/config";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
    const response = await fetch(`${config.apiUrl}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (data.status === "OK") {
      router.push("/login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl">Register</h1>
      <form onSubmit={registerUser} className="border p-4 rounded-md">
        <input className="border p-2 m-2 w-full" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input className="border p-2 m-2 w-full" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input className="border p-2 m-2 w-full" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Register</button>
      </form>
    </div>
  );
}
