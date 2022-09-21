function Count_to_Twenty() { //Counting Function 
    var Digit = "";
    var X = 1;
    while (X<21) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML = Digit
}
function Text_Length_Function() { //Text length function
    var text = "Spencer Allen Davis"
    var length = text.length;
    document.getElementById("Text_Length").innerHTML = length;
}
//for loop:
var Animals = ["Cat", "Dog", "Fish", "Goose", "Pigeon", "Squid"];
var Content = "";
var Y;
function for_Loop() { //For Loop Function
    for (Y = 0; Y < Animals.length; Y++) {
        Content += Animals [Y] + "<br>";
    }
    document.getElementById("List_of_Animals").innerHTML = Content;
}
function array_Function() { //Array Function
    var Color = [];
    Color[1] = "Red";
    Color[2] = "Orange";
    Color[3] = "Yellow";
    Color[4] = "Green";
    Color[5] = "Blue";
    Color[6] = "Purple";
    document.getElementById("Array").innerHTML = "The color is: " + Color[6] + ".";
}
function constant_function() { //Constant function
    const Pets = {type: "cat", color: "white", age: "7"};
    Pets.behavior = "sleeping";
    Pets.name = "Mirabelle"; //Add a value
    Pets.color = "white with grey spots" //Changed a value
    document.getElementById("Constant").innerHTML = "The Pets name is " + Pets.name + " and she is a " + Pets.type;
}
//Let keyword
var X = 50;
document.write(X); //Will write 50
{
    let X= 100;
    document.write("<br>" + X); //Will write 100
}
document.write("<br>" + X); //Will result 50

var Y = 20;
document.write(Y); //Will write 20
{
    var Y = 30;
    document.write("<br>" + Y);//Will write 30
}
document.write("<br>" + Y); //Will write 30

function let_function() {
    var X = 50;
    document.write(X); //Will write 50
    {
        let X= 100;
        document.write("<br>" + X); //Will write 100
    }
    document.write("<br>" + X); //Will result 50 
    document.getElementById("Let").innerHTML = X;
}