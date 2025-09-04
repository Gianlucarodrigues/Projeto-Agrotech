// src/pages/Contato.jsx
import { useState } from "react";
import "../css/contato.css";

export default function Contato() {
  const [data, setData] = useState({ nome:"", email:"", mensagem:"" });
  const [errors, setErrors] = useState({});
  const [ok, setOk] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setData(d => ({ ...d, [name]: value }));
    setErrors(e => ({ ...e, [name]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!/^(\S+\s+\S+.*)$/.test(data.nome)) e.nome = "Informe nome e sobrenome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "E-mail inválido.";
    if (data.mensagem.trim().length < 10) e.mensagem = "Escreva pelo menos 10 caracteres.";
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    // sucesso
    setData({ nome:"", email:"", mensagem:"" });
    setOk(true);
    setTimeout(() => setOk(false), 3500);
  };

  return (
    <main className="contato-page">
      <section className="contato-card">
        <h1>Contato</h1>
        {ok && <div className="sucesso">Mensagem enviada com sucesso! ✅</div>}

        <form className="contato-form" onSubmit={onSubmit} noValidate>
          <div className="campo">
            <label htmlFor="nome">Nome completo</label>
            <input id="nome" name="nome" placeholder="Maria Silva"
                   value={data.nome} onChange={onChange} aria-invalid={!!errors.nome}/>
            {errors.nome && <span className="erro">{errors.nome}</span>}
          </div>

          <div className="campo">
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" placeholder="voce@exemplo.com"
                   value={data.email} onChange={onChange} aria-invalid={!!errors.email}/>
            {errors.email && <span className="erro">{errors.email}</span>}
          </div>

          <div className="campo campo--full">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows="6"
                      placeholder="Digite sua mensagem..."
                      value={data.mensagem} onChange={onChange} aria-invalid={!!errors.mensagem}/>
            {errors.mensagem && <span className="erro">{errors.mensagem}</span>}
          </div>

          <button className="btn-enviar campo--full" type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
}
