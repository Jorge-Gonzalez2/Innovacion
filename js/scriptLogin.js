const registerTab = document.getElementById("register-tab");
const loginTab = document.getElementById("login-tab");

const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

const title = document.querySelector(".login-form-box h2");

// Mensaje global
let messageBox = document.createElement("div");
messageBox.id = "message";
messageBox.style.marginBottom = "15px";
messageBox.style.fontSize = "0.95rem";
messageBox.style.color = "#f5c16c";
document.querySelector(".login-form-box").insertBefore(
    messageBox,
    document.querySelector(".form-switch")
);

/* =========================
   SWITCH DE FORMULARIOS
========================= */

function showRegister() {
    registerForm.classList.remove("hidden-form");
    loginForm.classList.add("hidden-form");

    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    title.textContent = "Crear cuenta";
    clearMessage();
}

function showLogin() {
    loginForm.classList.remove("hidden-form");
    registerForm.classList.add("hidden-form");

    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    title.textContent = "Iniciar sesión";
    clearMessage();
}

registerTab.addEventListener("click", showRegister);
loginTab.addEventListener("click", showLogin);

/* Link inferior */
document.getElementById("switch-login-link").addEventListener("click", (e) => {
    e.preventDefault();
    showLogin();
});

/* =========================
   VALIDACIÓN REGISTRO
========================= */

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let valido = true;

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const telefono = document.getElementById("telefono");
    const password = document.getElementById("password");

    limpiarErrores();

    if (nombre.value.trim().length < 4) {
        mostrarError(nombre, "Ingresa un nombre válido");
        valido = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo.value)) {
        mostrarError(correo, "Correo inválido");
        valido = false;
    }

    if (telefono.value.trim().length < 8) {
        mostrarError(telefono, "Número inválido");
        valido = false;
    }

    if (password.value.length < 6) {
        mostrarError(password, "Mínimo 6 caracteres");
        valido = false;
    }

    if (valido) {
        showMessage("Cuenta creada correctamente ✨", "success");
        registerForm.reset();
    }
});

/* =========================
   VALIDACIÓN LOGIN
========================= */

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let valido = true;

    const email = document.getElementById("login-email");
    const pass = document.getElementById("login-password");

    limpiarErrores();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value)) {
        mostrarError(email, "Correo inválido");
        valido = false;
    }

    if (pass.value.length < 6) {
        mostrarError(pass, "Contraseña inválida");
        valido = false;
    }

    if (valido) {
        showMessage("Inicio de sesión exitoso 🚀", "success");
        loginForm.reset();
    }
});

/* =========================
   FUNCIONES AUXILIARES
========================= */

function mostrarError(input, mensaje) {
    input.classList.add("input-error");
    input.parentElement.querySelector(".error").textContent = mensaje;
}

function limpiarErrores() {
    document.querySelectorAll("input").forEach(input => {
        input.classList.remove("input-error");
    });

    document.querySelectorAll(".error").forEach(error => {
        error.textContent = "";
    });
}

function showMessage(text, type = "success") {
    messageBox.textContent = text;

    if (type === "success") {
        messageBox.style.color = "#7CFFB2";
    } else {
        messageBox.style.color = "#ff8d8d";
    }
}

function clearMessage() {
    messageBox.textContent = "";
}