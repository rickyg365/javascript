console.log("Hey You!");

// async Function
async function hello() {
    return 'world';
}


// Custom Objects
interface Dog {
    breed: string;
    name: string;
    [key: string]: any; // add any additional attribute to obj
}

const bobby: Dog = {
    breed: "chihuahua",
    name: "lil bobby big boy",
    size: "teeny weeny",
}

const cliff: Dog = {
    breed: "red doggy",
    name: "Clifford Winiford the Third",
    size: "Daaaaaaaamn"
}

console.log(bobby);
console.log(cliff);

console.table(bobby);
console.table(cliff);




// Custom Types
type Movie = [title: string, year?: number, director?: string, genres?: string[]];

let movie1: Movie = [
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
]


console.table(movie1);
console.table(movie1);





// Generics

class Observable<T> {
    constructor(public value: T) {}
}

let x: Observable<number>;

let y: Observable<Movie>;

let z = new Observable(23);


 

