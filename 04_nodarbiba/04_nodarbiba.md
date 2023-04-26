# Iepazīšanās ar JavaScript (JS)

**JS dod html funkcijām uzdevumus**

html funcijai ir jānorāda _ID_ kuru norāda arī JS. Tas strādā kā atsauce kura html funkcija tiek izmantota kurā JS koda daļā.  

JS tiek norādīts <**script**>  

## Atsauce uz JS kodu atsevišķā failā  

JS kodu var ievietot atsevišķā failā/mapē, bet tam ir jāatrodas zem vienotas failu grupas  
Šai mapei nosaukuma beigās ir jābūt _.js_  

_atsevišķajā failā nedrīkst izmantot <script>_

Lai šo funkciju izmantotu galvenajā kodā ir jāliek atsauce <*script src="mapes nosaukums"*>  


## Mainīgie elementi  

Mainīgos elementus raksta *script* daļā  
Tos nosaka ar **var** **let** **const** _(ne vienmēr tas ir jānorāda )_  

> ar mainīgajiem var piemēram noteikt matemātiskas formulas, kurā nosaka noteiktu **x un y** vērtību un gala rezultāts ir **z**  

Šīm vērtībām var noteikt jebkādu identifikatoru kurš neatkārtojas JS  
_Jāatcerās ka JS ir jūtīgs pret lielajiem burtiem. Lielais un mazais burts ir divi identifatori_

> **var** tiek izmantots vecākām JS versijām, jaunākām var izmantot **let** **const**

_Jāatceras ka '=' nav vienādības zīme pēc matemātiskā skatījuma, bet gan tas nosaka attiecīgās koda daļas **nosaukumu**_  

Ja vēlas rakstīt vienādības zīmi pēc matemātiskā skatījuma, raksta '=='  

Ja ar mainīgo vēlas parādīt ciparus, tos neliek "", ja vēlas parādīt vārdu vai teikumu tas ir jāliek "" vai ''

**vienā mainīgajā var iekļaut vairākus identifikatorus ar to vērtībām un joprojām tekstā parādīt tikai vienu no tiem**  

_Ja mainīgajam netiek noteikta vērtība tas parādās kā 'undefined'_  

_Ja gala rezultātam formulā starp vērtībām tiek norādīts + tas nozīmē ka vārdi tiks noradīti kopīgi. Pašā formulā papildus ir jānorāda atstarpe iekšs "" savādāk vārdi būs saspiesti kopā_

> Ja vērtībā ciparu raksta "" tad pārējie cipari aiz tā netiek uztverti kā cipari, bet ja pirmos ciparus neraksta "" un pēdējo raksta, tad pirmie cipari joprojām tiek par tādiem uzskatīti  

### Mainīgo dažāda noteikšana

Mainīgos kad tos apzīmē ar **let** un **const** var ietvert iekš {  } šādā gadījumā kods ārtpus šīm iekavām nevar atsaukties uz šo mainīgā vērtību  

Kad tiek izmantots **var** kodā šo vērtību var noteikt savādāku ar vēl vienu **var** rindu ar tādu pašu nosaukumu bet citu vērtību  

> Ja izmanto **let** un **const** šajā gadījumā nedrīkst noteikt mainīgajam citu vērtību ar to pašu nosaukumu pat ja izmanto citu mainīgā noteikšanas kodu

_Ja vēlas izmantot **let** un **const** ar vienādu nosaukumu bet citām vērtībām to var darīt katru kodu iekļaujot {}  

**var** vērtību var arī noteikt pirms un nākošajā rindā noteikt ka attiecīgais nosaukums ar tā vērtību ir mainīgais  

_Šo nevar izmantot ar **let** un **const**_  

**const** vislabāk ir izmantot ja zina ka mainīgajam nevajadzēs mainīt vērtību  

> **const** vērtības ir iespējams mainīt un papildināt  

