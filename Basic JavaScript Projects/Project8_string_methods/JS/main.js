function Sentence_Function() { //CONCATENATION ASSIGNMENT
    var part1 = "You are reading ";
    var part2 = "a sentence ";
    var part3 = "that is complete. ";
    var part4 = "Yay!";
    var whole= part1.concat(part2, part3, part4);
    document.getElementById("String").innerHTML = whole;
}
function slice_Method() { //SLICE METHOD ASSIGNMENT
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
function uppercase_Method() { //toUppercase ASSIGNMENT
    let text = "this text should be uppercase"
    let result = text.toUpperCase();
    document.getElementById("Uppercase").innerHTML = result;
}
function search_Method() { //SEARCH METHOD ASSIGNMENT
    let text = "Mirabelle and Diamond are the best kitties I've met!";
    let position = text.search("Mirabelle");
    document.getElementById("Search1").innerHTML = position;
}
function string_Method() { //toString METHOD ASSIGNMENT
    var X = 182;
    document.getElementById("Numbers_to_strings").innerHTML = X.toString();
}
function toPrecisionFunction() { //toPrecision METHOD ASSIGNMENT
    var Y = 12345678910.1112131415
    document.getElementById("toPrecision1").innerHTML = Y.toPrecision(10);
}