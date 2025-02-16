import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <div className="mt-4">
        <Link href="/login">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md m-2">Login</button>
        </Link>
        <Link href="/register">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md m-2">Register</button>
        </Link>
      </div>
    </div>
  );
}
