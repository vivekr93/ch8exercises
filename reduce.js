function extractValue(arr, key) {
    return arr.reduce(function(accum, nextName){
        accum.push(nextName[key])
        return accum;
    }, []);
}

function vowelCount(str){
    return str.toLowerCase().split('').reduce(function(accum, nextName){
        if (nextName === 'a' || nextName === 'e' || nextName === 'i' ||
        nextName === 'o' || nextName === 'u'){
            if (accum[nextName]){
                accum[nextName] += 1;
            }
            else {
                accum[nextName] = 1;
            }
        }
            return accum;
    }, {});
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accum, next, index){
        accum[index][key] = value;
        return accum;
    }, arr);
}

function partition(arr, func){
    return arr.reduce(function(accum, next){
        if(func(next)){
            accum[0].push(next);
        }
        else{
            accum[1].push(next);
        }
        return accum;
    }, [[],[]]);
}