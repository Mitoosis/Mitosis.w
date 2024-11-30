async function validarNickname() {
    const nickname = document.getElementById("nickname").value;
    const response = await fetch(`https://script.google.com/macros/s/AKfycbyvbHd_KnhISkqJVD84QJog_anraIl7GdBN61NdMO3D9VitjTGaF0QO5sMNRHgfoZB9Ew/exec?nickname=${nickname}`);
    const result = await response.json();

    if (result.exists) {
        window.location.href = "../Pages/gallery.html";
        // Redirigir o continuar con el flujo
    } else {
        alert("El nickname no existe. Inténtalo de nuevo.");
    }
}