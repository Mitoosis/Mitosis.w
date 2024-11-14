const btnsi = document.querySelector('.btn-si');
const btnno = document.querySelector('.btn-no');

const audio = document.querySelector('.welcome__video');

const muteadito=document.querySelector('.mutear')


var silencio = (audio.muted = false);


btnsi.addEventListener('click', function reproducir() {

    audio.muted = false;
    audio.play();
    veil.style.zIndex="-1";
    
    


})

btnno.addEventListener('click', function reproducir() {


    audio.muted = true;
    audio.play();
    veil.style.zIndex="-1";
    silencio = true;
    // window.close();
    window.open('nonono.html');

})


let veil = document.querySelector('.veil');


muteadito.addEventListener('click', function silenciar(){

   if (silencio==false) {
        audio.muted = true;
        silencio = true;  
   }else{
        audio.muted = false;
        silencio = false; 
   }

})
