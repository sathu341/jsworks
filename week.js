function day(){
        var day;
        day=document.querySelector("input[name='day']").value;
        if(day==1){
            document.write("Mon");

        }
        else if(day==2){
            document.write("Tues");
        }
        else if(day==3){
            document.write('wednes');

        }
        else if(day==4){
            document.write("Thrus");
        }
        else if(day==5){
            document.write('Fri');
        }
        else if(day==6){
            document.write("sat");
        }
        else if(day==7){
            document.write("sunday");
        }
        else{
            document.write("invalid number");
        }

}