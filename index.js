var button = document.getElementById("roll");
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var number3 = document.getElementById("number3");
var resultall = document.getElementById("resultall")
// var button = document.getElementById("roll");
// var button = document.getElementById("roll");

// number1.innerHTML = "0";
// number2.innerHTML = "0";
// number3.innerHTML = "0";

var min = 1;
var max = 7;

function gnum() {
    var random = Math.floor((Math.random() * (max-min) + min));
    return random;
};

button.addEventListener("click", function(){
    var result1 = gnum();
    var result2 = gnum();
    var result3 = gnum();

   var n1 = number1.innerHTML = result1;
   var n2 = number2.innerHTML = result2;
   var n3 = number3.innerHTML = result3;

   if(result1 > result2 && result1 > result3){
    number1.style.color="red";
    number2.style.color="black";
    number3.style.color="black";
    resultall.innerText="A is winner"
    resultall.style.backgroundColor="red"

    document.createElement("div").innerText="winner A"
   } else if (result2 > result1 && result2 > result3){
    number2.style.color="red";
    number1.style.color="black";
    number3.style.color="black";
    resultall.innerText="B is winner"
    resultall.style.backgroundColor="red"
   }
   else if (result3 > result1 && result3 > result2) {
    number3.style.color="red";
    number2.style.color="black";
    number1.style.color="black";
    resultall.innerText="C is winner"
    resultall.style.backgroundColor="red"

   } else if(result1 == result2 && result1 == result3) {
    number3.style.color="black";
    number2.style.color="black";
    number1.style.color="black";
    resultall.innerText="Tie"
    resultall.style.backgroundColor="blue"
   }
});











// button.addEventListener("click", function(){
//     var result1 = gnum();
//     var result2 = gnum();
//     var result3 = gnum();

//    var n1 = number1.innerHTML = result1;
//    var n2 = number2.innerHTML = result2;
//    var n3 = number3.innerHTML = result3;
// });

// button.addEventListener("click", function(){
//     var result1 = gnum();
//     var result2 = gnum();
//     var result3 = gnum();

//    var n1 = number1.innerHTML = result1;
//    var n2 = number2.innerHTML = result2;
//    var n3 = number3.innerHTML = result3;
// });

