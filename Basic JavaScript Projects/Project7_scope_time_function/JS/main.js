var X= 10; //Global Variable
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() { 
    var Y= 10; //Local variable
    document.write(20 + X + "<br>");
}
function Add_numbers_4() { //ERROR- will not work because it is a local variable
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();