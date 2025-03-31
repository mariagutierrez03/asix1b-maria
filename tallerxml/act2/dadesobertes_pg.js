document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("diaSelect");
    const output = document.getElementById("output");

    fetch("dadesobertes_pg.json")
        .then(response => response.json())
        .then(data => {
            // Omplim el `select` amb les dates disponibles
            data.forEach((previsio, index) => {
                let option = document.createElement("option");
                option.value = index;
                option.textContent = previsio.diaPredit;
                select.appendChild(option);
            });

            // Funció per mostrar la previsió meteorològica
            function mostrarPrevisio(index) {
                let previsio = data[index];
                let variables = previsio.variables;
                output.innerHTML = `
                    <p><strong>Dia:</strong> ${previsio.diaPredit}</p>
                    <p><strong>Estat del cel:</strong> ${variables.estatDelCel}</p>
                    <p><strong>Precipitacions:</strong> ${variables.precipitacions}</p>
                    <p><strong>Temperatures:</strong> ${variables.temperatures}</p>
                    <p><strong>Visibilitat:</strong> ${variables.visibilitat}</p>
                    <p><strong>Vent:</strong> ${variables.vent}</p>
                `;
            }

            // Mostrem la previsió per defecte (primer dia)
            mostrarPrevisio(0);

            // Actualitzem la previsió quan es canviï el `select`
            select.addEventListener("change", (event) => {
                mostrarPrevisio(event.target.value);
            });
        })
        .catch(error => {
            output.innerHTML = `Error: No s'han pogut carregar les dades.`;
            console.error("Error carregant JSON:", error);
        });
});
