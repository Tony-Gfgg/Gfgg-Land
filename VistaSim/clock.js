let background = 1;
let bg = document.body;
bg.style.backgroundImage = "url('win-vista.png')";

function updateTime() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.innerHTML = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);  // Update every second

function changeBackground() {
    background++;
    if (background === 1) {
        bg.style.backgroundImage = "url('win-vista.png)"
    } else if (background === 2) {
        bg.style.backgroundImage = "url('win-vista-2.jpg')";
    } else if (background === 3) {
        bg.style.backgroundImage = "url('win-vista-3.jpg')";
    } else if (background === 4) {
        bg.style.backgroundImage = "url('win-vista-4.jpg')";
    } else if (background === 5) {
        background = 1;
        bg.style.backgroundImage = "url('win-vista.png')";
    }
}