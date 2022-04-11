
//Задание 2 модуля 7
//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у 
//переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function printObj(string, obj) {
  return obj.hasOwnProperty(string);
}
const student = {
  name: 'Irina',
  surname: 'Ignatenko',
  age: 32,
  city: 'Moscow'
}
console.log(printObj('age', student));
