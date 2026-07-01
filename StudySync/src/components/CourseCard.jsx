import "./CourseCard.css";
import { FaStar, FaPlayCircle } from "react-icons/fa";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      {/* Course Icon */}
      <div
        className="course-icon"
        style={{ backgroundColor: course.color }}
      >
        {course.icon}
      </div>

      {/* Category */}
      <span className="course-category">
        {course.category}
      </span>

      {/* Course Title */}
      <h3>{course.title}</h3>

      {/* Rating */}
      <div className="course-rating">
        <FaStar className="star" />
        <span>{course.rating}</span>
      </div>

      {/* Lessons */}
      <p className="lessons">
        <FaPlayCircle />
        {course.lessons} Lessons
      </p>

      {/* Button */}
      <button className="course-btn">
        Enroll Now
      </button>
    </div>
  );
}

export default CourseCard;