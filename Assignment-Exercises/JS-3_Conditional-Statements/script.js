function checkAge() {
    userAge = document.getElementById('ageInput').value
    if (userAge <= 12 && userAge >= 0) {
        document.getElementById('result').innerHTML = 'Child';
    }
    
    else if (userAge < 0){
        document.getElementById('result').innerHTML = 'Invalid';
    }

    else if (userAge <= 19) {
        document.getElementById('result').innerHTML = 'Teen';
    }
    
    else if (userAge >= 20) {
        document.getElementById('result').innerHTML = 'Adult';
    }
}
