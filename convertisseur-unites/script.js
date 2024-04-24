function convert() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;
    let inputInMeters; // Valeur d'entrée convertie en mètres
    let result; // Résultat de la conversion

    // Convertir l'entrée en mètres
    switch (inputUnit) {
        case "kilometers": inputInMeters = inputValue * 1000; break;
        case "hectometers": inputInMeters = inputValue * 100; break;
        case "decameters": inputInMeters = inputValue * 10; break;
        case "meters": inputInMeters = inputValue; break;
        case "decimeters": inputInMeters = inputValue * 0.1; break;
        case "centimeters": inputInMeters = inputValue * 0.01; break;
        case "millimeters": inputInMeters = inputValue * 0.001; break;
        default: inputInMeters = inputValue; // default to meters if unknown
    }

    // Convertir les mètres en unité de sortie
    switch (outputUnit) {
        case "kilometers": result = inputInMeters / 1000; break;
        case "hectometers": result = inputInMeters / 100; break;
        case "decameters": result = inputInMeters / 10; break;
        case "meters": result = inputInMeters; break;
        case "decimeters": result = inputInMeters * 10; break;
        case "centimeters": result = inputInMeters * 100; break;
        case "millimeters": result = inputInMeters * 1000; break;
        default: result = inputInMeters; // default to meters if unknown
    }

    document.getElementById('result').innerText = `Le résultat est : ${result.toFixed(2)} ${outputUnit}`;
}
