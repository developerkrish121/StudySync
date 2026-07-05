import "./CourseSection.css";
import { FaPlayCircle } from "react-icons/fa";

const courses = [
  {
    title: "React Masterclass",
    lessons: "24 Lessons",
    progress: "70%",
  },
  {
    title: "Java DSA",
    lessons: "40 Lessons",
    progress: "45%",
  },
  {
    title: "Machine Learning",
    lessons: "18 Lessons",
    progress: "85%",
  },
];

const CourseSection = () => {
  return (
    <section className="course-section">
      <h2>Continue Learning</h2>

      <div className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <FaPlayCircle className="play-icon" />

            <h3>{course.title}</h3>
            <p>{course.lessons}</p>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: course.progress }}
              ></div>
            </div>

            <span>{course.progress}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;