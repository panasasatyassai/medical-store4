import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import products from "./data/products";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const categories = ["all", ...new Set(products.map(p => p.category))];

  return (
    <BrowserRouter>

      <Navbar
        search={search}
        setSearch={setSearch}
        categories={categories}
        setCategory={setCategory}
        setSort={setSort}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              category={category}
              setCategory={setCategory}
              sort={sort}
              setSort={setSort}
            />
          }
        />

        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;