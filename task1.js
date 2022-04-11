//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения 
//только собственных свойств. Данная функция не должна возвращать значение.
const SKILLFACTORY = {
  courses: 'fronted',
  city: 'Moscow'
}
const STUDENT = Object.create(SKILLFACTORY);
STUDENT.name = 'Irina';
STUDENT.surname = 'Ignatenko';


function printObj(obj) {
  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    } 
  }
}
printObj(STUDENT);