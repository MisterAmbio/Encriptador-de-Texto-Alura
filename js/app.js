console.log(".:: Encriptador de Texto ::.");

//Vocales encriptadas
const encryptVocals = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

const decryptVocals = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
}
// Textarea
const encryptTextarea = document.getElementById("textareaID");

//H3, Img, P
const h3 = document.getElementById("messageID");
const img = document.getElementById("imgID");
const p = document.getElementById("textID");

//Buttons
const btnCopy = document.querySelector(".btn-copy");
btnCopy.classList.remove("btn-copy");
btnCopy.classList.add("btn-disabled")

function encrypt() {
    if (encryptTextarea.value != "") {
        console.log("Texto encriptado!");
        customStyle();
        encryptText();
    } else {
        console.log("Campo vacio!");
        alert("Ingresa el texto a encriptar!");
    }
}

function decrypt() {
    let text = encryptTextarea.value;
    text = text.replace(/ai|enter|imes|ober|ufat/g, function(i){
        return decryptVocals[i];
    })
    p.innerText = text;
}

function copy() {
    let text = encryptTextarea.value;
    try {
        let text = p.innerText;
        navigator.clipboard.writeText(text);
    } catch (e) {
        console.log(e);
    }
}

function customStyle() {
    btnCopy.classList.remove("btn-disabled");
    btnCopy.classList.add("btn-copy");
    img.style.display = "none";
    h3.style.display = "none";
    p.classList.remove("message-text")
    p.classList.add("custom-text");
}

function encryptText() {
    let text = encryptTextarea.value;
    text = text.toLowerCase();
    text = text.replace(/a|e|i|o|u/g, function (i) {
        return encryptVocals[i];
    })
    p.innerText = text;
}


