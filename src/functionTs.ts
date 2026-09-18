function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type}`)
}

makeChai("Masala", 2)

function getChaiPrice(): number { // return type number
    return 25
}

function makeOrder(order: string) {
    if (!order) return null
    return order
}

function logChai(): void { // no return value
    console.log("Chai is ready")
}

//optional paramenter or default parameter

function orderChai(type?: string) { }//optional - insdustrial preference
function orderChai2(type: string = "Masala"){} // default

function createChai(order:{
    type:string
    sugar:number
    size:"small"|"large"
}):number {
    return 4
}
