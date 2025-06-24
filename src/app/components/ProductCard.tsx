import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

// ProductCard component displays a single product's summary card
type Product = {
  id: string | number;
  name: string;
  image: string;
  price: number;
  category: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    // Card container with hover effects and styling
    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-800 flex flex-col h-80 group relative overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:z-10">
      {/* Category badge in the top-left corner */}
      <span className="absolute top-4 left-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full z-10 group-hover:scale-105 group-hover:bg-blue-200 group-hover:text-blue-900 dark:group-hover:bg-blue-800 dark:group-hover:text-blue-100 transition-all duration-300">
        {product.category}
      </span>
      {/* Product image section */}
      <div className="w-full h-2/3 bg-neutral-50 dark:bg-neutral-800 relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 group-hover:brightness-105 group-hover:contrast-110 transition-all duration-300"
          draggable={false}
        />
      </div>
      {/* Product details section */}
      <div className="flex-1 p-4 flex flex-col">
        {/* Product name */}
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1 text-center group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
          {product.name}
        </h2>
        {/* Star rating (static 5 stars for now) */}
        <div className="flex items-center justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className="w-4 h-4 text-yellow-400 group-hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
        {/* Product price */}
        <p className="text-primary text-xl font-bold mb-4 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          ${product.price.toFixed(2)}
        </p>
        {/* Action buttons: View Details and Add to Cart */}
        <div className="flex gap-2 w-full mt-auto">
          {/* Link to product detail page */}
          <Link
            href={`/products/${product.id}`}
            className="flex-1 px-3 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium shadow hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:scale-105 transition-all duration-300 text-center text-sm sm:text-base whitespace-nowrap"
          >
            <span className="hidden sm:inline">View Details</span>
            <span className="sm:hidden">Details</span>
          </Link>
          {/* Add to Cart button (no functionality yet) */}
          <button className="flex-1 px-3 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-800 hover:scale-105 transition-all duration-300 text-center cursor-pointer text-sm sm:text-base whitespace-nowrap">
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
