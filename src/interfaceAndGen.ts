interface Chai {
    flavor: string;
    price: number;
    milk?: boolean;
}

const masala: Chai = {
    flavor: "masala",
    price: 30
};

interface Shop {
    readonly id: number
    name: string
}

const s: Shop = { id: 1, name: "ChaiCode Cafe" }

interface DiscountCalculator {
    (price: number): number
}

const apply50: DiscountCalculator = (p) => p * 0.5

interface TeaMachine {
    start(): void
    stop(): void
}

const machine: TeaMachine = {
    start() {
        console.log("Start")
    },
    stop() {
        console.log("stop")
    },
}

interface ChaiRatings {
    //signeture
    [flavor: string]: number
}

const ratings: ChaiRatings = {
    //index signeture
    masala: 4.5,
    ginger: 120
}
//interface can be declare with same name and they will merge
interface User {
    name: string
}
interface User {
    age: number
}

const u: User = {
    name: "Mann",
    age: 22
}

interface A { a: string }
interface B { b: string }

interface C extends A, B { }