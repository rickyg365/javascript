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

// w/out Generics
const getLast = (arr: Array<any>) => {
    return arr[arr.length - 1];
};

// we lose type definition, l is of type any
const l = getLast([1,2,3]);


// w/ Generics
// T can be whatever name
const getLastW = <T>(arr: T[]): T => {
    return arr[arr.length - 1];
};

// we dont lose type definition, lw is of type number
const lw = getLastW([1,2,3]);






// class Observable<T> {
//     constructor(public value: T) {}
// }

// let x: Observable<number>;

// let y: Observable<Movie>;

// let z = new Observable(23);


 

