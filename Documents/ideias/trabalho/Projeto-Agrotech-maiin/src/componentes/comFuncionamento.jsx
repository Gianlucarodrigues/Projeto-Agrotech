export default function ComoFunciona() {
  const styles = {
    page: {
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "border-box",
      color: "#f5fff8",
        minHeight: "calc(100vh - 72px - 80px)", // subtraindo header e footer
    },
    header: {
      maxWidth: "800px",
      width: "100%",
      textAlign: "center",
      marginBottom: "40px",
    },
    headerTitle: {
      fontSize: "clamp(22px, 2.6vw, 30px)",
      fontWeight: 900,
      color: "#1ed760", // brand-strong
      textShadow: "0 1px 0 rgba(0,0,0,.25)",
    },
    headerText: {
      fontSize: "1.1rem",
      color: "#c9f1dd", // text-dim
      marginTop: "8px",
    },
    etapasContainer: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
    etapas: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "20px",
      width: "100%",
      maxWidth: "1000px",
    },
    passo: {
      background: "linear-gradient(180deg, #232323, #1a1a1a)", // card gradient
      border: "1px solid rgba(255,255,255,.06)",
      borderRadius: "16px", // radius-lg
      boxShadow: "0 18px 50px rgba(0,0,0,.45)", // shadow-lg
      padding: "20px",
      textAlign: "center",
      position: "relative",
    },
    icone: {
      fontSize: "3rem",
      marginBottom: "10px",
    },
    passoTitle: {
      fontSize: "1.3rem",
      fontWeight: 600,
      margin: "10px 0",
      color: "#f5fff8", // text
    },
    passoText: {
      color: "#c9f1dd", // text-dim
      fontSize: "1rem",
    },
    ctaContainer: {
      marginTop: "40px",
      textAlign: "center",
    },
    ctaButton: {
      display: "inline-block",
      background: "linear-gradient(180deg, #1db954, #0fa653)", // brand
      color: "#04180d",
      padding: "12px 24px",
      borderRadius: "12px", // radius-md
      fontWeight: 900,
      textDecoration: "none",
      boxShadow: "0 10px 24px rgba(29,185,84,.18)",
      transition: "filter .18s ease, transform .08s ease, box-shadow .18s ease",
    },
  };

  // Responsividade das etapas (3 colunas em telas >= 820px)
  const etapasStyle = { ...styles.etapas };
  if (typeof window !== "undefined" && window.innerWidth >= 820) {
    etapasStyle.gridTemplateColumns = "repeat(3, 1fr)";
  }

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Como Funciona</h1>
        <p style={styles.headerText}>
          Em poucos passos simples, você descobre como melhorar sua alimentação e ainda economizar.
        </p>
      </div>

      {/* Etapas */}
      <div style={styles.etapasContainer}>
        <div style={etapasStyle}>
          <div style={styles.passo}>
            <div style={styles.icone}>📝</div>
            <h2 style={styles.passoTitle}>Preencha o Formulário</h2>
            <p style={styles.passoText}>
              Informe seus dados básicos, como altura, peso e gênero. Essas informações serão usadas para gerar uma análise personalizada.
            </p>
          </div>

          <div style={styles.passo}>
            <div style={styles.icone}>📊</div>
            <h2 style={styles.passoTitle}>Geramos o Gráfico</h2>
            <p style={styles.passoText}>
              Com base nos dados, o sistema calcula o potencial de economia alimentar e melhoria nutricional, exibindo tudo em um gráfico fácil de entender.
            </p>
          </div>

          <div style={styles.passo}>
            <div style={styles.icone}>✅</div>
            <h2 style={styles.passoTitle}>Visualize os Resultados</h2>
            <p style={styles.passoText}>
              Você descobre quanto pode economizar e como melhorar sua alimentação de forma prática e eficiente.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={styles.ctaContainer}>
        <a
          href="/"
          style={styles.ctaButton}
          onMouseOver={e => (e.currentTarget.style.filter = "brightness(1.05)")}
          onMouseOut={e => (e.currentTarget.style.filter = "brightness(1)")}
          onMouseDown={e => (e.currentTarget.style.transform = "translateY(1px)")}
          onMouseUp={e => (e.currentTarget.style.transform = "translateY(0)")}
        >
          Começar Agora
        </a>
      </div>
    </div>
  );
}
