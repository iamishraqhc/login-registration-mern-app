"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";

export default function Welcome() {
  const router = useRouter();
  const [user, setUser] = useState<{ name?: string }>({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const authUser = jwt.decode(token) as { name?: string };
      if (!authUser) {
        localStorage.removeItem("token");
        router.replace("/login");
      } else {
        setUser(authUser);
      }
    } else {
      alert("Please Login");
      router.replace("/login");
    }
  }, []);

  const logoutUser = () => {
    alert("Logged Out");
    localStorage.removeItem("token");
    router.replace("/login");
  };

  return (
    <div>
      <h1>Welcome inside</h1>
      <h3>{user.name}</h3>
      <button onClick={logoutUser} className="bg-red-500 text-white px-4 py-2 rounded-md">Logout</button>
    </div>
  );
}
