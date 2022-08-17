var eg,mt,ph,ch,bi,mal,rs,gd;
console.log("working")
function result(){
 console.log("function working");
 eg=document.querySelector("input[name='eng']").value;
 console.log(eg)
 mt=document.querySelector("input[name='math']").value;
 console.log(mt)
 ph=document.querySelector("input[name='phys']").value;
 ch=document.querySelector("input[name='chms']").value;
 bi=document.querySelector("input[name='bio']").value;
 mal=document.querySelector("input[name='mal']").value;
 rs=document.getElementById("res");
 var tot,avg;
 tot=parseFloat(eg)+parseFloat(mt)+parseFloat(ph)+parseFloat(ch)+parseFloat(bi)+parseFloat(mal);
if((eg>=0&& eg<=100) && (mt>=0&& mt<=100) && (ph>=0&&ph<=100) && (ch>=0 && ch<=100 )&& (bi>=0 && bi<=100) && (mal>=0&&mal<=100)){
                if((eg>=35&& eg<=100) && (mt>=35&& mt<=100) && (ph>=35&&ph<=100) && (ch>=35 && ch<=100 )&& (bi>=35 && bi<=100) && (mal>=35&&mal<=100) && tot>=210){
                
                    rs.innerHTML="Pass";
                    avg=tot/6;
                    if(avg>=90){
                        gd="A+";

                    }
                    else if(avg>=80 && avg<90){
                        gd="A";
                    }
                    else if(avg>=70 && avg<80){
                        gd="B+";
                    }
                    else if(avg>=60 && avg<70){
                        gd="B";
                    }
                    else if(avg>=50 && avg<60){
                        gd="C";
                    }
                    else{
                        gd="D";
                    }

                document.getElementById("grd").innerHTML="Grade is :"+gd;

                }
                else {
                    rs.innerHTML="Fail";
                    gd=" ";
                    document.getElementById("grd").innerHTML=" ";
                }
            }
            else{
                rs.innerHTML=" ";
                gd=" ";
                document.getElementById("grd").innerHTML="Check  your Marks";

            }
 
}