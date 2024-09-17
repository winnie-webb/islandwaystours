"use client";
import React, { useState } from "react";
import logo from "../../public/logo.jpg";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaSearch, FaTiktok } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const currentPath = usePathname();
  const [isSearching, setIsSearching] = useState(false);
  // Check for the current path and make the link active by adding the active class

  return (
    <header className="flex justify-between items-center p-10 gap-x-10">
      <Link href="/">
        <Image
          width={150}
          height={150}
          alt="Island Ways Tours Logo"
          src={logo}
        ></Image>
      </Link>
      <div className="flex-1 relative">
        <input
          onFocus={() => setIsSearching(true)}
          onBlur={() => setIsSearching(false)}
          className=" shadow-md w-full border-white rounded-full outline-none p-3 border-[3px] focus:border-[3px] focus:border-orange-300 transition-all duration-200"
          placeholder="Search tours..."
        />
        {/* Create Container for search results 
        
        */}
        <div
          className={`${
            isSearching ? "flex" : "hidden"
          } w-full p-4 absolute shadow-md gap-x-4 font-bold items-center`}
        >
          <Image alt="logo" width={50} height={50} src={logo}></Image>
          <p>Random Place in Montego Bay</p>
          <p>$50.00</p>
        </div>

        <FaSearch className="absolute right-4 top-4 text-primary text-xl cursor-pointer" />
      </div>
      <nav className=" flex items-center gap-x-5">
        <div className="group relative">
          <span className="cursor-pointer flex items-center">
            Tours
            <RiArrowDropDownLine className="text-4xl" />
          </span>
          <div className="absolute rounded scale-0 group-hover:scale-100 transition-transform flex flex-col gap-y-2 top-7 left-0 w-60 p-4 bg-white text-black">
            <Link href="/mpt">Most Popular Tours</Link>
            <Link href="/at">Airport Transfers</Link>
            <Link href="/ctp">Combo Tour Packages</Link>
            <Link href="/abc">Attractions / Beach / City Tours</Link>
            <Link href="/cse">Cruise Shore Excursions</Link>
            <Link href="/edt">Eating / Dining Tours</Link>
            <Link href="/egt">Exclusive Golf Tours</Link>
            <Link href="/ncb">Night Life / Casino / Bar Tours</Link>
            <Link href="/st">Shopping Tours</Link>
          </div>
        </div>
        <Link href="/about-us">About Us</Link>
        <Link href="/contact-us">Contact Us</Link>
      </nav>
      <div className="flex gap-x-5 justify-between">
        <Link href="https://www.tiktok.com/@islandwaystours">
          <FaTiktok className="text-3xl"></FaTiktok>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=61557477178431">
          <FaFacebook className="text-3xl"></FaFacebook>
        </Link>
        <Link href="https://www.instagram.com/islandwaystours/">
          <FaInstagram className="text-3xl"></FaInstagram>
        </Link>
      </div>
    </header>
  );
}

export default Header;
