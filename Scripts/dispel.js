const body=document.querySelector('.body');
const container= document.querySelector('.welcome');
const video= document.querySelector('.welcome__video');

video.addEventListener('ended', () => {
    console.log('El video ha terminado de reproducirse.');
    video.classList.toggle('video__end');
    document.body.style.overflow = 'auto';
});

window.addEventListener('pagehide', function () {
    window.scrollTo(0, 0);
});


