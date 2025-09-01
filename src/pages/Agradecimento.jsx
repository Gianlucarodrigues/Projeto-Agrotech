
import { useNavigate } from "react-router-dom";
import "../css/agradecimentos.css"; // ajuste o caminho conforme sua estrutura

function Agradecimentos() {
  const navigate = useNavigate();

  const irParaHome = () => {
    navigate("/"); // Redireciona para a rota principal (Home)
  };

  return (
    <main className="main">
      <h1 className="text">Obrigado pelo contato</h1>
      <p className="paragrafo">Em breve entraremos em contato ;</p>
      <button className="btn" onClick={irParaHome}>
        Home
      </button>
    </main>
  );
}

export default Agradecimentos;
