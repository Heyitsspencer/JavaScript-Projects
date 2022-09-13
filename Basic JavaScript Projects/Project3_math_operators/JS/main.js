function addition_Function() { //ADDITION FUNCTION
    var addition= 2 + 2;
    document.getElementById("Math").innerHTML= addition;
}
function subtraction_Function() { //SUBTRACTION FUNCTION
    var Subtraction= 5-2;
    document.getElementById("Math1").innerHTML= Subtraction;
}
function division_Function() { //DIVISION FUNCTION
    var division= 48/6;
    document.getElementById("Math2").innerHTML= division;
}
function multiplication_Function() { //MULTIPLICATION FUNCTION
    var multiplication= 6*8;
    document.getElementById("Math3").innerHTML= multiplication;
}
function more_Math() { //MULTIPLE OPERATOR FUNCTION
    var extra_math= (1+2)*10/2-5;
    document.getElementById("Math4").innerHTML= extra_math;
}
function more_Math1() { //REMAINDER / MODULE FUNCTION
    var simple_math= 25%6;
    document.getElementById("Math5").innerHTML= "When you divide 25 by 6, you have a remainder of: "+ simple_math;
}
function negation_Operator() { //NEGATION FUNCTION
    var x=10
    document.getElementById("Math6").innerHTML=-x;
}
var y= 10 
y++ //INCREMENTS
document.write(y);
var z=5
z-- //DECREMENTS
document.write(z);
window.alert(Math.random()*500); //RANDOM NUMBER ALERT