let fullName = document.getElementById('full-name');
let username = document.getElementById('user-name');
let password = document.getElementById('password');
let phoneNumber = document.getElementById('phone-number');
let email = document.getElementById('email');
let favWebsite = document.getElementById('fav-website')
 
let fullNameError = document.getElementById('name-error')
let usernameError = document.getElementById('user-name-error')
let passwordError = document.getElementById('password-error')
let numberError = document.getElementById('number-error')
let emailError = document.getElementById('email-error')
let websiteError = document.getElementById('website-error')


fullName.addEventListener('input', function(e){
    let fullNamePattern = fullName.getAttribute('pattern')
    let namePattern = new RegExp (`${fullNamePattern}`,'gi')
    let fullNameValue = e.target.value
    let fullNameResult = namePattern.test(fullNameValue)
    
    if(fullNameResult){
        fullNameError.style.display = 'none'
    }
    else{
        fullNameError.style.display = 'block'
    }
})


email.addEventListener('input', function(e){
    let emailPattern = email.getAttribute('pattern')
    let mailPattern = new RegExp (`${emailPattern}`,'gi')
    console.log(mailPattern)
    let emailValue = e.target.value
    console.log(emailValue)
    let emailResult = mailPattern.test(emailValue)
    console.log(emailResult)
    
    if(emailResult){
        fullNameError.style.display = 'none'
    }
    else{
        fullNameError.style.display = 'block'
    }
})


username.addEventListener('input', function(e){
    let usernamePattern = username.getAttribute('pattern')
    let pattern = new RegExp (`${usernamePattern}`,'g')
    let usernameValue = e.target.value
    let usernameResult = pattern.test(usernameValue)
    if(usernameResult){
        usernameError.style.display = 'none'
    }
    else{
        usernameError.style.display = 'block'
    }
})



// write a general function that can be called for every eventListener and then first retrieve the element it is called 
// in which is later passed into the pattern variable to get its specific pattern attribute

password.addEventListener('input', function(e){
    let passwordPattern = password.getAttribute('pattern')
    let newPattern = new RegExp (`${passwordPattern}`,'g')
    let passwordValue = e.target.value
    let passwordResult = newPattern.test(passwordValue)
    // add functionality to turn password inputs to *
    if(passwordResult){
        passwordError.style.display = 'none'
    }
    else{
        passwordError.style.display = 'block'
    }
})

phoneNumber.addEventListener('input', function(e){
    let numberPattern = phoneNumber.getAttribute('pattern')
    let newPattern = new RegExp (`${numberPattern}`,'g')
    console.log(newPattern)
    let numberValue = e.target.value
    console.log(numberValue)
    let numberResult = newPattern.test(numberValue)
    console.log(numberResult)
    // add functionality to turn password inputs to *
    if(numberResult){
        numberError.style.display = 'none'
    }
    else{
        numberError.style.display = 'block'
    }
})



favWebsite.addEventListener('input', function(e){
    // let webPattern = new RegExp ('^(http(s?):)\/\/(www)\.[\w]+\.[\w]{2,}$' , 'i')
    let webPattern = /^(https:|http:)\/\/(www)\.[\w]+\.[\w]{2,}$/i
    let websiteValue = e.target.value
    let webSuccess = webPattern.test(websiteValue)
     if (webSuccess){
        websiteError.style.display='none'
     }
     else{
        websiteError.style.display ='block'
    }
})

