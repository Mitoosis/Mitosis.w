const contenedorImg= document.querySelectorAll(".column-gallery__image");

//al no usar frameworks para poder entrar a los datos del servidor se hace de manera manual la carga de las imagenes para este ejercicio
let arrayImg=[
    "https://i.pinimg.com/736x/c0/a9/47/c0a947e5d22f460baff8f9184d4037e4.jpg",
    "https://i.pinimg.com/736x/7c/61/3c/7c613c6c062df4f2678f346129802a5f.jpg",
    "https://i.pinimg.com/736x/9f/62/5f/9f625fac4236d770ad2dc225c6a9cf38.jpg",
    "https://i.pinimg.com/736x/3f/c7/f7/3fc7f7604e5e43120fd6a0039818bcaf.jpg",
    "https://i.pinimg.com/736x/a5/8e/ee/a58eee176be508ca72c4555ae339229a.jpg",
    "https://i.pinimg.com/736x/9b/6d/02/9b6d02bc075af223c6d8b7b1f65fc2c4.jpg",
    "https://i.pinimg.com/736x/12/81/65/128165c865ddf8071fed59c3a0e26196.jpg",
    "https://i.pinimg.com/736x/62/c7/04/62c704d8b3d09318f2ffe3f946d2397c.jpg",
    "https://i.pinimg.com/736x/d0/b1/8c/d0b18c399c76d11f04580945d7bfd0f3.jpg",
    "https://i.pinimg.com/736x/75/d5/b2/75d5b2ba80c94baab28083b8ce4df97f.jpg",
    "https://i.pinimg.com/736x/c8/98/19/c89819c58ef4740d49924f21b94e6a26.jpg",
    "https://i.pinimg.com/736x/ea/34/00/ea34009f2e91e305b87824a7d8c2cd9f.jpg",
    "https://i.pinimg.com/736x/23/c7/21/23c721ae32470006cd06e2fab77dd8a9.jpg",
    "https://i.pinimg.com/736x/16/39/e3/1639e315937cb9d46ba617e684987d84.jpg",
    "https://i.pinimg.com/736x/c1/25/c6/c125c66d8e926f709b5262dc9908eebc.jpg",
    "https://pictolic.com/img/2023/28-fotografas-generadas/28-fotografas-generadas-6.jpg",
    "https://pictolic.com/img/2023/28-fotografas-generadas/28-fotografas-generadas-10.jpg",
    "https://i.pinimg.com/736x/d2/56/21/d25621c9aa425d68217dfe048d9e37ee.jpg",
    "https://i.pinimg.com/736x/cb/79/50/cb7950fb261399624d9607c8be3d41c1.jpg",
    "https://i.pinimg.com/736x/59/fb/ae/59fbae5830090f12406027587ad628bc.jpg",
    "https://i.pinimg.com/736x/47/59/92/4759920758abd58cff373bdcf19818d5.jpg",
    "https://i.pinimg.com/736x/93/f7/dd/93f7dd7abfddc6cbaa220a0a0b7ca19b.jpg",
    "https://i.pinimg.com/736x/bc/a0/63/bca0634b8f730419ad3c3d0020a27b95.jpg",

    // "https://media.istockphoto.com/id/1409118809/es/foto/cannabis-en-flor-listo-para-ser-utilizado-para-la-extracci%C3%B3n-en-varios-productos.jpg?s=2048x2048&w=is&k=20&c=pWMBub-PpR87TpkMURlIePd8iF12s1UlF0OV0hsqhRU=",
    // "https://images.pexels.com/photos/1466335/pexels-photo-1466335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://images.pexels.com/photos/4786132/pexels-photo-4786132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://images.pexels.com/photos/7773105/pexels-photo-7773105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://images.pexels.com/photos/7667932/pexels-photo-7667932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://images.pexels.com/photos/14521084/pexels-photo-14521084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://images.pexels.com/photos/8139069/pexels-photo-8139069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://images.pexels.com/photos/9259854/pexels-photo-9259854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",


    

]

contenedorImg.forEach(element => {
    let ImgRandom = arrayImg[Math.floor(Math.random()*arrayImg.length)];
    element.src=ImgRandom;
});





