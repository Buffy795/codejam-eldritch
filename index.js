//CHOOSE ANCIENT 

const azathoth = document.querySelector('.azathoth');
const cthulthu = document.querySelector('.cthulthu');
const iog = document.querySelector('.iog');
const shub = document.querySelector('.shub');

if (azathoth) {
    azathoth.addEventListener("click", function(e) {
        azathoth.classList.toggle('_active');
        cthulthu.classList.remove('_active');
        iog.classList.remove('_active');
        shub.classList.remove('_active');
    }); 
};

if (cthulthu) {
    cthulthu.addEventListener("click", function(e) {
        cthulthu.classList.toggle('_active');
        azathoth.classList.remove('_active');
        iog.classList.remove('_active');
        shub.classList.remove('_active');
    }); 
};

if (iog) {
    iog.addEventListener("click", function(e) {
        iog.classList.toggle('_active');
        cthulthu.classList.remove('_active');
        azathoth.classList.remove('_active');
        shub.classList.remove('_active');
    }); 
};

if (shub) {
    shub.addEventListener("click", function(e) {
        shub.classList.toggle('_active');
        cthulthu.classList.remove('_active');
        iog.classList.remove('_active');
        azathoth.classList.remove('_active');
    }); 
};

//CHOOSE DIFFICULTY

const superEasy = document.querySelector('.super-easy');
const easy = document.querySelector('.easy');
const normal = document.querySelector('.normal');
const hard = document.querySelector('.hard');
const superHard = document.querySelector('.super-hard');


if (superEasy) {
    superEasy.addEventListener("click", function(e) {
        superEasy.classList.toggle('_active');
        easy.classList.remove('_active');
        normal.classList.remove('_active');
        hard.classList.remove('_active');
        superHard.classList.remove('_active');
    });
};

if (easy) {
    easy.addEventListener("click", function(e) {
        easy.classList.toggle('_active');
        superEasy.classList.remove('_active');
        normal.classList.remove('_active');
        hard.classList.remove('_active');
        superHard.classList.remove('_active');
    });
};

if (normal) {
    normal.addEventListener("click", function(e) {
        normal.classList.toggle('_active');
        easy.classList.remove('_active');
        superEasy.classList.remove('_active');
        hard.classList.remove('_active');
        superHard.classList.remove('_active');
    });
};

if (hard) {
    hard.addEventListener("click", function(e) {
        hard.classList.toggle('_active');
        easy.classList.remove('_active');
        normal.classList.remove('_active');
        superEasy.classList.remove('_active');
        superHard.classList.remove('_active');
    });
};

if (superHard) {
    superHard.addEventListener("click", function(e) {
        superHard.classList.toggle('_active');
        easy.classList.remove('_active');
        normal.classList.remove('_active');
        hard.classList.remove('_active');
        superEasy.classList.remove('_active');
    });
};