function my_Dictionary1() { //DICTIONARY
    var Animals= { 
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:7,
        Sound:"Meow!"
    };
    delete Animals.Sound; //DELETE OPERATOR
    document.getElementById("Dictionary").innerHTML=Animals.Sound;//LINK TO HTML
}