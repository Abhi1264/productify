export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-row items-center gap-4">
          <a
            href="mailto:abhinav.kumar.1264@gmail.com"
            className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
          <a
            href="https://github.com/Abhi1264/productify"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
        </div>
        <div className="text-neutral-400 text-sm">
          &copy; {new Date().getFullYear()} Productify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
