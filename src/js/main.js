"use strict";

console.log(">> Somos Equipo 5");

// document.querySelector("h1").innerHTML =
//   "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente.";

// document.querySelector(".p1").innerHTML = "Hola mundo";

// document.querySelector(".ada2").style.display = "none";

// document.querySelector(".ex4").innerHTML = "<h2>Lorem ipsum</h2>";
// //  "<img src="http://via.placeholder.com/350x150">;

// const button = document.querySelector(".button-add");

// button.style.border = "none";

// button.addEventListener("click", () => {
//   console.log("Has hehco click");
//   const originalText = document.querySelector(".p2 p").textContent;

//   const nuevoParrafo = document.createElement("p");
//   nuevoParrafo.textContent = originalText;

//   document.body.appendChild(nuevoParrafo);
// });

// CONDICIONALES

const userName = "María";
if (userName === "María") {
  console.log("Bienvenida María");
} else if (userName === "Luisa") {
  console.log("Bienvenida Luisa");
} else {
  console.log(
    "Lo siento pero el usuario que has introducido no está registrado."
  );
}

// Ejercicio 2 (SOS)

const number = 0;
if (number === 0) {
  console.log("El número es 0");
} else if (number < 0) {
  console.log("El número es negativo");
} else if (number + 2 > 13 && number + 2 <= 20) {
  console.log("El número más 2 es mayor que 13 pero menor o igual que 20");
} else if (number > 20 && number < 50) {
  console.log("El número es mayor que 20 pero menor que 50");
} else {
  console.log("el número no es 123123125");
}

//Ejercicio 3

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.jp/150x150.png";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

document.querySelector(".user__avatar").innerHTML = userAvatar;

// ejercicios de datos

// const num1 = 7;
// const num2 = 8;

// const sum = num1 + num2;
// console.log(sum);

// const kiwi = 5;
// const pear = 2;
// const grape = 4;

// const sum = (kiwi + kiwi) + (pear * 3) + (grape / 2);
// console.log(sum, "Esta es la suma de las frutas");

//const Rosana = 37;
//const Silvia = 33;

//const mult = Rosana * 24 * 365;
//console.log(mult, "Estas son las horas que Rosana ha vivido");

//const mult = Silvia * 24 * 365;
//console.log(mult, "Estas son las horas que Silvia ha vivido");

const dogsList = document.querySelector(".dogs");

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

dogsList.innerHTML += `<li> ${firstDogImage + " " + firstDogName} </li>`; //Esto esta hecho con interpolación
dogsList.innerHTML += "<li>" + secondDogImage + " " + secondDogName + "</li>"; // Esto con concatenación
dogsList.innerHTML += "<li>" + thirdDogImage + " " + thirdDogName + "</li>";
// Conclusión : mismo resultado

// const nameLength = document.querySelector(".name__length");
// const student = "Silvia Benitez Masip";
// console.log(student.length);

// nameLength.innerHTML = "El nombre de mi compañera es " + student + " y está compuesto por " + student.length + " caracteres";

//Ejercicios Funcionales

function mult(a, b) {
  console.log(a * b);
  return a * b;
}

mult(3, 4);

const multResult = mult(3, 4);
console.log(multResult);

//media

function mult2(a, b, c, d) {
  console.log((a + b + c + d) / 4);
  return (a + b + c + d) / 4;
}

mult2(3, 4, 5, 6);
const multResult2 = mult2(3, 4, 5, 6);
console.log(multResult2);

//par e impar

function esPar(numero) {
  return numero % 2 === 0;
}

// Ejemplo de ejecución
let numero = 8;
let resultado = esPar(numero);
console.log(`¿El número ${numero} es par? ${resultado}`);

// IVA

function iva(a) {
  console.log(
    "Precio sin IVA: " + a + ", IVA:" + a * 0.21 + " y total: " + (a + a * 0.21)
  );
}

iva(10);

//Analizar

// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}
console.log(secretLetter); // devuelve "y"
console.log(mySecretLetter()); // devuelve "x"

//Extra 1

// const btnEl = getEl('.btn');

// function getEl(selector) {
//             return document.querySelector(selector);
//         }

//         // Ejemplos de uso
//         const divEl = getEl('.user');
//         const h1El = getEl('.user__name');
//         if (!h1El) {
//         console.error ("No existe ningún elemento con clase, id o tag llamado `${selector}`");
//           }
//         const pEl = getEl('.name__length');
//         getEl.innerHTML = pEl;
//         if (pEl===esPar) {
//         console.log("Este número es impar");
//           }

//         function esPar(numero) {
//         return numero % 2 === 0;

//         }

//         h1El .style.backgroundColor = "blue";

//         console.log(h1El);

//Extra error

// const h1Error

function getEl(selector) {
  return document.querySelector(selector);
}

function esPar(numero) {
  return numero % 2 === 0;
}

const pEl = getEl(".name__length").textContent;
console.log(pEl);
const pElNumber = parseInt(pEl);
console.log(pElNumber);
console.log(esPar);
if (esPar(pElNumber)) {
  console.log("Este número es par");
}

// Lección 2.7 Objetos
//Ejercicio 1 

const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "Periodista",
}

console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.job}`);

const adalaber2 = {
  name: "Rocío",
  age: 25,
  job: "Actriz",
}

console.log(`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.job}`);


adalaber1.run = (phrase) => {
  console.log("Estoy corriendo");
};

adalaber1.run ();

adalaber1.distance = 50;

adalaber1.runAMarathon = (phrase) => {
  console.log(`Estoy corriendo un maratón de ${adalaber1.distance} kilómetros`);
};

adalaber1.runAMarathon();

adalaber1.showBio = (phrase) => {
  console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.job}`);
};

