const chaiFlavours: string[] = ["Masala", "Adrak"] // string but in array

const chaiPrice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string
    price: number
}

const menu: Chai[] = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 25 }
]

const cities : readonly string[]= ["Delhi","Jaipur"] // not modifie

const table :number[][] = [
    [1,2,3],
    [4,5,6]
]//2D array

let chaiTuple:[string,number]
chaiTuple = ["Masala",20]

let userInfo:[string,number,boolean?]
userInfo = ["mann",100]
userInfo = ["mann",100,true]

const location:readonly [number,number] = [28.66,32.33]

const ChaiIems: [name:string,price:number]=["Masala",25]

enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE


