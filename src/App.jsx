import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./Pages/AboutUs";
import Footer from "./components/Footer";
import WhyUs from "./Pages/WhyUs";
import CaseStudies from "./Pages/CaseStudies";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <Router>
      <Navbar />

      {/* Core Routing Mapping Matrix */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;