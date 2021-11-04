let objArray = [
    {
        firstname : 'John',
        lastname : 'Smith',
    },
    {
        firstname : 'Demola',
        lastname : 'Femi',
    },
    {
        firstname : 'Tife',
        lastname : 'Harry',
    }
];




function getFullname(name){
    console.log(name.firstname + ' ' + name.lastname)
}

objArray.map(getFullname)


