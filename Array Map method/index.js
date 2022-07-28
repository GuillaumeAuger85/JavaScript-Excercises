// Exercices source: https://coursework.vschool.io/array-map-exercises/

// Exercice 3

// Solution 1
function capitalizeNames(arr) {
  const newarr =  arr.map(function (str) {
        let newstr = str.toLowerCase();
        let FrstLetter = newstr.charAt(0).toUpperCase();
        let newStr2 = newstr.slice(1);
        return FrstLetter.concat(newStr2)
    })
    return newarr

}



// Solution 2
function capitalizeNames(arr) {
  return  arr.map(function (str) {
        let newstr = str.toLowerCase();
        let FrstLetter = newstr.charAt(0).toUpperCase();
        let newStr2 = newstr.slice(1);
        return FrstLetter.concat(newStr2)
    })
}


// Solution 3
function capitalizeNames(arr) {
    const newarr = arr.map(function (str) {
        return str.toLowerCase()
    })
    return newarr.map(function (stri) {
        let FrstLetter = stri.charAt(0).toUpperCase();
        let newStr2 = stri.slice(1);
        return FrstLetter.concat(newStr2)
    })
}


// exercice 4
function namesOnly(arr) {
    return arr.map(function (str) {
        return str.name
    })
}


//  exercice 5
function makeStrings(arr) {
    return arr.map(function (obj) {
        if (obj.age < 20) {
            return obj.name = `${obj.name}r.name is underage !!`
        }
        return obj.name = `${obj.name} can go to the matrix !!`
    })
}

// exercie 6
function readyToPutInTheDom(arr) {
    return arr.map(function (obj) {
        return obj.name = `<h1>${obj.name}</h1><h2>${obj.age}</h2>`
    })
}











function minimize(word) {
    return word.toLowerCase();
}


function capitalizeNames(arr) {
    arr.map(function (str) {
        arr.map(function (str) {
            let FirstLetter = newstr.charAt(0).toUpperCase();
            let newStr2 = newstr.slice(1);
            return Firstletter.concat(newtr2)
        })
    })
}