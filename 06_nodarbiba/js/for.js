const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
    console.log(i);
    console.log("text mainīgā saturs pirms izmaiņām:" + "\n" + text);
    if (i==2) break;
  text += cars[i] + "<br>";
  console.log("text mainīgā saturs pēc izmaiņām:" + "\n" + text + "\n\n");
}

document.getElementById("demo_for").innerHTML = text;