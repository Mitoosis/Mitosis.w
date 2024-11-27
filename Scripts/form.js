
 document.getElementById("miFormulario").addEventListener("submit", function(e) {
    e.preventDefault();


    const nombre = document.getElementById("name-box__name").value;
    const numero = document.getElementById("phone-box__phone").value;
    const ciudad = document.getElementById("city-box__city").value;

    const datos = new URLSearchParams({
        nombre: nombre,
        numero: numero,
        select: ciudad
    });

    fetch("https://script.google.com/macros/s/AKfycbyyj4I5-oOwMx_jlBdVHsHw5uH9fR5NRT_Kgqo3Ylk8_O17A3TId_U6_Z6b-YGgi9DlGg/exec", {
        method: "POST",
        body: datos
    })
    .then(response => response.text())
    .then(() => {

        window.location.href = "done.html";
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Ocurrió un error. Por favor, inténtalo nuevamente.");
    });
});
