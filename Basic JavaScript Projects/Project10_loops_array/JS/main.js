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