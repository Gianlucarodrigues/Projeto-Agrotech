
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../css/footer.css"; // seu CSS


export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="mb-3">
        <a href="#" className="text-white me-3"><FaFacebook size={24} /></a>
        <a href="#" className="text-white me-3"><FaInstagram size={24} /></a>
        <a href="#" className="text-white me-3"><FaTwitter size={24} /></a>
        <a href="#" className="text-white"><FaYoutube size={24} /></a>
      </div>
      <p className="mb-0">&copy; 2025 | Designed by <strong>Agrotech</strong></p>
    </footer>
  );
}
