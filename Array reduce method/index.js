// Exercices source : https://coursework.vschool.io/array-reduce-exercises/

// Exercice 1
function total(arr){
    return arr.reduce((total,num)=> total + num)
}

// Exercice 2
function stringConcat (arr){
    return arr.reduce(function(conc,num){ 
        return "".concat(conc,num)
    })
}
    


// is the same as

function stringConcat(arr) {
    return arr.reduce((conc, num) => "".concat(conc, num))
}

// Exercice 3
function totalnonvoters (arr){
    return arr.reduce((total,voter) => total + voter.voted,0)
}

// Exercice 4

// Pourquoi ceci ne fonctionne pas?

function shoppingSpree(arr) {
    return arr.reduce((sum, obj) => sum + obj.price)
}

// Solution is
function shoppingSpree (arr){
    return arr.reduce((total,item)=> total + item.price,0)
}

// Exercice 5
function flatten(arr) {
    return arr.reduce(function (conc, el) {
        return conc.concat(el)
    })
}
// is the same as 
function flatten(arr){
    return arr.reduce((conc,element) => conc.concat(element))
}

// Exercice 6
function votersResults(arr) {
    const numYoungPeople = arr.filter(voter => voter.age < 25).length
    const numMidsPeople = arr.filter(voter => voter.age > 26 && voter.age < 35).length
    const numOldsPeople = arr.filter(voter => voter.age> 35).length
    const numYoungVotes = arr.filter(voter => voter.age < 25).reduce((count,voter)=> count +voter.voted,0)
    const numMidsVotes = arr.filter(voter => voter.age > 26 && voter.age < 35).reduce((count,voter)=> count +voter.voted,0)
    const numOldsVotes = arr.filter(voter => voter.age > 35).reduce((count,voter)=> count +voter.voted,0);
    return {
        numYoungPeople,
        numYoungVotes,
        numMidsPeople,
        numMidsVotes,
        numOldsPeople,
        numOldsVotes,

    }
}

// autre solution


