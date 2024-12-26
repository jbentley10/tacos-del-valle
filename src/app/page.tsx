/**
 * @file page.tsx
 */
// Import components and utils
import { fetchBlocksBySlug } from "../lib/contentfulData";
import Content from "./content";
import { ChevronDown } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

// Set metadata
export const metadata = {
  title: "Home | Example app",
  description: "This app uses NextJS and Contentful.",
};

export default async function Home() {
  const blocksEnglish = await fetchBlocksBySlug("home", "en-US");
  const blocksSpanish = await fetchBlocksBySlug("home", "es");

  // Wait for the promises to resolve
  const [english, spanish] = await Promise.all([blocksEnglish, blocksSpanish]);

  return (
    <main className='flex flex-col items-center justify-between lg:p-24 xs:p-4'>
      {english && spanish && (
        // <Content
        //   key={Math.random()}
        //   englishBlocks={english}
        //   spanishBlocks={spanish}
        // />
      )}
      {/* Hero Section */}
      <section className="relative bg-[#F4D03F] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-6 text-5xl font-bold text-[#C0392B]">Authentic Mexican Tacos</h1>
            <p className="mb-8 max-w-2xl text-xl text-[#C0392B]/80">
              Experience the true taste of Mexico with our handcrafted tacos and traditional recipes
            </p>
            <a href="#menu" className="group flex items-center text-[#C0392B]">
              View Our Menu
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </a>
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

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-[#C0392B]">Our Menu</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Tacos", price: "$3.50", description: "Choose from our variety of authentic fillings" },
              { title: "Burritos", price: "$8.99", description: "Loaded with your choice of meat and toppings" },
              { title: "Quesadillas", price: "$7.99", description: "Melted cheese with your favorite ingredients" },
              { title: "Loaded Nachos", price: "$10.99", description: "Topped with cheese, meat, and fresh vegetables" },
              { title: "Tortas", price: "$9.99", description: "Traditional Mexican sandwiches" },
              { title: "Platillo", price: "$12.99", description: "Complete meal with rice and beans" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-1"
              >
                <h3 className="mb-2 text-xl font-bold text-[#C0392B]">{item.title}</h3>
                <p className="mb-4 text-gray-600">{item.description}</p>
                <p className="text-lg font-bold text-[#C0392B]">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#C0392B] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-4xl font-bold">About Us</h2>
            <p className="mb-6 text-lg">
              At Tacos del Valle, we bring the authentic flavors of Mexico to your plate. Our recipes have been passed down
              through generations, ensuring that every bite tells a story of tradition and passion for great food.
            </p>
            <p className="text-lg">
              We take pride in using only the freshest ingredients and traditional cooking methods to create the perfect taco
              experience for our valued customers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-[#C0392B]">Contact Us</h2>
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg">
            <div className="mb-6 text-center">
              <p className="mb-2 text-lg font-semibold text-[#C0392B]">Visit Us</p>
              <p className="text-gray-600">123 Taco Street</p>
              <p className="text-gray-600">Los Angeles, CA 90012</p>
            </div>
            <div className="mb-6 text-center">
              <p className="mb-2 text-lg font-semibold text-[#C0392B]">Hours</p>
              <p className="text-gray-600">Monday - Thursday: 11am - 9pm</p>
              <p className="text-gray-600">Friday - Saturday: 11am - 11pm</p>
              <p className="text-gray-600">Sunday: 11am - 8pm</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-lg font-semibold text-[#C0392B]">Contact</p>
              <p className="text-gray-600">Phone: (555) 123-4567</p>
              <p className="text-gray-600">Email: info@tacosdelvalle.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
