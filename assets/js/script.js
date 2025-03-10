document.addEventListener("DOMContentLoaded", function () {
    const themeSwitcher = document.getElementById("theme-switcher");
    const themeStylesheet = document.getElementById("theme-stylesheet");
    
    // Cargar el tema almacenado en localStorage
    if (localStorage.getItem("theme") === "dark") {
        themeStylesheet.href = "assets/css/estilos-dark.css";
    }
    
    themeSwitcher.addEventListener("click", function () {
        if (themeStylesheet.href.includes("estilos-light.css")) {
            themeStylesheet.href = "assets/css/estilos-dark.css";
            localStorage.setItem("theme", "dark");
        } else {
            themeStylesheet.href = "assets/css/estilos-light.css";
            localStorage.setItem("theme", "light");
        }
    });
});
