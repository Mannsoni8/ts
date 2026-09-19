//<T> is  the generic
//t data type h item me nhi ye pass kro ge to aap ko value string formate me value milegi
function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray("masala")
wrapInArray(54)
wrapInArray({ flavor: "Ginger" })

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair("masala", "test")
pair("masala", 20)
pair("masala", { flavor: "Ginger" })

interface Box<T> {
    content: T
}

const numberBox: Box<number> = { content: 10 }
const numberBoxcUP: Box<string> = { content: "10" }

//generic ka use api response me, Form state me 

interface ApiPromnise<T> {
    status: number,
    data: T
}

const res: ApiPromnise<{ flavor: string }>={
    status:200,
    data:{flavor:"masala"}
}