adalaber1.showBio();

adalaber2.showBio = (phrase) => {
  console.log(`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.job}`);
};

adalaber2.showBio();


// Ejercicio 5 - developer

// const user = {  
// }

// const job = "developer";

// user.firstName = "Pedro";
// user.lastName = "Ruiz";
// user.age = 35;
// user.job = job;
// console.log(`${user.firstName} ${user.lastName} ${user.age} ${user.job}`);

// user.addAge = () => {
//   user.age++;
//   console.log(user.age);
// };

// user.addAge();

//ARRAYS 
 
const workWithMovies = () => {

const movies = ["Jurassic Park", "Una joven prometedora", "Harta"];

movies [3] = "Split";
 console.log(movies);

movies[1] = "Malditos bastardos";
 console.log(movies);
//  console.log(workWithMovies);
}

workWithMovies ();

// console.log(movies);


// CALCULADORA

const calculator = (isBorder, boxWidth, boxPadding, boxBorder) => { 
if (isBorder) {}
else {}
}
calculator(true, 30, 20, 34);

// De Ana

const calculateWidth = (isBorderBox, width, padding, border) => {
  if (isBorderBox) {
    return `El ancho del contenido es ${width}, y el ancho de la caja es ${width}`;
  }
  const contentSize = width + padding * 2 + border * 2;
  return `El ancho del contenido es ${contentSize}, y el ancho de la caja es ${width}`;
};

const result = calculateWidth(false, 300, 10, 5);
console.log(result);



// const sum = (a, b) => {
//   console.log(a+b);
// } 

// sum (1,2)

// Bucles
// Ejercicio 1


 for (let i = 1; i < 11; i++) {
  console.log("Voy por la vuelta " +i);
}

// let acc = 0;
// for (let i = 0; i < 10; i++) {
//  acc = acc + 2;
//  console.log(acc);
//} 
// console.log("El resultado es: " + acc)


// Ejercicio 2

const numbers = [1, 2, 3, 4, 5];

numbers.push(6);

let acc = 0;
for (let i = 0; i < numbers.length; i++) {
acc = acc + numbers[i] / numbers.length;
}

console.log("El resultado es: " + acc);

// MAP 1

const marks = [5, 4, 6, 7, 9];

const oneMarks = marks.map((mark) => {
  return mark +1;

});

console.log(oneMarks);

// MAP 2

// const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

// const helloNames = names.map((name) => {
//   return  "Bienvenida  " + name;

// });

// console.log(helloNames);

// MAP 3

// const users = [ 
//  { name: "María", isPremium: false }, 
//  { name: "Lucía", isPremium: true }, 
//  { name: "Susana", isPremium: true }, 
//  { name: "Rocío", isPremium: false }, 
//  { name: "Inmaculada", isPremium: false }, 
// ]; 

//  users.forEach ((user) => {
//    if (user.isPremium) {
//     console.log(`Bienvenida ${user.name} Gracias por confiar en nosotros`);
//    }
//    else {
//     console.log(`Bienvenida ${user.name}`);
//    }
// });

// FILTER 1

// const users = [ 
//  { name: "María", isPremium: false }, 
//  { name: "Lucía", isPremium: true }, 
//  { name: "Susana", isPremium: true }, 
//  { name: "Rocío", isPremium: false }, 
//  { name: "Inmaculada", isPremium: false }, 
// ]; 

// const premiumUsers = users.filter ((user) => {
//   return user.isPremium === true;

// });

// console.log(premiumUsers);

//FILTER 2

// const pins = [2389, 2384, 2837, 5232, 8998]; 

// const pairPins = pins.filter((pin) => {
//    return pin % 2 === 0;
// });

// console.log(pairPins);

// FILTER 3

const users = [ 
 { name: "María", isPremium: false, pin: 2389 }, 
 { name: "Lucía", isPremium: true, pin: 2384 }, 
 { name: "Susana", isPremium: true, pin: 2837 }, 
 { name: "Rocío", isPremium: false, pin: 5232 }, 
 { name: "Inmaculada", isPremium: false, pin: 8998 }, 
]; 
 
// const pairPins = users.filter((user) => {
//    return user.pin % 2 === 0;
// });
 
// console.log(pairPins);

// FIND 1

// const usersFind = users.find((user) => {
//    return user.pin === 5232;
// });
 
// console.log(usersFind);


// FIND 3 B

// const indexToRemove = users.findIndex(user => user.pin === 5232);

// if (indexToRemove !== -1) {
//   users.splice(indexToRemove, 1); // Elimina 1 elemento en esa posición
// }

// console.log(users);


//SORT

// users.sort((a, b) => a.name.localeCompare(b.name));

// console.log(users);

//SORT menor a mayor

users.sort((a, b) => a.pin - b.pin);


console.log(users);

// Peticiones al servidor 1

// Ejercicio 1

// const numberP = document.querySelector(".number");
// const numberClick = document.querySelector(".numberClick");

// const handleClickButton = () => {

// fetch("https://api.rand.fun/number/integer")
//   .then((reponse) => {
//     console.log(reponse);
//     return reponse.json();
//   })
//   .then((data) => {
//     console.log(data);
//     numberP.innerHTML = data.result;
//   });

// };

// numberClick.addEventListener("click", handleClickButton);

// ejercicio 2 - chihuahua

const perro = document.querySelector(".perro");
const getDog = document.querySelector(".getDog");

const handleClickButton = () => {

fetch("https://dog.ceo/api/breed/chihuahua/images/random")
.then((response) => response.json())
.then((data) => {
  console.log(data);
  image.src = data.message;
  perro.innerHTML = data.result;
});
};

getDog.addEventListener("click", handleClickButton);