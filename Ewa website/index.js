document.addEventListener("DOMContentLoaded", function() {

    //buttonElelment
    let button = document.getElementsByClassName('register_btn')[0]
    console.log(button)

    button.addEventListener("click", () => console.log('register_btn clicked'))

    //input fields
    function handleInputChange(e) {
    console.log(e.target.name, e.target.value)
    }

    
    let inputFields = document.getElementsByTagName('input')


    for (let i = 0; i < inputFields.length; i++){
        inputFields[i].addEventListener('input',(e) => handleInputChange(e))
    }

})