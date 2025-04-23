// Cambio de color de la barra de navegación
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mostrar saludo personalizado en Inicio
window.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = "Bienvenido a la historia de Calacalí";
});

// Mostrar descripción de imagen en la galería
function showDescription(description) {
    const modal = document.getElementById("modal");
    const desc = document.getElementById("image-description");
    desc.textContent = description;
    modal.style.display = "flex";
}

// Cerrar el cuadro emergente
function closeDescription() {
    document.getElementById("modal").style.display = "none";
}

// Validación de formulario de contacto
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (name === "" || email === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }
    alert("Formulario enviado correctamente.");
    return false;
}
