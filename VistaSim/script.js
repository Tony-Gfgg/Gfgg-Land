function appendValue(val) {
    const display = document.getElementById("result");

    if (val === "=") {
        try {
            display.innerText = "Result: "+eval(display.innerText);
        } catch (e) {
            display.innerText = "Error";
        }
    } else if (val === "C") {
        display.innerText = "";
    } else {
        display.innerText += val;
    }
}