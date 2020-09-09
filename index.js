const button = document.querySelector('.switch');
const checkBox = document.querySelector('.check');
const titleFirst = document.querySelector('.top-title');
const titleSecond = document.querySelector('.middle-title');
const count = document.getElementsByClassName('count');
const cards = document.getElementsByClassName('light');




// Event Listener// 

button.addEventListener('click', changeMode);

// Functions // 

function cardBackground() {
    if (checkBox.checked === false) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = "hsl(230, 22%, 74%)";
        }
    } else {
        for (let j = 0; j < cards.length; j++) {
            cards[j].style.backgroundColor = "hsl(228, 28%, 20%)";
    }
}
}

function titleColor() {
    if (checkBox.checked === false) {
        for (let i = 0; i < count.length; i++) {
            count[i].style.color = "black";
        }
    } else {
        for (let j = 0; j < count.length; j++) {
            count[j].style.color = "white";
        }
    }
}


function titles() {
    if (checkBox.checked === false) {
        titleFirst.style.color = "black";
        titleSecond.style.color = "black";
    } else {
        titleFirst.style.color = "white"; 
        titleSecond.style.color = "white";
    } 
}


function background() {
    if (checkBox.checked === false) {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
    }
}

function changeMode() {
    background();
    titles();
    cardBackground();
    titleColor();
} 













