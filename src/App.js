import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutpage from "./pages/Aboutpage";
import Portfoliopage from "./pages/Portfoliopage";
import Servicespage from "./pages/Servicespage";
import Landingpage from "./pages/Landingpage";
import Blogpage from "./pages/Blogpage";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route element={<Homepage />} path="*" />
          <Route element={<Homepage />} path="/" />
          <Route element={<Aboutpage />} path="/about" />
          <Route element={<Portfoliopage />} path="/portfolio" />
          <Route element={<Servicespage />} path="/services" />
          <Route element={<Landingpage />} path="/landingpage" />
          <Route element={<Blogpage />} path="/blog" />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
