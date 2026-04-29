import { Link } from "react-router-dom";
import { FaStar, FaRupeeSign } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white p-3 rounded shadow hover:shadow-lg transition">
        <img src={product.image} className="h-40 w-full object-cover rounded" />

        <h2 className="mt-2 text-sm font-semibold">{product.name}</h2>

        <p className="text-xs text-gray-500">{product.brand}</p>

        <div className="flex items-center gap-2 mt-1">
          <span className="bg-green-600 text-white text-xs px-2 rounded flex items-center gap-1">
            {product.rating} <FaStar size={10} />
          </span>
          <span className="text-gray-500 text-xs">({product.reviews})</span>
        </div>

        <div className="mt-2 flex gap-2 items-center">
          <span className="text-green-600 font-bold flex items-center gap-1">
            <FaRupeeSign className="text-sm" />
            {product.price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
