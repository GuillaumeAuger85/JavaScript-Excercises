// Source: https://coursework.vschool.io/multiple-array-methods-practice-1/

// Exercice 1
function sortedOfAge(arr) {
    const sortedarr = arr.sort((a, b) => a.lastName.localeCompare(b.lastName))
    return sortedarr.filter(person => person.age > 18).map(person => `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`)
}



// Extra credit
// premier extra
const newPeopleArray = [
    {
        firstName: "Pipo",
        lastName: "Popo",
        age: 52,
    },
    {
        firstName: "Gerard",
        lasName: "Depardieu",
        age: 75,
    },
    {
        firstName: "Vincent",
        lastName: "Dedienne",
        age: 45
    }
]
PeopleArray.concat(newPeoplearray)
// second extra
function filterout (arr){
   return arr.filter(person => person.lastName.charAt(person.lastName.length-1) === "y" || person.lastName.charAt(person.lastName.length-1) === "a" )
}

// troisieme extra
peopleArray.splice(1,1)

// Quatrieme extra
peopleArray.reverse()