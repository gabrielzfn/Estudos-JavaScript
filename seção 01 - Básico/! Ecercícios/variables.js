// EXERCÍCIO 1:
///////////////////////////////////////////////////////////////////

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

// Melhor resolução sem ter que criar uma variável temporária de A
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);

///////////////////////////////////////////////////////////////////