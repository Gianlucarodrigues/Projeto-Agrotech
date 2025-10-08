import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Contato from "./pages/Contato"

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contatos" element={< Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
