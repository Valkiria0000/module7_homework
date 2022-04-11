//Задание 3 модуля 7
//Написать функцию, которая создает пустой объект, но без прототипа.
const STUDENT = {
  name: 'Irina',
  surname: 'Ignatenko',
  city: 'Moscow'
}
function createObj() {
  let student = Object.create(null);
  console.log(student); 
}
createObj();
 