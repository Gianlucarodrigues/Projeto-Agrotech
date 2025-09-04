import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../css/sobre.css";

// use estes se o layout da sua app NÃO renderiza Header/Footer globalmente
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

export default function Sobre() {
  return (
    <>
      {/* Se o Header já é renderizado no App.jsx, remova esta linha */}
      <Header />

      <main className="sobre-page">
        <div className="sobre-hero">
          <h1>Sobre nós</h1>

          <Link to="/" className="btn-voltar">
            <FaArrowLeft /> <span>Voltar</span>
          </Link>
        </div>

        <section className="sobre-grid">
          <article className="sobre-card">
            <h3>• Quem somos</h3>
            <p>
              A Agrotech nasceu do propósito de combater dois dos maiores
              desafios do nosso tempo: o desperdício de alimentos e a fome.
            </p>
            <p>
              Somos um time apaixonado por tecnologia, sustentabilidade e impacto
              social. Acreditamos que, por meio da inovação e da educação,
              podemos transformar a relação das pessoas com a comida — e, assim,
              transformar o mundo.
            </p>
          </article>

          <article className="sobre-card">
            <h3>• Nossa missão</h3>
            <p>
              Promover o acesso a uma alimentação saudável, sustentável e
              acessível para todos, conectando tecnologia, agricultura urbana e
              comércio local.
            </p>
          </article>

          <article className="sobre-card">
            <h3>• O que fazemos</h3>
            <p>Desenvolvemos uma plataforma que une:</p>
            <ul>
              <li>
                <strong>Educação alimentar:</strong> para que todos possam fazer
                escolhas melhores.
              </li>
              <li>
                <strong>Aproveitamento de alimentos:</strong> receitas e dicas
                práticas para reduzir o desperdício.
              </li>
              <li>
                <strong>Cultivo doméstico:</strong> hortas em casa, para
                aproximar as pessoas da natureza e do alimento.
              </li>
            </ul>
          </article>
        </section>
      </main>

    </>
  );
}
