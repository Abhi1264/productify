import Image from "next/image";
import Link from "next/link";
import productsData from "../../../../public/products.json";
import { FaStar } from "react-icons/fa";

// Define the shape of the products array for type safety
const products = productsData as Array<{
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}>;

// Component to display related products (excluding the current one)
function RelatedProducts({ currentId }: { currentId: number }) {
  // Get up to 3 products that are not the current product
  const related = products.filter((p) => p.id !== currentId).slice(0, 3);
  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">
        Related Products
      </h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="bg-white dark:bg-neutral-900 rounded-xl shadow p-4 flex flex-col items-center hover:shadow-lg transition-shadow border border-neutral-100 dark:border-neutral-800"
          >
            {/* Product image */}
            <Image
              src={product.image}
              alt={product.name}
              width={60}
              height={60}
              className="mb-2 object-contain"
              draggable={false}
            />
            {/* Product name */}
            <span className="text-sm font-medium text-neutral-900 dark:text-white mb-1 text-center line-clamp-2">
              {product.name}
            </span>
            {/* Product price */}
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              ${product.price.toFixed(2)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Product detail page component
export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // Find the product with the matching id
  const product = products.find((p) => p.id === Number(id));

  // If product is not found, show a not found message and a link back
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-neutral-100 dark:from-[#18181b] dark:to-[#23272f] p-8">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
          Product Not Found
        </h1>
        <Link
          href="/products"
          className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium shadow hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // Render the product detail page
  return (
    <div className="max-w-4xl mx-auto py-8 mt-16 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb navigation */}
      <nav className="mb-6 text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:underline">
          Products
        </Link>
        <span>/</span>
        <span className="text-neutral-700 dark:text-neutral-200 truncate">
          {product.name}
        </span>
      </nav>
      {/* Product card layout */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-800 p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-100 lg:min-h-125">
        {/* Product image and category */}
        <div className="w-full lg:w-1/2 h-64 lg:h-120 bg-neutral-50 dark:bg-neutral-800 rounded-xl relative overflow-hidden">
          <span className="absolute top-4 left-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full z-10">
            {product.category}
          </span>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            draggable={false}
          />
        </div>
        {/* Product details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* Product name */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white mb-2 line-clamp-2">
            {product.name}
          </h1>
          {/* Static 5-star rating */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-4 h-4 text-yellow-400" />
            ))}
          </div>
          {/* Product price */}
          <p className="text-primary text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            ${product.price.toFixed(2)}
          </p>
          {/* Product description */}
          <p className="mb-6 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
            {product.description}
          </p>
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-4 sm:px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors text-sm sm:text-base whitespace-nowrap cursor-pointer">
              <span>Add to Cart</span>
            </button>
            <button className="px-4 sm:px-6 py-3 rounded-full bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white font-semibold shadow hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors text-sm sm:text-base whitespace-nowrap cursor-pointer">
              <span>Add to Wishlist</span>
            </button>
          </div>
        </div>
      </div>
      {/* Related products section */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
