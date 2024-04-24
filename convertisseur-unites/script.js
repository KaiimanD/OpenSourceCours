function convert() {
    let inputValue = document.getElementById('inputValue').value;
    let inputUnit = document.getElementById('inputUnit').value;
    let result;

    if (inputUnit === "meters") {
        result = inputValue * 1000; // Conversion en mètres
    } else if (inputUnit === "kilometers") {
        result = inputValue / 1000; // Conversion en kilomètres
    }

    document.getElementById('result').innerText = `Le résultat est : ${result}`;
}
