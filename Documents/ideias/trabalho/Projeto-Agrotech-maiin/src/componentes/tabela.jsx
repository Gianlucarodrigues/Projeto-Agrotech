
// src/componentes/TabelaDieta.jsx

import "../css/graficos.css"; // mantém consistência de container se quiser reutilizar
import "../css/tabela.css";   // estilos específicos da tabela

function tabela() {
  return (
    <div className="graficos-container tabela-container"> 
      <div className="grafico tabela-card">
        <h3 className="tabela-titulo">Plano de Dieta</h3>

        <table className="tabela-dieta">
          <thead>
            <tr>
              <th>Refeição</th>
              <th>Itens</th>
              <th>Porções</th>
              <th>Kcal (aprox.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Café da manhã</td>
              <td>Aveia + Banana + Ovos</td>
              <td>40g + 1 un + 2 un</td>
              <td>~380</td>
            </tr>
            <tr>
              <td>Almoço</td>
              <td>Arroz + Feijão + Frango grelhado + Salada</td>
              <td>150g + 100g + 150g + livre</td>
              <td>~550</td>
            </tr>
            <tr>
              <td>Lanche</td>
              <td>Iogurte natural + Amendoim</td>
              <td>170g + 20g</td>
              <td>~220</td>
            </tr>
            <tr>
              <td>Jantar</td>
              <td>Ovos mexidos + Pão integral + Queijo minas + Salada</td>
              <td>3 un + 2 fatias + 40g + livre</td>
              <td>~480</td>
            </tr>
          </tbody>
        </table>
      
      </div>
    </div>
  );
}

export default tabela;