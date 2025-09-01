// src/componentes/Graficos.jsx
import"../css/graficos.css"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function Graficos() {
  // Dados artificiais
  const economiaData = [
    { mes: "Janeiro", economia: 120 },
    { mes: "Fevereiro", economia: 150 },
    { mes: "Março", economia: 100 },
    { mes: "Abril", economia: 180 },
    { mes: "Maio", economia: 200 },
  ];

  const alimentacaoData = [
    { tipo: "Proteínas", saudavel: 70 },
    { tipo: "Verduras", saudavel: 50 },
    { tipo: "Frutas", saudavel: 60 },
    { tipo: "Carboidratos", saudavel: 80 },
    { tipo: "Doces", saudavel: 20 },
  ];

  return (
    <div className="graficos-container" style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}>
      <div className="grafico" style={{ flex: "1 1 400px", height: 300 }}>
        <h3 style={{ textAlign: "center", color: "#ffffff", marginBottom: "12px" }}>Quanto você pode economizar</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={economiaData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="economia" fill="#4a90e2" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grafico" style={{ flex: "1 1 400px", height: 300 }}>
        <h3 style={{ textAlign: "center", color: "#ffffff", marginBottom: "12px" }}>Melhoria na alimentação</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={alimentacaoData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tipo" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="saudavel" fill="#ff9f40" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Graficos;
