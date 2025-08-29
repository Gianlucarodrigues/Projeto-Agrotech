import "../css/header.css";
import Logo from "../assets/logo.png";
function Header() {
  return (
      <header>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <nav className="menu">
          <ul>
            <li className="sobre"><a href="sobre.html">Sobre</a></li>
            <li className="sobre"><a href="como-funciona.html">Como funciona</a></li>
            <li className="sobre"><a href="contatos.html">Contatos</a></li>
          </ul>
        </nav>
        <a href="login.html">
          <button className="btn-entrar">Entrar</button>    
        </a>
      </header>
  );
}

export default Header;
