import { FaCheck } from "react-icons/fa";

const PricingCard = ({
  title,
  price,
  description,
  features,
  popular,
  buttonText,
}) => {
  return (
    <div className={`pricing-card ${popular ? "popular" : ""}`}>

      {popular && <span className="popular-badge">Most Popular</span>}

      <h3>{title}</h3>

      <div className="price">
        ₹{price}
        <span>/month</span>
      </div>

      <p>{description}</p>

      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <FaCheck className="check-icon" />
            {feature}
          </li>
        ))}
      </ul>

      <button>{buttonText}</button>

    </div>
  );
};

export default PricingCard;