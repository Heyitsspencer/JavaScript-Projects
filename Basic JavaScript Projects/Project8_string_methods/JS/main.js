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