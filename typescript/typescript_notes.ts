/* 

Pros of Typescript
---------------------------------------------------------
- code has less errors
- cleaner
- more readable
- no need for pseudocode
- client and serverside
- optional

Cons of Typescript
---------------------------------------------------------
- Requires compilation


# Why ###################################################
# Plain JavaScript
function addNums(a, b) {
    return  a + b
}

# Problem 
console.log(addNums('5', '6'))
pass in strings, and you dont get the expected output of 11!

# Solution - typeof
function addNumbers(a,b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return = a + b
    }  
    
    return parseInt(a) + parseInt(b)
}

but this is kind of ugly...

#########################################################


Types in JavaScript
---------------------------------------------------------
[ Primitives ]:
Boolean : typeof instance === "boolean"
Number : typeof instance === "number"
String : typeof instance === "string"
BigInt : typeof instance === "bigint"
Symbol : typeof instance === "symbol"
undefined : typeof instance === "undefined"


[ Structural Types ]:
Object : typeof instance === "object"
Function : typeof instance === "function"

[ Structural Root Primitive ]:
null : typeof instance === "object"


Types in TypeScript
---------------------------------------------------------
[ Primitives ]:
Boolean : typeof instance === "boolean" // same true, false
Number : typeof instance === "number" // all numbers in any form 10, 1.5
String : typeof instance === "string" // "hi", `hi`, 'hi'

BigInt : typeof instance === "bigint"
Symbol : typeof instance === "symbol"

undefined : typeof instance === "undefined"


[ Structural Types ]:
Object : typeof instance === "object"
Function : typeof instance === "function"

[ Structural Root Primitive ]:
null : typeof instance === "object"




Assigning Types

let age: number = 100
let firstName: string = 'Angela'
let busy: boolean = true


Type Casting

const firstInput = document.querySelector('#first-input') as HTMLInputElement
export const screen = document.querySelector('.screen')
 
function addNumbers(a,b) {
     screen.innerHTML = a + b     
}
 
button.addEventListener('click', () => addNumbers(firstInput.value, secondInput.value))


mini-challenge

// Fixing the Website

// Can you fix my code to show 'Welcome back Bobby' in the Nav Bar for 
// our couch surfing website? Do this by assigning types to the parameters
// we pass to our populateUser function, so that we can be aware of
// errors in our user objects in the future.

const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]


function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)




const you = {
    userName: {firstName: 'Bobby', lastName: 'Brown'},
    isReturning: 'yes',
}


function populateUser(isReturning: string, userName: { firstName: string, lastName: string } ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = `${userName.firstName}${userName.lastName}`
}

populateUser(you.isReturning, you.userName)















*/
