import Navbar from "./components/Navbar";
import Home from "./page/Home";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Contact from "./page/Contact";
import Investment from "./page/Investment";
import AboutUs from "./page/AboutUs";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Features />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
