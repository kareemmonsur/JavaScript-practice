let objArray = [
    {
        firstname : 'John',
        lastname : 'Smith',
    },
    {
        firstname : 'demola',
        lastname : 'femi',
    },
    {
        firstname : 'tife',
        lastname : 'harry',
    }
];




function getFirstName(name){
    console.log(name.firstname)
}

objArray.forEach(getFirstName)


