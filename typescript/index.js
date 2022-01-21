console.log("Hey You!");
// async Function
async function hello() {
    return 'world';
}
const bobby = {
    breed: "chihuahua",
    name: "lil bobby big boy",
    size: "teeny weeny",
};
const cliff = {
    breed: "red doggy",
    name: "Clifford Winiford the Third",
    size: "Daaaaaaaamn"
};
console.log(bobby);
console.log(cliff);
console.table(bobby);
console.table(cliff);
let movie1 = [
    "avatar",
    2005,
    "James Cameron",
    [
        "adventure",
        "action",
        "war",
        "greed",
        "sci-fi"
    ]
];
console.table(movie1);
console.table(movie1);
// Generics
class Observable {
    value;
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
let z = new Observable(23);
