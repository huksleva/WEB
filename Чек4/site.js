console.log("Start");

// Получаем часть URL после '?'
const queryString = window.location.search; // "?[55,33,44]"
const arrayString = queryString.substring(1); // "[55,33,44]"

// Парсим строку в массив чисел
let arr = JSON.parse(arrayString); // [55, 33, 44]

// Сортируем как числа
arr.sort((a, b) => a - b);

// Выводим в h4
const h4 = document.getElementById('myTEXT');
h4.textContent = 'ваш_логин: ' + arr.toString(); // или arr.join(', ')
