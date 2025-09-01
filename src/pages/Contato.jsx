import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/contato.css"; // ajuste o caminho conforme sua estrutura

function Contato() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    mensagem: ""
  });

  const [formEnviado, setFormEnviado] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const nomePattern = /^(\S+\s+\S+.*)$/;

    if (!nomePattern.test(formData.nomeCompleto)) {
      newErrors.nomeCompleto = "Informe o nome completo (nome e sobrenome).";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Informe um e-mail válido.";
    }

    if (formData.mensagem.length < 30 || formData.mensagem.length > 500) {
      newErrors.mensagem = "A descrição deve ter entre 30 e 500 caracteres.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setFormEnviado(true);
      // Aqui você pode enviar os dados para uma API
      console.log("Formulário enviado:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  if (formEnviado) {
    return (
      <section className="container mt-5">
        <h2>Formulário enviado com sucesso!</h2>
        <p>Obrigado, {formData.nomeCompleto}!</p>
      </section>
    );
  }

  return (
    <section className="container mt-5">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Nome Completo */}
        <div className="mb-3">
          <label htmlFor="nomeCompleto" className="form-label">Nome Completo:</label>
          <input
            type="text"
            className={`form-control ${errors.nomeCompleto ? "is-invalid" : ""}`}
            id="nomeCompleto"
            name="nomeCompleto"
            placeholder="Ex: Nome e Sobrenome"
            value={formData.nomeCompleto}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">{errors.nomeCompleto}</div>
        </div>

        {/* E-mail */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail:</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            placeholder="Ex: seuemail@exemplo.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>

        {/* Mensagem */}
        <div className="mb-3">
          <label htmlFor="mensagem" className="form-label">Descrição da Mensagem</label>
          <textarea
            className={`form-control ${errors.mensagem ? "is-invalid" : ""}`}
            id="mensagem"
            name="mensagem"
            rows="5"
            placeholder="Digite sua mensagem (30 a 500 caracteres)"
            value={formData.mensagem}
            onChange={handleChange}
            required
          ></textarea>
          <div className="invalid-feedback">{errors.mensagem}</div>
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </section>
  );
}

export default Contato;
