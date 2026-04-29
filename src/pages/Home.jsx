import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

import {
  FaCapsules,
  FaSyringe,
  FaHeartbeat,
  FaLeaf,
  FaPumpSoap,
  FaSprayCan,
  FaShieldAlt,
  FaBoxOpen,
  FaTint,
  FaFlask,
  FaFilter,
} from "react-icons/fa";

const Home = ({
  search = "",
  category = "all",
  setCategory,
  sort,
  setSort,
}) => {
   
  const uniqueCategories = ["all", ...new Set(products.map((p) => p.category))];

   
  const categoryIcons = {
    all: <FaFilter />,
    tablet: <FaCapsules />,
    syrup: <FaSyringe />,
    device: <FaHeartbeat />,
    supplement: <FaLeaf />,
    liquid: <FaPumpSoap />,
    spray: <FaSprayCan />,
    safety: <FaShieldAlt />,
    kit: <FaBoxOpen />,
    gel: <FaTint />,
    powder: <FaFlask />,
  };

   

  let filtered = [...products].filter((p) => {
    return (
      (category === "all" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  });

   
  if (sort === "low") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex gap-6">
         
        <div className="w-1/4 hidden md:block bg-white p-5 rounded-xl shadow">
          <h2 className="font-bold text-lg mb-4">Categories</h2>

          {uniqueCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`flex items-center gap-2 w-full px-3 py-2 mb-2 rounded-lg transition
              ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-blue-100"
              }`}
            >
              {categoryIcons[cat] || <FaFilter />}
              {cat.toUpperCase()}
            </button>
          ))}

           
          <h2 className="font-bold mt-6 mb-2">Sort By</h2>

          <select
            onChange={(e) => setSort(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select</option>
            <option value="low">Price Low → High</option>
            <option value="high">Price High → Low</option>
          </select>
        </div>

         
        <div className="flex-1">
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">
              {category === "all" ? "All Products" : category.toUpperCase()}
            </h2>

            <span className="text-gray-500 text-sm">
              {filtered.length} items
            </span>
          </div>

           
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-10 text-center rounded-xl shadow flex flex-col items-center justify-center">
               
              <FaBoxOpen className="text-5xl text-gray-400 mb-4" />

              
              <h3 className="text-lg font-semibold">No products found</h3>

              
              <p className="text-gray-500 mt-2">Try searching something else</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
