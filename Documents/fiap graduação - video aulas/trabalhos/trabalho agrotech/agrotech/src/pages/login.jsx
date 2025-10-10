import { useState } from "react";
import "./login.css"; // seu CSS

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForms = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <h2 id="formTitle">{isLogin ? "Login" : "Cadastro"}</h2>

      {isLogin ? (
        <form id="loginForm" className="active">
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
        </form>
      ) : (
        <form id="registerForm" className="active">
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
        </form>
      )}

      <p
        style={{
          textAlign: "center",
          marginTop: "15px",
          color: "#1db954",
          fontWeight: 500,
        }}
      >
        Conectando você ao cuidado que transforma vidas 💚
      </p>
    </div>
  );
}

export default Login;
