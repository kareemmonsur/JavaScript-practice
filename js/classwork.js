function changeNameFormat (name){
    let names = ""
    for(let i=0; i<name.length; i++){
        names += name[i] + (i+1)
    }
    console.log(names)
}

changeNameFormat("john")