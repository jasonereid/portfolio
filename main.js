function changeBackgroundColorRainy() {
    document.getElementById("maincontainer").style.backgroundColor = "#222222";
    document.getElementById("maincontainer").style.color = "#fff";
    document.getElementById("maincontainer").style.backgroundImage = "url(clouds-7081496_1280.png)";
}

function changeBackgroundColorSunny() {
    document.getElementById("maincontainer").style.backgroundColor = "#a6dfe0";
    document.getElementById("maincontainer").style.color = "#223f40";
    document.getElementsByClassName("rain").style.display = "none";
    document.getElementById("maincontainer").style.backgroundImage = "url(leaf.webp)";
}

function changeBackgroundColorReset() {
    document.getElementById("maincontainer").style.backgroundColor = "#fff";
    document.getElementById("maincontainer").style.color = "#000";
    document.getElementsByClassName("rain").style.display = "none";
    document.getElementById("maincontainer").style.backgroundImage = "url(leaf.webp)";
}