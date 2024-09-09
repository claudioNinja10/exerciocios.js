function Questao2(){

const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;


console.log(`A + B = ${soma}`);
console.log(`A - B = ${subtracao}`);
console.log(`A * B = ${multiplicacao}`);
console.log(`A / B = ${divisao}`);

}