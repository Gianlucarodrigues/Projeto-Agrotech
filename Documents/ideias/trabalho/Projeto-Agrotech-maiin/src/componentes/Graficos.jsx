import "../css/graficos.css";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  ResponsiveContainer, CartesianGrid
} from "recharts";

export default function Graficos() {
  // dados
  const economiaData = [
    { mes: "Jan", economia: 120 },
    { mes: "Fev", economia: 145 },
    { mes: "Mar", economia: 98 },
    { mes: "Abr", economia: 175 },
    { mes: "Mai", economia: 200 },
  ];

  const alimentacaoData = [
    { tipo: "Proteínas", valor: 70 },
    { tipo: "Verduras", valor: 50 },
    { tipo: "Frutas", valor: 60 },
    { tipo: "Carboidratos", valor: 80 },
    { tipo: "Doces", valor: 20 },
  ];

  return (
    <section className="graficos-wrap">
      {/* Card 1 */}
      <div className="grafico-card">
        <h3>Quanto você pode economizar</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={economiaData} barCategoryGap={20}>
            <defs>
              <linearGradient id="barGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1ed760" />
                <stop offset="100%" stopColor="#12b454" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.16)" />
            <XAxis dataKey="mes" tick={{ fill: "#eafff2", fontSize: 12 }} axisLine={{ stroke: "rgba(255,255,255,.18)" }} tickLine={false} />
            <YAxis tick={{ fill: "#eafff2", fontSize: 12 }} axisLine={{ stroke: "rgba(255,255,255,.18)" }} tickLine={false} />
            <Tooltip
              contentStyle={{ background: "#111", border: "1px solid rgba(255,255,255,.12)", borderRadius: 10, color: "#eafff2" }}
              cursor={{ fill: "rgba(255,255,255,.06)" }}
            />
            <Legend wrapperStyle={{ color: "#eafff2" }} />
            <Bar dataKey="economia" name="Economia (R$)" fill="url(#barGreen)" radius={[8, 8, 0, 0]} barSize={42} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Card 2 */}
      <div className="grafico-card">
        <h3>Melhoria na alimentação</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={alimentacaoData} barCategoryGap={20}>
            <defs>
              <linearGradient id="barCyan" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#24e0c2" />
                <stop offset="100%" stopColor="#14b89a" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.16)" />
            <XAxis dataKey="tipo" tick={{ fill: "#eafff2", fontSize: 12 }} axisLine={{ stroke: "rgba(255,255,255,.18)" }} tickLine={false} />
            <YAxis tick={{ fill: "#eafff2", fontSize: 12 }} axisLine={{ stroke: "rgba(255,255,255,.18)" }} tickLine={false} />
            <Tooltip
              contentStyle={{ background: "#111", border: "1px solid rgba(255,255,255,.12)", borderRadius: 10, color: "#eafff2" }}
              cursor={{ fill: "rgba(255,255,255,.06)" }}
            />
            <Legend wrapperStyle={{ color: "#eafff2" }} />
            <Bar dataKey="valor" name="Índice (0-100)" fill="url(#barCyan)" radius={[8, 8, 0, 0]} barSize={42} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
