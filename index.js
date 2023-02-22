let iname= document.querySelector(".name")
let ilastname= document.querySelector(".last-name")
let iemail= document.querySelector(".email")
let ipassword= document.querySelector(".password")
let inputList=[iname, ilastname, iemail, ipassword]
const nameMsg="First Name cannot be empty"
const lastnameMsg="Last Name cannot be empty"
const emailMsg="Looks like this is not an email"
const passMsg="Password cannot be empty"
inputList.forEach((input)=>{
    input.addEventListener('blur', (event)=>{
        const isValid= event.target.validity.valid
        const selectedId=event.target.id
        const spanId= event.target.getAttribute('aria-describedby')
        const inputElement=event.srcElement
        const errorContainer = document.getElementById(spanId)
        const errorImage = document.querySelector(`.${selectedId}-img`)
        let isImageOff=errorImage.classList.contains('inactive')
        let isModified=inputElement.classList.contains('modified')
        if(!isValid){
            let message
            switch(selectedId){
                case "name":
                    message=nameMsg
                    break
                case "last-name":
                    message=lastnameMsg
                    break
                case "password":
                    message=passMsg
                    break
                case "email":
                    message=emailMsg
                    break
            }
            if(isImageOff){
                errorImage.classList.remove('inactive')
                errorContainer.classList.remove('inactive')
                errorContainer.innerHTML=message
            }
            if(!isModified){
                inputElement.classList.add('modified')
            }
        }
        else{
            if(!isImageOff){
                errorImage.classList.add('inactive')
                errorContainer.classList.add('inactive')
            }
            if(isModified){
                inputElement.classList.remove('modified')
            }
        }
    }, )

})