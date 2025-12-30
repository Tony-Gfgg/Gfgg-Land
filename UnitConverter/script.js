function convert() {
    let num = document.getElementById("number");
    let value = Number(num.value);
    let func = document.getElementById("convert");
    let result = document.getElementById("result");
    if (func.value === "KtM") {
        result.innerHTML = value / 1.609
    } else if (func.value == "MtK") {
        result.innerHTML = value * 1.609
    } else if (func.value == "CtF") {
        result.innerHTML = (value * (9/5)) + 32
    } else if (func.value == "FtC") {
        result.innerHTML = (value - 32) * (5/9)
    }
}