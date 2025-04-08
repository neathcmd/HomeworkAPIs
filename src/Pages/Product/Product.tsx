import { useState, useEffect } from "react";

type Product = {
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
};

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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

  // Loading state
  if (loading) {
    return <div className="text-center py-20 text-xl">Loading products...</div>;
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-20 text-xl text-red-500">{error}</div>
    );
  }

  return (
    <section>
      <div className="p-6 font-sans">
        <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-md"
            >
              <div className="h-40 flex items-center justify-center mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold h-14 overflow-hidden">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{product.category}</p>
              <p className="text-xl font-bold mb-2">${product.price}</p>
              <div className="text-sm text-gray-600 mb-4">
                Rating: {product.rating.rate}/5 ({product.rating.count} reviews)
              </div>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
