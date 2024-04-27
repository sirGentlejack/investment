import Navbar from "./components/Navbar";
import Home from "./page/Home";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Features />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
