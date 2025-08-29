import { useState } from "react";
import Swal from "sweetalert2"; // instale com: npm install sweetalert2
import "./form.css";
import planilhaImg from "../assets/planilha.jpg"

function Form() {
  const [formData, setFormData] = useState({
    nome: "",
    altura: "",
    peso: "",
    genero: "",
  });

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
        text: "Por favor, preencha todos os campos antes de continuar.",
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
        <form id="formulario" className="formulario" onSubmit={handleSubmit}>
          <h2 className="mb-4">Preencha suas informações</h2>

          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="form-control"
            placeholder="Nome"
            required
            value={formData.nome}
            onChange={handleChange}
          />

          <label htmlFor="altura">Altura (m):</label>
          <select
            id="altura"
            name="altura"
            className="form-select"
            required
            value={formData.altura}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="1.60">1.60m</option>
            <option value="1.70">1.70m</option>
            <option value="1.80">1.80m</option>
            <option value="++">++</option>
          </select>

          <label htmlFor="peso">Peso (kg):</label>
          <select
            id="peso"
            name="peso"
            className="form-select"
            required
            value={formData.peso}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="60">60 kg</option>
            <option value="70">70 kg</option>
            <option value="80">80 kg</option>
            <option value="++">++ kg</option>
          </select>

          <label htmlFor="genero">Gênero:</label>
          <select
            id="genero"
            name="genero"
            className="form-select"
            required
            value={formData.genero}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="masculino">Homem</option>
            <option value="feminino">Mulher</option>
            <option value="outro">Outro</option>
          </select>

          <button type="submit" id="btn-confirmar" className="btn btn-primary">
            Confirmar
          </button>
        </form>
      ) : (
        <div id="resultado">
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              color: "white",
              fontSize: "1.5rem",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Sua planilha baseada em seus dados:
          </h2>
          <img src={planilhaImg} alt="planilha" />
        </div>
      )}
    </main>
  );
}

export default Form;
                    