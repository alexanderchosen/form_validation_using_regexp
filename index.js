let fullName = document.getElementById('full-name');
let username = document.getElementById('user-name');
let password = document.getElementById('password');
let phoneNumber = document.getElementById('phone-number')
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
    // fullName.value.length ===0 ? fullNameError.style.display = 'none': fullNameError.style.display = 'block'
    console.log(fullNameValue)
    let fullNameResult = namePattern.test(fullNameValue)
    console.log(fullNameResult)
    if(fullNameResult){
        fullNameError.style.display = 'none'
    }
    else{
        fullNameError.style.display = 'block'
    }
})

// fullName.addEventListener('keypress', function(e){
//     let keycode = e.keycode
//     if(keycode ===8 || fullName.value.length ===0){
//         fullNameError.style.display = 'none'
//     }
//     else{
//         fullNameError.style.display = 'block'
//     }
// })


email.addEventListener('input', function(e){
    let emailPattern = email.getAttribute('pattern')
    let mailPattern = new RegExp (`${emailPattern}`,'gi')
    console.log(mailPattern)
    let emailValue = e.target.value
    // email.value.length ==0 ? emailError.style.display = 'none': emailError.style.display = 'block'
    console.log(emailValue)
    let emailResult = mailPattern.test(emailValue)
    console.log(emailResult)
    if(emailResult){
        emailError.style.display = 'none'
    }
    else{
        emailError.style.display = 'block'
    }
})


username.addEventListener('input', function(e){
    let usernamePattern = username.getAttribute('pattern')
    let pattern = new RegExp (`${usernamePattern}`,'g')
    let usernameValue = e.target.value
    console.log(usernameValue)
    let usernameResult = pattern.test(usernameValue)
    console.log(usernameResult)
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
        // window.getComputedStyle('numberError').display = 'none'
    }
    else{
        numberError.style.display = 'block'
    }
})

// class InputFunction {
//     constructor(inputTag){
//         this.inputTag = inputTag;
//     }
//     getInputs = (inputTag) =>{
//         return document.getElementById(${inputTag}).addEventListener('change',  function(e){
//             console.log(`${inputTag}`)
//             let pattern = inputTag.getAttribute('pattern')
//             let newPattern = new RegExp (`${pattern}`,'g')
//             console.log(newPattern)
//             let value = e.target.value
//             console.log(value)
//             let result = newPattern.test(value)
//             console.log(result)
//             if(result){
//                  document.inputTag.p.style.display = 'none'
//             }
//             else{
//                 document.inputTag.p.style.display ='block'
//             }
            
//         })
       
    
//     }
    
// }

// let phone = new InputFunction('phone-number')
// console.log (phone.getInputs())



favWebsite.addEventListener('input', function(e){
    // let webPattern = new RegExp ('^(http(s?):)\/\/(www)\.[\w]+\.[\w]{2,}$' , 'i')
    let webPattern = /^(https:|http:)\/\/(www)\.[\w]+\.[\w]{2,}$/i
    let websiteValue = e.target.value
    console.log(websiteValue)
    let webSuccess = webPattern.test(websiteValue)
    console.log(webSuccess)
     if (webSuccess){
        websiteError.style.display='none'
     }
     else{
        websiteError.style.display ='block'
    }
})

