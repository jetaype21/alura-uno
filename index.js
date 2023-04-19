/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/

const buscar = [
  { remplazar: "enter", buscar: "e" },
  { remplazar: "imes", buscar: "i" },
  { remplazar: "ai", buscar: "a" },
  { remplazar: "ober", buscar: "o" },
  { remplazar: "ufat", buscar: "u" },
];

let texto = "gato";

buscar.forEach((item, i) => {
  texto = texto.replaceAll(item.buscar, item.remplazar);
});

console.log(texto);

buscar.forEach((item, i) => {
  texto = texto.replaceAll(item.remplazar, item.buscar);
});
console.log(texto);
