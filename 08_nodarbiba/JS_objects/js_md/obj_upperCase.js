const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
  };
  person.name = function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  };
  
  document.getElementById("Obj_upperCase").innerHTML =
  "My father is " + person.name(); 