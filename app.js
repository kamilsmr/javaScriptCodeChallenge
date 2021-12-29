// foreach

// const numbers = [1, 4, 9];

// numbers.forEach((number, index) => {
//   numbers[index] = number * 2;
// });

// console.log(numbers);

// 0:2 1:8 2:18 3 elemanlı array verir

// map fonksiyonu

// const numbers = [1, 4, 9];

// const result = numbers.map(function (number) {
//   return number * 2;
// });

// arrow ile
// const result = numbers.map((number) => number * 2);
// const result = numbers.map((number) => Math.sqrt(number));
// console.log(result);

// const users = [
//   {
//     name: "Ali",
//     surname: "koç",
//     age: 27,
//   },
//   {
//     name: "salim",
//     surname: "asi",
//     age: 12,
//   },
// ];

// const date = new Date();
// const result2 = users.map((user) => {
//   return {
//     fullName: `${user.name} ${user.surname}`,
//     yearOfBirth: date.getFullYear() - user.age,
//   };
// });
// console.log(users);
// console.log(result2);

// const todos = [
//   {
//     id: 1,
//     name: "Todo 1",
//     completed: false,
//   },
//   {
//     id: 2,
//     name: "Todo 2",
//     completed: false,
//   },
// ];

// console.log(
//   todos.map((todo) => {
//     if (todo.id == 2) {
//       todo.completed = true;
//     }
//     return todo;
//   })
// );
