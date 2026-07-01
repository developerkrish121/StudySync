import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import WhyChoose from "./components/WhyChoose";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <WhyChoose/>
    </>
  );
}

export default App;
