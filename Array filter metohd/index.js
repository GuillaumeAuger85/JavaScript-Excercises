// Exercices source: https://coursework.vschool.io/array-filter-exercises/


// Exercice 1
function fiveAndGreaterOnly(arr) {
    return arr.filter(num =>
        num >= 5
    )
}


// Exercice 2
function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0)
}

// Exercice 3
function fiveCharacterOrFewerOnly(arr) {
    return arr.filter(str => str.length <= 5)
}

// Exercice 4
function peopleWhoBelongToTheIlluminati(arr) {
    return arr.filter(obj => obj.member === true )
}

// Exercice 5
function ofage (arr){
  return arr.filter(obj => obj.age > 18)
}