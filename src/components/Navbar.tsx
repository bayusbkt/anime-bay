"use client";

import React, { useState } from "react";
import { SearchInput } from "./SearchInput";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navbarRoutes = [
  { title: "Genre" },
  { title: "Movie" },
  { title: "ONAS" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="max-w-[1640px] px-4 sm:px-6 lg:px-14 py-4 flex flex-wrap justify-between items-center">
      <div className="flex items-center gap-8">
        <Link href={"/"} className="text-xl font-bold gradient-text">
          Anime<span className="gradient-text-purple">Bay</span>
        </Link>
        <ul className="hidden sm:flex gap-8">
          {navbarRoutes.map((item) => (
            <li key={item.title} className="relative group">
              <Link
                href="#"
                className="text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition-colors duration-300"
              >
                <span className="gradient-letter">{item.title[0]}</span>
                {item.title.slice(1)}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 group-hover:w-full rounded-lg"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center gap-4">
        <SearchInput />
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        </Avatar>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden text-white hover:text-purple-400 transition-colors duration-300"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>


      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="w-full sm:hidden mt-4">
          <ul className="flex flex-col gap-4">
            {navbarRoutes.map((item) => (
              <li key={item.title} className="relative group">
                <Link
                  href="#"
                  className="text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition-colors duration-300"
                >
                  <span className="gradient-letter">{item.title[0]}</span>
                  {item.title.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-4">
            <SearchInput />
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
