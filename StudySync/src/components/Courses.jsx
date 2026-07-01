import "./Courses.css";
import CourseCard from "./CourseCard";
import {
  FaReact,
  FaPython,
  FaJava,
  FaCode,
  FaLaptopCode,
  FaDatabase,
} from "react-icons/fa";

function Courses() {
  const courses = [
    {
      id: 1,
      icon: <FaReact />,
      title: "React Mastery",
      category: "Frontend",
      lessons: 42,
      rating: "4.9",
      color: "#61DBFB",
    },
    {
      id: 2,
      icon: <FaCode />,
      title: "DSA in Java",
      category: "Programming",
      lessons: 80,
      rating: "4.8",
      color: "#FF6B6B",
    },
    {
      id: 3,
      icon: <FaPython />,
      title: "Python Bootcamp",
      category: "Programming",
      lessons: 55,
      rating: "4.9",
      color: "#FFD43B",
    },
    {
      id: 4,
      icon: <FaLaptopCode />,
      title: "Web Development",
      category: "Full Stack",
      lessons: 70,
      rating: "4.8",
      color: "#7C3AED",
    },
    {
      id: 5,
      icon: <FaJava />,
      title: "Java Fundamentals",
      category: "Backend",
      lessons: 50,
      rating: "4.7",
      color: "#F89820",
    },
    {
      id: 6,
      icon: <FaDatabase />,
      title: "SQL & Databases",
      category: "Database",
      lessons: 35,
      rating: "4.8",
      color: "#10B981",
    },
  ];

  return (
    <section className="courses" id="courses">
      <div className="courses-container">
        <h2>Explore Our Popular Courses</h2>

        <p className="courses-subtitle">
          Learn the most in-demand skills with structured courses, hands-on
          projects, and expert guidance.
        </p>

        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;