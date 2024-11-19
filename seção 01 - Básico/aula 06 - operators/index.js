/*
    Operadores Aritméticos

    | +  soma / concatenação / ++ é incremento (usado em contadores)
    | -  subtração / -- decremento (mesma coisa do incremento, só que subtração)
    | /  divisão
    | *  multiplicação
    | ** potenciação
    | %  resto da divisão

*/

// Soma
const num1 = 10;
const num2 = 50;

const num3 = "10";
const num4 = 4;
const numS = parseInt('5.2')
const numF = parseFloat('10.5')

console.log(num1+num2); // soma
console.log(num3+num4); // concatenação
console.log(num4+numS); // o parseInt irá transformar a string em number, fazendo assim o cálculo normalmente



// Potenciação
console.log(num3**num4); // 10 elevado na 4


// Resto da divisão
console.log(num3%num4); // 10 dividido por 4. QUantas vezes o 4 cabe no 10


// Incrementação
let contador1 = 1;
contador1++; //quando o ++ é colocado APÓS, a execução da funcionalidade vem antes do incremento
console,log(contador1);


let contador2 = 1;
++contador2; //quando o ++ é colocado ANTES, a execução da funcionalidade vem depois do incremento
console.log(contador2)

let contador3 = 1;
console.log(contador3++);
console.log(contador3)


// Operadores de atribuição (+= / -+ / *=)
let contador4 = 2;
contador4 += 2;
contador4 += 2;
console.log(contador4)
