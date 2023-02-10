// Générer un chiffre en aléatoire 
// L'utilisateur fera des propositions
// Contniuer tant qu'il n'a pas la bonne proposition

import { Confetti } from "../lib/confetti.js";

let numberToFind     = 0;
const resultDiv      = document.getElementById('resultDiv');
const timer          = document.getElementById('timer');
const GamePropalDiv  = document.getElementById('GamePropalDiv');
let tempsRestant     = 0;
let compteurInterval = null;


document.getElementById('beginGame').addEventListener('click', function() {
    // Lancer la partie
    // Récupérer un chiffre aléatoire
    launchGame();
});

document.getElementById('ckeckPropalButton').addEventListener('click', function() {
    checkPropal();
});

document.getElementById('userPropalInput').addEventListener('keyup', function(event) {
    if(event.key == 'Enter') {
        checkPropal();
    }
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function checkPropal() {
    let numberPropal = document.getElementById('userPropalInput').value;
    if(numberToFind > numberPropal) {
        resultDiv.innerHTML = "C'est plus !"
    } 
    else if(numberToFind < numberPropal) {
        resultDiv.innerHTML = "C'est moins !"
    } 
    else if(numberToFind == numberPropal) {
        resultDiv.innerHTML = "C'est gagné !"
        endGame(true);
    }
};

function launchGame() {
    numberToFind = getRandomInt(1000);
    console.log(numberToFind);
    tempsRestant = 30;
    GamePropalDiv.style.display = 'block';
    if(compteurInterval != null) {
        clearInterval(compteurInterval);
    }
        compteurInterval = setInterval(() => {
            timer.innerText = tempsRestant;
            tempsRestant--;
            if(tempsRestant >= 20) {
                timer.classList.remove('warning');
                timer.classList.remove('danger');
                timer.classList.add('cool');
            }
            else if(tempsRestant > 10) {
                timer.classList.remove('cool')
                timer.classList.remove('danger')
                timer.classList.add('warning')
            }
            else if(tempsRestant >= 0) {
                timer.classList.remove('cool');
                timer.classList.remove('warning');
                timer.classList.add('danger');
            }
            else if(tempsRestant < 0) {
                clearInterval(compteurInterval);
                endGame(false);
            }   
        }, 1000);
}

function endGame(gagne) {
    if(gagne) {
        Confetti.launchAnimationConfetti();
        setTimeout(() => {
            Confetti.stopAnimationConfetti();
        }, 5000);
    } else {
        alert("T'es mauvais Jack, c'est la piquette Jack !! Tu sais pas jouer Jack !");
    }
    GamePropalDiv.style.display = 'none';
    clearInterval(compteurInterval);
    
}

