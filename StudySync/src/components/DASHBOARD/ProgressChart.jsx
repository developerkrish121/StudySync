import "./ProgressChart.css";

const ProgressChart = () => {
  return (
    <div className="progress-chart">

      <div className="progress-header">
        <h2>Weekly Progress</h2>
        <span>This Week</span>
      </div>

      <div className="progress-info">

        <h1>82%</h1>

        <p>
          Great job! You're making consistent progress.
        </p>

      </div>

      <div className="progress-bar-bg">
        <div className="progress-fill"></div>
      </div>

      <div className="progress-stats">

        <div>
          <h3>38h</h3>
          <p>Study Hours</p>
        </div>

        <div>
          <h3>12</h3>
          <p>Courses</p>
        </div>

        <div>
          <h3>9</h3>
          <p>Completed</p>
        </div>

      </div>

    </div>
  );
};

export default ProgressChart;