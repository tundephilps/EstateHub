"use client";
import { FaPlus, FaRegChartBar, FaRegFileAlt, FaCog } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";

import { AiOutlineWallet } from "react-icons/ai";
import { BsBarChartLine } from "react-icons/bs";
import { PiSwapBold } from "react-icons/pi";
import { useState } from "react";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Square from "../assets/Square.svg";

import Wallet from "../assets/Wallet.png";
import { SlEarphonesAlt } from "react-icons/sl";
import { GoPlus } from "react-icons/go";
import { RiSettings4Line } from "react-icons/ri";

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");

  const menuItems = [
    { name: "dashboard", icon: <Image src={Square} alt="" size={18} /> },
    { name: "add", icon: <GoPlus size={28} /> },
    { name: "files", icon: <PiSwapBold size={18} /> },
    { name: "stats", icon: <BsBarChartLine size={18} /> },
  ];

  return (
    <div className="flex flex-col border-r border-[#1C1B20] items-center justify-between h-screen w-16 bg-[#0B0B0B] text-gray-300 py-4">
      {/* Logo */}
      <div>
        <Image
          src={Logo}
          className="h-[56px] w-[40px]"
          height={100}
          width={100}
          alt=""
        />
        <div className="flex flex-col gap-6 mt-6">
          {menuItems.map((item) => (
            <div key={item.name} className="relative">
              {/* Orange vertical bar */}
              {active === item.name && (
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-10 bg-[#E85102] rounded-full shadow-[0_0_10px_#FF6A00]" />
              )}

              {/* Icon button */}
              <button
                onClick={() => setActive(item.name)}
                className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  active === item.name
                    ? "text-white bg-gradient-to-b from-[#11111100] to-[#E85102BF] bg-[rgba(255,100,0,0.1)] backdrop-blur-md border border-[rgba(255,140,0,0.3)] shadow-[0_0_20px_rgba(255,120,0,0.4)]"
                    : "hover:text-orange-400"
                }`}
              >
                {item.icon}
              </button>
            </div>
          ))}

          <Image src={Wallet} className="cursor-pointer h-10 w-10" alt="" />
        </div>
      </div>
      {/* Settings */}
      <div className="mb-4 flex-col items-center space-y-6  p-3 py-3 rounded-full bg-[#111111] ">
        <RiSettings4Line
          size={18}
          className="hover:text-orange-400 cursor-pointer"
        />
        <SlEarphonesAlt
          size={18}
          className="hover:text-orange-400 cursor-pointer"
        />
      </div>
    </div>
  );
}
