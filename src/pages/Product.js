import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axiosInstance.get(`/products?pageNumber=${page}`);
      setProducts(data.products);
      setPages(data.pages);
    };

    fetchProducts();
  }, [page]);

  return (
    <div className="product-page">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <Pagination pages={pages} page={page} setPage={setPage} />
    </div>
  );
};

export default Product;
