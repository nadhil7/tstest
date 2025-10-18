class animal{
    constructor (public name: string){
}
    
    speak():void{
        console.log(`hello ${this.name}`);
    }
}

class dog extends animal{
    speak():void{
        console.log(`you are barking`)
    }
}
const an = new animal("shanu");
an.speak();

