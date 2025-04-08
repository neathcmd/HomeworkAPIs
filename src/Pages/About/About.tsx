import React from "react";

const About: React.FC = () => {
  return (
    <section>
      <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">About FakeStore</h1>
          <p className="text-lg mb-4">
            Welcome to <span className="font-semibold">FakeStore</span> — your
            go-to demo eCommerce experience! This site was built to simulate a
            real online store, showcasing modern web development techniques
            using React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-lg mb-4">
            Our "products" may not be real, but the tech behind them is.
            FakeStore is perfect for testing, learning, or building your
            portfolio. Browse our fake products, add them to your cart, and
            explore how a professional shopping UI works.
          </p>
          <p className="text-lg mb-6">
            Whether you're a developer or just curious, FakeStore is here to
            provide a realistic, fun, and functional eCommerce simulation.
          </p>
          <p className="text-sm text-gray-500">
            Built with 💻 by Sol Monineath
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
