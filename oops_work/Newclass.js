class Dog{
    colour="";
     setter(color){
        this.colour=color;
        
    }
    getter(){
        return this.colour;
    }
  
}

let bulldog=new Dog(); /* class object is create*/

bulldog.setter("black");
var dogcolor;
dogcolor=bulldog.getter();
document.write("Dog Colour:"+dogcolor);

let doberman=new Dog()
var dcolor;
doberman.setter("brown");
dcolor=doberman.getter();
document.write("<br>Dog color:"+dcolor);