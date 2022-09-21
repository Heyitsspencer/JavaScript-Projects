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