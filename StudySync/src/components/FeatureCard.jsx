// FeatureCard.jsx

import "./FeatureCard.css";

function FeatureCard({ feature }) {
  return (
    <div className="feature-card">

      {/* Feature Icon */}
      <div className="feature-icon">
        {feature.icon}
      </div>

      {/* Feature Title */}
      <h3>{feature.title}</h3>

      {/* Feature Description */}
      <p>{feature.description}</p>

    </div>
  );
}

export default FeatureCard;