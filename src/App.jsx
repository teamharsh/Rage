import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <Router>
      <div className="bg-black h-auto text-white">
        <Home />
      </div>
    </Router>
  );
}