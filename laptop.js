function netPrice(){
    var net,amt,dis,gst;
 amt=document.querySelector("input[name='amt']").value; 
 if(amt>=20000){ 

        if(amt>=20000 && amt<40000){
            dis=amt*10/100;
        }else if(amt>=40000 && amt<100000){
            dis=amt*15/100;
        }
        else if(amt>=100000){
            dis=amt*20/100;
        }else{
            dis=0;
        }



 gst=amt*2.5/100;
 net=(amt-dis)+gst;
 document.getElementById("dis").innerHTML="discount:"+dis;
 document.getElementById("gst").innerHTML="GST:"+gst;
 document.getElementById("ntp").innerHTML="Net Price :Rs "+net;

}
else{
    document.getElementById("dis").innerHTML="invalid amount";
}

}