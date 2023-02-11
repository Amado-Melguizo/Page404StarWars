
/* Código que maneja los eventos de los choques de los divs */

// Prueba si quieres con un contador de fallos (no esta pulido)
var count = 0;
let countdiv = document.getElementById("count");
countdiv.innerHTML = `Score: ${count}`;

// identificamos las variables
const bb8 = document.getElementById("bb8");
const terreno = document.getElementById("terreno");
const misil = document.getElementsByClassName("misil");

setInterval(() => {
  for (const misilDiv of misil) {
    const misilDivRect = misilDiv.getBoundingClientRect();
    const terrenoRect = terreno.getBoundingClientRect();

    if (misilDivRect.bottom > terrenoRect.top) {
      // opcion contador

      console.log("choca");
      count++;
      countdiv.innerHTML = `Score: ${count}`;

      if (count === 100) {
        alert("¡Has ganado!");
        location.reload();
      }
    }
  }
}, 100);

// Evento del raton
addEventListener("mousemove", () => {
  /* Funcion  --> getBoundingClientRect() 
     Funcion que sirve 
     para identificacion de 
     los lados de un div y poder actuar con ellos
  */
  const bb8Rect = bb8.getBoundingClientRect();

  // metodo for para poder identificar los 10 misiles
  for (const misilDiv of misil) {
    const misilDivRect = misilDiv.getBoundingClientRect();

    // Condicional para determinar los lados que se chocan
    if (
      bb8Rect.left < misilDivRect.right &&
      bb8Rect.right > misilDivRect.left &&
      bb8Rect.top < misilDivRect.bottom &&
      bb8Rect.bottom > misilDivRect.top
    ) {
      // opcion Normal
      alert("¡Has perdido!");
      location.reload();
    }
  }
});
