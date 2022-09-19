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
    console.log(Y + 100);
}
Add_numbers_3();
Add_numbers_4();
function get_Date() { // Get Date function
    if (new Date() .getHours() < 18) { //If statement
        document.getElementById("Example").innerHTML="How are you today?"; //.getElementById method
    }
}
function Age_of_User_Function() { //Age_of_User_Function
    Age= document.getElementById("Drink").value; 
    if (Age >= 21) { //If statement
        drink="You are of drinking age!";
    }
    else { //Else statement
        drink="You are not of drinking age.";
    }
    document.getElementById("Age_of_User").innerHTML= drink
}
function Time_function() { //Time_Function
    var Time= new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { //If statement
        Reply= "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { //Else if statement
        Reply= "It is afternoon.";
    }
    else { //Else statement
        Reply= "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}