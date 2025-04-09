function showAlert() {
    alert("Hello, world!");
    makeTextBigger();
}

function makeTextBigger() {
    document.getElementById("text-area").style.fontSize = "24pt";
}

function changeStyleWithRadioButton() {
    alert("Style changed!");
    let textArea = document.getElementById("text-area");
    if (document.getElementById("fancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function cowMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMoo() {
    let textArea = document.getElementById("text-area");
    textArea.value = textArea.value.toUpperCase();
    
    let sentences = textArea.value.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "-Moo";
        }
        sentences[i] = words.join(" ");
    }
    textArea.value = sentences.join(".");
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("bigger-button").addEventListener("click", makeTextBigger);
    document.getElementById("fancy").addEventListener("change", changeStyleWithRadioButton);
    document.getElementById("boring").addEventListener("change", changeStyleWithRadioButton);
    document.getElementById("moo-button").addEventListener("click", cowMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMooMoo);
});