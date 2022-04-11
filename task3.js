//Задание 3 модуля 7
//Написать функцию, которая создает пустой объект, но без прототипа.

function createObj() {
  let student = Object.create(null);
  console.log(student); 
}
createObj();
 