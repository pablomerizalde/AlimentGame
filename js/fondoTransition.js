var diaTiempo= 0;

function cambiarfondo(color){
$('body').css("background-image",color);
//document.body.style.backgroundImage = color;
   // $('body').css('background-image', 'url(js/1.jpg)');
}


function cambiar(){

    diaTiempo= (diaTiempo%5) +1;

    switch(diaTiempo){
        case 1:
            cambiarfondo("url('images/1.jpg')");
            gasto(5,5,5,5);
        break
        case 2:
            cambiarfondo("url('images/2.jpg')");
            gasto(5,5,5,5);
        break
        case 3:
            cambiarfondo("lime");
            gasto(5,5,5,5);
        break
        case 4:
            cambiarfondo("white");
            gasto(5,5,5,5);
        break
        case 5:
            cambiarfondo("yellow");
            gasto(5,5,5,5);
            cumplirAños();
        break
    }
}


