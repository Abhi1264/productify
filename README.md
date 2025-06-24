# Productify

Productify is a simple product showcase web application built with Next.js. It displays a list of products and allows users to view details for each product. The app uses modern React, Next.js and Tailwind CSS features for a fast and responsive experience.

## Installation & Running Locally

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd productify
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## File Structure

```
productify/
├── public/
│   ├── logo.svg
│   └── products.json
├── src/
│   └── app/
│       ├── components/
│       │   ├── Footer.tsx
│       │   ├── Navbar.tsx
│       │   ├── ProductCard.tsx
│       │   └── ThemeProvider.tsx
│       ├── products/
│       │   ├── [id]/
│       │   │   └── page.tsx
│       │   └── page.tsx
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── package.json
├── tsconfig.json
└── README.md
```

- **public/**: Static assets and product data.
- **src/app/components/**: Reusable UI components.
- **src/app/products/**: Product listing and detail pages.
- **src/app/page.tsx**: Main landing page.
- **src/app/layout.tsx**: Root layout and global providers.
- **src/app/globals.css**: Global styles.

## Features

- Product listing from a JSON file
- Individual product detail pages
- Responsive design
- Reusable components (Navbar, Footer, ProductCard)
- Easy to customize and extend

---

More products can be added by editing the `public/products.json` file.
