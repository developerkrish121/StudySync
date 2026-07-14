import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Features from "../components/Features";
import Testimonial from "../components/Testimonials";

import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
    <Navbar />
  <Hero />
  <Features />
  <Courses />
  <Testimonial />
  <FAQ />
  <CTA />
  <Footer />

    </div>
  );
}

export default Home;

