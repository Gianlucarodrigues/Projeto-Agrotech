import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../css/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="social">
          <a aria-label="Facebook" href="#"><FaFacebook /></a>
          <a aria-label="Instagram" href="#"><FaInstagram /></a>
          <a aria-label="Twitter/X" href="#"><FaTwitter /></a>
          <a aria-label="YouTube" href="#"><FaYoutube /></a>
        </div>

        <p className="copy">
          &copy; {year} | Designed by <strong>Agrotech</strong>
        </p>
      </div>
    </footer>
  );
}
