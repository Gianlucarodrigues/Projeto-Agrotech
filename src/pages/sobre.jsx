import React from "react";
import "./sobre.css" // Mantém seu CSS customizado

export default function Sobre() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Conteúdo Principal */}
      <main className="container-fluid">
        <h1 className="text-center mb-4 bg-dark rounded text-white py-3">
          Sobre Nós
        </h1>

        <div className="container my-4 custom-section0 d-flex justify-content-start">
          <a href="index.html" className="btn btn-outline-primary">
            <i className="fa fa-arrow-left me-2"></i>
          </a>
        </div>

        <div className="row">
          <section className="col-md-3 custom-section1">
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
          </section>

          <section className="col-md-3 custom-section2">
            <h3>• Nossa missão</h3>
            <p>
              Promover o acesso a uma alimentação saudável, sustentável e
              acessível para todos, conectando tecnologia, agricultura urbana e
              comércio local.
            </p>
          </section>

          <section className="col-md-3 custom-section3">
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
          </section>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-dark text-white text-center py-4 mt-auto">
        <div className="mb-3">
          <a href="#" className="text-white me-3">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#" className="text-white me-3">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="#" className="text-white me-3">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-youtube fa-lg"></i>
          </a>
        </div>
        <p className="mb-0">
          &copy; 2025 | Designed by <strong>Agrotech</strong>
        </p>
      </footer>
    </div>
  );
}
