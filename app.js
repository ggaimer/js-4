//Первая задача

// let names = prompt('Введите свое имя')
// let year = +prompt('Введите свой год рождения')
// let year2 = +prompt('Введите нынешний год')
// let res = ''

// function yer(year, year2) {
//     res = year2 - year
//     console.log(names + ', ' + res); 
// }

// yer(year, year2)

// Вторая задача

// function r(min, max) {
//     return Math.floor(Math.random() * (max + 1 - min) + min);
//   }
  
//   let a = +prompt("Сколько примеров вы хотите решить");
  
//   for (let i = 1; i <= a; i++) {
//     let action = r(1, 4);
//     let one = r(100,1);
//     let two = r(100,1);
//     let res = 0;
//     if (action == 1) {
//       res = +prompt(one + " + " + two + " = ");
//       alert(one + ' + ' + two + " = " + (one + two) + ' Ваш ответ ' + res + ((one + two ) == res ? ' Молодец' : '   Не правильно' ))
//     } else if (action == 2) {
//       res = +prompt(one + " - " + two + " = ");
//       alert(one + ' - ' + two + " = " + (one - two) + ' Ваш ответ ' + res + ((one - two) == res ? ' Молодец' : 'Не правильно' ))
//     } else if (action == 3) {
//       res = +prompt(one + " * " + two + " = ");
//       alert(one + ' * ' + two + " = " + (one * two) + ' Ваш ответ ' + res + ((one * two) == res ? ' Молодец' : 'Не правильно' ))
//     } else if (action == 4) {
//       res = +prompt(one + " / " + two + " = ");
//       alert(one + ' / ' + two + ' = ' + (one / two) + ' Ваш ответ ' + res + ((one / two) == res ? ' Молодец' : 'Не правильно' ))
//     }
// }