import { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

const AdminDashboard = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: 0,
    rating: 0,
    image: '',
  });
  const [projectData, setProjectData] = useState({
    name: '',
    description: '',
    link: '',
    images: [],
  });
  const [testimonialData, setTestimonialData] = useState({
    name: '',
    feedback: '',
  });

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.post('/admin/products', productData);
    alert('Product Added');
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.post('/admin/projects', projectData);
    alert('Project Added');
  };

  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.post('/admin/testimonials', testimonialData);
    alert('Testimonial Added');
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Add Products Form */}
      <section>
        <h2>Add Product</h2>
        <form onSubmit={handleProductSubmit}>
          <input
            type="text"
            placeholder="Product Name"
            value={productData.name}
            onChange={(e) => setProductData({ ...productData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Product Description"
            value={productData.description}
            onChange={(e) => setProductData({ ...productData, description: e.target.value })}
          />
          <input
            type="number"
            placeholder="Product Price"
            value={productData.price}
            onChange={(e) => setProductData({ ...productData, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Product Rating"
            value={productData.rating}
            onChange={(e) => setProductData({ ...productData, rating: e.target.value })}
          />
          <input
            type="text"
            placeholder="Product Image URL"
            value={productData.image}
            onChange={(e) => setProductData({ ...productData, image: e.target.value })}
          />
          <button type="submit">Add Product</button>
        </form>
      </section>

      {/* Add Projects Form */}
      <section>
        <h2>Add Project</h2>
        <form onSubmit={handleProjectSubmit}>
          <input
            type="text"
            placeholder="Project Name"
            value={projectData.name}
            onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
          />
          <textarea
            placeholder="Project Description"
            value={projectData.description}
            onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Project Link"
            value={projectData.link}
            onChange={(e) => setProjectData({ ...projectData, link: e.target.value })}
          />
          <input
            type="text"
            placeholder="Project Images (comma-separated URLs)"
            value={projectData.images}
            onChange={(e) => setProjectData({ ...projectData, images: e.target.value.split(',') })}
          />
          <button type="submit">Add Project</button>
        </form>
      </section>

      {/* Add Testimonials Form */}
      <section>
        <h2>Add Testimonial</h2>
        <form onSubmit={handleTestimonialSubmit}>
          <input
            type="text"
            placeholder="Customer Name"
            value={testimonialData.name}
            onChange={(e) => setTestimonialData({ ...testimonialData, name: e.target.value })}
          />
          <textarea
            placeholder="Feedback"
            value={testimonialData.feedback}
            onChange={(e) => setTestimonialData({ ...testimonialData, feedback: e.target.value })}
          />
          <button type="submit">Add Testimonial</button>
        </form>
      </section>
    </div>
  );
};

export default AdminDashboard;
