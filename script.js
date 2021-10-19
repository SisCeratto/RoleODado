'use strict';

const p1 = document.querySelector('.player--0');
const p2 = document.querySelector('.player--1');
const score1 = document.querySelector('score--0');
const score2 = document.getElementById('score--1');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');
const dado = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentScore, currentp, playing;

const start = function () {
    score = [0, 0];
    currentScore = 0;
    currentp = 0;
    playing = true;

    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;

    dado.classList.add('hidden');
    p1.classList.remove('player--winner');
    p2.classList.remove('player--winner');
    p1.classList.add('player--active');
    p2.classList.remove('player--active');
};

const mudarp = function () {
    document.getElementById(`current--${currentp}`).textContent = 0;
    currentScore = 0;
    currentp = currentp === 0 ? 1 : 0;
    p1.classList.toggle('player--active');
    p2.classList.toggle('player--active');
};


btnRoll.addEventListener('click', function () {
    if (playing) {
        let dice = Math.floor(Math.random() * 6) + 1;
        dado.classList.remove('hidden');
        dado.src = `./dice-${dice}.png`;
    
        if (dice == 1) {
            mudarp();
        } else {
            currentScore += dice;
            document.getElementById(
                `current--${currentp}`
            ).textContent = currentScore;
    }
}
});

btnHold.addEventListener('click', function () {

    if (playing) {
        score[currentp] += currentScore;
        document.getElementById(`score--${currentp}`)
            .textContent = score[currentp];

        if (score[currentp] >= 100) {
            playing = false;
            dado.classList.add('hidden');
            document
                .querySelector(`.player--${currentp}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${currentp}`)
                .classList.remove('player--active');

        } else {
            mudarp();
        }
    }
});

btnNew.addEventListener('click', function () {
    start()
})

start();