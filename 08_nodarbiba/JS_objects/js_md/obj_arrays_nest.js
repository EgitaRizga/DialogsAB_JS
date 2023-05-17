let x = "";
const Obj_arrays = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in Obj_arrays.cars) {
  x += "<h2>" + Obj_arrays.cars[i].name + "</h2>";
  for (let j in Obj_arrays.cars[i].models) {
    x += Obj_arrays.cars[i].models[j] + "<br>";
  }
}

document.getElementById("obj_arrays_nest").innerHTML = x;