function findUserByUsername(arr, search) {
    return arr.find(function(val){
      return val.username === search;
    })
}

function removeUser(arr, search) {
    let obj = arr.findIndex(function(val){
        return val.username === search;
    });
    if (obj == -1) return;
    else{
        return arr.splice(obj, 1);
    }
}