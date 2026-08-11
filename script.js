//Este es un programa para desarrollas la lógica de programación
console.log("Ingresa numeros como se te indica")
let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));
let num3 = Number(prompt("Ingresa el tercer número: "));

let array = [num1, num2, num3];
console.log("Los numeros ingresados son: ")
console.log(array);
console.log(" ")
//La funcion utilizada fue extraida de la documentacion de la siguiente página: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//Para ordenar los numeros de menor a mayor
console.log("Los numeros de menor a mayor son: ")
let menorAMayor = array.sort(function (a, b) {
  return a - b;
});
console.log(menorAMayor);

//Para ordenar los numeros de mayor a menor
console.log("Los numeros de mayor a menor son: ")
let mayorAMenor = array.sort(function (a, b) {
  return b - a;
});
console.log(mayorAMenor);