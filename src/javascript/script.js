function getChartTypes() {
    const uppercase = document.querySelector('#include-uppercase').checked;
    const lowercase = document.querySelector('#include-lowercase').checked;
    const number = document.querySelector('#include-number').checked;
    const specialCharacter = document.querySelector('#include-special-character').checked;

    const charTypes = [];

    if (uppercase) {
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if (lowercase) {
        charTypes.push('abcdefghijklmnopqrstuvwxyz');
    }

    if (number) {
        charTypes.push('0123456789');
    }

    if (specialCharacter) {
        charTypes.push('*!@#%$&?');
    }

    return charTypes;
}

function getPasswordSize() {
    const size = document.querySelector('#size').value;
    if (isNaN(size) || size < 4 || size > 128) {
        Toastify({
            text: text,
            duration: 2000,
            style: {
                background: '#dc2626',
                boxShadow: 'none'
    
            }
        }).showToast();
    }

    return size;
}

function randomCharType(charTypes) {
    const randomIndex = Math.floor(Math.random() * charTypes.length);
    
    return charTypes[randomIndex][Math.floor(Math.random() * charTypes[randomIndex].length)];
}

function generatePassword(size, charTypes) {
    let passwordGenerated = '';

    while (passwordGenerated.length < size) {
       passwordGenerated += randomCharType(charTypes)
    }

    return passwordGenerated;
}

function message(text, background) {
    Toastify({
        text: text,
        duration: 2000,
        style: {
            background: '#dc2626',
            boxShadow: 'none'

        }
    }).showToast();
}

document.querySelector('#generate').addEventListener('click', function () {
   const size = getPasswordSize();
   const charTypes = getChartTypes();

   const passwordGenerated = generatePassword(size, charTypes);

   document.querySelector('#password-container').classList.add('show');

   document.querySelector('#password').textContent = passwordGenerated;
});
