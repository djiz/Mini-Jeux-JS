/* TODO List
 X Générer un mot aléatoire
 - Afficher le mot en masqué _ _ _ _ _ _ _ 
 - Pouvoir proposer des lettres
 - Afficher les lettres trouvées
 - Gérer un nombre d'erreurs MAX
 - Afficher des lettres visibles (en fonction de la difficulté)
*/


const allWords      = ['fleur', 'montagne', 'ministre', 'congolais', 'dictateur', 'petrole', 'corompre', 'constitution', 'chomage', 'prisonnier', 'economie', 'sapeur', 'plateau', 'mortel', 'president', 'gardien', 'developpement', 'application', 'internet'];
const buttonPlay    = document.querySelector('#beginGame');
const wordToFindDiv = document.querySelector('#wordToFindDiv');
const keyboardDiv   = document.querySelector('#keyboard');

buttonPlay.addEventListener('click', function() {
    beginGame();
});

function beginGame() {
    // Générer un mot au hasard
    wordToFindDiv.innerHTML = '';
    let wordToFind = generateWord();
    let wordToFindArray = Array.from(wordToFind);

    let table = document.createElement('table');
    let line  = document.createElement('tr');
    
    wordToFindArray.forEach(letter => {
        // Créer un TD (case du tableau par lettre)
        let caseTableau = document.createElement('td');
        caseTableau.dataset.letter = letter;
        caseTableau.innerText = '_';
        line.appendChild(caseTableau);
    })
    table.appendChild(line);
    wordToFindDiv.appendChild(table);

    generateKeyboard();
}

function generateKeyboard() {
    keyboardDiv.innerHTML = '';
    let alphabet = generateAlphabet();
    alphabet.forEach(letter => {
        let letterDiv = document.createElement('div');
        letterDiv.innerHTML = letter;
        letterDiv.classList.add('letterKeyboard');
        keyboardDiv.appendChild(letterDiv);
    })
}

function generateAlphabet(capital = false) {
    //return[...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)));
    let tab = [];
    let i = 65;
    if(!capital) {
        i += 32;
    }
    let finish = i + 26;
    for(i; i<finish; i++){
        tab.push(String.fromCharCode(i));
    }
    return tab;
}

function generateWord() {
    let indexWord = getRandomInt(allWords.length);
    return allWords[indexWord];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}