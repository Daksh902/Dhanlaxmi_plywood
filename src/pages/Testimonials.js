import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data } = await axiosInstance.get('/testimonials');
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className="testimonials-page">
      <h2>Testimonials</h2>
      {testimonials.length > 0 && (
        <TestimonialCard testimonial={testimonials[currentIndex]} />
      )}
    </div>
  );
};

export default Testimonials;
