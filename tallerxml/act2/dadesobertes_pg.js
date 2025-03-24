document.addEventListener("DOMContentLoaded", function() {
    fetch("dadesobertes_pg.json")
        .then(response => response.json())
        .then(data => {
            const meteoContainer = document.getElementById("meteo-info");
            data.forEach(entry => {
                if (entry.versio && entry.versio.variables) {
                    const variables = entry.versio.variables;
                    let content = `
                        <h2>Dia: ${entry.diaPredit}</h2>
                        <p><strong>Estat del cel:</strong> ${variables.estatDelCel}</p>
                        <p><strong>Precipitacions:</strong> ${variables.precipitacions}</p>
                        <p><strong>Temperatures:</strong> ${variables.temperatures}</p>
                        <p><strong>Visibilitat:</strong> ${variables.visibilitat}</p>
                        <p><strong>Vent:</strong> ${variables.vent}</p>
                        <hr>
                    `;
                    meteoContainer.innerHTML += content;
                }
            });
        })
        .catch(error => console.error("Error carregant les dades:", error));
});