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
// w/out Generics
const getLast = (arr) => {
    return arr[arr.length - 1];
};
// we lose type definition, l is of type any
const l = getLast([1, 2, 3]);
// w/ Generics
// T can be whatever name
const getLastW = (arr) => {
    return arr[arr.length - 1];
};
// we dont lose type definition, lw is of type number
const lw = getLastW([1, 2, 3]);
// class Observable<T> {
//     constructor(public value: T) {}
// }
// let x: Observable<number>;
// let y: Observable<Movie>;
// let z = new Observable(23);
