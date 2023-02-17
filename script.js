// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// let userNumber1 = 2;
// let userNumber2 = 3;

// function cubingUsersNumber(x) {
//     return Math.pow(x,3);
// }

// let userCubNumber1 = cubingUsersNumber(userNumber1);
// let userCubNumber2 = cubingUsersNumber(userNumber2);
// console.log(userCubNumber1 + userCubNumber2);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// const usersNumber = prompt('Enter youre number, please');

// function wordCheck(usersNumber) {
//     if (usersNumber / 1) {
//         alert('Nice choice!');
//     } else {
//     alert('Bad choice! Try again');
//     // Хотел сюда сделать break, но не разобрался как.
// }
// }

// const taxProcent = (usersNumber) => {
//        usersNumber = usersNumber * 0.87;
//    }


// wordCheck(usersNumber);
// console.log(`Размер заработной платы за вычетом налогов равен ${taxProcent(usersNumber)}`);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// let numberUser1 = Number(prompt('Введите первое число'));
// let numberUser2 = Number(prompt('Введите второе число'));
// let numberUser3 = Number(prompt('Введите третье число'));

// function comparisonUsersNumber(numberUser1, numberUser2, numberUser3) {
//     console.log(Math.max(numberUser1, numberUser2, numberUser3));
// }
// comparisonUsersNumber(numberUser1, numberUser2, numberUser3);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

 let userNumFirst = Number(prompt('Введите первое число: '));
 let userNumSecond = Number(prompt('Введите второе число: '));

// function additionNum(userNumFirst, userNumSecond) {
//     const result = userNumFirst + userNumSecond;
//     console.log(`Сумма чисел равна ${result}`);
//}

function subtractionNum(userNumFirst, userNumSecond) {
if (userNumFirst > userNumSecond) {
    console.log(`Разность чисел равна ${userNumFirst - userNumSecond}`);
} else {
    console.log(`Разность чисел равна ${userNumSecond - userNumFirst}`); 
}
}

// const productUserNum = (userNumFirst, userNumSecond) => {
//     console.log(`Произведение чисел равно ${userNumFirst*userNumSecond}`)
// }

// const divisionNum = (userNumFirst, userNumSecond) => {
//     console.log(`Результат деления чисел ${userNumFirst / userNumSecond}`);
// }

// additionNum(userNumFirst, userNumSecond);
subtractionNum(userNumFirst, userNumSecond);
// productUserNum(userNumFirst, userNumSecond);
// divisionNum(userNumFirst, userNumSecond);