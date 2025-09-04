import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

export default function Login() {
  
  const navigate = useNavigate();

  // caminho da Home (use "/" se for a raiz)
  const HOME_PATH = "/";

  // credenciais válidas
  const VALID_EMAIL = "teste@gmail.com";
  const VALID_SENHA = "12345";

  const [isLogin, setIsLogin] = useState(true);
  const [credenciais, setCredenciais] = useState({ email: "", senha: "" });
  const [cadastro, setCadastro] = useState({ nome: "", email: "", senha: "" });

  const [erroMsg, setErroMsg] = useState("");
  const [erroCampos, setErroCampos] = useState({ email: false, senha: false });
  const [tremer, setTremer] = useState(false);

  const alternarForm = (e) => {
    e.preventDefault();
    setIsLogin((v) => !v);
    setErroMsg("");
    setErroCampos({ email: false, senha: false });
  };

  const onChangeLogin = (e) => {
    const { name, value } = e.target;
    setCredenciais((c) => ({ ...c, [name]: value }));
    setErroMsg("");
    setErroCampos({ email: false, senha: false });
  };

  const onChangeCadastro = (e) => {
    const { name, value } = e.target;
    setCadastro((c) => ({ ...c, [name]: value }));
  };

  const enviarLogin = (e) => {
    e.preventDefault();

    const ok =
      credenciais.email.trim().toLowerCase() === VALID_EMAIL &&
      credenciais.senha === VALID_SENHA;

    if (!ok) {
      setErroMsg("E-mail ou senha inválidos.");
      setErroCampos({ email: true, senha: true });
      setCredenciais((c) => ({ ...c, senha: "" })); // limpa a senha
      setTremer(true);
      setTimeout(() => setTremer(false), 350); // animação de erro
      return; // ❌ nega acesso
    }

    // ✅ acesso permitido
    setErroMsg("");
    setErroCampos({ email: false, senha: false });
    setCredenciais({ email: "", senha: "" });
    navigate(HOME_PATH);
  };

  const enviarCadastro = (e) => {
    e.preventDefault();
    // sua chamada de API aqui...
    setCadastro({ nome: "", email: "", senha: "" });
    setIsLogin(true);
  };

  return (
    <div className="container">
      <h2>Login</h2>

      {/* LOGIN */}
      <form
        className={`${isLogin ? "active" : ""} ${tremer ? "shake" : ""}`}
        onSubmit={enviarLogin}
        noValidate
      >
        <div className={`input-group ${erroCampos.email ? "input-error" : ""}`}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="teste@gmail.com"
            value={credenciais.email}
            onChange={onChangeLogin}
            aria-invalid={erroCampos.email}
          />
        </div>

        <div className={`input-group ${erroCampos.senha ? "input-error" : ""}`}>
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            name="senha"
            type="password"
            placeholder="12345"
            value={credenciais.senha}
            onChange={onChangeLogin}
            aria-invalid={erroCampos.senha}
          />
        </div>

        {erroMsg && <div className="error-text" role="alert">{erroMsg}</div>}

        <button type="submit">Entrar</button>
      </form>

      {/* CADASTRO (opcional) */}
      <form className={!isLogin ? "active" : ""} onSubmit={enviarCadastro} noValidate>
        <div className="input-group">
          <label htmlFor="nome">Nome completo</label>
          <input id="nome" name="nome" value={cadastro.nome} onChange={onChangeCadastro} />
        </div>
        <div className="input-group">
          <label htmlFor="emailCadastro">Email</label>
          <input id="emailCadastro" name="email" type="email" value={cadastro.email} onChange={onChangeCadastro} />
        </div>
        <div className="input-group">
          <label htmlFor="senhaCadastro">Senha</label>
          <input id="senhaCadastro" name="senha" type="password" value={cadastro.senha} onChange={onChangeCadastro} />
        </div>
        <button type="submit">Criar conta</button>
      </form>

      <div className="toggle">
        {isLogin ? (
          <>Não tem uma conta? <a href="#" onClick={alternarForm}>Cadastre-se</a></>
        ) : (
          <>Já tem conta? <a href="#" onClick={alternarForm}>Entrar</a></>
        )}
      </div>

      <p className="footer-text">Conectando você ao cuidado que transforma vidas 💚</p>
    </div>
  );
}
