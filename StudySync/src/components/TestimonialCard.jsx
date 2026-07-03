import "./TestimonialCard.css";

function TestimonialCard({ image, name, role, review }) {
  return (
    <div className="testimonial-card">
      <img src={image} alt={name} className="testimonial-image" />

      <div className="stars">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="review">
        "{review}"
      </p>

      <h3>{name}</h3>

      <span>{role}</span>
    </div>
  );
}

export default TestimonialCard;