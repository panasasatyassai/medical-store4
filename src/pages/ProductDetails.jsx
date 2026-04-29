import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

import {
  FaStar,
  FaTruck,
  FaUndo,
  FaCheckCircle,
  FaShoppingCart,
  FaArrowLeft,
  FaShieldAlt,
  FaRupeeSign,
} from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id == id);

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id,
  );

  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-blue-600 hover:text-blue-800 font-medium"
      >
        <FaArrowLeft />
        Back
      </button>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 grid md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center bg-gray-100 rounded-xl p-6">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[350px] object-contain"
            onError={(e) =>
              (e.target.src = "https://via.placeholder.com/300?text=Product")
            }
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 w-fit rounded-full text-sm mb-2">
            {product.category.toUpperCase()}
          </span>

          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded text-sm">
              {product.rating} <FaStar />
            </div>
            <span className="text-gray-500 text-sm">
              {product.reviews} reviews
            </span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl font-bold text-green-600 flex items-center gap-1">
              <FaRupeeSign className="text-2xl" />
              {product.price}
            </span>

            <span className="text-green-500 text-sm font-semibold">
              {Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100,
              )}
              % OFF
            </span>
          </div>

          <div className="flex items-center gap-2 text-green-600 font-medium mb-4">
            <FaCheckCircle />
            In Stock
          </div>

          <p className="text-gray-600 leading-relaxed mb-5">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 mb-6">
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded">
              <FaTruck className="text-blue-600" />
              Fast Delivery
            </div>

            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded">
              <FaCheckCircle className="text-green-600" />
              Genuine Product
            </div>

            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded">
              <FaShieldAlt className="text-purple-600" />
              Trusted Brand
            </div>

            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded">
              <FaUndo className="text-orange-500" />
              Easy Returns
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              <FaShoppingCart /> Add to Cart
            </button>

            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-6">You may also like</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
