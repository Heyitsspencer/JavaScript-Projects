document.write(typeof "Word");
document.write("10"+5);
function my_Function() {
    document.getElementById("Test").innerHTML=0/0;
}
function my_Function2() {
    document.getElementById("Test2").innerHTML=isNaN('This is a string');
}
function my_Function3() {
    document.getElementById("Test3").innerHTML=isNaN('10000');
}
document.write(2E310);
document.write(-3E310);
document.write(1>10);
document.write(1<10);
console.log(2+2);
console.log(2<0);
document.write(10==10);
document.write(10==12);
A=10
B=10
document.write(A===B);
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
    document.getElementById("Not").innerHTML=!(20>10);
}
function not_Function1() {
    document.getElementById("Not1").innerHTML=!(20<10);
}
