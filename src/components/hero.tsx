"use client";

import React from "react";

export const Hero = () => {
  return (
    <section className="flex items-center justify-center bg-emerald-900 lg:p-24 xs:p-4">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-5xl font-bold text-white">
          Authentic Mexican Tacos
        </h1>
        <p className="mb-8 max-w-2xl text-xl text-white/80">
          Experience the true taste of Mexico with our handcrafted tacos and
          traditional recipes
        </p>
      </div>
    </section>
  );
};
