//Задание 5.модуля 7

//Переписать консольное приложение из предыдущего юнита на классы.
//Общие требования:
//Имена классов, свойств и методов должны быть информативными;
//Соблюдать best practices;
//Использовать синтаксис ES6.


class ElectricalAppliance {
   constructor(name, power, turn,)  {
    this.name = name,
    this.power = power,
    this.category = 'electronics',
    this.turn = turn
    
  }
  
  getTurn () {
    if (this.turn === 'on') {
      console.log(' Прибор ' + this.name + ' с мощностью ' + this.power + ' подключен к сети');
    } else if(this.turn === 'off') {
       console.log(' Прибор ' + this.name + ' с мощностью ' + this.power + ' Неподключен к сети');
    }
  }
  }
  
  
  class Brand extends ElectricalAppliance {
     constructor (name, power, turn, brand) {
       super(name);
    this.name = name,
    this.power = power,
    this.turn = turn,
    this.brand = brand 
  
    
  }
  getTurn() {
  if (this.turn === 'on') {
    return  console.log(' Прибор '  + this.brand + ' бренда ' + this.name + ' с мощностью ' + this.power + ' Подключен к сети' + this.category);
    } else if(this.turn === 'off') {
      return console.log(' Прибор ' + ' бренда ' + this.brand + ' ' + this.name + ' с мощностью ' + this.power + ' Неподключен к сети' + ' это также категория ' + this.category);
    }
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
  