let text = "";
    let i = 0;
    while (i <= 16){
if (i < 8)
        text += "<br>" + i;
      
        i++;
    }

        document.getElementById("OCT").innerHTML = text;

