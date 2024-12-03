const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <div className="product-details">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating} / 5</p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  