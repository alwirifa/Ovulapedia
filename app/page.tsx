"use client"

import Card from "@/components/Card";
import Link from "next/link";

const data = [
  {
    title: "Apa Itu Ovulasi?",
    description: "Ovulasi adalah proses pelepasan sel telur dari salah satu ovarium. Ini biasanya terjadi sekitar 14 hari sebelum periode menstruasi berikutnya dimulai, tergantung pada panjang siklus menstruasi individu."
  },
  {
    title: "Panjang Siklus dan Ovulasi",
    description: "Pada siklus rata-rata 28 hari, ovulasi biasanya terjadi sekitar hari ke-14. Jika siklus lebih pendek atau lebih panjang, ovulasi terjadi sekitar 12-16 hari sebelum menstruasi berikutnya."
  },
  {
    title: "Perubahan Lendir Serviks",
    description: "Lendir serviks menjadi lebih jernih, elastis, dan licin, mirip dengan putih telur mentah, yang membantu sperma berenang menuju sel telur."
  },
  {
    title: "Peningkatan Suhu Tubuh Basal (BBT)",
    description: "Suhu tubuh basal sedikit meningkat (sekitar 0,4-1,0 derajat Fahrenheit) setelah ovulasi akibat peningkatan hormon progesteron."
  },
  {
    title: "Nyeri Ovulasi (Mittelschmerz)",
    description: "Beberapa wanita merasakan nyeri ringan atau kram di satu sisi perut bagian bawah selama ovulasi."
  },
  {
    title: "Peningkatan Gairah Seksual",
    description: "Banyak wanita melaporkan peningkatan libido atau gairah seksual selama masa subur."
  },
  {
    title: "Perubahan pada Payudara",
    description: "Payudara bisa menjadi lebih lembut atau nyeri akibat perubahan hormon."
  }
];

export default function Home() {
  return (
    <div className="h-screen w-full bg-pink-100">
      <div className="max-w-7xl mx-auto w-full py-6 h-[70%]">
        <div className="py-6 flex justify-between">

        <div className="text-sky-500 text-2xl font-semibold">Ovulapedia</div>
        <Link href={'/auth/login'} className="px-4 py-3 rounded-lg bg-sky-400 hover:bg-sky-300 text-white font-semibold ">
          Login
        </Link>
        </div>
        <div className="bg-home-banner bg-center bg-no-repeat h-full w-full flex flex-col gap-8 items-center justify-center pt-24">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-center text-pink-500">Kenali dan Kendalikan Siklusmu <br />dengan Ovulapedia</p>
          <p className="max-w-xl text-center text-pink-500 text-[14px] sm:text-[16px] font-medium">Galau mengatur siklus menstruasi? Ingin lebih paham tentang kesehatan reproduksi? Ambil kesempatan untuk <span className="font-bold"> #JadiPaham</span> dengan mendaftar dan bergabung di Ovulapedia</p>
          <Link href={'/auth/register'} className="max-w-xs mt-6 py-3 text-lg sm:text-xl font-bold bg-sky-400 text-white w-full rounded-lg text-center hover:bg-sky-300">Daftar</Link>
        </div>
      </div>
      <div className="w-full h-full bg-white rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[80px] flex justify-center">
        <div className="max-w-7xl w-full mx-center flex flex-col gap-8 py-6 px-4 sm:px-6 md:px-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-pink-500 mt-10 sm:mt-16 md:mt-20">Artikel</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div key={index} className="bg-[#F8F8F8] rounded-lg p-6">
                <h1 className="text-2xl sm:text-3xl font-semibold">
                  {item.title}
                </h1>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
