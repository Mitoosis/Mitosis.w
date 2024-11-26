
const colorStart = { r: 139, g: 97, b: 179 }; //Rosado
const colorEnd = { r: 237, g: 115, b: 8 }; //Naranja

document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; // Posición del scroll
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight; // Altura total desplazable
    const scrollFraction = scrollTop / documentHeight; // Porcentaje del scroll 

    // cambair los valores
    const r = Math.round(colorStart.r + (colorEnd.r - colorStart.r) * scrollFraction);
    const g = Math.round(colorStart.g + (colorEnd.g - colorStart.g) * scrollFraction);
    const b = Math.round(colorStart.b + (colorEnd.b - colorStart.b) * scrollFraction);

    // Aplicar el color de fondo
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});