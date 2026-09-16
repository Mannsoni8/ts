function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Making ${kind} chai..`
    }
    return `Chai oder: ${kind}`
}

function serverChai(msg?: string) {
    //typenarrowing
    if (msg) {
        return `Servering ${msg}`
    }
    return `Serving default  masala chai`
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `small cutting chai...`
    }
    if (size === "medium" || size === "large") {
        return `make extra chai`
    }
    return `Chai order #${size}`
}

class KulhadChai {
    serve() {
        return `Serving Kulhad Chai`
    }
}

class CuttingChai {
    serve() {
        return `Serving Cutting Chai`
    }
}

function serve(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        return chai.serve()
    }
}

type ChaiOrder = {
    type: string,
    sugar: number
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.quantity === "number"
    );
}

function serverOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.sugar} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: $ {item}`
}

type MasalaChai = { type: "masala", spiceLevel: number }
type GingerChai = { type: "ginger", amount: number }
type ElaichiChai = { type: "elaichi", aroma: number }

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `masala`
            break;

        case "ginger":
            return `ginger`
            break;

        case "elaichi":
            return `elaichi`
            break;
    }
}

function breq(order:MasalaChai|GingerChai) {
    if("spicelevel" in order){

    }
}

function isStringArray(arr:unknown):arr is string[]{
    
}