let display = document.getElementById('inputBox');


let buttons = document.getElementsByClassName("button");
let buttonsArray = Array.from(buttons);

let string = "";

buttonsArray.forEach(function (btn) {
    btn.addEventListener("click", (event) => {


        if (event.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            display.innerHTML = string;
        }
        else if(event.target.innerHTML=='AC'){
            string='';
            display.innerHTML = string;
        }
        else if (event.target.innerHTML== "="){
            string = eval(string);
            display.innerHTML = string;
        }
        else {
            string += event.target.innerHTML;
            display.innerHTML = string;
            
        }

    });
});


