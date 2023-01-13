// Générer un chiffre en aléatoire 
// L'utilisateur fera des propositions
// Contniuer tant qu'il n'a pas la bonne proposition

let numberToFind = 0;
const resultDiv = document.getElementById('resultDiv');

document.getElementById('beginGame').addEventListener('click', function() {
    // Lancer la partie
    // Récupérer un chiffre aléatoire
    numberToFind = getRandomInt(1000);
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

