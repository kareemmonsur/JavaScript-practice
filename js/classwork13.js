let objArray = [
    {
        firstname : 'John',
        lastname : 'Smith',
        gender : 'male'
    },
    {
        firstname : 'Demola',
        lastname : 'Femi',
        gender : 'male'
    },
    {
        firstname : 'Kim',
        lastname : 'Harry',
        gender : 'female'
    }
];

function getFullname(person){
   numberOfLetters = person.firstname + person.lastname
   person["age"] = numberOfLetters.length
}

objArray.map(getFullname)
console.log(objArray)

