//todo What will the console display and why?
// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   });
// }
//! there is a closure, cause setTimeout is a async,
//! so it will reutrn the laters "i" value withch is 10,
//! and it will return it 10 times

// todo Write a JavaScript program to display
//  the current day and time in the following format.
//  Sample Output :
// Today is: Friday.
//  Current time is: 4PM:50:22

// function rightNow() {
//   let now = new Date();
//   let dayN = now.getDay();
//   let weekDay = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   let day = weekDay[dayN];
//   console.log(day);
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();
//   let pms = hours <= 12 ? "AM" : "PM";
//   let pmsHours = hours % 12 === 0 ? 12 : hours % 12;
//   let res = `
//   Today is: ${day}
//   Current time is: ${pmsHours}${pms}:${minutes}:${seconds}`;
//   console.log(res);
// }
// rightNow();

//todo Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

// function toRevesedNum(num) {
//   let numStr = num.toString();
//   let numArrStr = numStr.split("");
//   let numArrRev = numArrStr.toReversed();
//   let numS = numArrRev.join("");

//   console.log(+numS);
// }
// toRevesedNum(32243);

//todo Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

// function factorialNum(num) {
//   let numArr = [];
//   for (let i = 1; i <= num; i++) {
//     numArr.push(i);
//   }
//   let res = numArr.reduce((acc, curV) => acc * curV, 1);
//   console.log(res);
// }
// factorialNum(5);

//todo  Write a JavaScript program that accepts two integers in prompt() and alert the larger one.

// function bigger() {
//   const a = +prompt();
//   const b = +prompt();
//   if (a > b) {
//     alert(a);
//   } else {
//     alert(b);
//   }
// }
// bigger();

//todo Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array: myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// function arrTostr(arr) {
//   let str = arr.join(",");
//   console.log(`"${str}"`);

//   let strP = arr.join("+");
//   console.log(`"${strP}"`);
// }
// arrTostr(["Red", "Green", "White", "Black"]);

// todo Write a JavaScript function to get the month name from a particular date.
// Test Data :
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October"
// "November"

// function month_name(str) {
//   let months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     " May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const monthNum = str.getMonth();
//   return months[monthNum];
// }
// console.log(month_name(new Date("11/13/2014")));

//todoWrite a JavaScript program to test the first character of a string is uppercase or not

// function isUppOrNot(str) {
//   let arr = str.split("");
//   if (arr[0] === arr[0].toUpperCase()) {
//     console.log(`this word "${str}" is spell wiht an UpperCase`);
//   } else {
//     console.log(`this word "${str}" is not spell wiht an UpperCase`);
//   }
// }
// isUppOrNot("love");

//todo Write a JavaScript program to draw a smile
// console.log(“: )”)

// function smile() {
//   console.log(`${": )"}`);
// }
// smile();

//                             SECOND PART                          \\

//todo На странице есть верстка:
{
  /* <div id="string-1">Ядра в вёдра, выдру в тундру!</div>
<div id="string-2">Выдрав с выдры в тундре гетры</div>
<div id="string-3">В недрах тундры, выдры в гетрах </div>
<div id="string-4">Вытру гетрой выдре морду </div>
<div id="string-5">Тырят в вёдра ядра кедров!</div>
<div id="string-6">Вытру выдрой ядра кедров</div>
	
Необходимо поочередно обратиться к каждому тэгу в нужном порядке, и вывести их содержимое в консоль, чтобы получилась осмысленная скороговорка.

Вывод в консоли:
В недрах тундры, выдры в гетрах 
Тырят в вёдра ядра кедров! 
Выдрав с выдры в тундре гетры 
Вытру выдрой ядра кедров 
Вытру гетрой выдре морду  
Ядра в вё */
}

// let div = document.createElement("div");
// div.innerHTML = `<div id="string-1">Ядра в вёдра, выдру в тундру!</div>
// <div id="string-2">Выдрав с выдры в тундре гетры</div>
// <div id="string-3">В недрах тундры, выдры в гетрах </div>
// <div id="string-4">Вытру гетрой выдре морду </div>
// <div id="string-5">Тырят в вёдра ядра кедров!</div>
// <div id="string-6">Вытру выдрой ядра кедров</div>`;
// document.body.appendChild(div);

// let message = [
//   "В недрах тундры, выдры в гетрах",
//   "Тырят в вёдра ядра кедров!",
//   "Выдрав с выдры в тундре гетры",
//   "Вытру выдрой ядра кедров",
//   "Ядра в вёдра, выдру в тундру!",
// ];

// let i = 0;

// function logWords() {
//   console.log(message[i]);
//   i++;
//   if (i >= message.length) {
//     clearInterval(exmpl);
//   }
// }

// let exmpl = setInterval(logWords, 1000);

//todo <div class="element">Element 1</div>
{
  /* <div class="element">Element 2</div>
<div class="element">Element 3</div>
<div class="element">Element 4</div>
<div class="element">Element 5</div>
<div class="element">Element 6</div>

С помощью JS необходимо первым трем  элементам задать красный цвет текста, а остальным трем - зеленый. */
}

// let div2 = document.createElement("div");
// div2.innerHTML = `<div class="element">Element 1</div>
//  <div class="element">Element 2</div>
// <div class="element">Element 3</div>
// <div class="element">Element 4</div>
// <div class="element">Element 5</div>
// <div class="element">Element 6</div>
// `;
// document.body.appendChild(div2);

// let elements = div2.querySelectorAll(".element");

// elements.forEach((elem, i) => {
//   if (i < 3) {
//     elem.style.color = "red";
//   } else {
//     elem.style.color = "green";
//   }
// });

//  todo На странице есть контейнер <ol id="todo-list"></ol>,
//  необходимо с помощью цикла добавить в него пять задач (элементов <li>)
//  с классом task и текстом, взятым из массива задач из пяти элементов:
// const tasks = ['Buy lemonade', 'Make toasts', 'Repair car',
//  'Play games', 'Pet a cat'];
// Ожидаемый результат в инспекторе после выполнения скрипта:

// <ol id="todo-list">
//   <li class="task">Buy lemonade</li>
//   <li class="task">Make toasts</li>
//   <li class="task">Repair car</li>
//   <li class="task">Play games</li>
//   <li class="task">Pet a cat</li>
// </ol>

// let ol = document.createElement("ol");
// ol.id = "todo-list";
// document.body.appendChild(ol);

// const tasks = [
//   "Buy lemonade",
//   "Make toasts",
//   "Repair car",
//   "Play games",
//   "Pet a cat",
// ];

// tasks.forEach((elem) => {
//   let li = document.createElement("li");
//   li.style.listStyle = "none";
//   li.innerHTML = elem;
//   // li.id = randomID();
//   li.classList = "task";
//   document.body.appendChild(li);
// });

// function randomID() {
//   return Math.floor(Math.random() * 10000);
// }
