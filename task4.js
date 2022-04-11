// Задание 4.модуля 7
//Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
//Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, 
//какими свойствами он обладает.
//План:
//Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
//Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
//У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
//Создать экземпляры каждого прибора;
//Вывести в консоль и посмотреть результаты работы, гордиться собой :)
//Общие требования:

//Имена функций, свойств и методов должны быть информативными
//Соблюдать best practices:
//использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
//информативные имена (а не a, b);
//четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
//использование синтаксиса es6 (кроме функции-конструкторов) и т.д.


function ElectricalAppliance(name, power, turn) {
  this.name = name,
  this.power = power,
  this.category = 'electronics',
  this.turn = turn
  
}

ElectricalAppliance.prototype.getTurn = function() {
  if (this.turn === 'on') {
    console.log(' Прибор ' + this.name + ' с мощностью ' + this.power + ' подключен к сети');
  } else if(this.turn === 'off') {
     console.log(' Прибор ' + this.name + ' с мощностью ' + this.power + ' Неподключен к сети');
  }
}

function Brand(name, power, turn, brand) {
  this.name = name,
  this.power = power,
  this.turn = turn,
  this.brand = brand 
 
}

Brand.prototype = new ElectricalAppliance();

Brand.prototype.getTurn = function() {
  if (this.turn === 'on') {
    console.log(' Прибор '  + this.brand + ' бренда ' + this.name + ' с мощностью ' + this.power + ' Подключен к сети' + this.category);
  } else if(this.turn === 'off') {
     console.log(' Прибор ' + ' бренда ' + this.brand + ' ' + this.name + ' с мощностью ' + this.power + ' Неподключен к сети' + ' это также категория ' + this.category);
  }
}

const lamp = new ElectricalAppliance('lamp', 170, 'on');
const computer = new ElectricalAppliance('computer', 220, 'off');
const washer = new ElectricalAppliance('washer', 320, 'off');
const microvafe = new Brand('microvafe', 320, 'off', 'lg');
lamp.getTurn();
computer.getTurn();
washer.getTurn();
microvafe.getTurn();
/*console.log(washer);
console.log(lamp);
console.log(computer);
console.log(microvafe);*/