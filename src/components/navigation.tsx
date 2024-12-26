import React from "react";
import Image from "next/image";
import { Links } from "./ui/links";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className='atf-container sm:pt-10 md:pt-11 m-0 bg-nav drop-shadow flex flex-col md:flex-row items-center justify-between xs:justify-end'>
      <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-[#C0392B]">
              Tacos del Valle
            </Link>
            <div className="hidden space-x-8 md:flex">
              <a href="#menu" className="text-[#C0392B] hover:text-[#C0392B]/70">
                Menu
              </a>
              <a href="#about" className="text-[#C0392B] hover:text-[#C0392B]/70">
                About
              </a>
              <a href="#contact" className="text-[#C0392B] hover:text-[#C0392B]/70">
                Contact Us
              </a>
            </div>
          </div>
        </div>
    </nav>
  );
};
