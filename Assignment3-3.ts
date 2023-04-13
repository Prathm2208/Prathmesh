class Circle
{
    Radius:number;
    PI:number=3.14;
    constructor(R:number)
    {
        this.Radius=R;
    }
    Area():number
    {
        return this.PI*this.Radius*this.Radius;
    }
};
class CircleX extends Circle
{
    constructor(radius:number)
    {
        super(radius);
    }
    circumferance():number
    {
        return 2*this.PI*this.Radius;
    }
};

var Obj1=new CircleX(5);
var Ret:number=0;
Ret=Obj1.Area();
console.log("Area for First =" + Ret);
console.log("Circumference for First =" + Obj1.circumferance());

var Obj2=new CircleX(6);


Ret=Obj2.Area();
console.log("Area for First =" + Ret);
console.log("Circumference for First =" + Obj2.circumferance());