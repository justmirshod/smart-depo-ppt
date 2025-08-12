"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SmartDepoPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Smart Depo - Asosiy Tizim",
      content: (
        <div className="p-6 h-full flex flex-col justify-center">
          {/* Row 1 */}
          <div className="grid grid-cols-4 gap-6 mb-6 h-[30%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Ekologiya
                </h4>
                <p className="text-sm text-blue-100/90 leading-relaxed">
                  Atrof-muhit nazorati va ekologik standartlar
                </p>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="95, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-green-600">95%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Lokomotivlarni TXK va JT ta'mirlash
                </h4>
                <p className="text-sm text-blue-100/90 leading-relaxed">
                  Texnik xizmat ko'rsatish va joriy ta'mirlar
                </p>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="75, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">75%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Xo'jalik ishlari
                </h4>
                <p className="text-sm text-blue-100/90 leading-relaxed">
                  Kommunal xizmatlar va infratuzilma
                </p>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="60, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">60%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Omborxona
                </h4>
                <p className="text-sm text-blue-100/90 leading-relaxed">
                  Zaxira qismlar va materiallar boshqaruvi
                </p>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-green-600">100%</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-4 gap-6 h-[30%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Lokomotivlardan foydalanish
                </h4>
                <p className="text-sm text-blue-100/90 leading-relaxed">
                  Operatsion faoliyat va marshrutlar
                </p>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="70, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">70%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  GPS va Video monitoring
                </h4>
                <p className="text-sm text-blue-100/90 leading-relaxed">
                  Real vaqt kuzatuv tizimlari
                </p>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="80, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">80%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Axborot tizimlar
                </h4>
                <p className="text-sm text-blue-100/90 leading-relaxed">
                  Ma'lumotlar bazasi va analitika
                </p>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="85, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">85%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Mehnat va ish haqi bo'limi
                </h4>
                <p className="text-sm text-blue-100/90 leading-relaxed">
                  Kadrlar boshqaruvi va ish haqi
                </p>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="90, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-green-600">90%</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Status indicators */}
          {/* <div className="flex justify-center mt-12 space-x-8">
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-8 py-4 shadow-2xl border border-green-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-green-100 drop-shadow-lg">
                90-100% (Raqamlashtirilgan)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full px-8 py-4 shadow-2xl border border-orange-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-orange-100 drop-shadow-lg">
                50-90% (Qisman)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full px-8 py-4 shadow-2xl border border-red-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-red-100 drop-shadow-lg">
                &lt;50% (Raqamlashtirilmagan)
              </span>
            </div>
          </div> */}
        </div>
      ),
    },
    {
      title: "Lokomotivlardan foydalanish jarayonlari",
      content: (
        <div className="p-6 h-full flex flex-col justify-center">
          {/* Row 1 */}
          <div className="grid grid-cols-4 gap-6 mb-6 h-[30%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Hisobga olish bo‘limi
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="95, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-green-600">95%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  YoER (ТЭР) bo‘limi
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="75, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">75%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Lokomotiv brigadalarning bilimi va guvohnomasini monitoring
                  qilish
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="60, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">60%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Avtotransport vositalari
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-green-600">100%</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-4 gap-6 h-[30%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Mehnat va ish haqi bo‘limi
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="70, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">70%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Lokomotiv brigadalari zaxirasi bo‘limi
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="80, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">80%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Lokomotiv lentalari va hisobga olish kassetalarini
                  rasshifrovka qilish bo‘limi
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="85, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">85%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Mehnat va ish haqi bo'limi
                </h4>
                <p className="text-sm text-blue-100/90 leading-relaxed">
                  Kadrlar boshqaruvi va ish haqi
                </p>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="90, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-green-600">90%</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Status indicators */}
          {/* <div className="flex justify-center mt-12 space-x-8">
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-8 py-4 shadow-2xl border border-green-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-green-100 drop-shadow-lg">
                90-100% (Raqamlashtirilgan)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full px-8 py-4 shadow-2xl border border-orange-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-orange-100 drop-shadow-lg">
                50-90% (Qisman)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full px-8 py-4 shadow-2xl border border-red-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-red-100 drop-shadow-lg">
                &lt;50% (Raqamlashtirilmagan)
              </span>
            </div>
          </div> */}
        </div>
      ),
    },
    {
      title:
        "Lokomotivlarga texnik xizmat ko‘rsatish va ta’mirlash jarayonlari",
      content: (
        <div className="p-6 h-full flex flex-col justify-center">
          {/* Row 1 */}
          <div className="grid grid-cols-4 gap-6 mb-6 h-[25%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Lokomotiv TXK va JT ta’mir turlarini elektron hisobga olish
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="95, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-green-600">95%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Uzel agregatlarini elektron hisobga olish
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="75, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">75%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Lokomotivlarning nosozliklarini elektron hisobga olish
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="60, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">60%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Lokomotivlarning suv va moy maxsulotlarini laborator tahlil
                  qilish jarayoni.
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-green-600">100%</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-4 gap-6 mb-6 h-[25%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Lokomotiv pasportlarini elektron shakli
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="70, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">70%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Texnik xizmat ko‘rsatish va ta’mirlash tsexlar faoliyatining
                  elektron monitoringi
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="80, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">80%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Tayyor uzel agregatlar elektron hisobi
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="85, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">85%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Omborxona
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="90, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-green-600">90%</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-4 gap-6 h-[25%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Takrorlanayotgan nosozliklar elektron hisobi
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="70, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">70%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Uzel – agregatlar almashinuvi
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="80, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">80%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  G‘ildirak juftliklar o‘lchamlarini nazorat qilish
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="85, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-orange-600">85%</span>
                </div>
              </div> */}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Teplovoz tirsakli vallarning gradatsii o‘lchamlarini nazorat
                  qilish
                </h4>
              </div>
              {/* <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="90, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-green-600">90%</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Status indicators */}
          {/* <div className="flex justify-center mt-12 space-x-8">
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-8 py-4 shadow-2xl border border-green-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-green-100 drop-shadow-lg">
                90-100% (Raqamlashtirilgan)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full px-8 py-4 shadow-2xl border border-orange-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-orange-100 drop-shadow-lg">
                50-90% (Qisman)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full px-8 py-4 shadow-2xl border border-red-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-red-100 drop-shadow-lg">
                &lt;50% (Raqamlashtirilmagan)
              </span>
            </div>
          </div> */}
        </div>
      ),
    },
    {
      title:
        "Lokomotivlarga texnik xizmat ko'rsatish va ta'mirlash jarayonlari",
      content: (
        <div className="p-6 flex flex-col justify-center">
          {/* Row 1 */}
          <div className="grid grid-cols-4 gap-4 mb-6 h-[16%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-[#3ECFAB]/20 to-[#4BBFE6]/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-white mb-1 drop-shadow-lg">
                  Lokomotiv depo hududiga kirib kelishi (Grafik TXK-2, TXK-3,
                  JT-1 bo’yicha yoki grafikdan tashqari)
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-[#3ECFAB]/20 to-[#4BBFE6]/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-white mb-1 drop-shadow-lg">
                  Depo navbatchisi lokomotivnini qabul qiladi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-[#3ECFAB]/20 to-[#4BBFE6]/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-white mb-1 drop-shadow-lg">
                  Yoqilg’i nazoratchisi yoqilg’i hajmini tekshirib oladi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-[#F47264]/20 to-[#F7B84B]/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-sm text-white mb-1 drop-shadow-lg">
                  Depo navbatchisi grafik kitobiga qaysi ta’mir turiga
                  olinganini qayd etib boradi va ta’mirlash ustasiga topshiradi
                  (L-service) integratsiya
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="85, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">85%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-4 gap-4 mb-6 h-[16%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-[#F47264]/20 to-[#F7B84B]/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-sm text-white mb-1 drop-shadow-lg">
                  Lokomotiv brigada ta’mir sehi ustasiga lokomotiv TU-152 shakl
                  bort jurnaliga kamchiliklarni yozilgan holatda topshiradi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="85, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">85%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-[#3ECFAB]/20 to-[#4BBFE6]/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-white mb-1 drop-shadow-lg">
                  Lokomotiv ta’mirlash sexiga kiradi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-[#F47264]/20 to-[#F7B84B]/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-white mb-1 drop-shadow-lg">
                  Ta’mir turiga qarab ta’mirning davomiyligi bajarilishi kerak
                  bo‘lgan ishlar hajmi bilan belgilanadi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">85%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-[#3ECFAB]/20 to-[#4BBFE6]/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  TXK va ta’mirlash ishlari xodimlar o‘rtasida taqsimlanadi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-4 gap-4 mb-6 h-[16%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-[#3ECFAB]/20 to-[#4BBFE6]/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-white mb-1 drop-shadow-lg">
                  Asosiy uzel agregatlar aylanishi, ta’mir va ishdan chiqish
                  holati qayd etiladi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-[#F47264]/20 to-[#F7B84B]/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-white mb-1 drop-shadow-lg">
                  Agregatlarni tekshirish va texnik ko‘rik uchun kichik sehlarga
                  yuboriladi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="70, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">70%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-rose-500/20 to-rose-500/5 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-white mb-1 drop-shadow-lg">
                  Omborxona (1C)
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#CC5257"
                    strokeWidth="2"
                    strokeDasharray="0, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-800">0%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-[#3ECFAB]/20 to-[#4BBFE6]/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-white mb-1 drop-shadow-lg">
                  Bajarilgan ishlarni xodim belgilaydi seh boshlig‘i tasdiqlaydi
                  va tabel to‘ldirib boradi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-4 gap-4 mb-6 h-[16%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-[#3ECFAB]/20 to-[#4BBFE6]/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-white mb-1 drop-shadow-lg text-[12px]">
                  Grafik ishlar belgilangan vaqtda yakunlangandan so’ng
                  pryomshiklarga lokomotiv topshiriladi xodim lokomotiv
                  sozligini tekshiradi va ekspluatatsiyaga chiqishiga ruxsat
                  beradi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">85%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-rose-500/20 to-rose-500/5 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-white mb-1 drop-shadow-lg">
                  Yoqilg’i nazoratchisi yoqilg’i hajmini tekshirib oladi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#CC5257"
                    strokeWidth="2"
                    strokeDasharray="0, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">0%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-[#3ECFAB]/20 to-[#4BBFE6]/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-white mb-1 drop-shadow-lg">
                  Lokomotiv ekpluatatsiya jarayoniga chiqishga tayyor
                  bo’lganida, Depo navbatchisi ta’mirlarni qayd etish jurnalidan
                  lokomotivni ta’mirdan chiqaradi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-[#3ECFAB]/20 to-[#4BBFE6]/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-white mb-1 drop-shadow-lg">
                  Lokomotiv ekspluatatsiyaga chiqishga tayyor
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">70%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status indicators */}
          <div className="flex justify-center mt-12 space-x-8">
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-8 py-4 shadow-2xl border border-green-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-4 shadow-lg"></div>
              <span className="font-medium text-green-100 drop-shadow-lg">
                90-100% (Raqamlashtirilgan)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full px-8 py-4 shadow-2xl border border-orange-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mr-4 shadow-lg"></div>
              <span className="font-medium text-orange-100 drop-shadow-lg">
                50-90% (Qisman)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full px-8 py-4 shadow-2xl border border-red-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mr-4 shadow-lg"></div>
              <span className="font-medium text-red-100 drop-shadow-lg">
                &lt;50% (Raqamlashtirilmagan)
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Lokomotivlardan foydalanish jarayonlari",
      content: (
        <div className="p-6 h-full flex flex-col justify-center">
          {/* Row 1 */}
          <div className="grid grid-cols-4 gap-6 mb-6 h-[25%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Zaxiradan lokomotiv ajratadi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Ish taqsimlovchi lokomotiv brigadasini ishga chaqiradi
                </h4>
                <p className="text-sm text-blue-100/90 leading-relaxed">
                  (marshrut ochadi)
                </p>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="0, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600">0%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Ish taqsimlovchidan lokomotiv brigadasini so'raydi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Lokomotiv brigadasi dam olish vaqti va ish soatlarini
                  o'rganadi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-4 gap-6 mb-6 h-[25%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Telefon qiladi yoki chaqiruvchi yuboradi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="50, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">50%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Lokomotiv brigada ish taqsimlovchidan marshrut varaqasini
                  oladi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div>
                <h4 className="font-bold text-sm text-gray-800 mb-1">
                  Lokomotiv brigada tibbiy ko'rikdan o'tadi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="50, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">50%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Depo navbatchisidan yo'riqlashdan o'tadi va lokomotivni qabul
                  qiladi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-4 gap-6 h-[25%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Lokomotiv brigada ish jarayonini boshlaydi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Ish jarayonini tugagandan so'ng lokomotivni depo navbatchisiga
                  topshiradi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Depo navbatchisi zaxira bo'limiga oladi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  E-Marshrut dasturida ishni yakunlaydi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="50, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">50%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status indicators */}
          <div className="flex justify-center mt-12 space-x-8">
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-8 py-4 shadow-2xl border border-green-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-green-100 drop-shadow-lg">
                90-100% (Raqamlashtirilgan)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full px-8 py-4 shadow-2xl border border-orange-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-orange-100 drop-shadow-lg">
                50-90% (Qisman)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full px-8 py-4 shadow-2xl border border-red-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-red-100 drop-shadow-lg">
                &lt;50% (Raqamlashtirilmagan)
              </span>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Xo'jalik ishlari",
      content: (
        <div className="p-6 h-full flex flex-col justify-center">
          {/* Row 1 */}
          <div className="grid grid-cols-4 gap-4 mb-6 h-[30%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Elektrenergiya, suv, aloqa va boshqa kommunikatsiyalarni
                  elektron hisobga olish
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="0, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600">0%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Mevali va mevasiz daraxtlar, butalar va ko'chatlarni elektron
                  hisobga olish
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Bino va inshootlarni elektron hisobga olish
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="0, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600">0%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Depo navbatchisi avtotransport haydovchisini ishga chaqiradi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="50, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">50%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-4 gap-4 h-[30%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Avtotransport haydovchisi marshrut varaqasini oladi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="50, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">50%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Tibbiy ko'rikdan o'tib ish jarayonini boshlaydi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  GPS yordamida harakat va yoqilg'i sarfi hisoblanadi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Qurilish ishlari bo'limi yangi binolar va inshootlar
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="0, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600">0%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status indicators */}
          <div className="flex justify-center mt-12 space-x-8">
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-8 py-4 shadow-2xl border border-green-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-green-100 drop-shadow-lg">
                90-100% (Raqamlashtirilgan)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full px-8 py-4 shadow-2xl border border-orange-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-orange-100 drop-shadow-lg">
                50-90% (Qisman)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full px-8 py-4 shadow-2xl border border-red-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-red-100 drop-shadow-lg">
                &lt;50% (Raqamlashtirilmagan)
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "GPS va Video Monitoring",
      content: (
        <div className=" p-6 h-full flex flex-col justify-center">
          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-4 mb-6 h-[30%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Video kuzatuv tizimi
                </h4>
                <p className="text-xs text-white/60">
                  Lokomotivlarga o'rnatilgan onlayn va oflayn rejimda ishlovchi
                  kuzatuv kameralari
                </p>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="0, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600">0%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  GPS tizimi
                </h4>
                <p className="text-xs text-white/60">
                  Har bir lokomotivga o'rnatilgan GPS tizimi natijalar asosida
                  tahlil qilinadi
                </p>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Aniqlangan kamchiliklar E-journal dasturida qayd qilinadi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="0, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600">0%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-4 h-[30%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  GPS tizimi orqali 30 daqiqadan ko'proq harakatsiz turgan
                  lokomotivlar uchun avtomatik habar
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="50, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">50%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Kamchiliklar oyma-oy tahlil qilinadi va takroriy
                  qoidabuzarliklar nazoratga olinadi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="50, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">50%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  GPS va video kuzatuv qurilmalari aniqlagan kamchiliklar yillik
                  tahlili
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="80, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">80%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status indicators */}
          <div className="flex justify-center mt-12 space-x-8">
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-8 py-4 shadow-2xl border border-green-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-green-100 drop-shadow-lg">
                90-100% (Raqamlashtirilgan)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full px-8 py-4 shadow-2xl border border-orange-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-orange-100 drop-shadow-lg">
                50-90% (Qisman)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full px-8 py-4 shadow-2xl border border-red-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-red-100 drop-shadow-lg">
                &lt;50% (Raqamlashtirilmagan)
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Axborot Tizimlar",
      content: (
        <div className="p-6 h-full flex flex-col justify-center">
          {/* Row 1 */}
          <div className="grid grid-cols-4 gap-4 mb-6 h-[30%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  L-Service
                </h4>
                <p className="text-xs text-white/60">
                  Sehda faoliyat yuritadigan har bir ishchi hodimlar bajargan
                  ishiga qarab baholanadi
                </p>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Sun'iy yo'ldosh
                </h4>
                <p className="text-xs text-white/60">
                  ChatGPT ni Smart Depo, Elektron marshrut dasturlariga
                  bosqichma-bosqich qo'llash
                </p>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Omborxona hisoboti
                </h4>
                <p className="text-xs text-white/60">
                  Maxsus hisob yurituvchi qurilma bilan ta'minlanadi va 1C
                  dasturiga integratsiya qilinadi
                </p>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="50, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">50%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  L-Service dasturi 1C dasturiga integratsiya qilinadi
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="50, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">50%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-4 gap-4 h-[30%]">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Yagona dashboard
                </h4>
                <p className="text-xs text-white/60">
                  Barcha tizimlarni birlashtiruvchi boshqaruv paneli
                </p>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  DepoZoom AT
                </h4>
                <p className="text-xs text-white/60">
                  Avtomatlashtirilgan tizim
                </p>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="80, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">80%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Lokomotiv 360
                </h4>
                <p className="text-xs text-white/60">
                  Dastur orqali depolarga virtual sayohat uyushtirish mumkin
                  bo'ladi
                </p>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="0, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600">0%</span>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-50/20 p-6 rounded-2xl shadow-2xl border border-white/30 border-l-4 border-cyan-400/80 flex items-center justify-between hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl text-white mb-1 drop-shadow-lg">
                  Har bir mashinist shaxsiy kabinetiga ChatGPT integratsiya
                  qilish
                </h4>
              </div>
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="0, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600">0%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status indicators */}
          <div className="flex justify-center mt-12 space-x-8">
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-8 py-4 shadow-2xl border border-green-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-green-100 drop-shadow-lg">
                90-100% (Raqamlashtirilgan)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full px-8 py-4 shadow-2xl border border-orange-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-orange-100 drop-shadow-lg">
                50-90% (Qisman)
              </span>
            </div>
            <div className="flex items-center backdrop-blur-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full px-8 py-4 shadow-2xl border border-red-400/30">
              <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mr-4 shadow-lg"></div>
              <span className="text-lg font-medium text-red-100 drop-shadow-lg">
                &lt;50% (Raqamlashtirilmagan)
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex flex-col h-screen box-border overflow-hidden"
      style={{
        backgroundImage: "url(/bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Darker glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/85 to-indigo-950/90 backdrop-blur-sm"></div>

      <div className="flex-1 flex flex-col relative z-10">
        {/* Header */}
        {/* <div className="bg-blue-600 text-white py-4 px-6">
          <h1 className="text-3xl font-bold text-center">Smart Depo</h1>
          <p className="text-center text-blue-100 mt-1">Lokomotiv Depot Management System</p>
        </div> */}

        {/* Main Slide Container with slide transition */}
        <div className="flex-1 relative">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 p-8">
                <div className="flex flex-col h-full">
                  <h2 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <div className="flex-1">{slide.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="backdrop-blur-xl bg-gradient-to-r from-slate-950/95 via-blue-950/90 to-indigo-950/95 px-8 py-6 flex justify-between items-center border-t border-white/20 shadow-2xl">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="lg"
            className="flex items-center space-x-2 hover:bg-blue-500/20 border-blue-400/50 bg-transparent text-blue-100 backdrop-blur-md"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Oldingi</span>
          </Button>

          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-10 h-10 rounded-full transition-all duration-300 flex items-center justify-center text-sm font-medium backdrop-blur-md ${
                  currentSlide === index
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg scale-110"
                    : "bg-white/20 text-blue-100 hover:bg-white/30 border border-white/30"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="lg"
            className="flex items-center space-x-2 hover:bg-blue-500/20 border-blue-400/50 bg-transparent text-blue-100 backdrop-blur-md"
          >
            <span>Keyingi</span>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
