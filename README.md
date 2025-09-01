# 📌 Projeto React com Rotas e Formulário  

## ✅ O que foi feito  
- Corrigidas todas as **importações** (componentes, imagens e estilos).  
- Configurada a **navegação entre páginas** com `react-router-dom`.  
- Removidos códigos desnecessários (como logos padrão do Vite).  
- Estrutura organizada e **pronta para rodar com `npm run dev`**.  

---

## 📂 Estrutura dos arquivos principais  

### 🔹 `main.jsx` — ponto inicial  
Renderiza o React e ativa o sistema de rotas.  
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

---

### 🔹 `App.jsx` — define as páginas  
Mapeia as rotas e renderiza os componentes correspondentes.  
```jsx
import { Routes, Route } from "react-router-dom";
import Header from "./componentes/header";
import Form from "./componentes/form";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
```

---

### 🔹 `header.jsx` — cabeçalho fixo  
Contém a logo, links de navegação e o botão **Entrar**, que leva para `/login`.  
```jsx
import "../css/header.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="menu">
        <ul>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Como funciona</a></li>
          <li><a href="#">Contatos</a></li>
        </ul>
      </nav>
      <Link to="/login">
        <button className="btn-entrar">Entrar</button>
      </Link>
    </header>
  );
}

export default Header;
```

---

### 🔹 `form.jsx` — formulário de usuário  
Recebe dados, valida e exibe uma planilha após o envio.  
```jsx
import { useState } from "react";
import Swal from "sweetalert2";
import "../css/form.css";
import planilhaImg from "../assets/planilha.jpg";

function Form() {
  const [formData, setFormData] = useState({ nome: "", altura: "", peso: "", genero: "" });
  const [formEnviado, setFormEnviado] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { nome, altura, peso, genero } = formData;
    if (nome && altura && peso && genero) {
      setFormEnviado(true);
    } else {
      Swal.fire({
        title: "Campos incompletos!",
        text: "Por favor, preencha todos os campos.",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
        background: "#2c2c3c",
        color: "#ffffff",
      });
    }
  }

  return (
    <main className="conteudoPrincipal">
      {!formEnviado ? (
        <form onSubmit={handleSubmit}>
          <input name="nome" value={formData.nome} onChange={handleChange} />
          {/* demais campos: altura, peso, gênero */}
          <button type="submit">Confirmar</button>
        </form>
      ) : (
        <div>
          <h2>Sua planilha baseada em seus dados:</h2>
          <img src={planilhaImg} alt="planilha" />
        </div>
      )}
    </main>
  );
}

export default Form;
```

---

### 🔹 `login.jsx` — tela de login/cadastro  
Tela já funcional, permite alternar entre login e cadastro.  

---

## 📦 Instalação  

Clone o repositório e instale as dependências:  
```bash
npm install
```

Instale também a biblioteca de rotas:  
```bash
npm install react-router-dom
```

---

## ▶️ Como rodar  
Execute o projeto em modo de desenvolvimento:  
```bash
npm run dev
```

---

## 🟢 Resultado  
O projeto está com:  
- Rotas configuradas (`/` e `/login`)  
- Componentes organizados  
- Código simples e fácil de manter  

---

## 🚀 Próximos passos sugeridos  
- Criar novas páginas (`/sobre`, `/contato`)  
- Armazenar dados no **localStorage** ou em um **backend**  
- Melhorar o visual com **Tailwind**, **Bootstrap** ou outro framework  
