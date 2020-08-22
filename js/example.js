//Создаем переменные для приветственного сообщения
var greeting = 'Привет';
var name = 'Катерина';
var message = '!Пожалуйста, проверьте заказ:';
//конкатенируем значения трех переменных для формирования приветственного сообщения
var welcome = greeting + name + message;

//Создаем переменные, в которых будет храниться подробная информация о табличке 
var sign = 'Всемирная сеть';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//получаем элемент с иденитификатором greeting
var el = document.getElementById('greeting')
//Заменяем содержимое элемента на персонализированое приветственное сообщение
el.textContent = welcome;

//Получаем элемент с идентификаторм userSign и обновляем его содержимое 
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

//Получаем элемент с иденитификатором tiles и обновляем его содержимое
var elTiles = document.getElementById('tiles');
elSign.textContent = tiles;

//Получаем элемент с иденитификатором subTotal и обновляем его содержимое
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal + 'р';

//Получаем элемент с иденитификатором shipping и обновляем его содержимое
var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping + 'р';

//Получаем элемент с иденитификатором grandTotal и обновляем его содержимое
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = grandTotal + 'р';