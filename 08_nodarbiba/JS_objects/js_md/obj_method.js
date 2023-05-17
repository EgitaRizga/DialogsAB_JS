// Create an object:
const obj_person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object:
  document.getElementById("obj_methods").innerHTML = obj_person.fullName();
  