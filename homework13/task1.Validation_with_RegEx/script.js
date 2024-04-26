const userName = document.getElementById('exampleFormControlInput1');
const nameMessage = document.getElementById('validateNameMessage')
userName.addEventListener('input', () => nameMessage.hidden = userName.validity.valid)

const userMessage = document.getElementById('exampleFormControlTextarea1');
const textMessage = document.getElementById('validateTextMessage');
userMessage.addEventListener('input', () => textMessage.hidden = userMessage.validity.valid)

const userTel = document.getElementById('exampleFormControlInput2');
const telMessage = document.getElementById('validateTelMessage');
userTel.addEventListener('input', () => telMessage.hidden = userTel.validity.valid)

const userEmail = document.getElementById('exampleFormControlInput3');
const emailMessage = document.getElementById('validateEmailMessage');
userEmail.addEventListener('input', () => emailMessage.hidden = userEmail.validity.valid)

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    if(form.checkValidity()) {
        formData.forEach((value, key) => {
            console.log(value, key);
        })
    }
})
