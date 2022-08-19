var vr;

function  vowels(){
    var s;
 vr=document.querySelector("input[name='lt']").value;

switch(vr){
    case "a":
    case "A":
    case "e" :
    case "E":
    case "i":
    case "I":
    case "o" :
    case "O":
    case "u":
    case "U":
   s="its vowel";
    break;
    default:
        s="its not a  vowel";



}
document.getElementById("rs").innerHTML=s;

}