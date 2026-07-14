import "./About.css";
import {
  FaGraduationCap,
  FaUsers,
  FaBookOpen,
  FaAward,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Left Section */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
            alt="Students Learning"
          />
        </div>

        {/* Right Section */}
        <div className="about-content">

          <span className="about-tag">ABOUT STUDYSYNC</span>

          <h2>
            Learn Smarter,
            <span> Stay Organized,</span>
            <br />
            Achieve More.
          </h2>

          <p>
            StudySync is an all-in-one student productivity platform designed
            to simplify learning. Manage your courses, organize notes,
            track assignments, monitor progress, and stay motivated—all
            from one beautiful dashboard.
          </p>

          <div className="about-features">

            <div className="feature-box">
              <FaGraduationCap className="feature-icon" />
              <div>
                <h4>Smart Learning</h4>
                <p>Organize courses and improve productivity.</p>
              </div>
            </div>

            <div className="feature-box">
              <FaUsers className="feature-icon" />
              <div>
                <h4>Student Community</h4>
                <p>Collaborate and grow with fellow learners.</p>
              </div>
            </div>

            <div className="feature-box">
              <FaBookOpen className="feature-icon" />
              <div>
                <h4>Study Planner</h4>
                <p>Plan daily goals and track your progress.</p>
              </div>
            </div>

            <div className="feature-box">
              <FaAward className="feature-icon" />
              <div>
                <h4>Achieve Success</h4>
                <p>Build consistent study habits with ease.</p>
              </div>
            </div>

          </div>

          {/* Statistics */}
          <div className="about-stats">

            <div className="stat-card">
              <h3>10K+</h3>
              <p>Students</p>
            </div>

            <div className="stat-card">
              <h3>500+</h3>
              <p>Courses</p>
            </div>

            <div className="stat-card">
              <h3>98%</h3>
              <p>Success Rate</p>
            </div>

            <div className="stat-card">
              <h3>24/7</h3>
              <p>Support</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;