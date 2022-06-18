const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('clouds');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 700);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    //const cloud = +window.getComputedStyle(clouds).left.replace('px', '');

    if(pipePosition <= 150 && pipePosition > 0 && marioPosition < 140) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = './assets/images/game-over.png'
        mario.style.width = '100px';
        mario.style.left = '50px';

        // cloud.style.animation = 'none';
        // cloud.style.left = `${cloud}`;

        clearInterval(loop);
    }
    
}, 10);

document.addEventListener('keydown', jump);