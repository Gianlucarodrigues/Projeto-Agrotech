// src/componentes/Form.jsx
import { useState, useEffect } from "react";
import "../css/form.css";
import Graficos from "./Graficos";
import Tabela from"./tabela";

export default function Form() {
  const [formData, setFormData] = useState({
    nome: "",
    altura: "",
    peso: "",
    genero: "",
  });
  const [formEnviado, setFormEnviado] = useState(false);
  const [erros, setErros] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // limpando erro do campo editado
    setErros((prev) => ({ ...prev, [name]: undefined }));
  };

  const validar = () => {
    const e = {};
    if (!formData.nome.trim()) e.nome = "Informe seu nome.";
    if (!formData.altura || formData.altura === "++") e.altura = "Selecione sua altura.";
    if (!formData.peso || formData.peso === "++") e.peso = "Selecione seu peso.";
    if (!formData.genero) e.genero = "Selecione o gênero.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eVal = validar();
    setErros(eVal);
    if (Object.keys(eVal).length) return;

    setFormEnviado(true);
  };

  // sobe a página quando mostrar o resultado
  useEffect(() => {
    if (formEnviado) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [formEnviado]);

  return (
    <div className="form-container">
      {!formEnviado ? (
        <form className="formulario" onSubmit={handleSubmit} noValidate>
          <h2 className="tituloForm campo--full">Preencha suas informações</h2>

          {/* Nome (full width) */}
          <div className="campo campo--full">
            <label htmlFor="nome">Nome:</label>
            <input
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              value={formData.nome}
              onChange={handleChange}
              aria-invalid={!!erros.nome}
            />
            {erros.nome && <span className="erro">{erros.nome}</span>}
          </div>

          {/* Altura */}
          <div className="campo">
            <label htmlFor="altura">Altura (m):</label>
            <select
              id="altura"
              name="altura"
              value={formData.altura}
              onChange={handleChange}
              aria-invalid={!!erros.altura}
            >
              <option value="" disabled>Selecione</option>
              <option value="1.50">1.50 m</option>
              <option value="1.60">1.60 m</option>
              <option value="1.70">1.70 m</option>
              <option value="1.80">1.80 m</option>
              <option value="1.90">1.90 m</option>
              <option value="++">Outro</option>
            </select>
            {erros.altura && <span className="erro">{erros.altura}</span>}
          </div>

          {/* Peso */}
          <div className="campo">
            <label htmlFor="peso">Peso (kg):</label>
            <select
              id="peso"
              name="peso"
              value={formData.peso}
              onChange={handleChange}
              aria-invalid={!!erros.peso}
            >
              <option value="" disabled>Selecione</option>
              <option value="50">50 kg</option>
              <option value="60">60 kg</option>
              <option value="70">70 kg</option>
              <option value="80">80 kg</option>
              <option value="90">90 kg</option>
              <option value="100">100 kg</option>
              <option value="++">Outro</option>
            </select>
            {erros.peso && <span className="erro">{erros.peso}</span>}
          </div>

          {/* Gênero (full width) */}
          <div className="campo campo--full">
            <label htmlFor="genero">Gênero:</label>
            <select
              id="genero"
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              aria-invalid={!!erros.genero}
            >
              <option value="" disabled>Selecione</option>
              <option value="masculino">Homem</option>
              <option value="feminino">Mulher</option>
              <option value="outro">Outro</option>
            </select>
            {erros.genero && <span className="erro">{erros.genero}</span>}
          </div>

          <button type="submit" className="btnEnviar campo--full">Confirmar</button>
        </form>
      ) : (
        <div className="resultado">
          <h2>Formulário enviado com sucesso!</h2>
          <p>Obrigado, {formData.nome}!</p>
          
          <Graficos />
          <Tabela />
        </div>
        
      )}
      
    </div>
  );
}
