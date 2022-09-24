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