"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout success!");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1>Profile</h1>
      <hr />
      <p>Welcome to your profile page!</p>
      <button
        className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-2xl m-2"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
