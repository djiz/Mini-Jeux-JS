// Générer un chiffre en aléatoire 
// L'utilisateur fera des propositions
// Contniuer tant qu'il n'a pas la bonne proposition

let numberToFind = 0;
const resultDiv = document.getElementById('resultDiv');
const timer     = document.getElementById('timer');
let tempsRestant = 0;
let compteurInterval = null;


document.getElementById('beginGame').addEventListener('click', function() {
    // Lancer la partie
    // Récupérer un chiffre aléatoire
    numberToFind = getRandomInt(1000);
    tempsRestant = 30;
    if(compteurInterval != null) {
        clearInterval(compteurInterval);
    }
        compteurInterval = setInterval(() => {
            timer.innerText = tempsRestant + ' seconde(s) ';
            tempsRestant--;
            if(tempsRestant >= 20) {
                timer.classList.remove('warning');
                timer.classList.remove('danger');
                timer.classList.add('cool');
            }
            else if(tempsRestant >= 10) {
                timer.classList.remove('cool')
                timer.classList.remove('danger')
                timer.classList.add('warning')
            }
            else if(tempsRestant < 10) {
                timer.classList.remove('cool');
                timer.classList.remove('warning');
                timer.classList.add('danger');
            }
            else if(tempsRestant < 0) {
                clearInterval(compteurInterval);
                // Partie terminée
            }
            
        }, 1000);
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
    }
};

