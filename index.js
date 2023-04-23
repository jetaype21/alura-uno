// botones
const formulario = document.querySelector(".form-text");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copy");

// texto
let textoUsuario = document.querySelector("#text_user");
const textoEncriptado = document.querySelector("#text-result-success");

// elementos
const messageNotText = document.querySelector(".result-faild");
const messageExistText = document.querySelector(".result-success");

// logica

const buscar = [
  { remplazar: "enter", buscar: "e" },
  { remplazar: "imes", buscar: "i" },
  { remplazar: "ai", buscar: "a" },
  { remplazar: "ober", buscar: "o" },
  { remplazar: "ufat", buscar: "u" },
];

/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/

document.addEventListener("click", (e) => {
  e.stopPropagation();
  let resultado_para_usuario = textoUsuario.value;

  if (e.target.id == "btn-encriptar") {
    buscar.forEach((item) => {
      resultado_para_usuario = resultado_para_usuario.replaceAll(
        item.buscar,
        item.remplazar
      );
    });

    messageNotText.classList.add("hidden");
    messageExistText.classList.remove("hidden");
    textoEncriptado.textContent = resultado_para_usuario;
  }

  if (e.target.id == "btn-desencriptar") {
    buscar.forEach((item) => {
      resultado_para_usuario = resultado_para_usuario.replaceAll(
        item.remplazar,
        item.buscar
      );
    });

    messageNotText.classList.add("hidden");
    messageExistText.classList.remove("hidden");
    textoEncriptado.textContent = resultado_para_usuario;
  }

  if (e.target.id == "btn-copy") {
    navigator.clipboard.writeText(textoEncriptado.textContent);
    textoUsuario.value = "";
    btnEncriptar.disabled = true;
    btnDesencriptar.disabled = true;
  }
});

document.addEventListener("input", (e) => {
  function hasCapitalLetter(text) {
    return /[A-Z]/.test(text);
  }

  let regex = /[^\w\s]/;

  if (hasCapitalLetter(textoUsuario.value) || regex.test(textoUsuario.value)) {
    btnEncriptar.disabled = true;
    btnDesencriptar.disabled = true;
    return;
  }

  if (textoUsuario.value.length >= 3) {
    btnEncriptar.disabled = false;
    btnDesencriptar.disabled = false;
  }

  if (textoUsuario.value.length < 3 || textoUsuario.value == "") {
    btnEncriptar.disabled = true;
    btnDesencriptar.disabled = true;
    messageNotText.classList.remove("hidden");
    messageExistText.classList.add("hidden");
  }
});
