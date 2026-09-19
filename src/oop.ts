// class Chai {
//     flavour: string;
//     price: number;

//     constructor(flavor: string, price: number) {
//         this.flavour = flavor
//         this.price = price
//     }
// }

//this-> refere to the new object

// const masalaChai = new Chai("Ginger",20)
// masalaChai.flavour = "masala"


//Access MOdifier

class Chai {
    public flavor: string = "Masala"
    private secretIngredients = "Cardamon"

    reveal() {
        return this.secretIngredients
    }

    protected shopeName = "Chai corner"
}
class Shop {
    protected shopeName = "Chai corner"
}

class Branch extends Shop {
    getName() {
        return this.shopeName
    }
}

// const c = new Chai()
// c.reveal()

class Walet {
    #balance = 100 // private

    getBalance() {
        return this.#balance
    }
}
const W = new Walet()


//readonly properties

class Cup {
    readonly capacity: number = 250
    constructor(capacity: number) {
        this.capacity = capacity
    }
}

// control gates

class MOdernChai {

    private _sugar = 2

    get sugar() {
        return this._sugar
    }

    set sugar(value: number) {
        if (value > 5) throw new Error("Too Sweet")
        this._sugar = value
    }
}

const c = new MOdernChai()
c.sugar = 3

class EkChai{
    static shopName = "Chaicode caffe"

    constructor(public flavour:string){}
}
console.log(EkChai.shopName)

abstract class Drink{
    abstract make():void
}

class MyChai extends Drink{
    make(){
        console.log("Brewing chai")
    }
}

class Heater{
    heat(){}
}

//compiosition
class ChaiMaker{
    constructor(private heater:Heater){}
    make(){
        this.heater.heat
    }
}

