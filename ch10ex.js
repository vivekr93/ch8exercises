//arrow
const double = arr => arr.map(val => val*2)

const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)

const sumAll = (...values) => {
    return values.reduce((sum,n) => sum + n);
};

//rest and spread

function sum(...nums){
    return nums.reduce((sum, n) => sum + n);
}


function filterOutOdds(...vals) {
    return vals.filter(val => val % 2 === 0);
}

const findMin = (...vals) => Math.min(...vals)

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const doubleAndReturnArgs = (array, ...args) => [...arr, ...args.map(v => v *2)]

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

const addKeyVal = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => {
    return [...obj1, ...obj2];
}

const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

// 10.5 Object Enhancement Exercises
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite"
}

let instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}

// ch 10.6 Destructing exercises

/*
Problem 1:
console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846
*/

/*
Problem 2:
console.log(discoveryyears); //{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
*/

/*
Problem 3:
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // 
    "Your name is Alejandro and you like purple"
getUserData({firstName: "Melissa"}) // ?
    "Your name is Melissa and you like green"
getUserData({}) // ?
    "Your name is undefined and you like green"
*/

/*
Problem 4:
console.log(first); // Maya
console.log(second); // Marisa
*/

/*
Problem 5:
console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // 
    ["bright copper kettles, warm woolen mittens", "Brown paper packages"]
*/

/*
Problem 6:
console.log(numbers); // [10, 30, 20]
*/

//ES5 Array Swap
//[arr[0], arr[1]] = [arr[1], arr[0]]
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})