function convert() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;
    let inputInMeters; // Valeur d'entrée convertie en mètres
    let result; // Résultat de la conversion

    
    if (['kilograms', 'grams', 'milligrams', 'pounds'].includes(inputUnit)) {
        // Convertir l'entrée en grammes si l'unité est une unité de poids
        switch (inputUnit) {
            case "kilograms": inputInBaseUnit = inputValue * 1000; break;
            case "grams": inputInBaseUnit = inputValue; break;
            case "milligrams": inputInBaseUnit = inputValue * 0.001; break;
            case "pounds": inputInBaseUnit = inputValue * 453.592; break;
            default: inputInBaseUnit = inputValue; // par défaut en grammes si inconnu
        }
        // Convertir les grammes en unité de sortie
        switch (outputUnit) {
            case "kilograms": result = inputInBaseUnit / 1000; break;
            case "grams": result = inputInBaseUnit; break;
            case "milligrams": result = inputInBaseUnit * 1000; break;
            case "pounds": result = inputInBaseUnit / 453.592; break;
            default: result = inputInBaseUnit; // par défaut en grammes si inconnu
        }
    } else {
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
       
    }

    document.getElementById('result').innerText = `Le résultat est : ${result.toFixed(2)} ${outputUnit}`;
}
   

