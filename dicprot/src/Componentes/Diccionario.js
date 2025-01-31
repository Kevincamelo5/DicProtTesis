const stringSimilarity = require("string-similarity");

const productos = ["boton", "barra de busqueda", "form", "card", "input", "select", "checkbox", "radio", "switch", "slider", "menu", "modal", "tooltip", "popover", "alert", "toast", "snackbar", "dialog", "drawer", "table", "list", "grid", "carousel", "stepper", "pagination", "tabs", "accordion", "wizard", "progress", "spinner", "chip"];
const palabrasClave = ["boton", "barra de busqueda", "form", "card", "input", "select", "checkbox", "radio", "switch", "slider", "menu", "modal", "tooltip", "popover", "alert", "toast", "snackbar", "dialog", "drawer", "table", "list", "grid", "carousel", "stepper", "pagination", "tabs", "accordion", "wizard", "progress", "spinner", "chip"];
const umbralSimilitud = 0.8; // 80% de similitud

// Filtrar productos
const resultado = productos.filter((producto) => {
    return !palabrasClave.some((palabra) => {
        const similitud = stringSimilarity.compareTwoStrings(producto, palabra);
        return similitud >= umbralSimilitud;
    });
});

console.log("Productos después del filtro:", resultado);
