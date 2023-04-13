class Arithmatic{
    public No1:number;
    public No2:number;

    constructor(a:number,b:number)
    {
        this.No1=a;
        this.No2=b;
    }

    Addition():number
    {   let ans:number=0;
        ans=this.No1+this.No2;
        return ans;
    }

    Substraction():number
    {   let ans:number=0;
        ans=this.No1-this.No2;
        return ans;
    }

    Multiplication():number
    {   let ans:number=0;
        ans=this.No1*this.No2;
        return ans;
    }

    Division():number
    {   let ans:number=0;
        ans=this.No1/this.No2;
        return ans;
    }

};

var obj1=new Arithmatic(10,5);

var Ret:Number=0;
Ret=obj1.Addition();
console.log("Addition is "+Ret);

Ret=obj1.Substraction();
console.log("Substraction is "+Ret);

Ret=obj1.Multiplication();
console.log("Multiplication is "+Ret);

Ret=obj1.Division();
console.log("Division is "+Ret);

var obj2=new Arithmatic(20,2);

Ret=obj2.Addition();
console.log("Addition is "+Ret);

Ret=obj2.Substraction();
console.log("Substraction is "+Ret);

Ret=obj2.Multiplication();
console.log("Multiplication is "+Ret);

Ret=obj2.Division();
console.log("Division is "+Ret);

