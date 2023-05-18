var counter = 1;
    var showCounter = () => console.log(counter);
    
    //ar () parāda ka tā ir funkcija
    
    console.log(window.counter);
    window.showCounter();
    
    
    console.log('window.innerWidth: '+ window.innerWidth);
    console.log('document.documentElement.clientWidth: ' + document.documentElement.clientWidth);
    console.log('document.body.clientWidth: ' + document.body.clientWidth);
    
    console.log('windows.outerWidth: ${outerWidth}')
    
    const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    
    const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight; 
    
   /* let url = 'https://www.javascripttutorial.net/javascript-bom/javascript-window/';
let testWindow = window.open(url,'tests_1');


let features = 'height=600,width=800',
    url = 'https://www.javascripttutorial.net/javascript-bom/javascript-window/';

let jsWindow = window.open(url, 'about', features);

setTimeout(() => {
    window.open('http://127.0.0.1:5500/09_nodarbiba/', 'about')
}, 3000);

*/



/* 
https://www.javascripttutorial.net/javascript-bom/javascript-setinterval/

https://www.javascripttutorial.net/javascript-bom/javascript-settimeout/

https://stackoverflow.com/questions/25098021/securityerror-blocked-a-frame-with-origin-from-accessing-a-cross-origin-frame

https://www.javascripttutorial.net/javascript-bom/javascript-window/


*/