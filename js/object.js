let native = {
name = "",
age = "",
gender = "",
height = "",
hobby = "",
}
console.log(native)

//second

let native = new Object()
console.log(native)

//third 
function createObject(name, age, gender, height, hobby){
this.name = name
this.age = gender
this.gender = gender
this.height = height
this.hobby = hobby
}

let newNative = new createObject("ujay", "12", "male", "6ft", "sleeping")

//retrival
//method1

let age = newNative.age

//method2
let ageb = newNative["age"]

//update data in object

newNative.age = 13;

let newAge = newNative["age"]

console.log(newAge)

//delete data in object

delete newNative.age
console.log(newNative)

//loop through objects
for (let n in newNative){
    console.log(newNative[n])

// introduction to "this" keyword

let cohort8Native = {
    fullName: "tife bello",
    age = "12",
    gender = "male",
    height = "short",
    hobby = "fashion",
    getFullname: function(){
        return this.fullName
    }
}

console.log(cohort8Native.getFullname())

// introduction to "bind" keyword
let returnFullName = cohort8Native.getFullname.bind(cohort8Native)
console.log(returnFullName)

let cohort8Array = ["ozioma", "jerry", "tife", "femi"]
for(let i =0; i < cohort8Array.length; i++){
    console.log(cohort8[i])
}


for(let key in cohort8Native){
    console.log(cohort8Native)
}
















}