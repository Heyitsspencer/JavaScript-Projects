document.write(typeof "Word");  //Display data type
document.write("10"+5); //Combining a string and a number
function my_Function() { //NaN function
    document.getElementById("Test").innerHTML=0/0;
}
function my_Function2() { //isNan element
    document.getElementById("Test2").innerHTML=isNaN('This is a string');
}
function my_Function3() { //isNan element
    document.getElementById("Test3").innerHTML=isNaN('10000');
}
document.write(2E310); //Infinity
document.write(-3E310); //Negative infinity
document.write(1>10);//False
document.write(1<10);//True
console.log(2+2); //Console
console.log(2<0);//Console
document.write(10==10); //True
document.write(10==12); //False
A=10
B=10
document.write(A===B); //===
C=20
D="21"
document.write(C===D);
E=30
F="30"
document.write(E===F);
G=40
H=50
document.write(G===H);
document.write(5>2 && 10>4);
document.write(5<2 && 7<8);
document.write(5>2 || 5<2);
document.write(3>8 || 8>12);
function not_Function() {
    document.getElementById("Not").innerHTML=!(20>10); //not function
}
function not_Function1() {
    document.getElementById("Not1").innerHTML=!(20<10);
}
