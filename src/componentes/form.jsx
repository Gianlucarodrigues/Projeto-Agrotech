// src/componentes/Form.jsx
import { useState } from "react";
import "../css/form.css"; // CSS customizado
import Graficos from "./Graficos"; // Importa o componente de gráficos
import Tabela from "./tabela"; // Importa o componente de tabela de dieta

function Form() {
  const [formData, setFormData] = useState({
    nome: "",
    altura: "",
    peso: "",
    genero: "",
  });

  const [formEnviado, setFormEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, altura, peso, genero } = formData;

    if (nome && altura && peso && genero) {
      setFormEnviado(true);
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="form-container">
      {!formEnviado ? (
        <form className="formulario" onSubmit={handleSubmit}>
          <h2 className="tituloForm">Preencha suas informações</h2>

          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite seu nome"
          />

          <label htmlFor="altura">Altura (m):</label>
          <select id="altura" name="altura" value={formData.altura} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="1.60">1.60m</option>
            <option value="1.70">1.70m</option>
            <option value="1.80">1.80m</option>
            <option value="++">++</option>
          </select>

          <label htmlFor="peso">Peso (kg):</label>
          <select id="peso" name="peso" value={formData.peso} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="60">60 kg</option>
            <option value="70">70 kg</option>
            <option value="80">80 kg</option>
            <option value="++">++ kg</option>
          </select>

          <label htmlFor="genero">Gênero:</label>
          <select id="genero" name="genero" value={formData.genero} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="masculino">Homem</option>
            <option value="feminino">Mulher</option>
            <option value="outro">Outro</option>
          </select>

          <button type="submit" className="btnEnviar">Confirmar</button>
        </form>
      ) : (
        <div className="resultado">
          <h2>Formulário enviado com sucesso!</h2>
          <p>Obrigado, {formData.nome}!</p>

          {/* Renderiza o componente de gráficos */}
          <Graficos />

          <Tabela />

          
        </div>
      )}
    </div>
  );
}

export default Form;
