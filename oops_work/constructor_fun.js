function Bank(acno,na){
    this.acno=acno;
    this.name=na; 
     console.log("constructor")
     this.depart=()=>{
        console.log("Marketing")
     }
     this.deposit=(amt)=>{
        this.amount=amt;
        console.log(this.amount)
     }
}

var b=new Bank(33434646,'krishna');
b.depart();
b.deposit(50000);
b.address="kochi"
b.setter=(ad)=>{
     console.log(b.address);
}
