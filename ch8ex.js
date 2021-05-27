//ForEach

function doubleValues(array) {
    let newArray = [];
    array.forEach(function(value){
        newArray.push(value*2);
    });
    return newArray;
}

function onlyEvenValues(array) {
    let newArray = [];
    array.forEach(function(value){
        if (value % 2 === 0){
            newArray.push(value);
        }
    });
    return newArray;
}

function showFirstAndLast(array) {
    let newArray = [];
    array.forEach(function(value){
            newArray.push(value[0]+value[value.length - 1]);
    });
    return newArray;
}


function addKeyAndValue(array, key, value) {
    array.forEach(function(object){
        object.key = value;
    });
    return array;
}

function vowelCount(string) {
    let stringy = string.toLowerCase().split("");
    let obj = {};
    stringy.forEach(function(value){
        if(value.indexOf('a') != -1 || value.indexOf('e') != -1 ||
        value.indexOf('i') != -1 || value.indexOf('o') != -1 ||
        value.indexOf('u') != -1){
            obj.value++;
        }
    });
    return obj;
}

//map
function doubleValuesWithMap(array){
    return array.map(function(value){
        return value*2;
    });
}

function valTimesIndex(array){
    return array.map(function(value, index){
        return value*index;
    });
}

function extractKey(array, key){
    return array.map(function(value){
        return value[key];
    });
}

function extractFullName(array){
    return array.map(function(value){
        return value.first + " " + value.last;
    });
}

//filter
function filterByValue(array, number){
    return array.filter(function(value){
        return val[key] !== undefined;
    });
}

function find(array, n){
    return array.filter(function(value){
        return value === n;
    })[0];
}

function findInObj(array, key, x){
    return array.filter(function(value){
        return value[key] === x
    })[0];
}

function removeVowels(string){
    let stringy = string.toLowerCase().split("");
    return stringy.filter(function(value){
        return "aeiou".indexOf(value) === -1;
    }).join("");
}

function doubleOddNumbers(array){
    return array.filter(function(value){
        return value % 2 !== 0
    }).map(function(value){
        return value * 2;
    });
}
