const userName = document.getElementById('exampleFormControlInput1');
const nameMessage = document.getElementById('validateNameMessage');

function checkName(regExp) {
    if (regExp.test(userName.value)) {
        nameMessage.hidden = true;
        return true;
    } else {
        nameMessage.hidden = false;
        return false;
    }
}

userName.addEventListener('input', () => {
    checkName(/[a-zA-Zа-яА-ЯіІїЇґҐ]+/);
})

const userMessage = document.getElementById('exampleFormControlTextarea1');
const textMessage = document.getElementById('validateTextMessage');

function checkMessage(regExp) {
    if (regExp.test(userMessage.value)) {
        textMessage.hidden = true;
        return true
    } else {
        textMessage.hidden = false;
        return false
    }
}

userMessage.addEventListener('input', () => {
    checkMessage(/.{5,}/);
})

const userTel = document.getElementById('exampleFormControlInput2');
const telMessage = document.getElementById('validateTelMessage');

function checkTelNumber(regExp) {
    if (regExp.test(userTel.value)) {
        telMessage.hidden = true;
        return true
    } else {
        telMessage.hidden = false;
        return false;
    }
}

userTel.addEventListener('input', () => {
    checkTelNumber(/^\+380\d{9}$/);
})

const userEmail = document.getElementById('exampleFormControlInput3');
const emailMessage = document.getElementById('validateEmailMessage');

function checkEmail(regExp) {
    if (regExp.test(userEmail.value)) {
        emailMessage.hidden = true;
        return true;
    } else {
        emailMessage.hidden = false;
        return false;
    }
}

userEmail.addEventListener('input', () => {
    checkEmail(/^\S+@\S+\.\S+$/)
})

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (checkEmail(/^\S+@\S+\.\S+$/) && checkName(/[a-zA-Zа-яА-ЯіІїЇґҐ]+/) && checkMessage(/.{5,}/) && checkTelNumber(/^\+380\d{9}$/)) {
        formData.forEach((value, key) => {
            console.log(value, key);
        })
    }
})
