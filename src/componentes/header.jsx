import "../css/header.css";
import { Link } from "react-router-dom"; // importante para rotas
import Logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <nav className="menu">
        <ul>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/como-funciona">Como funciona</Link></li>
          <li><Link to="/contatos">Contatos</Link></li>
        </ul>
      </nav>

      <Link to="/login">
        <button className="btn-entrar">Entrar</button>
      </Link>
    </header>
  );
}

export default Header;

