
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

    fetch("https://script.google.com/macros/s/AKfycby68P2huLrhHagPqgqlorqyPLx1rlCt5_AuZjYy6WVV7liskSKhSrm0EfGz5mV5wHwWEg/exec", {
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
