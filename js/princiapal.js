document.addEventListener("DOMContentLoaded", function () {
  const nome = document.getElementById("nome");
  const altura = document.getElementById("altura");
  const peso = document.getElementById("peso");
  const genero = document.getElementById("genero");
  const botao = document.getElementById("btn-confirmar");
  const formulario = document.getElementById("formulario");
  const resultado = document.getElementById("resultado");
  
  botao.addEventListener("click", function () {
    if (nome.value !== "" && altura.value !=="" && peso.value !== "" && genero.value !== "" ) {
      formulario.style.display = "none";

      resultado.style.display = "block";
      resultado.innerHTML = `
        <h2 style="
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          color: white;
          font-size: 1.5rem;
          margin-bottom: 20px;
          text-align: center;
        ">Sua planilha baseada em seus dados:</h2>
        <img src="../imgs/planilha.jpg" style="max-width: 800px; height: auto; border-radius: 20px;">
      `;
    } else {
      Swal.fire({
        title: 'Campos incompletos!',
        text: 'Por favor, preencha todos os campos antes de continuar.',
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6',
        background: '#2c2c3c',
        color: '#ffffff'
      });
    }
  });
});