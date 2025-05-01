"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { setuid } from "process";

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
    Email: "",
  });

  const OnSignUp = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1>SignUp</h1>
      <br />
      <label htmlFor="username">UserName:</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
        type="text"
        id="username"
        placeholder="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label htmlFor="Email">UserName:</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
        type="text"
        id="Email"
        placeholder="Email"
        value={user.Email}
        onChange={(e) => setUser({ ...user, Email: e.target.value })}
      />
      <label htmlFor="password">UserName:</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
        type="password"
        id="password"
        placeholder="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        onClick={OnSignUp}
        className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        SignUp
      </button>
      <Link href="/login" className="text-blue-500 hover:underline py-2">
        Visit Login page here
      </Link>
    </div>
  );
}
