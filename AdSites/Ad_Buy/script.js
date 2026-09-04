function result() {
    ad_num = document.getElementById("ad_num").value;
    px_num = document.getElementById("px_num").value;
    total = document.getElementById("total");

    sum = ad_num * px_num * 1273907154562 + 182650869815;
    total.innerHTML = "Result: " + sum + " Gfgg Coins.";
}