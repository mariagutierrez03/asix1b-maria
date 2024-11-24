function canviarEstils(id) {
    var seccio = document.getElementById(id);
    // Canviar els estils per destacar la secció
    seccio.style.backgroundColor = '#262729'; // Fons gris clar
    seccio.style.color = '#02d7f7'; // Canviar el color de la lletra

    // Mostrar el text ocult
    var textOcult = document.getElementById('textOcult' + id.charAt(0).toUpperCase() + id.slice(1));
    if (textOcult) {
        textOcult.style.display = 'block';
    }
}

function restaurarEstils(id) {
    var seccio = document.getElementById(id);
    // Restaurar els estils originals
    seccio.style.backgroundColor = ''; // Fons original
    seccio.style.color = ''; // Color original de la lletra

    // Ocultar el text de nou
    var textOcult = document.getElementById('textOcult' + id.charAt(0).toUpperCase() + id.slice(1));
    if (textOcult) {
        textOcult.style.display = 'none';
    }
}