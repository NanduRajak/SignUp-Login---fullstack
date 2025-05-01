"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { setuid } from "process";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const OnLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1>Login</h1>
      <hr />
      <label htmlFor="email">Email:</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
        type="text"
        id="email"
        placeholder="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <label htmlFor="password">Password:</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
        type="password"
        id="password"
        placeholder="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        onClick={OnLogin}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
      >
        Login
      </button>
    </div>
  );
}
