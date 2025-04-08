import { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((data) => {
        setProductImage(data.image);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZhdGUlMjB3aGl0ZXxlbnwwfHx8fDE2ODQ5NTY1NzE&ixlib=rb-4.0.3&q=80&w=1080')] relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-700/50"></div>

      {/* Main Content Container */}
      <article className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-8 sm:gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 text-white lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold">
              Discover Our New Collection
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
              Welcome! Explore our latest arrivals and find something special
              just for you.
            </p>
            <Link to="/product">
              <button
                className="mt-6 px-6 py-3 bg-white text-gray-900 font-semibold rounded shadow-md hover:border-2 hover:border-gray-300 hover:text-white hover:bg-transparent hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 active:scale-95 transition-all duration-300 ease-in-out transform cursor-pointer"
                aria-label="Shop our new collection now"
              >
                Shop Now
              </button>
            </Link>
          </div>

          {/* Image Container */}
          <div className="w-full max-w-md lg:max-w-lg lg:w-1/2">
            {productImage ? (
              <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={productImage}
                  alt="Featured product from collection"
                  className="w-full h-auto object-contain aspect-square transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/placeholder-image.png";
                  }}
                  loading="eager"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-sm font-medium">
                    View Details
                  </span>
                </div>
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden">
                <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-2xl animate-pulse flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Home;
