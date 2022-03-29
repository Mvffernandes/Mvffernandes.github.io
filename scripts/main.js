let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/vini-supreme.png') {
      myImage.setAttribute('src','images/vini-culo.png');
    } else {
      myImage.setAttribute('src','images/vini-supreme.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

function setUserName() {
    let myName = prompt('Por favor, coloque seu nome:');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'O Vini é maneiro, ' + myName + '!';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'O Vini é maneiro, ' + storedName + '!';
}

myButton.onclick = function() {
    setUserName();
}