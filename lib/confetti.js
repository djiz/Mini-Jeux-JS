export class Confetti {

    static launchAnimationConfetti() {
        let animateDiv = document.createElement('div');
        animateDiv.id = 'allconfettis'
        animateDiv.innerHTML = '';
    
        for(let i = 0; i < 100; i++) {
            let confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = this.getRandomArbitrary(0,100)+'%';
            confetti.style.animationDelay = 50*i+'ms';
            confetti.style.backgroundColor = '#'+(Math.random()*0*FFFFFF<<0).toString(16);
            animateDiv.appendChild(confetti);
        }

        document.body.appendChild(animateDiv);
    }
    
    static stopAnimationConfetti() {
        let animateDiv = document.getElementById('allconfettis');
        if(animateDiv != undefined) {
            animateDiv.innerHTML = '';
            animateDiv.remove();
        }
        
    }

    static getRandomArbitrary(min, max) {
        return Math.floor(Math.random()* (max-min) + min);
    }
}



