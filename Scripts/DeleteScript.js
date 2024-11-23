const videoo= document.querySelector('.welcome__video');
const dispel= document.getElementById('dispel');



// Obtener el valor de una propiedad CSS específica
const display = getComputedStyle(videoo).getPropertyValue('display');

console.log('El valor de display del elemento es:', display);

if (display=='none') {
    document.body.style.overflow = 'auto';
    dispel.remove();
    console.log('Script eliminado correctamente.');
}


;