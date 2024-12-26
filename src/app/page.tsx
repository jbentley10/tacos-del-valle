/**
 * @file page.tsx
 */
// Import components and utils
import TacoTransition from "@/components/taco-transition";
import { fetchBlocksBySlug } from "../lib/contentfulData";
import Content from "./content";
import { ChevronDown } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

// Set metadata
export const metadata = {
  title: "Home | Tacos del Valle",
  description: "Taqueria and taco shop serving Cathedral City, CA.",
};

export default async function Home() {
  const blocksEnglish = await fetchBlocksBySlug("home", "en-US");
  const blocksSpanish = await fetchBlocksBySlug("home", "es");

  // Wait for the promises to resolve
  const [english, spanish] = await Promise.all([blocksEnglish, blocksSpanish]);

  return (
    <main className='flex flex-col items-center justify-between lg:p-24 xs:p-4'>
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
          <h2 className="mb-12 text-center text-4xl font-bold text-[hsl(4,63%,46%)]">Our Menu</h2>
          <div className="space-y-16">
            {/* Choose Your Passion */}
            <div className="bg-white p-8 shadow-lg">
              <div className="mb-8 flex items-center">
                <span className="mr-4 text-6xl font-bold text-[hsl(4,63%,46%)]">1</span>
                <h3 className="text-3xl font-bold text-[hsl(4,63%,46%)]">Choose Your Passion</h3>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Tacos", price: "$3.50", description: "Served on a handmade corn tortilla & stuffed with choice of meat, topped with onion & cilantro." },
                  { title: "Tortas", price: "$9.99", description: "A Mexican sandwich served on a toasted bolillo & filled with choice of meat, beans, topped with crema, monterrey cheese, avocade, onion, cilantro, lettuce & tomato." },
                  { title: "Burritos", price: "$8.99", description: "A flour tortilla wrapped around your choice of meat, rice, beans, crema, avocado, onion & cilantro." },
                  { title: "Quesadillas", price: "$7.99", description: "A flour tortilla filled with melted cheese & your choice of meat. (Onion & cilantro optional)" },
                  { title: "Loaded Nachos", price: "$10.99", description: "Crispy tortilla chips topped with monterrey & house nacho cheese, your choice of meat, crema, avocado, onion & cilantro. (Beans optional)" },
                  { title: "Loaded Fries", price: "$10.99", description: "Fresh cut homestyle fries topped with monterrey & house nacho cheese, your choice of meat, crema, avocado, onion & cilantro. (Beans optional)" },
                  { title: "Platillo", price: "$10.99", description: "A traditional Mexican combination plate, served with your choice of meat, rice, beans, onions & cilantro." },
                ].map((item) => (
                  <div key={item.name} className="rounded-lg border border-gray-200 p-6">
                    <h4 className="mb-2 text-xl font-semibold text-[hsl(4,63%,46%)]">{item.name}</h4>
                    <p className="mb-4 text-gray-600">{item.description}</p>
                    <p className="text-lg font-bold text-[hsl(4,63%,46%)]">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Choose Your Meat */}
            <div className="bg-white p-8 shadow-lg">
              <div className="mb-8 flex items-center">
                <span className="mr-4 text-6xl font-bold text-[hsl(4,63%,46%)]">2</span>
                <h3 className="text-3xl font-bold text-[hsl(4,63%,46%)]">Choose Your Meat</h3>
              </div>
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {["Carne Asada", "Pollo", "Al Pastor", "Carnitas", "Chorizo", "Barbacoa"].map((item) => (
                  <li key={item} className="text-lg text-gray-700">{item}</li>
                ))}
              </ul>
            </div>

            {/* Choose Your Side */}
            <div className="bg-white p-8 shadow-lg">
              <div className="mb-8 flex items-center">
                <span className="mr-4 text-6xl font-bold text-[hsl(4,63%,46%)]">3</span>
                <h3 className="text-3xl font-bold text-[hsl(4,63%,46%)]">Choose Your Side</h3>
              </div>
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {["Mexican Rice", "Refried Beans", "Black Beans", "Fries", "Guacamole", "Pico de Gallo"].map((item) => (
                  <li key={item} className="text-lg text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
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

      <TacoTransition />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-[#C0392B]">Contact Us</h2>
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg">
            <div className="mb-6 text-center">
              <p className="mb-2 text-lg font-semibold text-[#C0392B]">Visit Us</p>
              <p className="text-gray-600">68467 E Palm Canyon Dr</p>
              <p className="text-gray-600">Cathedral City, CA 92234</p>
            </div>
            <div className="mb-6 text-center">
              <p className="mb-2 text-lg font-semibold text-[#C0392B]">Hours</p>
              <p className="text-gray-600">Monday: 8am - 4pm</p>
              <p className="text-gray-600">Tuesday - Saturday: 8am - 8:30pm</p>
              <p className="text-gray-600">Sunday: 8am - 3pm</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-lg font-semibold text-[#C0392B]">Contact</p>
              <p className="text-gray-600">Phone: (760) 424-8444</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
