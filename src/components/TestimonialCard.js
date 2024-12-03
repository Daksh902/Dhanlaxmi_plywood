const TestimonialCard = ({ testimonial }) => {
    return (
      <div className="testimonial-card">
        <p>{testimonial.feedback}</p>
        <h3>- {testimonial.name}</h3>
      </div>
    );
  };
  
  export default TestimonialCard;
  