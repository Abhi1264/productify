import Link from "next/link";
import Image from "next/image";
import ProductCard from "./components/ProductCard";
import productsData from "../../public/products.json";
import { GoArrowRight } from "react-icons/go";

type Product = {
  id: string | number;
  name: string;
  image: string;
  price: number;
  category: string;
};

// Get the first 8 products from the data for the featured carousel
const products = (productsData as Array<Product>).slice(0, 8);

export default function Home() {
  return (
    // Main page background and layout
    <div className="bg-gradient-to-b from-white to-neutral-100 dark:from-[#18181b] dark:to-[#23272f] flex flex-col relative overflow-x-hidden">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-24 sm:pt-32">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 w-full max-w-6xl mx-auto mb-16">
          {/* Hero Text and CTA */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mb-6 tracking-tight leading-tight">
              Discover Products with{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Productify
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-xl mx-auto md:mx-0">
              Browse a curated selection of the latest tech gadgets and
              accessories. Clean, responsive, and built with Next.js & Tailwind
              CSS.
            </p>
            {/* Call-to-action button to go to products page */}
            <Link
              href="/products"
              className="inline-flex group items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              Start Browsing
              {/* Arrow icon animates slightly on hover */}
              <GoArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          {/* Hero Illustration */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="Hero Illustration"
              width={400}
              height={400}
              className="drop-shadow-2xl dark:invert"
              priority
              draggable={false}
            />
          </div>
        </div>

        {/* Featured Products Carousel */}
        <section className="w-full max-w-6xl mx-auto mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
            Featured Products
          </h2>
          <div className="relative w-full overflow-x-hidden pb-16">
            {/* 
              Carousel: 
              - Duplicates the products array to create a seamless infinite scroll effect.
              - Uses animate-carousel (see globals.css) for horizontal animation.
            */}
            <div className="flex gap-6 animate-carousel whitespace-nowrap w-[400%]">
              {products
                .concat(products)
                .map((product: Product, idx: number) => (
                  <div
                    key={idx + "-" + product.id}
                    className="inline-block snap-center"
                  >
                    {/* Individual product card in the carousel */}
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
