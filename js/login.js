function toggleForms() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const title = document.getElementById("formTitle");
    // Alternar visibilidade
    if (loginForm.classList.contains("active")) {
        loginForm.classList.remove("active");
        registerForm.classList.add("active");
        title.textContent = "Cadastro";
      } else {
        registerForm.classList.remove("active");
        loginForm.classList.add("active");
        title.textContent = "Login";
      }
      
     }