let day;
let day_ = new Date().getDay();

switch (day_) {
  case 0:
    day_ = "Sunday";
    break;
  case 1:
    day_ = "Monday";
    break;
  case 2:
    day_ = "Tuesday";
    break;
  case 3:
    day_ = "Wednesday";
    break;
  case 4:
    day_ = "Thursday";
    break;
  case 5:
    day_ = "Friday";
    break;
  case  6:
    day_ = "Saturday";
    console.log(day);
    day_ = 7;
    break;
    case 6:
        day = "Saturtdayyyy";
}
document.getElementById("demo_switch").innerHTML = "Today is " + day_ + ". ";

/* salīdzina ar visiem variantiem (ja nav break) 
(ja ir break tad apstājas pie tā kurš atbilst) 
un parāda to kas atbilst (nedēļa tiek skaitīta no svētdienas)
*/

let text;
switch (new Date().getDay()) {
    case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  default:
    text = "Looking forward to the Work day";
}
document.getElementById("demo_switch").innerHTML = document.getElementById("demo_switch").innerHTML + text;



switch (day_) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  //    case  6:
  //        day = "Saturday";
  //        console.log(day);
  //        break;
  default:
    text = " (looking forward to the Working day!)";
}

document.getElementById("demo_switch").innerHTML =
  document.getElementById("demo_switch").innerHTML + text;

let a = 15;
switch (true) {
  case a > 5:
    console.log("a (" + a + ") is bigger than 5");
    break;
  case a > 10:
    console.log("a (" + a + ") is bigger than 10");
    break;
  default:
    console.log("a (" + a + ") is smaller or equal to 5");
}

// 15
// > 5
// > 10
// > 15