import { useState } from "react";
import "../css/login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForms = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <h2 id="formTitle">{isLogin ? "Login" : "Cadastro"}</h2>

      <form className={isLogin ? "active" : ""}>
        {isLogin ? (
          <>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Senha" required />
            <button type="submit">Entrar</button>
            <div className="toggle">
              <p>
                Não tem uma conta?{" "}
                <a href="#" onClick={toggleForms}>
                  Cadastre-se
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Senha" required />
            <button type="submit">Cadastrar</button>
            <div className="toggle">
              <p>
                Já tem uma conta?{" "}
                <a href="#" onClick={toggleForms}>
                  Fazer login
                </a>
              </p>
            </div>
          </>
        )}
      </form>

      <p className="footer-text">
        Conectando você ao cuidado que transforma vidas 💚
      </p>
    </div>
  );
}

export default Login;
