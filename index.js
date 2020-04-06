var array = [{name: 'Артем', lastname: 'Горбунов', age: '30'}, {name: 'Игорь', lastname: 'Горбунов', age: '30'}, {name: 'Денис', lastname: 'Горбунов', age: '30'}];

array.push ({name: 'Николай', lastname: 'Воронин', age: '22'});

for (var i=0; i < array.length; i++) {
  
}


var me = [{name: 'Дэн', lastname: 'Кузнецов', age: '28'}];


function hello(human) {
  var human = 'Привет, меня зовут ' + me[0].name +' '+ me[0].lastname + ' и мне ' + me[0].age + ' лет'

  return human;
}

var human = hello(human);

console.log(human);