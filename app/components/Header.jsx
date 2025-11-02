"use client";
import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import Chart from "../assets/Chart.png";
import Bell from "../assets/Bell.png";
import Face from "../assets/Face.png";

export default function Header() {
  const [accountOpen, setAccountOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const accountRef = useRef(null);
  const menuRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setAccountOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col z-10  md:flex-row md:items-center md:justify-between w-full border-b border-[#1C1B20] bg-[#0B0B0B] text-white px-4 md:px-6 py-3 text-xs md:text-sm font-medium space-y-3 md:space-y-0  ">
      {/* Left section */}
      <div className="flex flex-wrap items-center gap-3 md:space-x-4">
        {/* Balance */}
        <div>
          <p className="font-bold bg-gradient-to-r from-[#FFFFFF] to-[#767676] bg-clip-text text-transparent text-[10px] md:text-xs">
            Balance
          </p>
          <p>$10,500.90</p>
        </div>

        {/* Equity */}
        <div className="hidden sm:block">
          <p className="font-bold bg-gradient-to-r from-[#FFFFFF] to-[#767676] bg-clip-text text-transparent text-[10px] md:text-xs">
            Equity
          </p>
          <p>$10,680.00</p>
        </div>

        {/* Chart */}
        <div className="hidden lg:inline-flex gap-1 items-center">
          <Image src={Chart} alt="Chart" className="w-8 h-8" />
          <div>
            <p className="font-bold bg-gradient-to-r from-[#FFFFFF] to-[#767676] bg-clip-text text-transparent text-[10px] md:text-xs">
              Margin Used / Free
            </p>
            <p>$560.00 / 660.00</p>
          </div>
        </div>

        {/* Margin Level */}
        <div className="hidden xl:block">
          <p className="font-bold bg-gradient-to-r from-[#FFFFFF] to-[#767676] bg-clip-text text-transparent text-[10px] md:text-xs">
            Margin Level
          </p>
          <p>205.30%</p>
        </div>

        {/* Total Unrealized */}
        <div className="hidden lg:block">
          <p className="font-bold bg-gradient-to-r from-[#FFFFFF] to-[#767676] bg-clip-text text-transparent text-[10px] md:text-xs">
            Total Unrealized P/L
          </p>
          <p className="text-[#2FD77B]">+$2,304.02</p>
        </div>

        {/* Time Zone */}
        <div className="hidden md:block">
          <p className="font-bold bg-gradient-to-r from-[#FFFFFF] to-[#767676] bg-clip-text text-transparent text-[10px] md:text-xs">
            Time Zone
          </p>
          <p>13:31:08 (G+)</p>
        </div>

        {/* Search bar */}
        <div className="flex-1 min-w-[140px] md:min-w-[200px] lg:min-w-[250px]">
          <div className="p-[1px] rounded-full bg-gradient-to-r from-[#767676] via-[#0B0B0B42] to-gray-700">
            <div className="flex items-center bg-[#111111] px-2 py-1 rounded-full">
              <input
                type="text"
                placeholder="Search Instruments"
                className="bg-transparent w-full placeholder:text-[10px] md:placeholder:text-xs placeholder:text-gray-400 focus:outline-none text-gray-200 text-xs md:text-sm"
              />
              <div className="bg-gradient-to-b from-[#11111100] to-[#E85102BF] rounded-full p-1.5 flex items-center justify-center">
                <FaSearch className="text-gray-100 text-xs md:text-sm cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center justify-between md:justify-end space-x-2 md:space-x-4">
        {/* Account dropdown */}
        <div ref={accountRef} className="relative hidden sm:block">
          <button
            onClick={() => setAccountOpen(!accountOpen)}
            className="p-[1px] rounded-full bg-gradient-to-r from-[#767676] via-[#0B0B0B42] to-gray-700 hover:bg-[#262626] transition"
          >
            <div className="flex items-center bg-[#111111] p-1.5 rounded-full">
              <div className="inline-flex items-center px-3 py-1">
                <p className="text-xs whitespace-nowrap">Main USD Account</p>
                <RiArrowDropDownLine
                  className={`ml-2 text-xl transition-transform ${
                    accountOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </button>

          {/* Dropdown menu */}
          {accountOpen && (
            <div className="absolute  right-0 mt-2 w-40 bg-[#111111] border border-[#2A2A2A] rounded-md shadow-lg z-50">
              <ul className="py-1 text-gray-300 text-xs">
                <li className="px-4 py-2 hover:bg-[#1E1E1E] cursor-pointer">
                  Main USD Account
                </li>
                <li className="px-4 py-2 hover:bg-[#1E1E1E] cursor-pointer">
                  EUR Wallet
                </li>
                <li className="px-4 py-2 hover:bg-[#1E1E1E] cursor-pointer">
                  Create New Account
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Bell */}
        <div className="rounded-full p-2 bg-[#111111] hover:bg-[#262626] transition cursor-pointer">
          <Image src={Bell} alt="Bell" className="w-4 h-4 md:w-5 md:h-5" />
        </div>

        {/* Profile */}
        <div
          ref={menuRef}
          className="relative flex items-center space-x-2 p-1.5 rounded-full bg-[#111111] hover:bg-[#262626] transition cursor-pointer"
        >
          <Image src={Face} alt="User" className="w-6 h-6 md:w-8 md:h-8" />
          <div className="hidden sm:block">
            <p className="font-semibold text-[#EAEAEA] leading-tight text-[10px] md:text-xs">
              Alex Roe
            </p>
            <p className="text-[#767676] text-[9px] md:text-[10px]">
              ID: 884 883 192
            </p>
          </div>
          <BsThreeDotsVertical
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#FF5800] text-xl md:text-2xl cursor-pointer"
          />

          {/* Three dots menu */}
          {menuOpen && (
            <div className="absolute top-16 right-0  w-40 bg-[#111111] border border-[#2A2A2A] rounded-md shadow-lg z-50">
              <ul className="py-1 text-gray-300 text-xs">
                <li className="px-4 py-2 hover:bg-[#1E1E1E] cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-[#1E1E1E] cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-[#1E1E1E] cursor-pointer text-red-400">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
