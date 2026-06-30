import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Background Blur Circles */}

      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      <div className="hero-container">

        {/* ================= Left Content ================= */}

        <div className="hero-left">

          <span className="hero-badge">
            🚀 Trusted by 20,000+ Students
          </span>

          <h1>
            Learn Smarter.
            <br />
            Build Better Habits.
          </h1>

          <p>
            StudySync is your all-in-one productivity platform
            designed to help students manage notes, tasks,
            study schedules, goals, and daily progress—
            all in one beautiful dashboard.
          </p>

          {/* Buttons */}

          <div className="hero-buttons">

            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              ▶ Watch Demo
            </button>

          </div>

          {/* Statistics */}

          <div className="hero-stats">

            <div className="stat">
              <h3>20K+</h3>
              <p>Students</p>
            </div>

            <div className="stat">
              <h3>150+</h3>
              <p>Universities</p>
            </div>

            <div className="stat">
              <h3>4.9★</h3>
              <p>Rating</p>
            </div>

          </div>

        </div>

        {/* ================= Right Side ================= */}

        <div className="hero-right">

          {/* Floating Card */}

          <div className="floating-card">

            🔥 24 Day Streak

          </div>

          {/* Dashboard */}

          <div className="dashboard">

            {/* Dashboard Header */}

            <div className="dashboard-header">

              <div>

                <h3>Hello Krishna 👋</h3>

                <p>Let's complete today's goals.</p>

              </div>

              <div className="profile">

                KB

              </div>

            </div>

            {/* Progress */}

            <div className="progress-card">

              <div className="title-row">

                <span>Today's Progress</span>

                <span>82%</span>

              </div>

              <div className="progress-bar">

                <div className="progress-fill"></div>

              </div>

            </div>

            {/* Quick Stats */}

            <div className="dashboard-stats">

              <div className="box">

                <h2>12</h2>

                <p>Tasks</p>

              </div>

              <div className="box">

                <h2>4.5h</h2>

                <p>Study</p>

              </div>

              <div className="box">

                <h2>87%</h2>

                <p>Focus</p>

              </div>

            </div>

            {/* Courses */}

            <div className="courses">

              <h4>Current Courses</h4>

              <div className="course">

                <span>📚 React Development</span>

                <span>75%</span>

              </div>

              <div className="course">

                <span>💻 DSA</span>

                <span>68%</span>

              </div>

              <div className="course">

                <span>🗄 DBMS</span>

                <span>91%</span>

              </div>

            </div>

            {/* Upcoming */}

            <div className="upcoming">

              <h4>Upcoming Session</h4>

              <div className="session">

                <div>

                  <h5>React Learning</h5>

                  <p>Today • 7:00 PM</p>

                </div>

                <button>

                  Join

                </button>

              </div>

            </div>

          </div>

          {/* Floating Card */}

          <div className="floating-card2">

            ⭐ Productivity Score 94%

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="scroll-indicator">

        <span>Scroll Down</span>

        <div className="mouse">

          <div className="wheel"></div>

        </div>

      </div>

    </section>
  );
}

export default Hero;