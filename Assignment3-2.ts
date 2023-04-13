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
var Obj=new Circle(22);
var Ret:number=0;
Ret=Obj.Area();
console.log("Area is "+Ret);