let fullName = document.getElementById('full-name');
let username = document.getElementById('user-name');
let password = document.getElementById('password');
let phoneNumber = document.getElementById('phone-number');
let email = document.getElementById('email');
let favWebsite = document.getElementById('fav-website')
 
let fullNameError = document.getElementsByClassName('name-error')
let usernameError = document.getElementsByClassName('user-name-error')
let passwordError = document.getElementsByClassName('password-error')
let numberError = document.getElementsByClassName('number-error')
let emailError = document.getElementsByClassName('email-error')
let websiteError = document.getElementsByClassName('website-error')


username.addEventListener('input', function(e){
    let usernamePattern = username.getAttribute('pattern')
    let usernameValue = e.target.value
    let usernameSuccess = usernamePattern.test(usernameValue)
    if(usernameSuccess){
        usernameError.style.display = 'none'
    }
    else{
        usernameError.style.display = 'block'
    }
})

// write a general function that can be called for every eventListener and then first retrieve the element it is called 
// in which is later passed into the pattern variable to get its specific pattern attribute


favWebsite.addEventListener('input', function(e){
    let webPattern = new RegExp ("(http(s?)://)(www)\.[\w_+-]+\.(\w){2,}$" , "gi")
    let websiteValue = e.target.value
    let webSuccess = webPattern.test(websiteValue)
    if (webSuccess){
        websiteError.style.display='none'
    }
    else{
        websiteError.style.display ='block'
    }
})