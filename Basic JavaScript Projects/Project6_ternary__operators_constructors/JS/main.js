function Ride_Function() { //Ride function
    var Height, Can_Ride;
    Height= document.getElementById("Height").value;
    Can_Ride= (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_Ride+ " to ride";
}
function Vote_Function() { //Vote function
    var Age, Can_Vote;
    Age= document.getElementById("Age").value;
    Can_Vote=(Age<18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML=Can_Vote+" to vote";
}
function Vehicle(Make, Model, Year, Color) { //Vehicle function
    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red"); // New keywords
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}
var Spencer= new Vehicle("Mitsubishi", "Mirage g4", 2017, "Black"); //New Keyword assignment
function new_Function() {
    document.getElementById("New_and_This").innerHTML=
    "Spencer drives a " + Spencer.Vehicle_Color + "-colored " + Spencer.Vehicle_Model +
    " manufactured in " + Spencer.Vehicle_Year;
}
function Person(first, last, age, eye) {
    this.firstName= first;
    this.lastName= last;
    this.age= age;
    this.eyeColor= eye;
}
var Spencer= new Person("Spencer", "Davis", 18, "Hazel");
function my_Function() {
    document.getElementById("Constructor").innerHTML=
    "Spencers last name is " + Spencer.lastName + ". They are " + Spencer.age + " years old.";
}
function count_Function() { //Nested Function Assignment
    document.getElementById("Counting").innerHTML= Count();
    function Count() {
        var Starting_point= 9;
        function Plus_one() {Starting_point += 1}
        Plus_one();
        return Starting_point;
    }
}