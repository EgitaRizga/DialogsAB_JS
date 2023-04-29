let day;
let day_ = new Date().getDate();

switch (day_) {
  case 0:
    day = "Sunday";
    break;
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
  case  6:
    day = "Saturday";
    console.log(day);
    day_ = 7;
    break;
    case 6:
        day = "Saturtdayyyy";
}
document.getElementById("demo_switch").innerHTML = "Today is " + day;

/* salīdzina ar visiem variantiem (ja nav break) 
(ja ir break tad apstājas pie tā kurš atbilst) 
un parāda to kas atbilst (nedēļa tiek skaitīta no svētdienas)
*/
