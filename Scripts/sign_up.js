const btnsi = document.querySelector('.btn-si');
const btnno = document.querySelector('.btn-no');

const audio = document.querySelector('.welcome__video');

var silencio = (audio.muted = false);

let veil = document.querySelector('.veil');


let screenWidth = screen.width;
const minWidth= 225;
const maxWidth= 762;


const dispel=document.getElementById('dispel');


btnsi.addEventListener('click', function reproducir() {

    if (screenWidth >= minWidth && screenWidth<=maxWidth) {

        audio.remove();
        dispel.remove();
        veil.style.zIndex="-1";
        console.log('Video eliminado correctamente.');
        document.body.style.overflow = 'auto';
        
    }else{
        audio.muted = false;
        audio.play();
        document.body.style.overflow = 'auto';

    }
    
})

btnno.addEventListener('click', function reproducir() {


    if (screenWidth >= minWidth && screenWidth<=maxWidth) {

        audio.remove();
        veil.style.zIndex="-1";
        console.log('Video eliminado correctamente.');
        document.body.style.overflow = 'auto';
        window.open('nonono.html');
        
    }else{
        audio.muted = true;
        audio.play();
        veil.style.zIndex="-1";
        silencio = true;
        window.open('nonono.html');
        document.body.style.overflow = 'auto';

    }
    
    // window.close();

})





muteadito.addEventListener('click', function silenciar(){

   if (silencio==false) {
        audio.muted = true;
        silencio = true;  
   }else{
        audio.muted = false;
        silencio = false; 
   }

})
