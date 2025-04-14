# 🛒 FakeStore

Welcome to FakeStore — your go-to demo eCommerce experience! This project was created to simulate a real online shopping site while showcasing modern front-end web development practices.

## 📖 About

FakeStore is a mock eCommerce website built using:

- ⚛️ React

- 📘 TypeScript

- 🎨 Tailwind CSS

While the products are fake, the functionality is very real. This app provides a hands-on example of how a professional shopping user interface works, from browsing to adding items to the cart.

Whether you're a developer looking to test and learn, or just curious about how eCommerce platforms are built, FakeStore is designed to be a fun, realistic, and functional learning tool.

## 🚀 Features

- Responsive UI built with Tailwind CSS

- Component-based architecture using React

- Type-safe development with TypeScript

- Interactive shopping cart experience

- Ideal for learning and portfolio projects

- APIs Integration

## 📡 API Integration

This project fetches product data from the FakeStore API to simulate a real eCommerce experience.

### 🔗 API Endpoint Used

- https://fakestoreapi.com/products — Retrieves a list of all products

### 🧠 Fetching Logic

We use the native fetch method directly inside the Product component to retrieve data when the component mounts.

```bash
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Got products data:", data);
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Loading and error handling code...
};
```

## 🛠 Features of the Fetching Logic

- ✅ Uses useEffect to fetch data on component mount

- ✅ Handles loading and error states

- ✅ Validates API response and logs results for debugging

- ✅ Stores data in local state for rendering

This logic can be found in the Product.tsx component of the project.

## 👨‍💻 Built By

Sol Monineath 💻

## 📦 Installation

1. clone this project:

```bash
git clone https://github.com/neathcmd/HomeworkAPIs.git
cd fakestore

```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 📝 License

This project is for educational/demo purposes and is not intended for commercial use.
