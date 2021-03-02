const userInput = require('prompt-sync')();


let userOperation;
let userNumber1: number;
let userNumber2: number;
let inputResult: number;



let array: string[] = ["1:cложение", "2:вычитание", "3:умножение", "4:деление"];
for (let i = 0; i <= array.length - 1; i++) {
    console.log("Калькулятор может выполнять " + array[i] + ".")
};



userOperation = 0;
while (userOperation > 4 || userOperation < 1) {
    userOperation = userInput("Введите желаемый номер операции от 1 до 4х: ")
};



userNumber1 = userInput("Введите число №1: ");
userNumber2 = userInput("Введите число №2 не равное нулю: ");



function summation() {
    return userNumber1 + userNumber2
};
function subtraction() {
    return userNumber1 - userNumber2
};
function multiplication() {
    return userNumber1 * userNumber2
};
function
    dividing() {
    return userNumber1 / userNumber2
};



if (userOperation == 1) {
    inputResult = summation();
} else if (userOperation == 2) {
    inputResult = subtraction();
} else if (userOperation == 3) {
    inputResult = multiplication();
} else if (userOperation == 4) {
    inputResult = dividing();
}


console.log(`Результат вашей операции: ${inputResult}`);
