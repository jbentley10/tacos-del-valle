/**
 * @file page.tsx
 */
// Import components and utils
import TacoTransition from "@/components/taco-transition";
import { fetchBlocksBySlug } from "../lib/contentfulData";
import { Hero } from "@/components/hero";

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
    <main className="flex flex-col">
      <Hero />

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-[hsl(4,63%,46%)]">
            Our Menu
          </h2>
          <div className="space-y-16">
            {/* Choose Your Passion */}
            <div className="bg-white p-8 shadow-lg">
              <div className="mb-8 flex items-center">
                <span className="mr-4 text-6xl font-bold text-[hsl(4,63%,46%)]">
                  1
                </span>
                <h3 className="text-3xl font-bold text-[hsl(4,63%,46%)]">
                  Choose Your Passion
                </h3>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Tacos",
                    price: "$3.50",
                    description:
                      "Served on a handmade corn tortilla & stuffed with choice of meat, topped with onion & cilantro.",
                  },
                  {
                    title: "Tortas",
                    price: "$9.99",
                    description:
                      "A Mexican sandwich served on a toasted bolillo & filled with choice of meat, beans, topped with crema, monterrey cheese, avocade, onion, cilantro, lettuce & tomato.",
                  },
                  {
                    title: "Burritos",
                    price: "$8.99",
                    description:
                      "A flour tortilla wrapped around your choice of meat, rice, beans, crema, avocado, onion & cilantro.",
                  },
                  {
                    title: "Quesadillas",
                    price: "$7.99",
                    description:
                      "A flour tortilla filled with melted cheese & your choice of meat. (Onion & cilantro optional)",
                  },
                  {
                    title: "Loaded Nachos",
                    price: "$10.99",
                    description:
                      "Crispy tortilla chips topped with monterrey & house nacho cheese, your choice of meat, crema, avocado, onion & cilantro. (Beans optional)",
                  },
                  {
                    title: "Loaded Fries",
                    price: "$10.99",
                    description:
                      "Fresh cut homestyle fries topped with monterrey & house nacho cheese, your choice of meat, crema, avocado, onion & cilantro. (Beans optional)",
                  },
                  {
                    title: "Platillo",
                    price: "$10.99",
                    description:
                      "A traditional Mexican combination plate, served with your choice of meat, rice, beans, onions & cilantro.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-gray-200 p-6"
                  >
                    <h4 className="mb-2 text-xl font-semibold text-primary">
                      {item.title}
                    </h4>
                    <p className="mb-4 text-gray-600">{item.description}</p>
                    <p className="text-lg font-bold text-[hsl(4,63%,46%)]">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Choose Your Meat */}
            <div className="bg-white p-8 shadow-lg">
              <div className="mb-8 flex items-center">
                <span className="mr-4 text-6xl font-bold text-[hsl(4,63%,46%)]">
                  2
                </span>
                <h3 className="text-3xl font-bold text-[hsl(4,63%,46%)]">
                  Choose Your Meat
                </h3>
              </div>
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "Carne Asada",
                  "Pollo",
                  "Al Pastor",
                  "Carnitas",
                  "Chorizo",
                  "Barbacoa",
                ].map((item) => (
                  <li key={item}>
                    <h2 className="text-xl font-semibold text-primary">{item}</h2>
                  </li>
                ))}
              </ul>
            </div>

            {/* Choose Your Side */}
            <div className="bg-white p-8 shadow-lg">
              <div className="mb-8 flex items-center">
                <span className="mr-4 text-6xl font-bold text-[hsl(4,63%,46%)]">
                  3
                </span>
                <h3 className="text-3xl font-bold text-[hsl(4,63%,46%)]">
                  Choose Your Side
                </h3>
              </div>
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "Mexican Rice",
                  "Refried Beans",
                  "Black Beans",
                  "Fries",
                  "Guacamole",
                  "Pico de Gallo",
                ].map((item) => (
                  <li key={item} className="text-lg text-gray-700">
                    <h2 className="text-xl font-semibold text-primary">{item}</h2>
                  </li>
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
              At Tacos del Valle, we bring the authentic flavors of Mexico to
              your plate. Our recipes have been passed down through generations,
              ensuring that every bite tells a story of tradition and passion
              for great food.
            </p>
            <p className="text-lg">
              We take pride in using only the freshest ingredients and
              traditional cooking methods to create the perfect taco experience
              for our valued customers.
            </p>
          </div>
        </div>
      </section>

      <TacoTransition />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-[#C0392B]">
            Contact Us
          </h2>
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg">
            <div className="mb-6 text-center">
              <p className="mb-2 text-lg font-semibold text-[#C0392B]">
                Visit Us
              </p>
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
              <p className="mb-2 text-lg font-semibold text-[#C0392B]">
                Contact
              </p>
              <p className="text-gray-600">Phone: (760) 424-8444</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
