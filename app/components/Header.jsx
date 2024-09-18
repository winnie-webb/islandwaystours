"use client";
import React, { useState } from "react";
import logo from "../../public/logo.jpg";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  const currentPath = usePathname();

  // Toggle menu open state
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to check if link is active
  const isActive = (href) => currentPath === href;

  return (
    <header className="flex flex-col xl:flex-row justify-between items-center p-5 xl:p-10 gap-y-4 xl:gap-x-10">
      {/* Logo */}
      <div className="flex justify-between items-center w-full xl:w-auto">
        <Link href="/">
          <Image
            width={150}
            height={150}
            alt="Island Ways Tours Logo"
            src={logo}
          />
        </Link>
        {/* Hamburger menu for small screens */}
        <button
          className="xl:hidden text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between icons */}
        </button>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Navigation (Hidden on small screens, visible on large) */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col xl:flex xl:flex-row xl:items-center gap-y-4 xl:gap-x-5 mt-5 xl:mt-0 w-full xl:w-auto`}
      >
        <div className="group relative">
          <span className="cursor-pointer flex items-center">
            Tours
            <RiArrowDropDownLine className="text-4xl" />
          </span>
          <div className="absolute rounded scale-0 group-hover:scale-100 transition-transform flex flex-col gap-y-2 top-7 left-0 w-60 p-4 bg-white text-black z-50">
            <Link
              href="/mpt"
              className={isActive("/mpt") ? "underline underline-offset-8" : ""}
            >
              Most Popular Tours
            </Link>
            <Link
              href="/at"
              className={isActive("/at") ? "underline underline-offset-8" : ""}
            >
              Airport Transfers
            </Link>
            <Link
              href="/ctp"
              className={isActive("/ctp") ? "underline underline-offset-8" : ""}
            >
              Combo Tour Packages
            </Link>
            <Link
              href="/abc"
              className={isActive("/abc") ? "underline underline-offset-8" : ""}
            >
              Attractions / Beach / City Tours
            </Link>
            <Link
              href="/cse"
              className={isActive("/cse") ? "underline underline-offset-8" : ""}
            >
              Cruise Shore Excursions
            </Link>
            <Link
              href="/edt"
              className={isActive("/edt") ? "underline underline-offset-8" : ""}
            >
              Eating / Dining Tours
            </Link>
            <Link
              href="/egt"
              className={isActive("/egt") ? "underline underline-offset-8" : ""}
            >
              Exclusive Golf Tours
            </Link>
            <Link
              href="/ncb"
              className={isActive("/ncb") ? "underline underline-offset-8" : ""}
            >
              Night Life / Casino / Bar Tours
            </Link>
            <Link
              href="/st"
              className={isActive("/st") ? "underline underline-offset-8" : ""}
            >
              Shopping Tours
            </Link>
          </div>
        </div>
        <Link
          href="/about-us"
          className={
            isActive("/about-us") ? "underline underline-offset-8" : ""
          }
        >
          About Us
        </Link>
        <Link
          href="/contact-us"
          className={
            isActive("/contact-us") ? "underline underline-offset-8" : ""
          }
        >
          Contact Us
        </Link>
      </nav>

      {/* Social Icons (Visible on large screens) */}
      <div className="hidden xl:flex gap-x-5 justify-between">
        <Link href="https://www.tiktok.com/@islandwaystours">
          <FaTiktok className="text-3xl" />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=61557477178431">
          <FaFacebook className="text-3xl" />
        </Link>
        <Link href="https://www.instagram.com/islandwaystours/">
          <FaInstagram className="text-3xl" />
        </Link>
      </div>

      {/* Social Icons for mobile view (Visible on small screens when menu is open) */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } xl:hidden flex gap-x-5 justify-center mt-5`}
      >
        <Link href="https://www.tiktok.com/@islandwaystours">
          <FaTiktok className="text-3xl" />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=61557477178431">
          <FaFacebook className="text-3xl" />
        </Link>
        <Link href="https://www.instagram.com/islandwaystours/">
          <FaInstagram className="text-3xl" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
