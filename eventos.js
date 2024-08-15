const saludar = document.querySelector(".saludar");

saludar.addEventListener("click", () => {
    alert("Hola! Soy el div")
});

const saludarButton = document.querySelector("#saludar");

saludarButton.addEventListener("click", (event) => {
    event.stopPropagation();
    alert("Hola!")
});