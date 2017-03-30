var x= 0;
color="url('images/amanecer.jpg')";
function cambiarfondo(color){
document.body.style.backgroundImage = color;
   // $('body').css('background-image', 'url(js/1.jpg)');
}


var change= window.setInterval(cambiar,5000);

function cambiar(){

    x++;

    switch(x){
        case 1:
            cambiarfondo("url('images/amanecer.jpg')");
        break

        case 2:
            cambiarfondo("url('images/tarde.jpg')");
        break

        case 3:
            cambiarfondo("url('images/atardecer.jpg')");
        break

        case 4:
            cambiarfondo("url('images/noche.jpg')");
        break

        case 5:
            cambiarfondo("yellow");
        break

        case 6:
            x=0
        break


    }
}
