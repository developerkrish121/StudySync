import "./StatsCard.css";

const StatsCard = ({ icon, title, value, color }) => {
  return (
    <div className="stats-card">
      <div
        className="stats-icon"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div className="stats-content">
        <h2>{value}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default StatsCard;