import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Features from "../components/Features";
import Testimonial from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import About from "../components/About.jsx";
import Pricing from "../components/Pricing/Pricing.jsx";
import Blog from "../components/Blog.jsx";

function Home() {
  return (
    <div>
    <Navbar />
  <Hero />
  <Features />
  <Courses />
  <About />
  <Pricing />
  <Testimonial />
  <Blog />
  <FAQ />
  <CTA />
  <Footer />

    </div>
  );
}

export default Home;

