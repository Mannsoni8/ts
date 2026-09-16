type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order: ChaiOrder) {
    console.log(order)
}

function serveChai(order: ChaiOrder) {
    console.log(order)
}

interface TeaRecipe {
    water: number;
    milk: number;
}
class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

//type CupSize = "small"|"large"
interface CupSize {
    size: "small" | "large"
}

class Chai implements CupSize {
    size: "small" | "large" = "large";
}
//classes me interface prefere kr te h

// type Response = { ok: true } | { ok: false }

// class myRes implements Response {
//     ok:boolean = true
// }

type TeaType = "masala" | "ginger" | "lemon" //literal types

function orderChai(t: TeaType) {
    console.log(t)
}

type BaseChai = { teaLeaves: number }
type Extra = { masala: number }

type MasalaChai2 = BaseChai & Extra

const cup: MasalaChai2 = {
    teaLeaves: 2,
    masala: 1
}

type User = {
    username: string,
    bio?: string
}

const u1: User = { username: "Mann" }
const u2: User = { username: "Mann", bio: "mann.ai" }

type Config = {
    readonly appName:string,
    version:number
}

const cfg: Config={
    appName:"Masterji",
    version:1
}

cfg.appName = "ChaiCode"