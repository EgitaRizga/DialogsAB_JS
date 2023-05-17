const myObj = {
    name: "John",
    age: 30,
    cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
    }
  }
  document.getElementById("nested_obj").innerHTML = myObj.cars.car2;

  //masīvs iekš masīvā