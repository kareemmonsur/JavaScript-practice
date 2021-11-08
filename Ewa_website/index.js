// collect user input
// validate if user exist in our database
// valiadate if password matchMedia, with the password in the user object returned above
// if password match, route user to home page 





document.addEventListener("DOMContentLoaded", function() {

    let registerObject = {}
    let repository = [
        {first_name: "ujay", last_name: "eroms", phone_number: "07058029688", password:"123" },
        {first_name: "jay", last_name: "jay", phone_number: "08035804896", password:"12345623" }
    ]

    //button element
    function confirmRegistration() {
        if(Object.keys(registerObject).length === 4){
            let {first_name, password} = registerObject
            if (repository.findIndex(user => user.first_name === first_name) !==-1){
                if(repository.find(user => user.first_name).password === password){
                    localStorage.setItem("userName", JSON.stringify(registerObject))
                    window.location.href = "home.html"

              }else {
                alert('Please enter a correct password')
                }
          }else {
            alert("User does not exist")
          }
      }else {
        alert("Incomplete User Info")
      }

    }
    //buttonElelment
    let button = document.getElementsByClassName('register_btn')[0]
    button.addEventListener("click", () => confirmRegistration())

    //input fields
    function handleInputChange(e) {
        registerObject = {...registerObject, [e.target.name]: e.target.value}
    }

    
    let inputFields = document.getElementsByTagName('input')
    Array.from(inputFields).forEach((inputFields) =>
        inputFields.addEventListener('input',(e) => handleInputChange(e)))

})

function myFunction(){
    let userDetails = JSON.parse(localStorage.getItem("userName"))
    document.getElementById("Hey").innerHTML = "Hey " + userDetails.last_name
}

myFunction()