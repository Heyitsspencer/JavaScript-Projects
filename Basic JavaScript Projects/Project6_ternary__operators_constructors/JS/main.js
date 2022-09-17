function Ride_Function() {
    var Height, Can_Ride;
    Height= document.getElementById("Height").value;
    Can_Ride= (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_Ride+ " to ride";
}
function Vote_Function() {
    var Age, Can_Vote;
    Age= document.getElementById("Age").value;
    Can_Vote=(Age<18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML=Can_Vote+" to vote";
}