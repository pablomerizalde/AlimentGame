var carb = 50;
var cole = 50;
var acid = 50;
var azuc = 50;


var obj = [];

function comidas()
{
	obj.push(new alimento(10,10,10,10));
	obj.push(new alimento(5,10,-10,-10));
	obj.push(new alimento(-5,1,3,8));
	obj.push(new alimento(-10,-10,-10,-10));
	obj.push(new alimento(10,10,10,10));
	obj.push(new alimento(10,10,10,10));
	obj.push(new alimento(10,10,10,10));
	obj.push(new alimento(10,10,10,10));
	obj.push(new alimento(10,10,10,10));

}
//HOLIS

function start(){
	comidas();
	starBarras();
}

