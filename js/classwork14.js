let documentPseudo = {
addEventListenerPseudo: function (event, afunction){
    switch (event){
        case "click":
            afunction(event, "1")
            break;
        case "change":
            afunction(event, "2")
            break;
        case "hover":
            afunction(event, "3")
            break;
        default:
            break;
    }

    }

}

let myFunction = function (event,number) {
    console.log(event, number)
}

documentPseudo.addEventListenerPseudo("hover", myFunction)
