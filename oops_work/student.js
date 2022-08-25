
class Student{
    //constructor
     constructor(s,reg){
        this.sname=s;
        this.regno=reg
       
     }
   //method
   getter(){
    console.log(this.sname)
    console.log(this.regno)
   }  

}

var ram=new Student("Ram",34567);
ram.getter()
var jose=new Student("Jose Thomas ",45678);
jose.getter()