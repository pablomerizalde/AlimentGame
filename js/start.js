var carb = 50;
var cole = 50;
var acid = 50;
var azuc = 50;


var obj = [];


function comidas()
{
	obj.push(new alimento(10,10,10,10,"#carne"));
	obj.push(new alimento(5,10,-10,-10,"#leche"));
	obj.push(new alimento(-5,10,10,10,"#huevos"));
	obj.push(new alimento(-10,-10,-10,-10,"#pollo"));
	obj.push(new alimento(10,10,10,10,"#fritas"));
	obj.push(new alimento(10,10,10,10,"#torta"));
	obj.push(new alimento(10,10,10,10,"#pizza"));
	obj.push(new alimento(10,10,10,10,"#ensalada"));
	obj.push(new alimento(10,10,10,10,"#manzana"));
	obj.push(new alimento(10,10,10,10,"#LimonNaranja"));


}
//HOLIS

function start(){
	comidas();
	starBarras();
}

