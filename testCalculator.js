var userInput = require('prompt-sync')();
var userOperation;
var userNumber1;
var userNumber2;
var inputResult;
var array = ["1:cложение", "2:вычитание", "3:умножение", "4:деление"];
for (var i = 0; i <= array.length - 1; i++) {
    console.log("Калькулятор может выполнять " + array[i] + ".");
}
;
userOperation = 0;
while (userOperation > 4 || userOperation < 1) {
    userOperation = userInput("Введите желаемый номер операции от 1 до 4х: ");
}
;
userNumber1 = userInput("Введите число №1: ");
userNumber2 = userInput("Введите число №2 не равное нулю: ");
function summation() {
    return userNumber1 + userNumber2;
}
;
function subtraction() {
    return userNumber1 - userNumber2;
}
;
function multiplication() {
    return userNumber1 * userNumber2;
}
;
function dividing() {
    return userNumber1 / userNumber2;
}
;
if (userOperation == 1) {
    inputResult = summation();
}
else if (userOperation == 2) {
    inputResult = subtraction();
}
else if (userOperation == 3) {
    inputResult = multiplication();
}
else if (userOperation == 4) {
    inputResult = dividing();
}
console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432\u0430\u0448\u0435\u0439 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438: " + inputResult);
