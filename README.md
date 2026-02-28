# Shop-In App 🛍️

A modern e-commerce product catalog application built with Next.js 16, React 19, Redux Toolkit, and Tailwind CSS. Browse products, filter by categories, search, sort, and manage your favorites with a beautiful and responsive interface.

## 📸 Screenshots

### Desktop View

![Desktop Screenshot](https://i.postimg.cc/bvccTS8H/web.png)

### Mobile View

![Mobile Screenshot](https://iili.io/qqdXMru.png)

## ✨ Features

- **Product Catalog**: Browse a wide range of products from the FakeStore API
- **Advanced Filtering**:
  - Search products by name
  - Filter by category
  - Filter by minimum rating
  - Sort by price, rating, or name (ascending/descending)
- **Favorites System**: Mark products as favorites and view them separately
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Modern UI**: Clean and intuitive interface with smooth animations
- **State Management**: Redux Toolkit for efficient state management
- **Type Safety**: Built with TypeScript for better developer experience

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 20.x or higher
- pnpm (recommended) or npm/yarn

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd shop-in-app
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
```

### 4. Run the development server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📦 Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

## 📁 Project Structure

```
shop-in-app/
├── app/                      # Next.js App Router pages
│   ├── products/            # Products page
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── filters/            # Filter components
│   ├── product/            # Product-related components
│   └── Header.tsx          # Header component
├── hooks/                   # Custom React hooks
│   ├── useFavorites.ts     # Favorites management
│   ├── useFetchCategories.ts
│   └── useFetchProducts.ts
├── lib/                     # Library code
│   ├── features/           # Redux slices
│   ├── store.ts            # Redux store configuration
│   └── StoreProvider.tsx   # Redux provider
├── types/                   # TypeScript type definitions
│   └── product.ts
└── public/                  # Static assets
```

## 🎯 Key Features Explained

### Filtering System

The app uses Redux Toolkit to manage filter state, allowing users to:

- Search products by title
- Filter by product category
- Filter by minimum rating (3+, 4+, or all)
- Sort by price, rating, or name

### Favorites Management

- Click the heart icon on any product to add/remove from favorites
- Toggle "Show Favorites Only" to view your saved products
- Favorites are persisted in localStorage

### Responsive Design

- Mobile-first approach with Tailwind CSS
- Adaptive grid layout for different screen sizes
- Sticky filter bar for easy access while scrolling

## 🌐 API Integration

This app uses the [FakeStore API](https://fakestoreapi.com/) for product data:

- `GET /products` - Fetch all products
- `GET /products/categories` - Fetch all categories
- `GET /products/category/{category}` - Fetch products by category

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Configure environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/shop-in-app)

### Other Platforms

You can also deploy to:

- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ using Next.js and React

---

**Note**: This is a demo application using the FakeStore API for educational purposes.
