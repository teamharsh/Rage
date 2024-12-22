import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";

export default function App() {
  return (
    <Router>
      <div className="bg-black h-auto text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </Router>
  );
}