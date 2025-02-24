// Closure 
// function init(){
//     var name = 'Mozilla';
//     function displayName(){
//         console.log(name);
//     }
//     return displayName;
// }
// let c= init();
// c();





// IIFE
(function greet(){
    var name = "nilu";
    console.log(name);
}) ();


function sendToEmail(to){
    return function(subject){
        return function (body){
            console.log(`Sending Email to ${to} with ${subject} : ${body}`);
        };
    };
}
sendToEmail("nilu@gmail.com")("for zomato food order") ("\n Lorem Ipsum is simply dummy text \n of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ")




