import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Features />
      <Testimonials />
    </>
  );
}

export default App;
