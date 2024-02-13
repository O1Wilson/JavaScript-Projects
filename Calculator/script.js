function appendCharacter(char) {
    var display = document.getElementById("display");
    display.value += char;
}

function calculateResult() {
    var display = document.getElementById("display");
    var expression = display.value;

    try {

        var result = eval(expression);

        if (result === Infinity || result === -Infinity) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {

        display.value = "Error";
    }
}

function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
}
