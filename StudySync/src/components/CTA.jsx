import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">

        <div className="cta-content">
          <span className="cta-tag">🚀 Start Learning Smarter</span>

          <h2>
            Ready to Transform
            <br />
            Your Learning Journey?
          </h2>

          <p>
            Join thousands of students using StudySync to organize their
            courses, manage daily tasks, track progress, and achieve academic
            success—all from one beautiful dashboard.
          </p>

          <div className="cta-buttons">
            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              Explore Features
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CTA;