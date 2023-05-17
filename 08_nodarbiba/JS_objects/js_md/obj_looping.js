const loop_person = {
    fname:"John",
    lname:"Doe",
    age:25
  }; 
  
  let txt = "About me: ";
  for (let x in loop_person) {
    txt += loop_person[x] + " ";
  }  
  document.getElementById("looping").innerHTML = txt;

  //iziet cauri katrai vērtībai vienu reizi. let...in nozīmē ka iet cauri (it loops through them)

