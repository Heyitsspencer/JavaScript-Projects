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