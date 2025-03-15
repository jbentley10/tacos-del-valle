"use client";

import { Antonio, Inter, Kablammo, Ranchers } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

// Declare fonts
const antonio = Antonio({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const kablammo = Kablammo({ subsets: ["latin"] });
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4 {
          font-family: ${ranchers.style.fontFamily};
        }

        button,
        span,
        .antonio {
          font-family: ${antonio.style.fontFamily};
        }

        button > a {
          font-family: ${antonio.style.fontFamily};
        }

        p,
        a {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body>
        <div className="min-h-screen bg-[#F4D03F]/10">
          <Navigation />
          {children}
          <Analytics />
          <Footer />
          </div>
      </body>
    </html>
  );
}
