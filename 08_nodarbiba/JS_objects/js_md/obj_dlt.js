const dlt_person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  
  delete dlt_person.age;
  
  document.getElementById("deleting").innerHTML =
  dlt_person.firstname + " is " + dlt_person.age + " years old.";

  //"izdžeš" jeb noņem konkrētu masīvu no vērtību saraksta
  