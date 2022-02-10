let testFunction = () => {
    let myArray = [1, 2, 3];

    for ( let i = 1; i <= myArray.length; i++) {
        console.log(i);
        console.log(` -> ${myArray[i-1]}`);
    }


    return myArray
}

const testArray = testFunction();
