class Vec {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    plus(c){
        return `Vec{x : ${this.a + this.b}, y : ${c.a + c.b} }`;
    }
    minus(c){
        return `Vec{x : ${this.a - this.b}, y : ${c.a - c.b} }`;
    }
    length(){
        return Math.sqrt(Math.pow(this.a,2) + Math.pow(this.b,2));
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length());
