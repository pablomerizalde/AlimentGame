<<<<<<< HEAD
var x= 0;
color="url('images/amanecer.jpg')";
=======
var diaTiempo= 0;

>>>>>>> refs/remotes/origin/master
function cambiarfondo(color){
$('body').css("background-image",color);
//document.body.style.backgroundImage = color;
   // $('body').css('background-image', 'url(js/1.jpg)');
}


<<<<<<< HEAD
var change= window.setInterval(cambiar,5000);

=======
>>>>>>> refs/remotes/origin/master
function cambiar(){

    diaTiempo= (diaTiempo%5) +1;

    switch(diaTiempo){
        case 1:
<<<<<<< HEAD
            cambiarfondo("url('images/amanecer.jpg')");
=======
            cambiarfondo("url('images/1.jpg')");
            gasto(5,5,5,5);
>>>>>>> refs/remotes/origin/master
        break
        case 2:
<<<<<<< HEAD
            cambiarfondo("url('images/tarde.jpg')");
=======
            cambiarfondo("url('images/2.jpg')");
            gasto(5,5,5,5);
>>>>>>> refs/remotes/origin/master
        break
        case 3:
<<<<<<< HEAD
            cambiarfondo("url('images/atardecer.jpg')");
=======
            cambiarfondo("lime");
            gasto(5,5,5,5);
>>>>>>> refs/remotes/origin/master
        break
        case 4:
<<<<<<< HEAD
            cambiarfondo("url('images/noche.jpg')");
=======
            cambiarfondo("white");
            gasto(5,5,5,5);
>>>>>>> refs/remotes/origin/master
        break
        case 5:
            cambiarfondo("yellow");
            gasto(5,5,5,5);
            cumplirAños();
        break
    }
}


