# Masīvi/arrays  

_Vairākas vērtības zem viena mainīgā_  

_Lai atspoguļotu pārlūkā JS komandu izmanto **document.getElementById("demo").innerHTML = ;**_
Šajā brīdī JS komandai tiek iedots **ID** ko norādot HTML koda galvenē **<h id="  ">** vai paragrāfā **<p id="  ">** tas tiek tur izpildīts/atspoguļots

Dažādi veidi kā atspoguļot vērtības:
- **toString();** vērtības tiek atdalītas ar komatu
- **join(" * ");** starp vērtībām tiek ievietos norādītais simbols
- **pop();** izņem ārā pēdējo vērtību _(ar const to nevar izmantot tālāk/ar let to var izmantot tālāk)_
- **push();** pievieno vērtību beigās jaunu vērtību
- **shift();** izņem ārā pirmo vērtību
- **unshift();** pievieno vērtību sākumam jaunu vērtību
- **const arr3 = arr1.concat(arr2);** apvieno eksistējošus masīvus jaunā (iepriekšējos joprojām var izmantot atsevišķi)
- **splice(cipars, cipars, "vērtība");** pirmais cipars nosaka jaunās vērtības atrašanās vietu masīvā, otra cipars nosaka cik vērtības jānoņem pēc jaunās vērtības
_var izmantot arī bez jaunas vērtības tādā gadījumā tiek veikta tikai noteikto vērtību izņemšana_
- **const arr2 = arr1.slice(cipars);** izveido jaunu masīvu ņemot noteiktās vērtības no norādītā saraksta  

## Masīvu kārtošana  

- **sort();** sakārto masīvu alfabētiskā secībā  
- **sort(function(a, b){return a - b});** atspoguļo ciparus pareizā recībā
- **reverse();** atspoguļo masīvu no otras puses  
- **myArrayMax();** nosaka lielāko vērtību (cipariem)  
> jāpapildina ar **function myArrayMax(arr) {return Math.max.aplly(null, arr);}** aiz komandas kas atspoguļo ID  
- **myArrayMin();** darbojas tas pats proncips bet tikai parāda mazāko ciparu  
- 

## Masīvu tipi

Atkarībā kādā secībā tiek pierakstīts masīvs - cipari sākumā tiek uztverti kā cipari. Ja cipars tiek rakstīts pēc vārda tas netiek uzskatīta par ciparu  

Kad vēlas atspoguļot _True/False_ starp vēlamajiem mainīgajiem raksta "==" _(x == y) + "<br>" + (x == z);_  

Iekš mainīgajiem var noteikt to atsevišķus nosaukumus _visu mainīgo ar tā vērtībām rakstot {}_  

> const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};  

