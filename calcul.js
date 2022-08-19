function calculator(){
    var a,b,c,cl,ch;
    a=document.querySelector("input[name='fn']").value;
    b=document.querySelector("input[name='sn']").value;
    a=parseFloat(a);
    b=parseFloat(b);
    cl=document.querySelector("input[name='cl']");
    var butn=false;
    console.log(cl.checked);
    var i=0;
    while(i<cl.length && !butn){
        if(cl[i].checked){
          butn=true;
            console.log("hai");
        }
        i++;
    }
 
    switch(ch){
        case "+":
            c=a+b;
            break;
        case "-":
            c=a-b;
            break;
        default:
           
            c=" ";
    }
 document.getElementById("rs").innerHTML="Result: "+c;
    
}