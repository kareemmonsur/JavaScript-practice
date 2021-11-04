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

function getMaleGender(sex){
  let gender = sex.gender === 'female' 
  return gender
}
console.log(objArray.filter(getMaleGender))


