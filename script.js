const countdownDate = new Date("2023-12-31T23:59:59").getTime();
const timerElement = document.getElementById("timer");

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(x);
        timerElement.innerHTML = "¡El evento ha comenzado!";
    }
};

const x = setInterval(updateCountdown, 1000);

const validCredentials = {
    "usuario@example.com": "contraseña123"
};

document.getElementById("loginButton").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (validCredentials[email] === password) {
        window.location.href = "productos.html";
    } else {
        document.getElementById("error-message").innerText = "Las credenciales son incorrectas.";
    }
});
