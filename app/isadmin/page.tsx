"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

interface RegisterData {
  name: string;
  email: string;
  password: string;
  age: number;
}

const AdminRegisterModal = () => {
  const [data, setData] = useState<RegisterData>({ name: "", email: "", password: "", age: 0 });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onToggle = () => {
    router.push('admin');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/register-admin', data);
      if (response.data.error === false) {
        toast.success('Admin registration successful!');
        // Redirect to the admin login page after successful registration
console.log(response)
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
          <h3 className="font-semibold tracking-tight text-xl">Daftar Admin</h3>
          <p className="text-sm text-zinc-500">
            Masukkan detail admin untuk mendaftar.
          </p>
        </div>
        <form className="p-6 pt-0 grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label htmlFor="name" className="block text-sm font-medium leading-none text-zinc-950">
              Nama
            </label>
            <input
              type="text"
              id="name"
              placeholder="Nama Admin"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-sky-600"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
            />
          </div>
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
          <div className="grid gap-2">
            <label htmlFor="age" className="block text-sm font-medium leading-none text-zinc-950">
              Usia
            </label>
            <input
              type="number"
              id="age"
              placeholder="Usia"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-sky-600"
              value={data.age}
              onChange={(e) => setData({ ...data, age: +e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-sm font-semibold text-white bg-sky-500 rounded-md hover:bg-sky-400"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Daftar'}
          </button>
        </form>
        <div className="p-6 pt-0 grid gap-4">
          <div className="flex gap-1">
            <p className="text-sm text-zinc-500">
              Sudah punya akun admin?
            </p>
            <p onClick={onToggle} className="text-sm text-sky-500 hover:underline cursor-pointer">
              Masuk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegisterModal;
