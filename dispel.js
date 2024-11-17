let container= document.querySelector('.welcome');
let video= document.querySelector('.welcome__video');


video.addEventListener('ended', () => {
    console.log('El video ha terminado de reproducirse.');
    video.classList.toggle('video__end');
});