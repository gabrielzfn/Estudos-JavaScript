let num1 = 15;
let num2 = 13.54546423;

// Convertendo number para string e concatenando com outro number
console.log(num1.toString() + num2);

// Transformando número em binário (deve-se colocar o 2 para obter a representação em binário)
console.log(num1.toString(2))

// Arredondando números (nos parenteses se define o numero de casas após vírgula)
console.log(num2.toFixed(2));

// Verificação para número inteiro
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));

// Verifica se o resultado é um 'Não é um número'
let temp = num1 * 'Olá';
console.log(Number.isNaN(temp));