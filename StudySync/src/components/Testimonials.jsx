import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      image: "https://i.pravatar.cc/150?img=11",
      name: "Rahul Sharma",
      role: "Frontend Developer",
      review:
        "StudySync completely changed the way I learn. The courses are well structured and easy to follow.",
    },
    {
      id: 2,
      image: "https://i.pravatar.cc/150?img=32",
      name: "Priya Verma",
      role: "UI/UX Designer",
      review:
        "I love the clean interface and progress tracking. It keeps me motivated every day.",
    },
    {
      id: 3,
      image: "https://i.pravatar.cc/150?img=15",
      name: "Aman Gupta",
      role: "Software Engineer",
      review:
        "The mentors and interactive lessons helped me improve my skills much faster than before.",
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2>What Our Students Say</h2>
          <p>
            Thousands of learners trust StudySync to achieve their learning
            goals.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              image={item.image}
              name={item.name}
              role={item.role}
              review={item.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;