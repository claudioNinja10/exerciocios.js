const numeros = [3, 7, 15, 19, 53, 9, 10, 30, 34, 6];

const resultado = numeros.map(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
});

console.log(resultado);
