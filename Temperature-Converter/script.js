function convertTemperature(){

    let temperature =
    document.getElementById("temperature").value;

    let fromUnit =
    document.getElementById("fromUnit").value;

    let toUnit =
    document.getElementById("toUnit").value;

    let resultText =
    document.getElementById("resultText");

    if(temperature === ""){

        resultText.innerHTML =
        "Please enter a temperature";

        return;

    }

    temperature = Number(temperature);

    let result;

    // Celsius

    if(fromUnit === "celsius"){

        if(toUnit === "fahrenheit"){

            result =
            (temperature * 9/5) + 32;

        }

        else if(toUnit === "kelvin"){

            result =
            temperature + 273.15;

        }

        else{

            result = temperature;

        }

    }

    // Fahrenheit

    else if(fromUnit === "fahrenheit"){

        if(toUnit === "celsius"){

            result =
            (temperature - 32) * 5/9;

        }

        else if(toUnit === "kelvin"){

            result =
            ((temperature - 32) * 5/9)
            + 273.15;

        }

        else{

            result = temperature;

        }

    }

    // Kelvin

    else{

        if(toUnit === "celsius"){

            result =
            temperature - 273.15;

        }

        else if(toUnit === "fahrenheit"){

            result =
            ((temperature - 273.15)
            * 9/5) + 32;

        }

        else{

            result = temperature;

        }

    }

    resultText.innerHTML =
    result.toFixed(2);

}

/* Reset */

function resetFields(){

    document.getElementById("temperature").value = "";

    document.getElementById("resultText").innerHTML =
    "Result Appears Here";

}
