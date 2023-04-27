import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutpage from "./pages/Aboutpage";
import Portfoliopage from "./pages/Portfoliopage";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Aboutpage />} path="/about" />
          <Route element={<Portfoliopage />} path="/portfolio" />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
