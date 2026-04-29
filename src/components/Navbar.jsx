import { useState } from "react";
import { FaSearch, FaNotesMedical, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({
  search,
  setSearch,
  categories = [],
  setCategory,
  setSort,
}) => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
    
      <div className="bg-blue-600 px-4 py-3 flex justify-between items-center shadow">
         
        <div className="flex items-center gap-3">
          
          <FaBars
            className="text-white text-xl md:hidden cursor-pointer"
            onClick={() => setOpen(true)}
          />

           
          <Link to="/" className="flex items-center gap-2">
            <FaNotesMedical className="text-white text-2xl" />
            <h1 className="text-white font-bold text-lg">Medical</h1>
          </Link>
        </div>

        
        <div className="hidden md:flex bg-white px-3 py-1 rounded w-64">
          <FaSearch className="text-gray-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-2 outline-none w-full"
            placeholder="Search..."
          />
        </div>

         
        <FaSearch
          className="text-white text-lg md:hidden cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        />
      </div>

       
      {showSearch && (
        <div className="md:hidden bg-white p-2 shadow">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full border p-2 rounded"
          />
        </div>
      )}

       
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

       
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 p-4 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        
        <div className="flex justify-between mb-4">
          <h2 className="font-bold">Menu</h2>
          <FaTimes onClick={() => setOpen(false)} className="cursor-pointer" />
        </div>

        
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setOpen(false);
              }}
              className="block w-full text-left p-2 bg-gray-100 rounded hover:bg-blue-100"
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

         
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Sort</h3>
          <select
            onChange={(e) => setSort(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="low">Price Low → High</option>
            <option value="high">Price High → Low</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Navbar;
