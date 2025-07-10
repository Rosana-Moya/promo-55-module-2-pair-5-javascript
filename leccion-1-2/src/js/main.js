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


// CONDICIONALES

const userName = "María";
if (userName === "María") {
     console.log ("Bienvenida María");

     } else if (userName === "Luisa") {
          console.log ("Bienvenida Luisa");

     } else {
          console.log ("Lo siento pero el usuario que has introducido no está registrado.");
     }


     // Ejercicio 2 (SOS)

     const number = 0;
     if (number === 0) {
  console.log('El número es 0');
} else if (number < 0) {
  console.log('El número es negativo');
} else if ((number + 2 > 13) && (number + 2 <= 20)) {
  console.log('El número más 2 es mayor que 13 pero menor o igual que 20');
} else if (number > 20 && number < 50) {
  console.log('El número es mayor que 20 pero menor que 50');
} else {
  console.log('el número no es 123123125');
}


//Ejercicio 3

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.jp/150x150.png";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

document.querySelector(".user__avatar").innerHTML = userAvatar;