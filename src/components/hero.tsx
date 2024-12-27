"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative bg-[#F4D03F] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center text-center">
          <div className="px-16">
            <Image
              alt={"Three tacos on a plate with radishes and lime for garnish."}
              src="/tacos.webp"
              width={1500}
              height={1000}
            />
          </div>
          <div>
            <h1 className="mb-6 text-5xl font-bold text-[#C0392B]">
              Authentic Mexican Tacos
            </h1>
            <p className="mb-8 max-w-2xl text-xl text-[#C0392B]/80">
              Experience the true taste of Mexico with our handcrafted tacos and
              traditional recipes
            </p>
            <a href="#menu" className="group flex items-center text-[#C0392B]">
              View Our Menu
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#F4D03F]/10"
        >
          <path
            fill="currentColor"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          />
        </svg>
      </div>
    </section>
  );
};
