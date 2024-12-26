import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Links } from "./ui/links";

export const Footer = () => {
  return (
    <footer
      className={
        "footer component-container bg-primary text-primary-foreground"
      }
    >
     <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="mb-4">Tacos del Valle</p>
            <p className="mb-4">68467 E Palm Canyon Dr, Cathedral City, CA 92234</p>
            <p className="mb-4">(760) 424-8444</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} <Link href="https://palmspringswebdesign.net" target="blank">Palm Springs Web Design.</Link> All rights reserved.</p>
          </div>
        </div>
    </footer>
  );
};
