//Start Animal list 
function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is a great animal!";
    switch (Animals) {
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
        break;
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Horse":
            Animal_Output = "Horse" + Animal_String;
        break;
        case "Hippo":
            Animal_Output = "Hippo" + Animal_String;
        break;
        case "Walrus":
            Animal_Output = "Walrus" + Animal_String;
        break;
        case "Bird":
            Animal_Output = "Bird" + Animal_String;
        break;
        case "Whale":
            Animal_Output = "Whale" + Animal_String;
        break;
        default:
            Animal_Output = "Please enter an animal exactly as written on the above list.";
    } 
    document.getElementById("Output").innerHTML = Animal_Output;
}
//End animal list

//Start document.getElementByClassName() Method assignment
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}
//End document.getElementByClassName() Method assignment

//Start <Canvas> element (Add Gradient)
var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");

var my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(0.5, "blue");
my_gradient.addColorStop(1, "purple");

ctx.fillStyle = my_gradient;
ctx.fillRect(0, 0, 500, 500);
//End <Canvas> element (Add Gradient)

//Start <Canvas> element (Add text)
ctx.fillStyle = "#999";
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
//End <Canvas> element (Add text)
