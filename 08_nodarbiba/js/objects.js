const discrete_variable = 4;
const array_example = ['a', 'b'];
const function_example = function name_for_internal_use(x){return x*x;};


// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Display some data from the object:
document.getElementById("car_object").innerHTML = "The car type is " + car.model;

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    age      : 50,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
 
 // delete person.age;
document.getElementById("calling").innerHTML = person.firstName + " is " + person.age + " years old.";


  const array_example_new = array_example;

  for (let i=1; i < array_example.length; i++) console.log(array_example[i]);

  for (array_element of array_example) console.log(array_element);

  

