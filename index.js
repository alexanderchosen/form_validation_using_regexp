let fullName = document.getElementById('full-name');
let username = document.getElementById('user-name');
let password = document.getElementById('password');
let phoneNumber = document.getElementById('phone-number');
 
let fullNameError = document.getElementsByClassName('input-name-error')
let usernameError = document.getElementsByClassName('user-name-error')
let passwordError = document.getElementsByClassName('password-error')
let numberError = document.getElementsByClassName('number-error')

username.addEventListener('input', function(){
    let pattern = username.getAttribute('pattern')
    let currentValue = e.target.value
    let success = pattern.test(currentValue)
    if(success){
        usernameError.style.display = 'none'
    }
    else{
        usernameError.style.display = 'block'
    }
})

// write a general function that can be called for every eventListener and then firdt retrieve the element it is called in which is later passed into the pattern variable to get its specific pattern attribute