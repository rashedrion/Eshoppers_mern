import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>
        <b>{product.name}</b>
      </p>
      <div className="hello">
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          {/* ({product.numOfReviews} Reviews) */}
        </span>
      </div>
      <span className="ma">{`৳ ${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
