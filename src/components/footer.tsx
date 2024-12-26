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
     <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-4">
              Tacos del Valle | 123 Taco Street, Los Angeles, CA 90012 | (555) 123-4567
            </p>
            <p className="text-sm">&copy; {new Date().getFullYear()} Tacos del Valle. All rights reserved.</p>
          </div>
        </div>
    </footer>
  );
};
