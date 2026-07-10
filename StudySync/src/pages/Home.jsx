import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Features from "../components/Features";
import Testimonial from "../components/Testimonials";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <Features />
      <Testimonial />
    </div>
  );
}

export default Home;

