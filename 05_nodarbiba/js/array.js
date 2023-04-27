var x1 = 1,
x2 = 2,
x3 = 3;
var delta_x1 = x2 - x1;
var delta_x2 = x3 - x2;

var x_coord = [11, 22, 306];
console.log(x_coord[0]);
console.log(x_coord[1]);
console.log(x_coord[2]);

var coord = [
[11, 22, 306],
[89, 96, 45],
];
console.log(coord[0]);
console.log(coord[0][0]);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

//vērtības tiek atdalītas ar komatu

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");

//starp vēsrtībām tiek ievietots norādītais simbols

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.pop();
document.getElementById("demo2").innerHTML = fruits;

//izņem ārā pēdējo vērtību un to nevar izmantot tālāk

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();

//izņem pēdējo vēsrtību bet tā tiek paturēta atmiņā un var izmantot tālāk

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.push("Kiwi");
document.getElementById("demo2").innerHTML = fruits;

//pievieno vēsrtību beigās jauno vērtību (tas pats kas ar let kad iegaumē kad nē)