document.getElementById("convertBtn").addEventListener("click", convertTemperature);

function convertTemperature() {

    let temp = Number(document.getElementById("temp").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = document.getElementById("result");

    if (document.getElementById("temp").value === "") {
        result.innerHTML = "Please enter a temperature.";
        return;
    }

    let celsius;

    // Convert to Celsius
    switch(from){
        case "C":
            celsius = temp;
            break;

        case "F":
            celsius = (temp - 32) * 5/9;
            break;

        case "K":
            celsius = temp - 273.15;
            break;
    }

    let finalTemp;

    // Convert from Celsius to desired unit
    switch(to){
        case "C":
            finalTemp = celsius;
            break;

        case "F":
            finalTemp = (celsius * 9/5) + 32;
            break;

        case "K":
            finalTemp = celsius + 273.15;
            break;
    }

    result.innerHTML =
`${temp} °${from} = ${finalTemp.toFixed(2)} °${to}`;
}