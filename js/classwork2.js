let details = {
    first_name: "Ayelabowo",
    last_name : "Ayeola",
    getFullname: function(anotherFunction){
        anotherFunction(this)

    }

}

details.getFullname  ( (obj) => {
    let fullname = obj.firstName + " " + Obj.lastName
    if (obj.sex === "male"){
        fullname = "Mr" + " " + fullname
    } else {
        fullname = "Mrs" + " " + fullname
    }
    return getFullName
}

)