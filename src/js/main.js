"use strict";

console.log(">> Somos Equipo 5");

document.querySelector("h1").innerHTML =
  "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente.";

document.querySelector(".p1").innerHTML = "Hola mundo";

document.querySelector(".ada2").style.display = "none";

document.querySelector(".ex4").innerHTML = "<h2>Lorem ipsum</h2>";
//  "<img src="http://via.placeholder.com/350x150">;

const button = document.querySelector(".button-add");

button.style.border = "none";

button.addEventListener("click", () => {
  console.log("Has hehco click");
  const originalText = document.querySelector(".p2 p").textContent;

  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = originalText;

  document.body.appendChild(nuevoParrafo);
});
