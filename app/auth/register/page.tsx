"use client"

import React, { useCallback, useState, FormEvent  } from 'react';
import { toast } from "react-hot-toast";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import { useRouter } from 'next/navigation';


interface RegisterData {
  name: string;
  email: string;
  password: string;
}


const Register = () => {
  const [data, setData] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
  });

  const router = useRouter()

  const registerUser = async (e: FormEvent) => {
 
    // const { name, email, password } = data;
    // try {
    //   const response = await axios.post('/register', {
    //     name, email, password
    //   });
    //   if (response.data.error) {
    //     toast.error(response.data.error);
    //   } else {
    //     setData({
    //       name: '',
    //       email: '',
    //       password: '',
    //     });
    //     toast.success('Login Successful');
   
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.error('An error occurred while registering.');
    // }
  };
  

  console.log("LoginModal is open:", open);
  const onToggle = () => {
    router.push('/auth/login')
  }


  return (
    <div className='h-screen w-full flex justify-center items-center bg-pink-100'>
      <div className="flex flex-col w-[400px] border rounded-xl bg-white">
        <div className='flex flex-col p-6 space-y-1'>
          <h3 className="font-semibold tracking-tight text-xl">Daftar Sekarang</h3>
          <p className="text-sm text-zinc-500">Isi email Anda di bawah untuk membuat akun baru.</p>
        </div>
        <form className="p-6 pt-0 grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="email" className="block text-sm font-medium leading-none text-zinc-950">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="gojosatoru@example.com"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-green-600"
              value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="username" className="block text-sm font-medium leading-none text-zinc-950">
              Name
            </label>
            <input
              type="text"
              id="username"
              placeholder="ex: Gojo Satoru"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-green-600"
              value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
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
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-green-600"
              value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
        </form>
        <div className='p-6 pt-0 grid gap-4'>
          <button onClick={registerUser} type="submit" className="w-full py-2 text-sm font-semibold text-white bg-sky-500 rounded-md hover:bg-sky-400">
            Daftar
          </button>
          <div className="relative">
            <div className="absolute mx-6 inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            
          </div>
          <div className='flex  gap-1'>
            <p className='text-sm text-zinc-500'>Sudah punya akun Ovulapedia?</p>
            <p onClick={onToggle} className='text-sm text-sky-500 hover:underline cursor-pointer'>Masuk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;