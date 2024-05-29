"use client"

"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

interface AdminLoginData {
  email: string;
  password: string;
}

const AdminLoginModal = () => {
  const [data, setData] = useState<AdminLoginData>({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onToggle = () => {
    router.push('/auth/register');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/login-admin', data);
      if (response.data.error === false) {
        toast.success('Admin login successful!');
        // Redirect to the admin dashboard or desired page after successful login
        router.push('/admin-dashboard');
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen w-full flex justify-center items-center bg-pink-100">
      <div className="flex flex-col w-[400px] border rounded-xl bg-white">
        <div className="flex flex-col p-6 space-y-1">
          <h3 className="font-semibold tracking-tight text-xl">Admin Masuk</h3>
          <p className="text-sm text-zinc-500">
            Masukkan kredensial admin Anda untuk masuk.
          </p>
        </div>
        <form className="p-6 pt-0 grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label htmlFor="email" className="block text-sm font-medium leading-none text-zinc-950">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="admin@example.com"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-sky-600"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="block text-sm font-medium leading-none text-zinc-950">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-sky-600"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-sm font-semibold text-white bg-sky-500 rounded-md hover:bg-sky-400"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Masuk'}
          </button>
        </form>
        <div className="p-6 pt-0 grid gap-4">
          <div className="flex gap-1">
            <p className="text-sm text-zinc-500">
              Bukan admin? 
            </p>
            <p onClick={onToggle} className="text-sm text-sky-500 hover:underline cursor-pointer">
              Daftar sebagai pengguna
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginModal;
