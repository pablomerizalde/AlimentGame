var x= 0;

function cambiarfondo(color){
document.body.style.backgroundImage = color;
   // $('body').css('background-image', 'url(js/1.jpg)');
}


var change= window.setInterval(cambiar,1000);

function cambiar(){

    x++;

    switch(x){
        case 1:
            cambiarfondo("url('js/1.jpg')");
        break

        case 2:
            cambiarfondo("url('js/2.jpg')");
        break

        case 3:
            cambiarfondo("lime");
        break

        case 4:
            cambiarfondo("white");
        break

        case 5:
            cambiarfondo("yellow");
        break

        case 6:
            x=0
        break


    }
}
