let entrada = document.querySelector("input");
let encriptar = document.querySelector(".encriptar");
let desencriptar = document.querySelector(".desencriptar");
let copiar = document.querySelector(".copiar");
let palabra = document.getElementById("palabra");
let frase = document.querySelector("frase");
let encriptadoActual = "";

const clickEncriptar = () => {
  let original = entrada.value;
  let originalArray = original.toLowerCase().split("");
  let encriptadaArray = [];

  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] === "a" || originalArray[i] === "á") {
      encriptadaArray.push("ai");
    } else if (originalArray[i] === "e" || originalArray[i] === "é") {
      encriptadaArray.push("enter");
    } else if (originalArray[i] === "i" || originalArray[i] === "í") {
      encriptadaArray.push("imes");
    } else if (originalArray[i] === "o" || originalArray[i] === "ó") {
      encriptadaArray.push("ober");
    } else if (originalArray[i] === "u" || originalArray[i] === "ú") {
      encriptadaArray.push("ufat");
    } else {
      encriptadaArray.push(originalArray[i]);
    }
  }

  let encriptada = encriptadaArray.join("");

  palabra.innerHTML = encriptada;
  encriptadoActual = encriptada;

  if (encriptadoActual !== "") {
    document.getElementById("vacio").setAttribute("class", "vacio, invisible");
    document.getElementById("contenido").removeAttribute("invisible");
    document.getElementById("contenido").setAttribute("class", "contenido");
  }
};

const clickDesencriptar = () => {
  console.log("Click en desencriptar");
  let original = entrada.value;
  let desencriptada = original
    .toLowerCase()
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("ober", "o")
    .replaceAll("imes", "i")
    .replaceAll("ufat", "u");

  console.log("desencriptada", desencriptada);

  let palabra = document.getElementById("palabra");
  palabra.innerHTML = desencriptada;
  encriptadoActual = desencriptada;
};

const clickCopiar = () => {
  entrada.value = encriptadoActual;
};

encriptar.addEventListener("click", clickEncriptar);
desencriptar.addEventListener("click", clickDesencriptar);
copiar.addEventListener("click", clickCopiar);
