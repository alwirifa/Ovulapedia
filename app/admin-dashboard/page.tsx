"use client"


import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

interface ArticleData {
  title: string;
  body: string;
}

const CreateArticleModal = () => {
  const [data, setData] = useState<ArticleData>({ title: "", body: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/article", data);
      if (response.data.error === false) {
        toast.success("Article created successfully!");
        // Redirect or show success message
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-pink-100">
      <Link className=" absolute top-8 right-8 bg-sky-500 text-white px-4 py-3 rounded-md text-sm font-semibold "href={'/'}>Back</Link>
      <div className="flex flex-col w-[400px] border rounded-xl bg-white">
        <div className="flex flex-col p-6 space-y-1">
          <h3 className="font-semibold tracking-tight text-xl">
            Buat Artikel
          </h3>
          <p className="text-sm text-zinc-500">
            Isi formulir di bawah untuk membuat artikel baru.
          </p>
        </div>
        <form className="p-6 pt-0 grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-none text-zinc-950"
            >
              Judul
            </label>
            <input
              type="text"
              id="title"
              placeholder="Judul artikel"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-sky-600"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              required
            />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="body"
              className="block text-sm font-medium leading-none text-zinc-950"
            >
              Isi Artikel
            </label>
            <textarea
              id="body"
              placeholder="Isi artikel"
              className="h-40 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-sky-600"
              value={data.body}
              onChange={(e) => setData({ ...data, body: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-sm font-semibold text-white bg-sky-500 rounded-md hover:bg-sky-400"
            disabled={loading}
          >
            {loading ? "Creating..." : "Buat Artikel"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateArticleModal;
