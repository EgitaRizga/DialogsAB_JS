const hour = new Date().getHours(); 
let greeting = "Good" + " ";
/*
if (hour > 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
*/

console.log(greeting);

if (hour > 18) {
    //greeting = "Good";
    greeting = greeting + "day";}
   else {
   // greeting = "Good";
    greeting = greeting + "evening"
  }

console/log(greeting);

document.getElementById("demo_else").innerHTML = greeting;

// izpildās viens no nosacījumiem atkarībā kurš ir patiess