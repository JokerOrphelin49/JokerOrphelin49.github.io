
let myImage = document.querySelector('img');

myImage.addEventListener('click', function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/essai.jpg') {
        myImage.setAttribute('src', 'images/essai2.jpg');
    } else {
        myImage.setAttribute('src', 'images/essai.jpg');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Content de vous connaître, ' + myName;
}

if (!localStorage.getItem('nom')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Content de vous connaître, ' + storedName;
}

myButton.addEventListener('click', function () {
    setUserName();
});